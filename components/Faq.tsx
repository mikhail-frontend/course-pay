import React, {useState} from 'react';
import styles from './Faq.module.scss';
import type {AccordionType} from "./Accordion";
import Accordion from "./Accordion";
import useAnimation from "../hooks/useAnimation";
const items:AccordionType[] = [
    {
        id: 1,
        title: `В чем отличие нашего сервиса от Udemy?`,
        content: `Наш сервис позволяет оплатить любимые курсы или оформить подписку на сайте Udemy.com, если у вас  карта российского банка.` ,
    },
    {
        id: 2,
        title: `Нужно ли мне  передавать свои персональные данные:номер карты, паспорта, имя и фамилию`,
        content: `Нет. От вас требуется только адрес электронной почты, на которую придет письмо-подтверждение о регистрации на сайте Udemy.com` ,
    },
    {
        id: 3,
        title: `Нужно ли мне создавать аккаунт на Udemy.com`,
        content: `Нет. Мы сделаем это за вас. От вас требуется только сообщить адрес вашей электронной почты в телеграмме. 
        После оплаты и регистрации мы передадим пароль и логин нового аккаунта на Udemy. Дальше вы сможете сами изменить пароль и настроить доступ.` ,
    },
    {
        id: 4,
        title: `Если у меня уже есть аккаунт на Udemy, можно ли использовать его?`,
        content: `В этом случае вам нужно предоставить доступ к данному аккаунту нам, сообщив логин и пароль.` ,
    },
    {
        id: 5,
        title: `Как оплатить курсы российской картой?`,
        content: `Оплатить стоимость курса в рублях можно переводом на Тинькофф, Сбербанк банк или кошелек YooMoney. 
        Возможна дополнительная комиссия согласно тарифам вашего банка` ,
    },
    {
        id: 7,
        title: ` Сколько нужно ждать с момента оплаты до получения курса?`,
        content: `После поступления денег на наш счет в течении 15 минут мы предоставим  ваш новый аккаунт на Udemy c  вашей покупкой` ,
    },
];
const Faq = () => {
    const [listOfFaq, setListOfFaq]: [AccordionType[], React.Dispatch<React.SetStateAction<AccordionType[]>>] = useState(items);
    const wrapRef = useAnimation<AccordionType>(listOfFaq, setListOfFaq)
    return (
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
    );
};

export default Faq;