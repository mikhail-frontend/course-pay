import React, {useRef, useState} from "react";
import styles from './Accordion.module.scss'
import RippleButton from "./RippledButton";
export type AccordionType = {
    id: number
    content: string
    title: string
    className?: string
    animated?: boolean
    children?: React.ReactNode
}
const Accordion:React.FC<AccordionType> = ({id, className = '', content, title}) => {

    const [heightState, setHeightState]:[string, React.Dispatch<React.SetStateAction<string>>] = useState("0px");

    const [activeTab, setActiveTab]:[number, React.Dispatch<React.SetStateAction<number>>] = useState(-1);

    const isActive = activeTab === id;

    const ref = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setActiveTab(() => activeTab === id ? -1 : id);
        setHeightState(() => isActive ? "0px" : `${ref.current!.scrollHeight}px`);
    }

    return (
        <div className={`${styles.accordionSection} ${isActive ? styles.isActive : ''} ${className}`}>
            <RippleButton className={`${styles.accordion} ${isActive ? styles.active : ""}`} onClick={toggleAccordion}>
                <h3 className={styles.accordion_title}>{title}</h3>
            </RippleButton>
            <div
                ref={ref}
                style={{maxHeight: `${heightState}`}}
                className={styles.accordion_content}>
                <div
                    className={styles.accordion_text}
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </div>
        </div>
    );
};

export default Accordion;