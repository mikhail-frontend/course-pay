import React from 'react';
import Head from "next/head";
import Script from "next/script";

const SiteHead = () => {

        // @ts-ignore
    return (
        <>
                <Head>
                        <meta charSet="UTF-8"/>
                        <title>Udemy как купить</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <meta name="yandex-verification" content="d63dad1ef7418732" />
                        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                        <meta data-rh="true" property="og:locale" content="ru_RU"/>
                        <meta name="theme-color" content="#000212"/>
                        <meta property="og:type" content="website"/>
                        <meta name='description'
                              content='Udemy как купить? Udemy купить из России? Как оплатить Udemy российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                        <meta name='og:description'
                              content='Udemy как купить? Udemy купить из России?  Как оплатить Udemy российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                        <meta name='apple-mobile-web-app-title' content='Udemy как купить из России | Udemy как оплатить | RusUdemy'/>
                        <meta name='og:site_name' property='og:site_name' content='Udemy как купить из России | Udemy как оплатить | RusUdemy'/>
                        <meta name='og:title' property='og:title' content='Udemy как купить из России | Udemy как оплатить | RusUdemy'/>
                        <meta property="og:image" content="/logo.jpg"/>
                        <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
                        <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
                        <link rel="canonical" href="https://rusudemy.com/"/>
                        <link rel="manifest" href="/manifest.json"/>
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                        <meta name="theme-color" content="#000212"/>
                        <link rel="apple-touch-icon" href="/icons/icon-512x512.png"/>
                        <link rel="apple-touch-icon" href="/icons/icon-48x48.png" sizes='48x48'/>
                        <link rel="apple-touch-icon" href="/icons/icon-72x72.png" sizes='72x72'/>
                        <link rel="apple-touch-icon" href="/icons/icon-96x96.png" sizes='96x96'/>
                        <link rel="apple-touch-icon" href="/icons/icon-144x144.png" sizes='144x144'/>
                        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" sizes='152x152'/>
                        <link rel="apple-touch-icon" href="/icons/icon-384x384.png" sizes='192x192'/>
                        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" sizes='512x512'/>

                </Head>
                <Script type="text/javascript" strategy='lazyOnload' id='yandex'>
                        {`
                                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(91959294, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
                });
                        `}
                </Script>
        </>
    );
};

export default SiteHead;