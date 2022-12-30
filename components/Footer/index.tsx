import React from 'react';
import Logo from "../Logo";
import styles from './Footer.module.scss'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Logo onClick={scrollToTop} className={styles.footerLogo}/>
            </div>
        </footer>
    );
};

export default Footer;