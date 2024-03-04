import React from 'react';

import PageTemplate from "../../components/PageTemplate";
import Head from "next/head";
import {description, title, image, courseDescription, courses, bigDescription, shortTitle} from "../../helpers/entities/udemy-python/PageData";

const UdemyPython = () => {
    return (
        <>
            <Head>
                <title>Udemy Python | Udemy курсы Python | Udemy как купить</title>
                <meta name='apple-mobile-web-app-title'
                      content='Udemy Python | Udemy курсы Python | Udemy как купить'/>
                <meta name='og:title' property='og:title'
                      content='Udemy Python | Udemy курсы Python | Udemy как купить'/>
                <meta name='description'
                      content='RusUdemy - курсы  Python на Udemy. Ваш путь к успешной карьере. Курсы Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                <meta name='og:description'
                      content='RusUdemy - курсы  Python на Udemy. Ваш путь к успешной карьере. Курсы Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>

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