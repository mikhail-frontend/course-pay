import React, {useState} from 'react';
import Logo from "../Logo";
import RippleButton from "../UI/RippledButton";
import styles from './Header.module.scss';
import useMobile from "../../hooks/useMobile";
import { useRouter } from 'next/router';

type Link = {
    id: number | string
    text: string
    blockPath: string
    isButton?: boolean
    link: string
}

const Header = () => {
    const router = useRouter();
    const [links] = useState<Link[]>([
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
            id: '5',
            text: 'Контакты и отзывы',
            blockPath: '#',
            isButton: true,
            link: '/contacts'
        },
        {
            id: '4',
            text: 'Задать вопрос',
            blockPath: 'contacts',
            isButton: true,
            link: '/'
        },
    ]);

    const isMobile = useMobile();

    const scrollToElement = (blockPath:string) => {
        const element: HTMLElement | null = document.getElementById(blockPath);
        if (!element) return;
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    const buttonClickHandler = (link: string, blockPath: string) => {
        if (!blockPath) return;
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
                <Logo className={styles.headerLogo} onClick={() => buttonClickHandler('/', 'about')}/>
                <div className="header-links">
                    {links.map(link => {
                        return (
                            !isMobile ? <RippleButton
                                key={link.id}
                                onClick={() => buttonClickHandler(link.link, link.blockPath)}
                                className={`${styles.headerButton}  ${link.isButton && styles.headerMainBtn}`}>
                                {link.text}
                            </RippleButton> : isMobile && link.isButton && <RippleButton
                                key={link.id}
                                onClick={() => buttonClickHandler(link.link, link.blockPath)}
                                className={`${styles.headerButton}  ${link.isButton && styles.headerMainBtn}`}>
                                {link.text}
                            </RippleButton>
                        )
                    })}
                </div>
            </div>
        </header>
    );

}

export default Header;