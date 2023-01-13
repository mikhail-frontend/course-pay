import React, {useState} from 'react';
import styles from './MainInfo.module.scss';
import Link from "next/link";
import Image from "next/image";
import reviewStyles from '../Reviews/Reviews.module.scss'
import ExtraText from "../ExtraText";
import type {contactLink} from "../ContactLinks";
import contactLinks from "../ContactLinks";
import useAnimation from "../../../hooks/useAnimation";


const MainInfo = () => {
    const [links, setLinks] = useState<contactLink[]>(contactLinks);
    const wrapRef = useAnimation<contactLink>(links, setLinks)
    return (
        <>
            <section className={`${styles.about}`}>
                <h1 className={`heading ${styles.aboutHeading}`}>Обо мне</h1>
                <div className={`${styles.aboutContent}`}>
                    <img src='/me.jpeg'
                         alt="RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов"
                         className={styles.aboutImage}
                         loading='eager'
                         width={300}
                         height={375}
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
                <ul className={styles.aboutSocials} ref={wrapRef}>
                    {links.map(link => {
                        return (
                            <li key={link.id} className={`${styles.aboutSocialsElement} ${link.animated && styles.active}`}>
                                {
                                    link.href
                                        ? <a href={link.href} rel='noreferrer' className={styles.aboutSocialItem}>
                                            <Image src={link.icon} width={45} height={45}
                                                   alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                                            <span dangerouslySetInnerHTML={{__html: link.text}}/>
                                        </a>
                                        : <span className={styles.aboutSocialItem}>
                                    <Image src={link.icon} width={45} height={45}
                                           alt='RusUdemy. Udemy как купить. Udemy российской картой. Михаил Харитонов'/>
                                   <span dangerouslySetInnerHTML={{__html: link.text}}/>
                                </span>
                                }
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    );
};

export default MainInfo;