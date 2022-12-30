import React, {useState} from 'react';
import styles from './UdemyAbout.module.scss';
type AboutItem = {
    id: number,
    title: string,
    text: string,
    icon: string
}
const aboutItems:AboutItem[] = [
    {
        id: 1,
        title: 'на 70% дешевле',
        text: 'чем у популярных российских курсов',
        icon: '/icon1.png'
    },
    {
        id: 2,
        title: 'Сертификат',
        text: 'получите международный сертификат',
        icon: '/icon2.png'
    },
    {
        id: 3,
        title: 'Настоящие эксперты',
        text: 'выбирайте курсы от экспертов с реальным опытом',
        icon: '/icon3.png'
    },
]
const UdemyAbout = () => {
    const [aboutList]:[AboutItem[], React.Dispatch<React.SetStateAction<AboutItem[]>>] = useState(aboutItems)
    return (
        <section className={`${styles.udemyAbout} container`} id='udemyAbout'>
            <div className={styles.udemyAboutMain}>
                <h2 className={`${styles.udemyAboutHeading} heading`}>
                    Udemy <span>международный проект</span>
                </h2>
                <p className={styles.udemyAboutText}>
                    Ведущие компании пользуются курсами Udemy, чтобы поддерживать актуальность навыков своих сотрудников.
                </p>
            </div>
            <div className={styles.udemyBlocks}>
                {aboutList.map(item => {
                    return (
                        <div className={styles.udemyBlock} key={item.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.icon} alt={item.text} width={'46px'} height={'46px'} loading={'lazy'} />
                            <h3 className={styles.udemyBlockTitle}>{item.title}</h3>
                            <p className={styles.udemyBlockText}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default UdemyAbout;