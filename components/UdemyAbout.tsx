import React, { useState} from 'react';
import useAnimation from "../hooks/useAnimation";
import styles from './UdemyAbout.module.scss';

type AboutItem = {
    id: number,
    title: string,
    text: string,
    icon: string,
    animated?: boolean
}
const aboutItems:AboutItem[] = [
    {
        id: 1,
        title: 'на 70% дешевле',
        text: 'Чем популярные российские курсы',
        icon: '/icon1.png',
        animated: false
    },
    {
        id: 2,
        title: 'Сертификат',
        text: 'Получите международный сертификат и скилл-гайд',
        icon: '/icon2.png',
        animated: false
    },
    {
        id: 4,
        title: 'Выбор курса',
        text: '213000 видеокурсов',
        icon: '/icon3.png',
        animated: false
    },
    {
        id: 3,
        title: 'Настоящие эксперты',
        text: 'Выбирайте курсы от экспертов с реальным опытом',
        icon: '/icon3.png',
        animated: false
    },
]

const UdemyAbout = () => {
    const [aboutList, setAboutList]: [AboutItem[], React.Dispatch<React.SetStateAction<AboutItem[]>>] = useState(aboutItems);
    const wrapRef = useAnimation<AboutItem>(aboutList, setAboutList)

    return (
        <section className={`${styles.udemyAbout} container`} id='udemyAbout'>
            <div className={styles.udemyAboutMain}>
                <h2 className={`${styles.udemyAboutHeading} heading`}>
                    Udemy <span>международный проект</span>
                </h2>
                <p className={styles.udemyAboutText}>
                    Ведущие компании пользуются курсами Udemy, чтобы поддерживать актуальность навыков своих
                    сотрудников.
                </p>
            </div>
            <ul className={styles.udemyBlocks} ref={wrapRef}>
                {aboutList.map(item => {
                    return (
                        <li className={`${styles.udemyBlock} ${item.animated ? styles.active : ''}`} key={item.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.icon}
                                 alt={item.text}
                                 width={'46px'}
                                 height={'46px'}
                                 className={`${styles.udemyBlockImage}`}
                                 loading={'lazy'}/>
                            <h3 className={styles.udemyBlockTitle}>{item.title}</h3>
                            <p className={styles.udemyBlockText}>{item.text}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

export default UdemyAbout;