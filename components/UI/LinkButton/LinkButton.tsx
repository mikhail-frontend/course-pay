import React from 'react';
import RippleButton from "../RippledButton";
import Image from "next/image";
import styles from './LinkButton.module.scss'
type LinkButtonType = {
    to: string
    text: string
    className?: string
}
const LinkButton:React.FC<LinkButtonType> = ({text, to, className = ''}) => {
    return (
            <RippleButton to={to} className={`${styles.linkButton} ${className}`}>
                {text}
                <Image src='/telegaSmall.svg' alt='RusUdemy. Udemy как купить' width={19} height={18} priority={false}/>
            </RippleButton>
    );
};

export default LinkButton;