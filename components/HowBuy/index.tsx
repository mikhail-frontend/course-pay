import React, {useState} from 'react';
import aboutStyles from "../UdemyAbout/UdemyAbout.module.scss";
import styles from './HowBuy.module.scss'
import RippleButton from "../UI/RippledButton";
import Image from "next/image";
import useAnimation from "../../hooks/useAnimation";


type howBuyStep = {
    id: number,
    image: string,
    title: string,
    text?: string
    hasButton?: boolean
    additional?: string
    animated?: boolean
}
const howBuySteps:howBuyStep[] = [
    {
        id: 1,
        image: '/1.svg',
        title: 'Написать нам в телеграмм',
        hasButton: true
    },
    {
        id: 2,
        image: '/2.svg',
        title: 'Прислать ссылку на выбранный вами курс на площадке Udemy',
        text: 'Прислать почту Gmail'
    },
    {
        id: 3,
        image: '/3.svg',
        title: 'Оплатить',
        additional: 'Мы заводим аккаунт на Вашу почту и приобретаем курс.'
    }
]
const HowBuy = () => {
    const [steps, setSteps] = useState(howBuySteps);
    const wrapRef = useAnimation<howBuyStep>(steps, setSteps);

    return (
        <div className={styles.howBuyWrap}>
            <section className={`${styles.howBuy} container`} id='howBuy'>
                <div className={aboutStyles.udemyAboutMain}>
                    <h2 className={`${aboutStyles.udemyAboutHeading} heading`}>
                        Как приобрести курс?
                    </h2>
                    <p className={aboutStyles.udemyAboutText}>
                        Учитесь в удобном темпе с помощью пожизненного доступа с мобильных устройств и ПК
                    </p>
                </div>
                <ul className={styles.steps} ref={wrapRef}>
                    {
                        steps.map(step => {
                            return (
                                <li key={step.id} className={`${styles.step} ${step.animated ? styles.active : ''}`}>
                                    <Image src={step.image} alt={step.title} width={55} height={55} loading={'lazy'}/>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    {!!step.hasButton &&  <RippleButton to="https://t.me/udemy_rus" className={styles.telegramLink}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_21_364)">
                                                <path d="M4.7085 7.59061L4.51 10.3826C4.794 10.3826 4.917 10.2606 5.0645 10.1141L6.396 8.84161L9.155 10.8621C9.661 11.1441 10.0175 10.9956 10.154 10.3966L11.965 1.91061L11.9655 1.91011C12.126 1.16211 11.695 0.869611 11.202 1.05311L0.556997 5.12861C-0.169503 5.41061 -0.158503 5.81561 0.433497 5.99911L3.155 6.84561L9.4765 2.89011C9.774 2.69311 10.0445 2.80211 9.822 2.99911L4.7085 7.59061Z" fill="#039BE5"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_21_364">
                                                    <rect width="12" height="12" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        @udemy_rus
                                    </RippleButton>}
                                    {!!step.text && <p className={styles.stepText}>{step.text}</p>}
                                    {!!step.additional && <p className={styles.additional}>{step.additional}</p>}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    );
};

export default HowBuy;