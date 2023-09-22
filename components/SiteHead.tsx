import React from 'react';
import Head from "next/head";
import Script from "next/script";
import {Dataset, Organization} from "schema-dts";
import {JsonLd} from "react-schemaorg";
import {useRouter} from "next/router";

const SiteHead = () => {
    const {pathname} = useRouter();
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <title>RusUdemy - Udemy курсы | Udemy как купить из России | Udemy курсы как оплатить |</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="yandex-verification" content="d63dad1ef7418732"/>
                <meta name="robots" content="index, follow"/>
                <link rel="shortcut icon" type="image/png" href="/icons/icon-128x128.png"/>
                <link rel="icon" type="image/png" href="/icons/icon-128x128.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <meta data-rh="true" property="og:locale" content="ru_RU"/>
                <meta name="theme-color" content="#000212"/>
                <meta property="og:type" content="website"/>
                <meta name='description'
                      content='Udemy как купить? Udemy курсы как купить из России? Как оплатить Udemy как оплатить российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                <meta name='og:description'
                      content='Udemy как купить? Udemy курсы как купить из России?  Как оплатить Udemy как оплатить российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы'/>
                <meta name='apple-mobile-web-app-title'
                      content='Udemy для России | Udemy как купить из России | Udemy курсы как оплатить | RusUdemy'/>
                <meta name='og:site_name' property='og:site_name'
                      content='Udemy для России | Udemy как купить из России | Udemy курсы как оплатить | RusUdemy'/>
                <meta name='og:title' property='og:title'
                      content='Udemy для России | Udemy как купить из России | Udemy курсы как оплатить | RusUdemy'/>
                <meta property="og:image" content="/logo.jpg"/>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
                <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
                <link rel="canonical" href={`https://rusudemy.com${pathname}`}/>
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
                <JsonLd<Organization>
                    item={{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://rusudemy.com/",
                        "logo": "https://rusudemy.com/mainLogo.svg",
                        "brand": "RusUdemy",
                        "founder": "Михаил Харитонов",
                        "foundingDate": "2023-01-05T01:00:00+03:00",
                        "additionalType": "https://rusudemy.com/",
                        "description": "Udemy как купить? Udemy купить из России? Udemy курсы как оплатить Udemy как оплатить российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы",
                        "image": "https://rusudemy.com/mainLogo.svg"
                    }}
                />
                <JsonLd<Dataset>
                    item={{
                        "@context": "https://schema.org",
                        "@type": "Dataset",
                        "name": "Udemy для России | Udemy как купить из России | Udemy курсы как оплатить | RusUdemy",
                        "description": "Udemy как купить? Udemy купить из России? Как оплатить Udemy как оплатить российской картой? Санкции - не повод отказывать себе в качественном образовании! Наш сервис дает тебе возможность проходить любимые курсы и прокачивать скиллы",
                        "url": "https://rusudemy.com/",
                        "keywords": [
                            "Udemy как купить > Udemy купить из России > Udemy купить из России российской картой",
                            "Как оплатить Udemy > Как оплатить Udemy как оплатить российской картой > Как оплатить Udemy как оплатить российской картой МИР",
                            "Udemy > Udemy курсы > Udemy курсы из России"
                        ],
                        "isAccessibleForFree": true,
                        "creator": {
                            "@type": "Person",
                            "name": "Михаил Харитонов",
                            "url": "https://t.me/rus_udemy",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "telephone": "+7-925-516-1592",
                                "image": [
                                    "https://rusudemy.com/me.jpeg",
                                ],
                                "url": "https://t.me/rus_udemy"
                            }
                        },
                    }}
                />
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
        accurateTrackBounce:true,
        webvisor:true
   });
                  `}
            </Script>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFZLZ7KE6M" defer={true}
                    strategy='lazyOnload'/>
            <Script id="google-analytics" strategy="lazyOnload" defer={true}>
                {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZFZLZ7KE6M');
        `}
            </Script>
        </>
    );
};

export default SiteHead;