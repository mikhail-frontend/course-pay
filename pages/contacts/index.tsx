import React from 'react';
import MainInfo from "../../components/contactsComponents/MainInfo/MainInfo";
import Reviews from "../../components/contactsComponents/Reviews/Reviews";
import ContactsBlock from "../../components/Contacts";
import styles from './styles/contacts.module.scss'
const Contacts = () => {
    return (
        <main className={`${styles.contacts} container`}>
            <MainInfo/>
            <Reviews/>
            <ContactsBlock text='Я всегда доступен в Telegram'/>
        </main>
    );
};

export default Contacts;