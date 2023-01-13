import React from 'react';
import styles from './ReviewItem.module.scss';
import Link from "next/link";
import Image from "next/image";

export type ReviewItemType = {
    name: string
    text: string
    photo?: string | null
    id: string | number
    link: string | number
    animated?: boolean
}
const ReviewItem:React.FC<ReviewItemType> = ({name, text, photo, animated, link}) => {
    return (
        <div className={`${styles.reviewItem} ${animated ? styles.active : ''}`}>
            <div className={styles.reviewItemTop}>
                <Link href="https://t.me/rus_udemy_review" target='_blank' className={styles.reviewItemSocialLink}/>
                {!!photo && <Image src={photo} width={56} height={56}
                                   priority={false}
                                   alt={`${name} RusUdemy. Udemy как купить. Udemy российской картой`}
                                   className={styles.reviewItemPhoto}/>}
                {!photo && <Image src='/user-default.svg'
                                  priority={false}
                                  width={56} height={56}
                                  alt={`${name} RusUdemy. Udemy как купить. Udemy российской картой`}
                                  className={styles.reviewItemPhoto}/>}
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