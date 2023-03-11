import React, {useState} from 'react';
import styles from './Faq.module.scss';
import type {AccordionType} from "../UI/Accordion/";
import Accordion from "../UI/Accordion/";
import useAnimation from "../../hooks/useAnimation";
import {FAQPage} from "schema-dts";
import {JsonLd} from "react-schemaorg";


const items: AccordionType[] = [
    {
        id: 1,
        title: `В чем отличие нашего сервиса от&nbsp;Udemy?`,
        content: `Мы знаем как на сайте Udemy купить курсы из России. Наш сервис позволяет оплатить на сайте Udemy полный курс, если у вас карта российского банка.`,
    },
    {
        id: 11,
        title: `Какие у меня есть гарантии, что после перевода денег я получу доступ к Udemy курсы?`,
        content: `Самая надежная гарантия - это отзывы моих покупателей. Все отзывы написаны реальными людьми с открытыми контактами. Кроме того вы можете найти меня в социальных сетях и связаться со мной.`,
    },
    {
        id: 2,
        title: `Нужно ли мне  передавать свои персональные данные: номер карты, паспорта, имя и фамилию?`,
        content: `Нет. Чтобы купить Udemy курсы через наш сервис не нужно предоставлять персональные данные.`,
    },
    {
        id: 3,
        title: `Нужно ли мне создавать аккаунт на Udemy.com?`,
        content: `Нет. Мы сами создадим аккаунт на сайте Udemy.com за вас. 
        После оплаты  наших услуг мы передадим пароль и логин от личного кабинета на сайте Udemy.com. 
         Дальше вы сможете сами изменить пароль и настроить доступ.` ,
    },
    {
        id: 4,
        title: `Если у меня уже есть аккаунт на Udemy, можно ли использовать его?`,
        content: `Если Ваш аккаунт зарегистрирован из России, то нет. Мы работаем только с новыми аккаунтами, которые создаем специально для оплаты курсов Udemy.` ,
    },
    {
        id: 5,
        title: `Udemy как купить курсы российской картой?`,
        content: `Оплатить Udemy курсы из России можно переводом на Тинькофф, Сбербанк банк или кошелек YooMoney. Возможна дополнительная комиссия согласно тарифам вашего банка.`,
        isHeading: true
    },
    {
        id: 7,
        title: `Сколько нужно ждать с момента оплаты Udemy courses до получения доступа к личному кабинету?`,
        content: `Весь процесс покупки занимает около 10 минут.`,
    },
];


const Index = () => {
    const [listOfFaq, setListOfFaq] = useState<AccordionType[]>(items);
    const wrapRef = useAnimation<AccordionType>(listOfFaq, setListOfFaq);
    return (
        <>
            <JsonLd<FAQPage>
                item={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": listOfFaq.map(item => {
                        return {
                            "@type": "Question",
                            "name": item.title,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.content
                            }
                        }
                    })
                }}
            />
            <section className={`container ${styles.faq}`} id='faq' ref={wrapRef}>
                <h2 className={`heading ${styles.faqHeading}`}>Часто задаваемые вопросы</h2>
                {
                    listOfFaq.map((item) => (
                        <Accordion
                            className={`${styles.faqBlock} ${item.animated ? styles.active : ''}`}
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            id={item.id}
                        />
                    ))
                }
            </section>

        </>
    );
};

export default Index;