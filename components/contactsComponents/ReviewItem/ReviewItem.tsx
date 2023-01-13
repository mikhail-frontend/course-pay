import React from 'react';
import styles from './ReviewItem.module.scss'
import Image from "next/image";

export type ReviewItemType = {
    name: string
    text: string
    photo?: string | null
    id: string|number
    link: string|number
    animated?: boolean
}
const ReviewItem:React.FC<ReviewItemType> = ({name, text, photo, animated, link}) => {
    return (
        <div className={`${styles.reviewItem} ${animated ? styles.active : ''}`}>
            <div className={styles.reviewItemTop}>
                <a href="https://t.me/rus_udemy_review" target='_blank' className={styles.reviewItemSocialLink} />
                {!!photo && <div className={styles.reviewItemPhoto} style={{backgroundImage: `url(${photo})`}}/>}
                {!photo && <div className={styles.reviewItemPhoto} style={{backgroundImage: `url(/user-default.svg)`}} />}
                <Image
                    src="/telegram.svg"
                    priority={false}
                    alt="RusUdemy. Udemy как купить"
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
        </div>
    );
};

export default ReviewItem;