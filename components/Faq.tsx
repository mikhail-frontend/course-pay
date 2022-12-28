import React from 'react';
import styles from './Faq.module.scss'

const Faq: React.FC<{}> = () => {
    return (
        <section className={`container`}>
            <h2 className={`heading ${styles.faqHeading}`}>Часто задаваемые вопросы</h2>
        </section>
    );
};

export default Faq;