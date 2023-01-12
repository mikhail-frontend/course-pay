import React from 'react';
import styles from './ReviewItem.module.scss'
import Image from "next/image";

export type ReviewItemType = {
    name: string
    text: string
    photo?: string | null
    id: string|number
    link: string|number
}
const ReviewItem:React.FC<ReviewItemType> = ({name, text, photo, id, link}) => {
    return (
        <div className={`${styles.reviewItem}`}>
            <div className={styles.reviewItemTop}>
                {!!photo && <div className={styles.reviewItemPhoto} style={{backgroundImage: `url(${photo})`}}/>}
                <Image
                    src="/telegram.svg"
                    priority={true}
                    alt="telegram"
                    className={'reviewSocial'}
                    width={30}
                    height={30}
                />
                <div>
                    <div className={styles.reviewItemName}>
                        {name}
                    </div>
                </div>
            </div>
            <div className={styles.reviewItemText} dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    );
};

export default ReviewItem;