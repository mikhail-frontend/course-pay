import React from 'react';
import styles from './MainInfo.module.scss';
import Link from "next/link";
import Image from "next/image";
import reviewStyles from '../Reviews/Reviews.module.scss'

const meImg = require('/pages/contacts/me.jpeg');

const ExtraText:React.FC<{className: string}> = ({className}) => {
    return (
        <div className={className}>
            <p>
                В юности я очень хотел стать программистом и даже закончил университет в
                России, но именно <strong> IT курсы </strong>, особенно <strong>Курсы Udemy</strong> и тяга к
                новым знаниям, упорство сделали из меня
                профессионала.
            </p>
            <p>
                У Udemy есть масса преимуществ перед российскими
                аналогами: начиная от относительно низкой стоимости и заканчивая качеством и уникальностью
                контента. К примеру, Я долго искал курс по React на отечественном рынке, среди
                разрекламированных проектов, но в итоге остановил свое внимание на Udemy: 470 уроков практики
                почти за копейки - это самый полный гайд по теме, который когда-либо мне встречался!
            </p>
            <p>
                Из-за санкций в России сложилась плачевная ситуация с доступом к востребованным
                программам образования. <strong>Купить курсы Udemy из&nbsp;России</strong> на сайте Udemy.com
                российской картой больше
                нельзя. Я считаю это несправедливым. Поэтому я создал этот сервис <Link href={'/'}
                                                                                        target={'_blank'}>rusudemy.com</Link>,
                где каждый мой соотечественник теперь может оплачивать Udemy курсы без ограничений. Больше не
                нужно вводить
                запросы Udemy торрент или Udemy free! Образование должно быть доступным для всех!
            </p>
        </div>
    )
}

const MainInfo = () => {

    return (
        <>
            <section className={`${styles.about}`}>
                <h1 className={`heading ${styles.aboutHeading}`}>Обо мне</h1>
                <div className={`${styles.aboutContent}`}>
                    <img src={meImg.default.src}
                         alt="RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов"
                         className={styles.aboutImage}
                         loading='eager'
                         width={400}
                         height={500}
                    />
                    <div className={styles.aboutInfo}>
                        <p>
                            Друзья, привет! Давайте знакомиться! Меня зовут Михаил Харитонов, я &mdash; создатель сервиса&nbsp;
                            <Link href='/'>rusudemy.com</Link> и
                            практикующий&nbsp;
                            <strong>Senior&nbsp;Frontend &nbsp;разработчик</strong> (Vue, React, TypeScript)
                        </p>
                        <ExtraText className={styles.extraText}/>
                    </div>
                </div>
            </section>
            <section className={`${reviewStyles.reviews} ${styles.contacts}`}>
                <h2 className={`${styles.aboutHeading} heading`}>Мои контакты</h2>
                <div className={styles.aboutSocials}>
                    <a href="mailto:mikhail.kharitonov2016@yandex.ru" rel='noreferrer' className={styles.aboutSocialItem}>
                        <Image src='/social-icons/email.svg' width={45} height={45}
                               alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                        <span>E-mail: <span>mikhail.kharitonov2016@yandex.ru</span></span>
                    </a>
                    <span className={styles.aboutSocialItem}>
                            <Image src='/social-icons/phone.svg' width={50} height={50}
                                   alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                            <span>Телефон (только WhatsApp) <span> +7(925)-516-16-92</span></span>
                        </span>
                    <a href="https://t.me/chargos93" target='_blank' rel='noreferrer' className={styles.aboutSocialItem}>
                        <Image src='/social-icons/telegram.svg' width={50} height={50}
                               alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                        <span>Telegram личный</span>
                    </a>
                    <a href="https://t.me/rus_udemy" target='_blank' rel='noreferrer' className={styles.aboutSocialItem}>
                        <Image src='/social-icons/telegram.svg' width={50} height={50}
                               alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                        <span> Telegram проекта <strong> RusUdemy</strong></span>
                    </a>
                    <a href="https://vk.com/id13334433" target='_blank' rel='noreferrer' className={styles.aboutSocialItem}>
                        <Image src='/social-icons/vk.svg' width={50} height={50}
                               alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                        <span>VK</span>
                    </a>
                    <a href="https://www.instagram.com/chargos1993/"  target='_blank' rel='noreferrer'  className={styles.aboutSocialItem}>
                        <Image src='/social-icons/instagram.svg' width={50} height={50}
                               alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                        <span>Instagram</span>
                    </a>

                </div>
            </section>
        </>
    );
};

export default MainInfo;