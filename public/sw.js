if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>s(e,n),f={module:{uri:n},exports:r,require:o};i[n]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.svg",revision:"714942d8a8048c27d3854bfa38b576a5"},{url:"/2.svg",revision:"ab53f668fcea746d59b937672d8b9ef2"},{url:"/3.svg",revision:"190019ed377368d909d1f96761ec7eb6"},{url:"/_next/static/1cKVMHkL9N63vYBDTRzle/_buildManifest.js",revision:"517d096e61b836f4c50da0403583cc50"},{url:"/_next/static/1cKVMHkL9N63vYBDTRzle/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/875-e73b0b2d68303866.js",revision:"e73b0b2d68303866"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-6f2a6882974bcf77.js",revision:"6f2a6882974bcf77"},{url:"/_next/static/chunks/pages/_app-2d8b08e1de311610.js",revision:"2d8b08e1de311610"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/contacts-f96e60444b5d7ad5.js",revision:"f96e60444b5d7ad5"},{url:"/_next/static/chunks/pages/index-2ac645241af9a68d.js",revision:"2ac645241af9a68d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/655fc6c80f0943ea.css",revision:"655fc6c80f0943ea"},{url:"/_next/static/css/6dc659bf4f5607b3.css",revision:"6dc659bf4f5607b3"},{url:"/_next/static/css/925696fa0bd5f9ad.css",revision:"925696fa0bd5f9ad"},{url:"/alex.jpg",revision:"3586d3b5174dc619035d0be1358f3239"},{url:"/alexey.jpg",revision:"9b3ef0a892ebfe3d5f3a5d675342214d"},{url:"/andrey.jpg",revision:"8988f0738cb195de86d7fb237185b107"},{url:"/denis.jpg",revision:"709d0ee9599d6c01153fc3658590501c"},{url:"/dmiitriy.jpg",revision:"fa6a9151b11abac3c24172c3e7e6510c"},{url:"/dmitriy.jpeg",revision:"447a041b02271f31cf9b652172b4eacd"},{url:"/dmitriy.jpg",revision:"7cb84c8ee522689fb4123f4afe2da263"},{url:"/dmitriy2.jpg",revision:"3d357bed5075669e6c71d1c93ed1b785"},{url:"/ekaterina.jpg",revision:"f8b01b2d48aeb17adbbededabc7ff670"},{url:"/elizabeth.jpg",revision:"1ea14f01f495787fc1429a4433df05d1"},{url:"/endo.jpg",revision:"5b9447efd6defa39e6dce2ce6314238a"},{url:"/favicon.ico",revision:"a501789e305930e5394f372dfb058159"},{url:"/fedor.jpg",revision:"b9415513dd45f2a23d8c65418bd5e38f"},{url:"/icon1.png",revision:"24fb2a9dbaa0a7c68c723aab83417cca"},{url:"/icon2.png",revision:"8a4cb9f73eba59e6daabd4db4feb6fb4"},{url:"/icon3.png",revision:"9ee53679392fa9bbe2e2f538e50c3546"},{url:"/icons/icon-128x128.png",revision:"070c860fa736b662e6b29431ff4cba9b"},{url:"/icons/icon-144x144.png",revision:"6a5d1445345f1674925f9ce15a283bc2"},{url:"/icons/icon-152x152.png",revision:"43fae377420c1b2777d5a42915191b49"},{url:"/icons/icon-192x192.png",revision:"f438e2ef0b1a1609d0ffdef32de8db60"},{url:"/icons/icon-384x384.png",revision:"8323f1842ce42c5aa762d529701dc59d"},{url:"/icons/icon-48x48.png",revision:"024b3cabe3896a25e1312fa6eddec939"},{url:"/icons/icon-512x512.png",revision:"de4087e67252feb32014f523a43d79e5"},{url:"/icons/icon-72x72.png",revision:"e7f51f618bba8cc91e6b5e49efb8c291"},{url:"/icons/icon-96x96.png",revision:"cb59f59e15ecdcfc9ea0c56ff9cfc7d6"},{url:"/igoryan.jpg",revision:"3e6c4181978dd9bfc0a6440d31cc29e3"},{url:"/ksenia.jpeg",revision:"be3d970f9289d9f87db0e216d0b5c2e2"},{url:"/ksenia.jpg",revision:"16bee305e25c9d03cc101e9422e70cc5"},{url:"/lighting.svg",revision:"99d5ad411a2540fe9667b6590ec466ba"},{url:"/logo.jpg",revision:"e462e65c321341686ce4bc428460f93b"},{url:"/logo.svg",revision:"57104cc6cd43f137e7834e97443028bb"},{url:"/mainLogo.svg",revision:"70bdeaf19319b175646a3ec5b5ef0f6d"},{url:"/manifest.json",revision:"fd20f0d9cfb3d4ee00ebdbd439a4d650"},{url:"/maxim.jpg",revision:"a75d70c00afb6935be9ab65a459d10b8"},{url:"/me.jpeg",revision:"8b72fd01892522e9b29e1d39a5bffb8b"},{url:"/mikhail.jpeg",revision:"2e2aeeaa23355763f146c3cb5cbc6e3c"},{url:"/mikhail.jpg",revision:"099a39b0de9b733a81f2c6e6c3363ce1"},{url:"/nikita.jpg",revision:"c377d315e7b631973561b5360493804f"},{url:"/olga.jpg",revision:"ca550492cf848aeae1b71385e93ae215"},{url:"/robots.txt",revision:"d7b43352f6b86f1970a224d4062d6385"},{url:"/rss-feed.xml",revision:"a004eed8fb744f4f2b1c341448e1b985"},{url:"/rustam.jpg",revision:"b29d31f3851ba1db55ddec8d0999e25a"},{url:"/sashulya.jpeg",revision:"4d5dcff32ea6c968fa9af842b529590f"},{url:"/sergey.jpg",revision:"0946a3b3f8c016ec829c5433e73b8cfb"},{url:"/sitemap.xml",revision:"f5cd403748e476ff0ef1accee9cbfeed"},{url:"/social-icons/email.svg",revision:"18264905df2ca6589f8dc13ab05035ec"},{url:"/social-icons/instagram.svg",revision:"2fa21f6fce030076be9d89dd85496a56"},{url:"/social-icons/phone.svg",revision:"421c31c98fd81a2430d9a62ad0a75bf2"},{url:"/social-icons/telegram.svg",revision:"919a6e225ffc16e8543738b5e4bd3694"},{url:"/social-icons/vk.svg",revision:"c3616da17470c036401ee6258f72cd3b"},{url:"/sultan.jpg",revision:"61515767515c995c5033fd762fd7cd7e"},{url:"/telegaSmall.svg",revision:"b7c658cb327a3e6679388f40975c6b6f"},{url:"/telegram.svg",revision:"894018a5c459b9c13087b11f9ff95d5c"},{url:"/tyrgeneva.jpg",revision:"e54b48ad1c07069e0ea6f3e3d17f8ecb"},{url:"/umpa.jpg",revision:"24bdd8ae68987b44586fb8ff1ab7015f"},{url:"/user-default.svg",revision:"e2eec97760cfe5c13afb856477b26f24"},{url:"/vitaliy.jpeg",revision:"0a16cd32ed1843e3ae048d1808ef9db9"},{url:"/vitaliy.jpg",revision:"a52e85f3db173a2c608a3adc886cacd9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
