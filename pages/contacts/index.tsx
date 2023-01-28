import React from 'react';
import MainInfo from "../../components/contactsComponents/MainInfo/MainInfo";
import Reviews from "../../components/contactsComponents/Reviews/Reviews";
import ContactsBlock from "../../components/Contacts";
import styles from './styles/contacts.module.scss';
import Head from "next/head";
const Contacts = () => {
    return (
     <>
        <Head>
            <title>RusUdemy - контакты | Мы поможем оплатить Udemy курсы российской картой | Udemy как купить</title>
            <meta name='apple-mobile-web-app-title'
                  content='RusUdemy - контакты | Мы поможем оплатить Udemy курсы российской картой | Udemy как купить'/>
            <meta name='og:title' property='og:title'
                  content='RusUdemy - контакты | Мы поможем оплатить Udemy курсы российской картой | Udemy как купить'/>
            <meta name='description'
                  content='RusUdemy - контакты. Мы поможем Вам оплатить Udemy российской картой. Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
            <meta name='og:description'
                  content='RusUdemy - контакты. Мы поможем Вам оплатить Udemy российской картой. Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>

        </Head>
         <main className={`${styles.contacts} container`}>
             <MainInfo/>
             <Reviews/>
             <ContactsBlock text='Я всегда доступен в Telegram'/>
         </main>
     </>
    );
};

export default Contacts;