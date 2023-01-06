import type {AppProps} from 'next/app'
import Script from 'next/script'
import '../styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFZLZ7KE6M" strategy='lazyOnload'/>
        <Script id="google-analytics" strategy="lazyOnload">
          {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZFZLZ7KE6M');
        `}
        </Script>
      </>
  )
}
