import React from 'react';
import RippleButton from "../UI/RippledButton";
import styles from './About.module.scss'
// import useMobile from "../../hooks/useMobile";
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
            <h1 className={`${styles.aboutHeading}`}>
                Купим любые <span>курсы
                Udemy</span>  за&nbsp;вас
            </h1>
            <p className={`${styles.aboutDescription}`}>
                Оплачивай наш сервис покупки курсов на&nbsp;Udemy российской&nbsp;картой без&nbsp;ограничений.
            </p>
            <RippleButton className={styles.aboutBtn} onClick={openUdemyLink}>Выбрать  курс</RippleButton>
        </section>
    );
};

export default About;