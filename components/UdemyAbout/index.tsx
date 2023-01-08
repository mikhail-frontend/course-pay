import React, { useState} from 'react';
import useAnimation from "../../hooks/useAnimation";
import useMobile from "../../hooks/useMobile";
import styles from './UdemyAbout.module.scss';

type AboutItem = {
    id: number,
    title: string,
    text: string,
    icon: string,
    mobileTitle?: string,
    animated?: boolean
}
const aboutItems:AboutItem[] = [
    {
        id: 1,
        title: 'на 70% дешевле',
        text: 'Чем популярные российские курсы',
        icon: '/icon1.png'
    },
    {
        id: 2,
        title: ' Сертификат и советы по&nbsp;трудоустройству',
        mobileTitle: 'Сертификат',
        text: 'Получите международный сертификат и скилл-гайд',
        icon: '/icon2.png'
    },
    {
        id: 4,
        title: 'Выбор курса',
        text: '213000 видеокурсов',
        icon: '/icon3.png'
    },
    {
        id: 3,
        title: 'Топ-преподаватели',
        text: 'Курсы от экспертов с реальным опытом работы в международных корпорациях',
        icon: '/icon3.png'
    },
]

const UdemyAbout = () => {
    const [aboutList, setAboutList] = useState<AboutItem[]>(aboutItems);
    const wrapRef = useAnimation<AboutItem>(aboutList, setAboutList)
    const isMobile = useMobile();
    return (
        <section className={`${styles.udemyAbout} container`} id='udemyAbout'>
            <div className={styles.udemyAboutMain}>
                <div className={`${styles.udemyAboutHeading} heading`}>
                    Udemy &mdash;<h2> лидер онлайн обучения</h2>
                </div>
                <p className={styles.udemyAboutText}>
                    Udemy предоставляет доступ к&nbsp;востребованным программам обучения,
                    которые расширят ваши карьерные возможности.
                    Из-за санкций Udemy не&nbsp;принимает карты российских банков к оплате.
                    Поэтому мы создали этот&nbsp;сервис, чтобы вы совершали покупки на Udemy, двигаясь к&nbsp;вашей цели.
                </p>
            </div>
            <ul className={styles.udemyBlocks} ref={wrapRef}>
                {aboutList.map(item => {
                    return (
                        <li className={`${styles.udemyBlock} ${item.animated ? styles.active : ''}`} key={item.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.icon}
                                 alt={item.text}
                                 width={46}
                                 height={46}
                                 className={`${styles.udemyBlockImage}`}
                                 loading='lazy'/>
                            <h3 className={styles.udemyBlockTitle}
                                dangerouslySetInnerHTML={{__html: !isMobile ? item.title : item.mobileTitle ? item.mobileTitle : item.title}}/>
                            <p className={styles.udemyBlockText}>{item.text}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default UdemyAbout;