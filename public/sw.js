if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>c(e,a),t={module:{uri:a},exports:r,require:o};s[a]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.svg",revision:"714942d8a8048c27d3854bfa38b576a5"},{url:"/2.svg",revision:"ab53f668fcea746d59b937672d8b9ef2"},{url:"/3.svg",revision:"190019ed377368d909d1f96761ec7eb6"},{url:"/_next/static/RuWHstStYKAbSnFokZB5f/_buildManifest.js",revision:"3cfa56b83cad6fc65b7a6134cb753fc8"},{url:"/_next/static/RuWHstStYKAbSnFokZB5f/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/929-0a1c91fece372900.js",revision:"0a1c91fece372900"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-6f2a6882974bcf77.js",revision:"6f2a6882974bcf77"},{url:"/_next/static/chunks/pages/_app-243a3749999b809e.js",revision:"243a3749999b809e"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/contacts-294bb7b39bbdf095.js",revision:"294bb7b39bbdf095"},{url:"/_next/static/chunks/pages/index-be84cb349c71b7f1.js",revision:"be84cb349c71b7f1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/3596ed83709cb47d.css",revision:"3596ed83709cb47d"},{url:"/_next/static/css/4f01edd9c9f393b4.css",revision:"4f01edd9c9f393b4"},{url:"/_next/static/css/941c81f5f5d116d7.css",revision:"941c81f5f5d116d7"},{url:"/alex.jpg",revision:"7d1a832d4e7f1cfa2c618606f3bc3d34"},{url:"/denis.jpg",revision:"709d0ee9599d6c01153fc3658590501c"},{url:"/favicon.ico",revision:"a501789e305930e5394f372dfb058159"},{url:"/fedor.jpg",revision:"f55868750f6cb40005ee4942bef5a4c1"},{url:"/icon1.png",revision:"24fb2a9dbaa0a7c68c723aab83417cca"},{url:"/icon2.png",revision:"8a4cb9f73eba59e6daabd4db4feb6fb4"},{url:"/icon3.png",revision:"9ee53679392fa9bbe2e2f538e50c3546"},{url:"/icons/icon-128x128.png",revision:"070c860fa736b662e6b29431ff4cba9b"},{url:"/icons/icon-144x144.png",revision:"6a5d1445345f1674925f9ce15a283bc2"},{url:"/icons/icon-152x152.png",revision:"43fae377420c1b2777d5a42915191b49"},{url:"/icons/icon-192x192.png",revision:"f438e2ef0b1a1609d0ffdef32de8db60"},{url:"/icons/icon-384x384.png",revision:"8323f1842ce42c5aa762d529701dc59d"},{url:"/icons/icon-48x48.png",revision:"024b3cabe3896a25e1312fa6eddec939"},{url:"/icons/icon-512x512.png",revision:"de4087e67252feb32014f523a43d79e5"},{url:"/icons/icon-72x72.png",revision:"e7f51f618bba8cc91e6b5e49efb8c291"},{url:"/icons/icon-96x96.png",revision:"cb59f59e15ecdcfc9ea0c56ff9cfc7d6"},{url:"/lighting.svg",revision:"99d5ad411a2540fe9667b6590ec466ba"},{url:"/logo.jpg",revision:"e462e65c321341686ce4bc428460f93b"},{url:"/logo.svg",revision:"57104cc6cd43f137e7834e97443028bb"},{url:"/mainLogo.svg",revision:"70bdeaf19319b175646a3ec5b5ef0f6d"},{url:"/manifest.json",revision:"fd20f0d9cfb3d4ee00ebdbd439a4d650"},{url:"/me.jpeg",revision:"8b72fd01892522e9b29e1d39a5bffb8b"},{url:"/mikhail.jpeg",revision:"2e2aeeaa23355763f146c3cb5cbc6e3c"},{url:"/robots.txt",revision:"d7b43352f6b86f1970a224d4062d6385"},{url:"/rss-feed.xml",revision:"a004eed8fb744f4f2b1c341448e1b985"},{url:"/rustam.jpg",revision:"e30a34089c69b39a0cd7c11e828afd1b"},{url:"/sashulya.jpeg",revision:"4d5dcff32ea6c968fa9af842b529590f"},{url:"/sergey.jpg",revision:"e9db519e25371b7ef49eb22716f875ec"},{url:"/sitemap.xml",revision:"f5cd403748e476ff0ef1accee9cbfeed"},{url:"/social-icons/email.svg",revision:"18264905df2ca6589f8dc13ab05035ec"},{url:"/social-icons/instagram.svg",revision:"2fa21f6fce030076be9d89dd85496a56"},{url:"/social-icons/phone.svg",revision:"421c31c98fd81a2430d9a62ad0a75bf2"},{url:"/social-icons/telegram.svg",revision:"919a6e225ffc16e8543738b5e4bd3694"},{url:"/social-icons/vk.svg",revision:"c3616da17470c036401ee6258f72cd3b"},{url:"/telegaSmall.svg",revision:"b7c658cb327a3e6679388f40975c6b6f"},{url:"/telegram.svg",revision:"894018a5c459b9c13087b11f9ff95d5c"},{url:"/umpa.jpg",revision:"24bdd8ae68987b44586fb8ff1ab7015f"},{url:"/user-default.svg",revision:"e2eec97760cfe5c13afb856477b26f24"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
