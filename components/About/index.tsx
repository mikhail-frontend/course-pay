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
            <div className={`${styles.aboutDescription}`}>
                Наш&nbsp;сервис позволяет легко <h2> оплатить&nbsp;Udemy</h2> c российской карты
            </div>
            <RippleButton className={styles.aboutBtn} onClick={openUdemyLink}>Перейти на сайт Udemy</RippleButton>
        </section>
    );
};

export default About;