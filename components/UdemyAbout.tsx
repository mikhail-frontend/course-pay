import React from 'react';
import styles from './UdemyAbout.module.scss'
const UdemyAbout = () => {
    return (
        <section className={`${styles.udemyAbout} container`} id='udemyAbout'>
            <div className={styles.udemyAboutMain}>
                <h2 className={`${styles.udemyAboutHeading} heading`}>
                    Udemy <span>международный проект</span>
                </h2>
                <p className={styles.udemyAboutText}>
                    Ведущие компании пользуются курсами Udemy, чтобы поддерживать актуальность навыков своих сотрудников.
                </p>
            </div>
            <div className={styles.udemyBlocks}>
                <div className={styles.udemyBlock}>
                    <h3 className={styles.udemyBlockTitle}>на 70% дешевле</h3>
                    <p className={styles.udemyBlockText}>чем у популярных российских курсов</p>
                </div>
                <div className={styles.udemyBlock}>
                    <h3 className={styles.udemyBlockTitle}>Сертификат</h3>
                    <p className={styles.udemyBlockText}>получите международный сертификат</p>
                </div>
                <div className={styles.udemyBlock}>
                    <h3 className={styles.udemyBlockTitle}>Настоящие эксперты</h3>
                    <p className={styles.udemyBlockText}>выбирайте курсы от экспертов с реальным опытом</p>
                </div>
            </div>
        </section>
    );
};

export default UdemyAbout;