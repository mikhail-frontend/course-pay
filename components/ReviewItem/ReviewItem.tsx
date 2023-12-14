import React from 'react';
import styles from './ReviewItem.module.scss';
import Link from "next/link";
import Image from "next/image";
import {Review} from "schema-dts";
import {JsonLd} from "react-schemaorg";
import stripTags from "../../helpers/stripTags";
import buildDate from "../../helpers/buildDate";

export type ReviewItemType = {
    name: string
    text: string
    photo: string | null
    id: string | number
    link: string | number
    publishDate: string
    animated?: boolean
}

const setPhoto = (photo) => photo || '/user-default.svg'
const ReviewItem =
    ({name, text, photo, animated, link, publishDate}) => {
        return (
            <>
                <JsonLd<Review>
                    item={{
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "Service",
                            "image": "https://rusudemy.com/mainLogo.svg",
                            "name": "Udemy как купить из России | Udemy как оплатить | RusUdemy",
                            "logo": "https://rusudemy.com/mainLogo.svg",
                            "url": "https://rusudemy.com/"
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5"
                        },
                        "name": stripTags(text).result,
                        "author": {
                            "@type": "Person",
                            name,
                            url: `https://t.me/${link.replace('@', '')}`
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": name
                        },
                        "datePublished": publishDate,
                        "discussionUrl": "https://t.me/rus_udemy_review",
                        "isBasedOn": "https://t.me/rus_udemy_review",
                    }}
                />
                <div className={`${styles.reviewItem} ${animated ? styles.active : ''}`}>
                    <div className={styles.reviewItemTop}>
                        <Link href="https://t.me/rus_udemy_review" target='_blank'
                              className={styles.reviewItemSocialLink}/>
                        <img src={setPhoto(photo)}
                             width={56} height={56}
                             loading='lazy'
                             title={`${name} RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy`}
                             alt={`${name} RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy`}
                             className={styles.reviewItemPhoto}/>
                        <Image
                            src="/telegram.svg"
                            priority={false}
                            alt="RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy"
                            title="RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy"
                            className={styles.reviewSocial}
                            width={25}
                            height={25}
                        />
                        <div>
                            <div className={styles.reviewItemName}>
                                {name}
                            </div>
                            <div className={styles.reviewItemLink}>
                                {link}
                            </div>
                        </div>
                    </div>
                    <div className={styles.reviewItemText} dangerouslySetInnerHTML={{__html: text}}/>
                    <div className={styles.reviewItemDate}>
                        <strong>Отзыв от: </strong> {buildDate(publishDate, {
                        showTime: true
                    }).rusDate}
                    </div>
                </div>
            </>
        );
    };

export default React.memo(ReviewItem);