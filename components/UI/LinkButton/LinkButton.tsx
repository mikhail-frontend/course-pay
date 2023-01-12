import React from 'react';
import RippleButton from "../RippledButton";
import Image from "next/image";
import styles from './LinkButton.module.scss'
type LinkButtonType = {
    to: string
    text: string
}
const LinkButton:React.FC<LinkButtonType> = ({text, to}) => {
    return (
            <RippleButton to={to} className={styles.linkButton}>
                {text}
                <Image src='/telegaSmall.svg' alt='RusUdemy. Udemy как купить' width={19} height={18} priority={false}/>
            </RippleButton>
    );
};

export default LinkButton;