import React from 'react';
import styles from './Contacts.module.scss'
import LinkButton from "../UI/LinkButton/LinkButton";
type ContactsType = {
    text?: string
}
const Contacts:React.FC<ContactsType> = ({text}) => {

    return (
        <section className={`${styles.contacts}`} id='contacts'>
            <h2 className={`heading container ${styles.contactsHeading}`}>Хотите задать вопрос? <br/>
                {!text && 'Мы всегда доступны  в телеграмм'}
                {!!text && text}
            </h2>
            <LinkButton to='https://t.me/rus_udemy' text='@rus_udemy'  target='_blank'/>
        </section>
    );
};

export default Contacts;