import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Header from "../components/Header";
import About from "../components/About";
import Cards from "../components/Cards";
export default function Home() {
  return (
    <>
        <Head>
            <title>Udemy для России</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta data-rh="true" property="og:locale" content="ru_RU"/>
            <meta name="theme-color" content="#000212"/>
            <meta property="og:type" content="website" />
            <meta name='description' content='Курсы Udemy для России. Udemy купить в России. Как оплатить Udemy российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
            <meta name='og:description' content='Курсы Udemy для России. Udemy купить в России. Как оплатить Udemy российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
            <meta name='apple-mobile-web-app-title' content='Udemy для России'/>
            <meta name='og:site_name' property='og:site_name' content='Udemy для России'/>
            <meta name='og:title' property='og:title' content='Udemy для России'/>
            <meta name='keywords' content='Udemy для России, Udemy купить России, Udemy российской картой, IT курсы, Оплатить Udemy российской картой'/>
            <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
            <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
            <meta charSet="UTF-8"/>
        </Head>
        <Header/>
        <About/>
        <Cards/>
    </>
  )
}
export const getServerSideProps: GetServerSideProps<{}> = async ({res,}) => {
    res.setHeader(
        'Cache-Control',
        'public, max-age=31536000, immutable'
    )

    return {
        props: {}
    }
}