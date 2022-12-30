import React from 'react';
import Logo from "./Logo";
import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Logo/>
            </div>
        </footer>
    );
};

export default Footer;