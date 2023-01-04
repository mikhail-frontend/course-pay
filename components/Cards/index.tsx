import React, {useState} from 'react';
import Image from 'next/image'

import styles from './Cards.module.scss'

type CardsType = {
    children?: React.ReactNode
}
type Course = {
    id: number,
    text: string,
    openLink?: string
}
type Cart = {
    id: number,
    text: string
}
const courses:Course[] = [
    {
        id: 1,
        text: 'Python',
        openLink: 'https://www.udemy.com/ru/topic/python/'
    },
    {
        id: 2,
        text: 'Дизайн',
        openLink: 'https://www.udemy.com/courses/search/?src=ukw&q=%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD'
    },
    {
        id: 3,
        text: 'JavaScript',
        openLink: 'https://www.udemy.com/ru/topic/javascript/'
    },
    {
        id: 4,
        text: 'веб-разработка',
        openLink: 'https://www.udemy.com/ru/topic/web-development/'
    },
    {
        id: 5,
        text: 'Обработка и анализ данных',
        openLink: 'https://www.udemy.com/ru/topic/data-science/'
    },
];
const Carts:Cart[] = [
    {
        id: 1,
        text: 'МИР'
    },
    {
        id: 2,
        text: 'VISA'
    },
    {
        id: 3,
        text: 'MASTERCARD'
    },
]
const Cards:React.FC<CardsType> = () => {
    const [coursesList] = useState<Course[]>(courses);
    const [cartsList] = useState<Cart[]>(Carts);

    const openCourse = (url:string = '') => window.open(url)

    return (
        <div className={styles.cardsWrapper}>
            <div className={`${styles.cards} container`}>
                <section className={styles.card}>
                    <div className={styles.cardCourses}>
                        {coursesList.map(course => {
                            return (
                                <div key={course.id}
                                     className={styles.cardCourse}
                                     onClick={() => openCourse(course.openLink)}>
                                    {course.text}
                                    <span>→</span>
                                </div>
                            )
                        })}
                    </div>
                    <h2 className={styles.cardTitle}>Большой выбор курсов</h2>
                    <p className={styles.cardText}>Изучайте востребованные навыки с&nbsp;помощью более 213 000 видеокурсов на Udemy</p>
                </section>
                <section className={styles.card}>
                    <Image
                        src="/lighting.svg"
                        className={styles.cardImage}
                        alt="Udemy для России, Udemy купить России, Udemy российской картой, IT курсы, Оплатить Udemy российской картой"
                        width={165}
                        height={199}
                    />
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle} style={{color: '#6F8EFF'}}>Оплата картой <br/> Российских банков</h2>
                        <p className={styles.cardText} >Абсолютно любой российский банк</p>
                    </div>
                    <div className={styles.cardCarts}>
                        {cartsList.map(item => (<strong className={styles.cartItem} key={item.id}>{item.text}</strong>))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cards;