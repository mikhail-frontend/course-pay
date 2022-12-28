import React, {useCallback} from 'react';
import RippleButton from "./RippledButton";
import styles from './About.module.scss'
type AboutType = {children?: React.ReactNode}
const About:React.FC<AboutType> = () => {
    const openUdemyLink = useCallback(() => {
        window.open('https://www.udemy.com/')
    }, [])
    return (
        <section className={`${styles.about} container`}>
            <div className={styles.aboutLabel}>
                комиссия за покупку курса от 20-30 % <span>→</span>
            </div>
            <h1 className={styles.aboutHeading}>
                Купим любые <span>курсы
                Udemy</span>  за вас.
            </h1>
            <p className={styles.aboutDescription}>
                Оплачивай наш сервис покупки курсов на Udemy российской картой без ограничений.
            </p>
            <RippleButton className={styles.aboutBtn} onClick={openUdemyLink}>Выбрать  курс</RippleButton>
        </section>
    );
};

export default About;