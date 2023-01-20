import React, {useState} from 'react';
import Logo from "../Logo";
import RippleButton from "../UI/RippledButton";
import styles from './Header.module.scss';
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import {useRouter} from 'next/router';
import useMobile from "../../hooks/useMobile";
export type Link = {
    id: number | string
    text: string
    blockPath: string
    isButton?: boolean
    link: string
}

export const LinksList:Link[] = [
    {
        id: '1',
        text: 'о Udemy',
        blockPath: 'udemyAbout',
        link: '/'
    },
    {
        id: '2',
        text: 'Как купить ?',
        blockPath: 'howBuy',
        link: '/'
    },
    {
        id: '3',
        text: 'FAQ',
        blockPath: 'faq',
        link: '/'
    },
    {
        id: '4',
        text: 'Отзывы',
        blockPath: 'reviews',
        link: '/'
    },
    {
        id: '5',
        text: 'Контакты',
        blockPath: '#',
        link: '/contacts'
    },
    {
        id: '6',
        text: 'Задать вопрос',
        blockPath: 'contacts',
        isButton: true,
        link: '/'
    },
];
const Header = () => {
    const router = useRouter();
    const [links] = useState<Link[]>(LinksList);
    const isMobile = useMobile();

    const scrollToElement = (blockPath:string) => {
        if(isMobile) {
            const element: HTMLElement | null = document.getElementById(blockPath);
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            if (!element) return;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            const element: HTMLElement | null = document.getElementById(blockPath);
            if (!element) return;
            element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        }

    }

    const buttonClickHandler = (link: string, blockPath: string, event:React.MouseEvent<HTMLElement>) => {
        if (!blockPath) return;
        if(event) {
            event.preventDefault();
        }
        const {pathname} = router;
        if (pathname !== link) {
            router.push(link).then(() => {
                scrollToElement(blockPath)
            })
        }
        scrollToElement(blockPath)
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} container`}>
                <Logo className={styles.headerLogo} onClick={(event: React.MouseEvent<HTMLImageElement>) => buttonClickHandler('/', 'about', event)}/>
                <div className={styles['header-links']}>
                    {links.map(link => {
                        return (
                            <RippleButton
                                key={link.id}
                                to={link.link}
                                onClick={(event) => buttonClickHandler(link.link, link.blockPath, event)}
                                className={`${styles.headerButton}  ${link.isButton && styles.headerMainBtn || ''}`}>
                                {link.text}
                            </RippleButton>
                        )
                    })}
                </div>
                <BurgerMenu onClick={buttonClickHandler}/>
            </div>
        </header>
    );

}

export default Header;