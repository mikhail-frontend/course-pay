import React from 'react';
import styles from './Contacts.module.scss'
import LinkButton from "../UI/LinkButton/LinkButton";
const Contacts = () => {
    return (
        <section className={`${styles.contacts}`} id='contacts'>
            <h2 className={`heading container ${styles.contactsHeading}`}>Хотите задать вопрос? <br/>
                Мы всегда доступны  в телеграмм</h2>
            <LinkButton to='https://t.me/rus_udemy' text='@rus_udemy'/>
        </section>
    );
};

export default Contacts;