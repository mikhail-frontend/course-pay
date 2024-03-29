import React, {useCallback, useMemo, useState} from 'react';
import ReviewItem, {ReviewItemType} from "../ReviewItem/ReviewItem";
import useAnimation from "../../hooks/useAnimation";
import styles from './Reviews.module.scss';
import LinkButton from '../UI/LinkButton/LinkButton'
import reviewsListArray from './ReviewsListArray'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import RippleButton from "../UI/RippledButton";
import buttonStyles from '../UI/LinkButton/LinkButton.module.scss'


const shownCount = 21;


const getPartOfReviews = (index: number) => {
    const start = shownCount * index;
    const end = start + shownCount;
    return reviewsListArray.slice(start, end)
};
const setReviewsChunks = () => {
    const chunksCount = Math.ceil(reviewsListArray.length / shownCount);
    let resultedChunks = [];
    for (let i = 1; i< chunksCount; i++) {
        const part = getPartOfReviews(i);
        resultedChunks.push(part);
    }
    return resultedChunks;
}



const firstScreenReviews = reviewsListArray.slice(0, shownCount);

const Reviews = () => {
    const [reviewsList, setReviewsList] = useState<ReviewItemType[]>(firstScreenReviews);
    const [showButton, setShowButton] = useState(true);
    const [reviewPartIndex, setReviewsPartIndex] = useState(0);
    const reviewsChunks = useMemo(setReviewsChunks, []);

    const wrapRef = useAnimation<ReviewItemType>(reviewsList, setReviewsList);
    
    const pushReviewWithDelay = (review:ReviewItemType, delay = 0) => {
        if(!review) return;
        setTimeout(() => {
            setReviewsList(prevState => [...prevState, review])
        }, delay || 0)
    }

    const loadReviews = useCallback(() => {
        const reviewsForPush = reviewsChunks[reviewPartIndex];
        const nextReviews = reviewsChunks[reviewPartIndex + 1];
        reviewsForPush.forEach((item, index:number) => {
            const timer = (index + 1) * 30;
            pushReviewWithDelay(reviewsForPush[index],timer - 20)
            setTimeout(() => {
                setReviewsList(prevState => prevState.map(el => ({...el, animated: true})))
            }, timer)
        })
        setReviewsPartIndex(prev => prev + 1);
        if(!nextReviews) setShowButton(prev => !prev);
    }, [reviewsChunks, reviewPartIndex])

    return (
        <section ref={wrapRef}
                 className={`${styles.reviews} container`}
                 id='reviews'>
            <div className={`${styles.reviewsHeading} `}>
                <h2 className={` heading`}>Отзывы</h2>
                <LinkButton text='Написать отзыв'
                            wrapClass={styles.reviewsButtonTop}
                            target='_blank'
                            to='https://t.me/rus_udemy_review'/>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter={'5px 20px'}>
                    {reviewsList.map(item => {
                        return <ReviewItem text={item.text} name={item.name}
                                           animated={item.animated}
                                           photo={item.photo}
                                           publishDate={item.publishDate}
                                           link={item.link} key={item.id}/>
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <div className={styles.reviewsButtons}>
                {showButton && <div
                    className={`${buttonStyles.pulsingButtonWrap} ${buttonStyles.buttonPulse} ${styles.loadButtonPulse}`}>
                    <span className={buttonStyles.pulsing}/>
                    <RippleButton className={`${buttonStyles.linkButton} ${styles.loadButton}`}
                                  onClick={loadReviews}
                    >
                        Загрузить еще отзывы
                    </RippleButton>
                </div>}
                <LinkButton text='Читать в Telegram'
                            className={styles.reviewsButton}
                            target='_blank'
                            to='https://t.me/rus_udemy_review'/>

            </div>

        </section>
    );
};

export default React.memo(Reviews);