import React from 'react';
import Reviews from "../../components/Reviews/Reviews";
import ContactsBlock from "../../components/Contacts";
import PageTemplate from "../../components/PageTemplate";
import Head from "next/head";
import {description, title, image, courseDescription, courses, bigDescription} from "./entities/PageData";

const UdemyJavaScript = () => {
    return (
        <>
            <Head>
                <title>Udemy JavaScript | Udemy Иван Петриченко | Как купить курсы Udemy JavaScript</title>
                <meta name='apple-mobile-web-app-title'
                      content='Udemy JavaScript | Udemy Иван Петриченко | Как купить курсы Udemy JavaScript'/>
                <meta name='og:title' property='og:title'
                      content='Udemy JavaScript | Udemy Иван Петриченко | Как купить курсы Udemy JavaScript'/>
                <meta name='description'
                      content='RusUdemy - курсы JavaScript. Udemy Иван Петриченко и JavaScript - Ваш путь к успешной карьере . Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                <meta name='og:description'
                      content='RusUdemy - курсы JavaScript. Udemy Иван Петриченко и JavaScript - Ваш путь к успешной карьере . Udemy на русском.  Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>

            </Head>

            <main className={`${''} container`}>
                <PageTemplate description={description}
                              customTitle={title}
                              image={image}
                              courseDescription={courseDescription}
                              maxWidth={775}
                              courses={courses}
                              bigDescription={bigDescription}
                />

            </main>
        </>
    );
};

export default UdemyJavaScript;