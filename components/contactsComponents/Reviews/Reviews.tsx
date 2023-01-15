import React, {useState} from 'react';
import ReviewItem, {ReviewItemType} from "../ReviewItem/ReviewItem";
import useAnimation from "../../../hooks/useAnimation";
import styles from './Reviews.module.scss';
import LinkButton from '../../UI/LinkButton/LinkButton'
import reviewsListArray from './ReviewsListArray'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Reviews = () => {
    const [reviewsList, setReviewsList] = useState<ReviewItemType[]>(reviewsListArray);
    const wrapRef = useAnimation<ReviewItemType>(reviewsList, setReviewsList);
    return (
        <section ref={wrapRef} className={`${styles.reviews} container`} id='reviews'>
            <h2 className={`${styles.reviewsHeading} heading`}>Отзывы</h2>
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
            <LinkButton text='Написать отзыв'
                            className={styles.reviewsButton}
                            target='_blank'
                            to='https://t.me/rus_udemy_review'/>
        </section>
    );
};

export default Reviews;