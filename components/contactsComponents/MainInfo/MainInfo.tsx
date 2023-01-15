import React, {useState} from 'react';
import styles from './MainInfo.module.scss';
import Image from "next/image";
import reviewStyles from '../Reviews/Reviews.module.scss'
import type {contactLink} from "../ContactLinks";
import contactLinks from "../ContactLinks";
import useAnimation from "../../../hooks/useAnimation";
import AboutBlock from "../AboutBlock";

const MainInfo = () => {
    const [links, setLinks] = useState<contactLink[]>(contactLinks);
    const wrapRef = useAnimation<contactLink>(links, setLinks)
    return (
        <>
            <AboutBlock/>
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