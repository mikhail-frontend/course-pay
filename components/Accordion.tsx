import React, {useRef, useState} from "react";
import styles from './Accordion.module.scss'
export type AccordionType = {
    curIndex: number
    content: string
    title: string
    children?: React.ReactNode
}
const Accordion:React.FC<AccordionType> = ({curIndex, content, title}) => {
    // const [setActive, seActiveState] = useState("");
    const [heightState, setHeightState] = useState("0px");

    const [activeTab, setActiveTab] = useState(-1);

    const isActive = activeTab === curIndex;

    const ref = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setActiveTab(prev => activeTab === curIndex ? -1 : curIndex);

        setHeightState(() => isActive ? "0px" : `${ref.current!.scrollHeight}px`);
    }

    return (
        <div className={styles['accordion_section']} aria-expanded={isActive}>
            <button className={`${styles.accordion} ${isActive ? styles.active : ""}`} onClick={toggleAccordion}>
                <h4 className={styles.accordion_title}>{title}</h4>
            </button>
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