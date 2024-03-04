import React from 'react';

import PageTemplate from "../../components/PageTemplate";
import Head from "next/head";
import {description, title, image, courseDescription, courses, bigDescription, shortTitle} from "../../helpers/entities/udemy-react/PageData";

const UdemyPython = () => {
    return (
        <>
            <Head>
                <title>Udemy React | Udemy React Redux | Udemy как купить</title>
                <meta name='apple-mobile-web-app-title'
                      content='Udemy React | Udemy React Redux | Udemy как купить'/>
                <meta name='og:title' property='og:title'
                      content='Udemy React | Udemy React Redux | Udemy как купить'/>
                <meta name='description'
                      content='RusUdemy - курсы  React на Udemy. React, Redux, react полный курс по react udemy -  Ваш путь к успешной карьере Курсы Udemy на русском. Санкции - не повод отказывать себе в качественном образовании!'/>
                <meta name='og:description'
                      content='RusUdemy - курсы  React на Udemy. React, Redux, react полный курс по react udemy -  Ваш путь к успешной карьере Курсы Udemy на русском. Санкции - не повод отказывать себе в качественном образовании!'/>

            </Head>

            <main className={`${''} container`}>
                <PageTemplate description={description}
                              customTitle={title}
                              image={image}
                              courseDescription={courseDescription}
                              maxWidth={775}
                              courses={courses}
                              bigDescription={bigDescription}
                              shortTitle={shortTitle}
                />

            </main>
        </>
    );
};

export default UdemyPython;