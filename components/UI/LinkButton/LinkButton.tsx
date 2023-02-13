import React from 'react';
import RippleButton from "../RippledButton";
import Image from "next/image";
import styles from './LinkButton.module.scss'
type LinkButtonType = {
    to: string
    text: string
    className?: string
    target?: string
    wrapClass?: string
}
const LinkButton:React.FC<LinkButtonType> = ({text, to, className = '', target, wrapClass}) => {
    return (
        <div className={`${styles.pulsingButtonWrap} ${styles.buttonPulse} ${wrapClass || ''}`}>
            <span className={styles.pulsing}/>
            <RippleButton to={to} className={`${styles.linkButton} ${className}`} target={target}>
                {text}
                <Image src='/telegaSmall.svg'
                       alt="RusUdemy. Udemy как купить. Udemy российской картой."
                       title="RusUdemy. Udemy как купить. Udemy российской картой." width={19} height={18} priority={false}/>
            </RippleButton>
        </div>
    );
};

export default LinkButton;