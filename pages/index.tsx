import Head from 'next/head'
import Header from "../components/Header";
import About from "../components/About";
import Cards from "../components/Cards";
import UdemyAbout from "../components/UdemyAbout";
import DescriptionLine from "../components/UI/DescriptionLine";
import HowBuy from "../components/HowBuy";
import Faq from "../components/Faq";
import Contacts from "../components/Contacts";
import React from "react";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
        <Head>
            <meta charSet="UTF-8"/>
            <title>Udemy для России</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preload" href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap' as="font" type="font/woff2" crossOrigin={''}/>
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
            <link rel="canonical" href="https://course-pay-1ac3e.web.app/"/>
            <link rel="manifest" href="/manifest.json" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000212" />
            <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
            <link rel="apple-touch-icon" href="/icons/icon-48x48.png" sizes='48x48'/>
            <link rel="apple-touch-icon" href="/icons/icon-72x72.png" sizes='72x72'/>
            <link rel="apple-touch-icon" href="/icons/icon-96x96.png" sizes='96x96'/>
            <link rel="apple-touch-icon" href="/icons/icon-144x144.png" sizes='144x144'/>
            <link rel="apple-touch-icon" href="/icons/icon-152x152.png" sizes='152x152'/>
            <link rel="apple-touch-icon" href="/icons/icon-384x384.png" sizes='192x192'/>
            <link rel="apple-touch-icon" href="/icons/icon-512x512.png" sizes='512x512'/>
        </Head>
        <Header/>
        <About/>
        <Cards/>
        <DescriptionLine text='Почему Udemy' color='#40C8E0'/>
        <UdemyAbout/>
        <DescriptionLine text='Шаги оплаты' color='#B59AFF'/>
        <HowBuy/>
        <Faq/>
        <Contacts/>
        <Footer/>
    </>
  )
}
