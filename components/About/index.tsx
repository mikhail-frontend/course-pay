import React from 'react';
import RippleButton from "../UI/RippledButton";
import styles from './About.module.scss'
type AboutType = {children?: React.ReactNode}
const About:React.FC<AboutType> = () => {
    const openUdemyLink = () => {
        window.open('https://www.udemy.com/')
    }

    return (
        <section className={`${styles.about} container`} id='about'>
            {/*<div className={styles.aboutLabel}>*/}
            {/*    комиссия за покупку курса от 20-30 % <span>→</span>*/}
            {/*</div>*/}
            <div className={`${styles.aboutHeading}`}>
                Купим  <h1>курсы
                Udemy</h1>  за&nbsp;вас
            </div>
            <p className={`${styles.aboutDescription}`}>
                Наш&nbsp;сервис позволяет легко покупать курсы на&nbsp;Udemy с&nbsp;российской карты
            </p>
            <RippleButton className={styles.aboutBtn} onClick={openUdemyLink}>Перейти на сайт Udemy</RippleButton>
        </section>
    );
};

export default About;