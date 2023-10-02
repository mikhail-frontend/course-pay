import React from "react";
import About from "../About";
import styles from './styles/pageTemplate.module.scss'

type PageTemplateProps = {
    courses?: any[],
    customTitle?: string,
    description?: string,
    image: string,
    maxWidth?: number
}
const PageTemplate: React.FC<PageTemplateProps> = ({customTitle, description, image, maxWidth}) => {
    return (
        <>
            <About customTitle={customTitle}
                   description={description}
                   maxWidth={maxWidth || 775}
            />
            <section className={styles.imageSection}>
                <img src={image} alt={customTitle} title={customTitle} className={styles.mainImage}/>
            </section>

        </>
    )
}
export default PageTemplate;