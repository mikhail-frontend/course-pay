import React, {useState} from 'react';
import styles from "./MainInfo/MainInfo.module.scss";
import headerStyles from '../Header/Header.module.scss'
import Link from "next/link";
import RippleButton from "../UI/RippledButton";
import ExtraText from "./ExtraText";
import {Article} from "schema-dts";
import {JsonLd} from "react-schemaorg";
const AboutBlock = () => {
    const [showExtra, setShowExtra] = useState<boolean>(false)
    return (
        <>
            <JsonLd<Article>
                item={{
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": "Обо мне",
                    "image": [
                        "https://rusudemy.com/me.jpeg",
                    ],
                    "datePublished": "2023-01-13T01:00:00+03:00",
                    "dateModified": "2023-01-13T01:00:00+03:00",
                    "author": [{
                        "@type": "Person",
                        "name": "Михаил Харитонов",
                        "url": "https://t.me/rus_udemy"
                    }]
                }}
            />
            <article className={`${styles.about}`}>
                <h1 className={`heading ${styles.aboutHeading}`}>Обо мне</h1>
                <div className={`${styles.aboutContent}`}>
                    <img src='/me.jpeg'
                         alt="RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов"
                         className={styles.aboutImage}
                         loading='eager'
                         width={265}
                    />
                    <div className={styles.aboutInfo}>
                        <p>
                            Друзья, привет! Давайте знакомиться! Меня зовут Михаил Харитонов, я &mdash; создатель сервиса&nbsp;
                            <Link href='/'>rusudemy.com</Link> и&nbsp;практикующий
                            <strong>Senior&nbsp;Frontend &nbsp;разработчик</strong> (Vue, React, TypeScript).
                        </p>
                        <ExtraText className={`${styles.extraText} ${showExtra && styles.visible}`}/>
                        <RippleButton
                            onClick={() => setShowExtra(!showExtra)}
                            className={`${headerStyles.headerButton} ${headerStyles.headerMainBtn} ${styles.aboutBtn}`}
                        >
                            {!showExtra && 'Читать далее'}
                            {showExtra && 'Скрыть'}
                        </RippleButton>
                    </div>
                </div>
            </article>
        </>
    );
};

export default AboutBlock;