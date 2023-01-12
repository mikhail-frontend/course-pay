import React from 'react';
import MainInfo from "../../components/contactsComponents/MainInfo";
import Reviews from "../../components/contactsComponents/Reviews";
import styles from './styles/contacts.module.scss'
const Contacts = () => {
    return (
        <main className={`${styles.contacts} container`}>
            <MainInfo/>
            <Reviews/>
        </main>
    );
};

export default Contacts;