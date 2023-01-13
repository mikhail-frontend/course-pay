import React from 'react';
import styles from './MainInfo.module.scss'
import Link from "next/link";
const meImg = require('/pages/contacts/me.jpeg')
const MainInfo = () => {
    return (
        <section className={`${styles.about} about`}>
            <h1 className={`heading ${styles.aboutHeading}`}>Обо мне</h1>
            <div className={`${styles.aboutContent}`}>
                <img src={meImg.default.src}
                     alt="RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов"
                     loading='eager'
                     width={400}
                     height={500}
                />
                <div className={styles.aboutInfo}>
                    <p>
                        Друзья, привет! Давайте знакомиться! Меня зовут Михаил Харитонов, я &mdash;практикующий&nbsp;
                        <strong>Senior&nbsp;Frontend &nbsp;разработчик</strong> (Vue, React, TypeScript)
                    </p>

                    <p>
                        В юности я очень хотел стать программистом и даже закончил университет в
                        России, но именно <strong> IT курсы </strong> и тяга к новым знаниям, упорство сделали из меня
                        профессионала.
                    </p>

                    <p>
                        Несколько месяцев назад я решил изучить <strong> React </strong> (мой основной фреймворк &mdash; <strong>Vue</strong>).
                        Буквально на днях завершил курс на платформе Udemy -Udemy React- и уже создал сайт по новой
                        технологии!
                    </p>

                    <p>
                        Из-за санкций в России сложилась плачевная ситуация с доступом к востребованным
                        программам образования. <strong>Купить курсы Udemy из&nbsp;России</strong> на сайте Udemy.com российской картой больше
                        нельзя. Я считаю это несправедливым. Поэтому я создал этот сервис <Link href={'/'} target={'_blank'}>rusudemy.com</Link>,
                        где каждый мой соотечественник теперь может оплачивать Udemy курсы без ограничений. Больше не нужно вводить
                        запросы Udemy торрент или Udemy free! Образование должно быть доступным для всех!
                    </p>
                </div>
            </div>


        </section>
    );
};

export default MainInfo;