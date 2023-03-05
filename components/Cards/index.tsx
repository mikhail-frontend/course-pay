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
        text: 'Udemy Python',
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
    {
        id: 6,
        text: 'Udemy Unreal',
        openLink: 'https://www.udemy.com/course/unrealcourse/'
    },
    {
        id: 7,
        text: 'Udemy на русском',
        openLink: 'https://www.udemy.com/courses/search/?lang=ru&q=%D0%BD%D0%B0+%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC&sort=relevance&src=ukw'
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
                    <p className={styles.cardText}>Более&nbsp;чем 213&nbsp;000&nbsp;курсов для&nbsp;получения знаний</p>
                </section>
                <section className={styles.card}>
                    <Image
                        src="/lighting.svg"
                        className={styles.cardImage}
                        alt="RusUdemy. Udemy как купить. Udemy российской картой."
                        title="RusUdemy. Udemy как купить. Udemy российской картой."
                        width={165}
                        height={199}
                    />
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle} style={{color: '#6F8EFF'}}>Оплата любой <br/>
                            российской картой</h2>
                        {/*<p className={styles.cardText} >Абсолютно любой российский банк</p>*/}
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