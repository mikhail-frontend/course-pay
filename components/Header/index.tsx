import React, { useState } from 'react';
import Logo from "../Logo";
import RippleButton from "../UI/RippledButton";
import styles from './Header.module.scss';
import useMobile from "../../hooks/useMobile";
type Link = {
    id: number | string,
    text: string,
    blockPath: string,
    isButton?: boolean
}

const Header: React.FC<Record<string, string>> = React.memo(() => {
    const [links]: [Link[], React.Dispatch<React.SetStateAction<any>>] = useState([
        {
            id: '1',
            text: 'о Udemy',
            blockPath: 'udemyAbout'
        },
        {
            id: '2',
            text: 'как купить ?',
            blockPath: 'howBuy'
        },
        {
            id: '3',
            text: 'FAQ',
            blockPath: 'faq'
        },
        {
            id: '4',
            text: 'Задать вопрос',
            blockPath: 'contacts',
            isButton: true
        },
    ]);

    const isMobile = useMobile();

    const buttonClickHandler = (blockPath: string) => {
        if (!blockPath) return;
        const element: HTMLElement | null = document.getElementById(blockPath);
        if (!element) return;
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    return (
        <header className={styles.header} >
            <div className={`${styles.headerContainer} container`}>
                <Logo className={styles.headerLogo} onClick={() => buttonClickHandler('about')}/>
                <div className="header-links">
                    {links.map(link => {
                        return (
                            !isMobile ? <RippleButton
                                key={link.id}
                                onClick={() => buttonClickHandler(link.blockPath)}
                                className={`${styles.headerButton}  ${link.isButton && styles.headerMainBtn}`}>
                                {link.text}
                            </RippleButton> : isMobile && link.isButton && <RippleButton
                                key={link.id}
                                onClick={() => buttonClickHandler(link.blockPath)}
                                className={`${styles.headerButton}  ${link.isButton && styles.headerMainBtn}`}>
                                {link.text}
                            </RippleButton>
                        )
                    })}
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header'

export default Header;