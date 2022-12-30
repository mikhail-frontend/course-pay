import React, {useCallback, useEffect, useRef, useState} from 'react';
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
        text: 'чем у популярных российских курсов',
        icon: '/icon1.png',
        animated: false
    },
    {
        id: 2,
        title: 'Сертификат',
        text: 'получите международный сертификат',
        icon: '/icon2.png',
        animated: false
    },
    {
        id: 3,
        title: 'Настоящие эксперты',
        text: 'выбирайте курсы от экспертов с реальным опытом',
        icon: '/icon3.png',
        animated: false
    },
]
const UdemyAbout = () => {
    const [aboutList, setAboutList]: [AboutItem[], React.Dispatch<React.SetStateAction<AboutItem[]>>] = useState(aboutItems);
    const [animated, setAnimated]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const wrapRef:React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null)

    const setElementIsAnimated = useCallback(() => {
        const globalCopy = [...aboutList];
        globalCopy.forEach((item, index) => {
            const timer = (index + 1) * 100;
            setTimeout(() => {
                setAboutList((prevValue) => {
                    const copy = [...prevValue];
                    copy[index] = {...copy[index], animated: true};
                    return copy
                })
            }, timer)
        })
    }, [aboutList]);

    useEffect(() => {
        const target: Element | null = wrapRef!.current;
        const handleIntersection = (entries: IntersectionObserverEntry[]):void => {
            if (animated) return;
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    setElementIsAnimated();
                    setAnimated(() => true)
                }
            }
        }
        const observer: IntersectionObserver = new IntersectionObserver(handleIntersection);
        if (animated) observer.disconnect()
        observer.observe(target as Element);
    }, [animated, setElementIsAnimated])

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
            <div className={styles.udemyBlocks} ref={wrapRef}>
                {aboutList.map(item => {
                    return (
                        <div className={`${styles.udemyBlock} ${item.animated ? styles.active : ''}`} key={item.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.icon}
                                 alt={item.text}
                                 width={'46px'}
                                 height={'46px'}
                                 className={`${styles.udemyBlockImage}`}
                                 loading={'lazy'}/>
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