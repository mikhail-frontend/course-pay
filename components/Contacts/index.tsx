import React from 'react';
import RippleButton from "../UI/RippledButton";
import styles from './Contacts.module.scss'
const Contacts = () => {
    return (
        <section className={`${styles.contacts}`} id='contacts'>
            <h2 className={`heading container ${styles.contactsHeading}`}>Хотите задать вопрос? <br/>
                Мы всегда доступны  в телеграмм</h2>
            <RippleButton  to="https://t.me/udemy_rus" className={styles.contactsButton}>
                @udemy_rus
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_669)">
                        <path d="M7.56288 11.3861L7.26513 15.5741C7.69113 15.5741 7.87563 15.3911 8.09688 15.1713L10.0941 13.2626L14.2326 16.2933C14.9916 16.7163 15.5264 16.4936 15.7311 15.5951L18.4476 2.86605L18.4484 2.8653C18.6891 1.7433 18.0426 1.30455 17.3031 1.5798L1.33563 7.69306C0.245883 8.11606 0.262383 8.72356 1.15038 8.99881L5.23263 10.2686L14.7149 4.3353C15.1611 4.0398 15.5669 4.2033 15.2331 4.4988L7.56288 11.3861Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_77_669">
                            <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </RippleButton>
        </section>
    );
};

export default Contacts;