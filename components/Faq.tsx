import React from 'react';
import styles from './Faq.module.scss';
import type {AccordionType} from "./Accordion";
import Accordion from "./Accordion";
const items:AccordionType[] = [
    {
        curIndex: 1,
        title: `🌱 В чем отличие сервиса от официального сайта Udemy?`,
        content: `Данная платформа позволяет купить любой курс на сайте Udemy.com 
        обладателю карты российского банка. Санкции - не повод отказывать себе в качественном образовании! 
        Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы, чтобы уже завтра ты мог стать 
        востребованным специалистом с высоким уровнем дохода.` ,
    },
    {
        curIndex: 2,
        title: `🌱 Cколько в среднем длится операция  с момента оплаты до получения доступа к курсу?`,
        content: `  С момента поступления заявки до передачи курса проходит в среднем 10-15 минут.` ,
    },
    {
        curIndex: 3,
        title: `🌱 Как передается курс после оплаты?`,
        content: `Оплаченный курс вы можете видеть в личном кабинете на платформе Udemy.com` ,
    },
    {
        curIndex: 4,
        title: `🌱 Как это работает?`,
        content: `Чтобы оплатить курсы на сайте Udemy.com картой российского банка, вам нужно создать аккаунт на сайте Udemy.com. 
        Узнать подробности и оставить заявку на покупку курса вы можете здесь.` ,
    },
];
const Faq: React.FC<{}> = () => {
    return (
        <section className={`container ${styles.faq}`} id='faq'>
            <h2 className={`heading ${styles.faqHeading}`}>Часто задаваемые вопросы</h2>
            {
                items.map((item) => (
                    <Accordion
                        key={item.curIndex}
                        title={item.title}
                        content={item.content}
                        curIndex={item.curIndex}
                    />
                ))
            }
        </section>
    );
};

export default Faq;