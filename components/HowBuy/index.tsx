import React, {useState} from 'react';
import aboutStyles from "../UdemyAbout/UdemyAbout.module.scss";
import styles from './HowBuy.module.scss'
import RippleButton from "../UI/RippledButton";
import Image from "next/image";
import useAnimation from "../../hooks/useAnimation";
import {HowTo} from "schema-dts";
import {JsonLd} from "react-schemaorg";

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
        id: 4,
        image: '/1.svg',
        title: 'Выберите курс на&nbsp;сайте Udemy.com',
        text: 'Скопируйте ссылку на&nbsp;курс, который хотите купить'
    },
    {
        id: 5,
        image: '/2.svg',
        title: ' Отправьте заявку в&nbsp;telegram',
        hasButton: true,
        text: 'Пришлите ссылку на&nbsp;курс и e&#8209;mail'
    },
    {
        id: 6,
        image: '/3.svg',
        title: 'Приобретаем Вам курс',
        text: `<strong>Предоплата не&nbsp;требуется</strong> Мы купим курс за Вас, вышлем подтверждение покупки
                    и номер электронного кошелька для оплаты наших услуг.  После перевода средств вы получите доступ к&nbsp;курсу.`
    },
]
const HowBuy = () => {

    const [steps, setSteps] = useState<howBuyStep[]>(howBuySteps);
    const wrapRef = useAnimation<howBuyStep>(steps, setSteps);
    return (
        <div className={styles.howBuyWrap}>
            <section className={`${styles.howBuy} container`} id='howBuy'>
                <JsonLd<HowTo>
                    item={{
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Как приобрести курс?",
                        "totalTime": "PT10M",
                        "step": [

                            {
                                "@type": "HowToSection",
                                "name": "Выберите курс на сайте Udemy.com",
                                "itemListElement": [
                                    {
                                        "@type": "HowToStep",
                                        "position": "1",
                                        "image": "https://rusudemy.com/icons/icon-128x128.png",
                                        "text": "Скопируйте ссылку на&nbsp;курс, который хотите купить"
                                    }],
                                "position": "1"
                            },
                            {
                                "@type": "HowToSection",
                                "name": "Отправьте заявку в telegram",
                                "url": "https://t.me/rus_udemy",
                                "itemListElement": [
                                    {
                                        "@type": "HowToStep",
                                        "position": "1",

                                        "text": "Пришлите ссылку на курс и e-mail"
                                    }],

                                "position": "2"
                            },

                            {
                                "@type": "HowToSection",
                                "name": "Приобретаем Вам курс",
                                "itemListElement": [
                                    {
                                        "@type": "HowToStep",
                                        "position": "1",
                                        "text": "<strong>Предоплата не&nbsp;требуется</strong> Мы купим курс за Вас, вышлем подтверждение покупки и номер электронного кошелька для оплаты наших услуг.  После перевода средств вы получите доступ к курсу.",
                                    }],
                                "position": "3"
                            },

                        ]
                    }}
                />
                <div className={aboutStyles.udemyAboutMain}>
                    <h2 className={`${aboutStyles.udemyAboutHeading} heading`}>
                        Как приобрести курс?
                    </h2>
                    <p className={aboutStyles.udemyAboutText}>
                        Вы можете учиться в&nbsp;своем&nbsp;собственном темпе,
                        в&nbsp;любое время и&nbsp;в&nbsp;любом месте.
                    </p>
                </div>
                <ul className={styles.steps} ref={wrapRef}>
                    {
                        steps.map(step => {
                            return (
                                <li key={step.id} className={`${styles.step} ${step.animated ? styles.active : ''}`}>
                                    <Image src={step.image}
                                           title="RusUdemy. Udemy как купить. Udemy как оплатить российской картой."
                                           alt='RusUdemy. Udemy как купить. Udemy как оплатить российской картой.'
                                           width={55} height={55} loading={'lazy'}/>
                                    <h3 className={styles.stepTitle} dangerouslySetInnerHTML={{__html: step.title}}/>
                                    {!!step.hasButton &&  <RippleButton to="https://t.me/rus_udemy" className={styles.telegramLink} target='_blank'>
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
                                        @rus_udemy
                                    </RippleButton>}
                                    {!!step.text && <p className={styles.stepText} dangerouslySetInnerHTML={{__html: step.text}}/>}
                                    {!!step.additional && <p className={styles.additional} dangerouslySetInnerHTML={{__html: step.additional}}/>}
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