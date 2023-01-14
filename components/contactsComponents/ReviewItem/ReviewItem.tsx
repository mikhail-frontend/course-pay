import React from 'react';
import styles from './ReviewItem.module.scss';
import Link from "next/link";
import Image from "next/image";
import { Review } from "schema-dts";
import { JsonLd } from "react-schemaorg";
import stripTags from "../../../helpers/stripTags";

export type ReviewItemType = {
    name: string
    text: string
    photo?: string | null
    id: string | number
    link: string | number
    animated?: boolean
}
const ReviewItem =
    ({name, text, photo, animated, link}) => {
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
                   "datePublished": new Date().toLocaleDateString()
               }}
           />
           <div className={`${styles.reviewItem} ${animated ? styles.active : ''}`}>
               <div className={styles.reviewItemTop}>
                   <Link href="https://t.me/rus_udemy_review" target='_blank' className={styles.reviewItemSocialLink}/>
                   {!!photo && <img src={photo}
                                    width={56} height={56}
                                    loading='lazy'
                                    alt={`${name} RusUdemy. Udemy как купить. Udemy российской картой`}
                                    className={styles.reviewItemPhoto}/>}
                   {!photo && <img src='/user-default.svg'
                                   loading='lazy'
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
       </>
    );
};

export default ReviewItem;