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
        <div className={`${styles.pulsingButtonWrap} ${styles.buttonPulse}`}>
            <span className={styles.pulsing}/>
            <RippleButton to={to} className={`${styles.linkButton} ${className}`}>
                {text}
                <Image src='/telegaSmall.svg'
                       alt="RusUdemy. Udemy как купить. Udemy российской картой."
                       title="RusUdemy. Udemy как купить. Udemy российской картой." width={19} height={18} priority={false}/>
            </RippleButton>
        </div>
    );
};

export default LinkButton;