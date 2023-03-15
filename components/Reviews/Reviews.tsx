import React, {useState} from 'react';
import ReviewItem, {ReviewItemType} from "../ReviewItem/ReviewItem";
import useAnimation from "../../hooks/useAnimation";
import styles from './Reviews.module.scss';
import LinkButton from '../UI/LinkButton/LinkButton'
import reviewsListArray from './ReviewsListArray'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import RippleButton from "../UI/RippledButton";
import buttonStyles from '../UI/LinkButton/LinkButton.module.scss'


const shownCount = 21;

const sortedReviews: ReviewItemType[] = reviewsListArray.sort((a, b) => {
    const aPublish = a.publishDate;
    const bPublish = b.publishDate;
    return Number(new Date(bPublish)) - Number(new Date(aPublish))
});

const firstScreenReviews = [...sortedReviews].slice(0, shownCount);
const restReviews = [...sortedReviews].slice(shownCount -1, sortedReviews.length).map(el => ({
    ...el,
    animated: true
}));

const Reviews = () => {
    const [reviewsList, setReviewsList] = useState<ReviewItemType[]>(firstScreenReviews);
    const [showButton, setShowButton] = useState<boolean>(true);
    const wrapRef = useAnimation<ReviewItemType>(reviewsList, setReviewsList);

    const loadReviews = () => {
        setReviewsList(prev => {
            return [...prev, ...restReviews]
        })
        setShowButton(prev => !prev)
    }

    return (
        <section ref={wrapRef} className={`${styles.reviews} container`} id='reviews'>
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
                <LinkButton text='Написать отзыв'
                            className={styles.reviewsButton}
                            target='_blank'
                            to='https://t.me/rus_udemy_review'/>

            </div>

        </section>
    );
};

export default React.memo(Reviews);