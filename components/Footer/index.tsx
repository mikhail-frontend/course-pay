import React from 'react';
import Logo from "../Logo";
import Link from 'next/link';
import { useRouter } from 'next/router';


import styles from './Footer.module.scss'
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    const router = useRouter();
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <Logo onClick={scrollToTop} className={styles.footerLogo}/>
                <nav className={styles.footerNav}>
                    <Link href='/udemy-javascript'
                          className={`${styles.footerNavItem} ${router.pathname.includes('javascript') ? styles.active : ''}`}>
                        Udemy JavaScript</Link>
                    <Link href='/udemy-python'
                          className={`${styles.footerNavItem} ${router.pathname.includes('python') ? styles.active : ''}`}>
                        Udemy Python</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;