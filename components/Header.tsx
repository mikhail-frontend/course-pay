import React, {useState} from 'react';
import Logo from "./Logo";
import RippleButton from "./RippledButton";
import styles from './Header.module.scss';

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
            blockPath: 'telegram',
            isButton: true
        },
    ]);
    const buttonClickHandler = (blockPath:string) => {
        if(!blockPath) return;
        const element:HTMLElement|null = document.getElementById(blockPath);
        if(!element) return;
        const coords:DOMRect = element.getBoundingClientRect()
        const offset = 100;
        window.scrollTo({
            top: coords.top + offset,
            left: 100,
            behavior: 'smooth'
        })
    }
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} container`}>
                <Logo className={styles.headerLogo}/>
                <div className="header-links">
                    {links.map(link => {
                        return (
                            <RippleButton
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