import React, {useState} from 'react';
import {LinksList} from "../../Header";
import {Link} from "../../Header";
type BurgerMenuType = {
    onClick: (link: string, blockPath: string) => void
}
const BurgerMenu:React.FC<BurgerMenuType> = ({onClick}) => {
    const [links] = useState<Link[]>(LinksList.filter(link => !link.isButton));
    const [isActive, setIsActive] = useState(false);
    const toggleMenu  = () => {
        setIsActive(prev => !prev);
        if(!isActive) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.removeAttribute('style');
            document.body.removeAttribute('style')
        }
    }
    return (
        <>
            <div className={`menu-bg ${isActive ? 'fs' : ''}`}>
                <div className={`menu-items ${isActive ? 'fs' : ''}`} onClick={toggleMenu}>
                    {links.map(link => {
                        return <div
                            onClick={() => onClick(link.link, link.blockPath)}
                            key={link.id}>{link.text}</div>
                    })}
                </div>
            </div>
            <div className={`menu-burger ${isActive ? 'fs' : ''}`} onClick={toggleMenu}>{!isActive ? '☰' : '✕'}</div>

        </>
    );
};

export default BurgerMenu;