import React, {useState} from "react";
import About from "../About";
import styles from './styles/pageTemplate.module.scss';
import aboutStyles from '../UdemyAbout/UdemyAbout.module.scss';
import headerStyles from '../Header/Header.module.scss'
import DescriptionLine from "../UI/DescriptionLine";
import type {CourseType} from "../../helpers/entities/udemy-javascript/PageData";
import RippleButton from "../UI/RippledButton";
import useAnimation from "../../hooks/useAnimation";
import Reviews from "../Reviews/Reviews";
import ContactsBlock from "../Contacts";


type PageTemplateProps = {
    courses: CourseType[]
    customTitle: string
    description: string
    image: string
    courseDescription: string
    maxWidth?: number
    bigDescription: string
    titleClass?: string
    shortTitle?: string
}
const PageTemplate: React.FC<PageTemplateProps> = ({
                                                       customTitle,
                                                       description,
                                                       image,
                                                       maxWidth,
                                                       courseDescription,
                                                       courses,
                                                       bigDescription,
                                                       titleClass,
                                                       shortTitle = 'Udemy JS'
                                                   }) => {
    const [coursesList, setCoursesList] = useState<CourseType[]>(courses);

    const wrapRef = useAnimation<CourseType>(coursesList, setCoursesList);

    return (
        <>
            <About customTitle={customTitle}
                   description={description}
                   maxWidth={maxWidth || 775}
                   titleClass={titleClass || ''}
            />
            <div className={styles.imageSection}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={customTitle} title={customTitle} className={styles.mainImage}/>
            </div>
            <section className={styles.coursesSection}>
                <DescriptionLine text='И много других курсов' color='#40C8E0'/>
                <div className={aboutStyles.udemyAboutMain}>
                    <div className={`${aboutStyles.udemyAboutHeading} heading`}>
                        Курсы <h2> {shortTitle} </h2>
                    </div>
                    <p className={aboutStyles.udemyAboutText}
                       dangerouslySetInnerHTML={{__html: courseDescription || ''}}/>
                </div>

                <ul className={styles.coursesList} ref={wrapRef}>
                    {coursesList.map(item => {
                        return (
                            <li key={item.id}
                                className={`${styles.courseItem} ${item.animated ? styles.active : ''}`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image}
                                     alt={item.title}
                                     title={item.title}
                                     loading={'lazy'}
                                     className={styles.courseItemImage}
                                />
                                <h3 className={styles.courseItemTitle}>{item.title}</h3>
                                <RippleButton
                                    to={item.link}
                                    target={'_blank'}
                                    className={`${headerStyles.headerButton}  ${headerStyles.headerMainBtn || ''}`}>
                                    Ознакомиться
                                </RippleButton>
                            </li>)
                    })}
                </ul>
            </section>
            <Reviews/>
            <ContactsBlock text='Я всегда доступен в Telegram'/>
            <section className={styles.descriptionSection} dangerouslySetInnerHTML={{__html: bigDescription}}/>

        </>
    )
}
export default PageTemplate;