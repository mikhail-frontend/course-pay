import React from 'react';
import RippleButton from "../UI/RippledButton";
import styles from './About.module.scss'
type AboutType = {children?: React.ReactNode, customTitle?: string, description?: string, maxWidth?: number }
const About:React.FC<AboutType> = ({customTitle, description, maxWidth}) => {


    return (
        <section className={`${styles.about} container`} id='about'>
            <div className={`${styles.aboutHeading}`} dangerouslySetInnerHTML={{__html: customTitle || ''}}/>
            <div className={`${styles.aboutDescription}`}
                 dangerouslySetInnerHTML={{__html: description || ''}}
                 style={{
                     maxWidth: maxWidth ? `${maxWidth}px` : `500px`
                 }}
            />
            <RippleButton className={styles.aboutBtn} to='https://www.udemy.com/' target='_blank'>
                Перейти на сайт Udemy
            </RippleButton>
        </section>
    );
};

export default About;