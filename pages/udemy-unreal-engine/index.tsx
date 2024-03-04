import React from 'react';

import PageTemplate from "../../components/PageTemplate";
import Head from "next/head";
import {
    bigDescription,
    courseDescription,
    courses,
    description,
    image,
    title,
    shortTitle
} from "../../helpers/entities/udemy-unreal-engine/PageData";

const UdemyPython = () => {
    return (
        <>
            <Head>
                <title>Udemy Unreal | Udemy Udemy Engine | Udemy как купить</title>
                <meta name='apple-mobile-web-app-title'
                      content='Udemy Unreal | Udemy Unreal Engine | Udemy как купить'/>
                <meta name='og:title' property='og:title'
                      content='Udemy Unreal | Udemy Unreal Engine | Udemy как купить'/>
                <meta name='description'
                      content='RusUdemy - курсы  Unreal Engine на Udemy. Unreal Engine 5 C++ The Ultimate Game Developer Course   Ваш путь к успешной карьере Курсы Udemy на русском. Санкции - не повод отказывать себе в качественном образовании!'/>
                <meta name='og:description'
                      content='RusUdemy - курсы  Unreal Engine на Udemy. Unreal Engine 5 C++ The Ultimate Game Developer Course   Ваш путь к успешной карьере Курсы Udemy на русском. Санкции - не повод отказывать себе в качественном образовании!'/>

            </Head>

            <main className={`${''} container`}>
                <PageTemplate description={description}
                              customTitle={title}
                              titleClass={'unreal-t'}
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