if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let n={};const d=e=>i(e,s),f={module:{uri:s},exports:n,require:d};a[s]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.svg",revision:"714942d8a8048c27d3854bfa38b576a5"},{url:"/2.svg",revision:"ab53f668fcea746d59b937672d8b9ef2"},{url:"/3.svg",revision:"190019ed377368d909d1f96761ec7eb6"},{url:"/WAYKE4.jpg",revision:"0cc37ef0e8a5f9325f808a06ec9b91ef"},{url:"/_next/static/chunks/875-9de06cbafc37eaa2.js",revision:"9de06cbafc37eaa2"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-6f2a6882974bcf77.js",revision:"6f2a6882974bcf77"},{url:"/_next/static/chunks/pages/_app-b9e05b3db24847ef.js",revision:"b9e05b3db24847ef"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/contacts-f96e60444b5d7ad5.js",revision:"f96e60444b5d7ad5"},{url:"/_next/static/chunks/pages/index-2ac645241af9a68d.js",revision:"2ac645241af9a68d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/655fc6c80f0943ea.css",revision:"655fc6c80f0943ea"},{url:"/_next/static/css/6dc659bf4f5607b3.css",revision:"6dc659bf4f5607b3"},{url:"/_next/static/css/925696fa0bd5f9ad.css",revision:"925696fa0bd5f9ad"},{url:"/_next/static/rikuJiaKxmvE18qikxdoo/_buildManifest.js",revision:"4c99b04cb0f27d404aaa7f5311bdbd05"},{url:"/_next/static/rikuJiaKxmvE18qikxdoo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/abdulov.jpg",revision:"6fd519738c9c978dbd8dc2b9d184ac62"},{url:"/agnia.jpg",revision:"f991013f3c2b28fb0e43583bfb0b3af6"},{url:"/airat.jpg",revision:"d312d827b881a90419916f88fa2db15a"},{url:"/alex.jpg",revision:"3586d3b5174dc619035d0be1358f3239"},{url:"/alex11.jpg",revision:"c7ca61b90294ec8bf4eb49f0ad048dd5"},{url:"/alex3.jpg",revision:"49d01dfb4234cc2fd6fe59a3f35a41f7"},{url:"/alexey.jpg",revision:"9b3ef0a892ebfe3d5f3a5d675342214d"},{url:"/alexeyb.jpg",revision:"172da0088e51eccd7f27154d635806e3"},{url:"/alexm.jpg",revision:"bb213410443ab3294e0ee1d59137bf79"},{url:"/alexs333.jpg",revision:"1597503168b7f570605c86c6438dc3f4"},{url:"/alina.jpg",revision:"e50455e890cd882e1a29450e4b29154d"},{url:"/anabel.jpg",revision:"fcd3de8a14661afdb53191721392ec8a"},{url:"/andrey.jpg",revision:"8988f0738cb195de86d7fb237185b107"},{url:"/andrey2.jpg",revision:"593abc0933d83bd21cb63b6cee6639c8"},{url:"/andrey3.jpg",revision:"add7c629385ce4323e6663dbdffccddc"},{url:"/anton.jpg",revision:"2bf4abc67dfd7cd82d44cd389b89df4b"},{url:"/ayrat.jpg",revision:"d4694d1069e5a683dec133f8ab57afa9"},{url:"/azu.jpg",revision:"27c1022aced9e410c1e0feef826294a9"},{url:"/ball.jpg",revision:"669a874df72174b1fb52375245da38f5"},{url:"/biziukov.jpg",revision:"1bb040240f791d6f82d03d6e299b6883"},{url:"/burlanaa.jpg",revision:"56232e336e4d628bd70ac202604535a8"},{url:"/chernenko.jpg",revision:"ef83a30b57ff200099462d5443d89670"},{url:"/cross.jpg",revision:"8328f1aed360dc865139c0511d8f2f2c"},{url:"/d.jpg",revision:"531330fd2b5bba2261f1c6430b945e93"},{url:"/daria.jpg",revision:"19a22fa3c189c223eea6e0521590b8d3"},{url:"/dasha.jpg",revision:"7baf82ed3d95a3ddeeec18bb4ec9281d"},{url:"/denis.jpg",revision:"709d0ee9599d6c01153fc3658590501c"},{url:"/denis2.jpg",revision:"99effa9a2f6ea5ea9f7776cf5c0cd04d"},{url:"/denis3.jpg",revision:"ef06a39b820de6ab7fd642840f32454f"},{url:"/der.jpg",revision:"cf73a7a0d76cc185ea01af39f281c8ac"},{url:"/dim.jpg",revision:"2de542dfd700718da5b633ba22240000"},{url:"/dima.jpg",revision:"01a17e481ff58573269cd964a1360230"},{url:"/dmiitriy.jpg",revision:"fa6a9151b11abac3c24172c3e7e6510c"},{url:"/dmitriy.jpeg",revision:"447a041b02271f31cf9b652172b4eacd"},{url:"/dmitriy.jpg",revision:"7cb84c8ee522689fb4123f4afe2da263"},{url:"/dmitriy2.jpg",revision:"3d357bed5075669e6c71d1c93ed1b785"},{url:"/eduard.jpg",revision:"b8a76f22218249bb591432624088312e"},{url:"/egor.jpg",revision:"d989269b0cef68cae18f2ef1fd8e845b"},{url:"/ekaterina.jpg",revision:"f8b01b2d48aeb17adbbededabc7ff670"},{url:"/elenam.jpg",revision:"7bbbad5cd4c8ef15b65d21717ffc3e21"},{url:"/elizabeth.jpg",revision:"1ea14f01f495787fc1429a4433df05d1"},{url:"/endo.jpg",revision:"5b9447efd6defa39e6dce2ce6314238a"},{url:"/erica.jpg",revision:"ffd5fece1214269a10d99ab200ccea28"},{url:"/ershov.jpg",revision:"9758cd518b2f3430c0397e2a658449bf"},{url:"/ethereal.jpg",revision:"2ce99f4c5023f22e5cf7207189630ff1"},{url:"/favicon.ico",revision:"a501789e305930e5394f372dfb058159"},{url:"/fedor.jpg",revision:"b9415513dd45f2a23d8c65418bd5e38f"},{url:"/glebk.jpg",revision:"8fe9d62c9b05006d491ad513e1e04a71"},{url:"/globa.jpg",revision:"964ea6a14134b4da9458ff9d692042f5"},{url:"/gopatush.jpg",revision:"b9d19ab4d6a4fcc566710403eef89431"},{url:"/icon1.png",revision:"24fb2a9dbaa0a7c68c723aab83417cca"},{url:"/icon2.png",revision:"8a4cb9f73eba59e6daabd4db4feb6fb4"},{url:"/icon3.png",revision:"9ee53679392fa9bbe2e2f538e50c3546"},{url:"/icons/icon-128x128.png",revision:"070c860fa736b662e6b29431ff4cba9b"},{url:"/icons/icon-144x144.png",revision:"6a5d1445345f1674925f9ce15a283bc2"},{url:"/icons/icon-152x152.png",revision:"43fae377420c1b2777d5a42915191b49"},{url:"/icons/icon-192x192.png",revision:"f438e2ef0b1a1609d0ffdef32de8db60"},{url:"/icons/icon-384x384.png",revision:"8323f1842ce42c5aa762d529701dc59d"},{url:"/icons/icon-48x48.png",revision:"024b3cabe3896a25e1312fa6eddec939"},{url:"/icons/icon-512x512.png",revision:"de4087e67252feb32014f523a43d79e5"},{url:"/icons/icon-72x72.png",revision:"e7f51f618bba8cc91e6b5e49efb8c291"},{url:"/icons/icon-96x96.png",revision:"cb59f59e15ecdcfc9ea0c56ff9cfc7d6"},{url:"/igoryan.jpg",revision:"3e6c4181978dd9bfc0a6440d31cc29e3"},{url:"/iliar.jpg",revision:"a0ff327b915db4eeba857bbe7d9ad216"},{url:"/ilnur.jpg",revision:"57dd17adfc7bdd89a800bd75727be2c8"},{url:"/inyakovlev.jpg",revision:"01c0be66337e61103f8621c39cde0e1b"},{url:"/ivanova.jpg",revision:"3004bbda18bbfdce34b978189a1bf006"},{url:"/ivanp.jpg",revision:"776fb7a2c1e6161e23a33dc03f3d5890"},{url:"/jonathan.jpg",revision:"3f88956e5ab66935287c48ffc493feb9"},{url:"/kolyada.jpg",revision:"5240af48424106727c9263a98969dfc1"},{url:"/kopylov.jpg",revision:"5c26777833e27dc09993d30364753d94"},{url:"/koskin.jpg",revision:"85b14f6bff097997d4656b393598af14"},{url:"/ksenia.jpeg",revision:"be3d970f9289d9f87db0e216d0b5c2e2"},{url:"/ksenia.jpg",revision:"16bee305e25c9d03cc101e9422e70cc5"},{url:"/kuka.jpg",revision:"0556ef528e0eefdf0642946168490fc1"},{url:"/kvacheva.jpg",revision:"fabdeccd788fb1df8847aa7e906e1bfc"},{url:"/lighting.svg",revision:"99d5ad411a2540fe9667b6590ec466ba"},{url:"/logo.jpg",revision:"e462e65c321341686ce4bc428460f93b"},{url:"/logo.svg",revision:"57104cc6cd43f137e7834e97443028bb"},{url:"/lolipop.jpg",revision:"4ff32740ebad44ad1bbba2c5e7e8ef23"},{url:"/mainLogo.svg",revision:"70bdeaf19319b175646a3ec5b5ef0f6d"},{url:"/manifest.json",revision:"fd20f0d9cfb3d4ee00ebdbd439a4d650"},{url:"/mark.jpg",revision:"a765fa86523062292b9736b0c0d1daf4"},{url:"/marselbi.jpg",revision:"fa8fe9ca3648269742bd079f809c186b"},{url:"/matvey.jpg",revision:"6051864e5b787d61c4d173db6979c919"},{url:"/maxim.jpg",revision:"a75d70c00afb6935be9ab65a459d10b8"},{url:"/me.jpeg",revision:"8b72fd01892522e9b29e1d39a5bffb8b"},{url:"/midway.jpg",revision:"c8b32b9babf13368ae717c6e7442a926"},{url:"/mikhail.jpeg",revision:"2e2aeeaa23355763f146c3cb5cbc6e3c"},{url:"/mikhail.jpg",revision:"099a39b0de9b733a81f2c6e6c3363ce1"},{url:"/misha.jpg",revision:"12ea30e655a29304eb433c30681d9aae"},{url:"/nazar.jpg",revision:"9ba3fbbd9fe0243cbc5b77ff071583e6"},{url:"/nikita.jpg",revision:"c377d315e7b631973561b5360493804f"},{url:"/nikita2.jpg",revision:"200ccedb1c3b95ac441bbd3ab03358db"},{url:"/oleg2.jpg",revision:"689e633429054a13758be81ef2c346d1"},{url:"/olga.jpg",revision:"ca550492cf848aeae1b71385e93ae215"},{url:"/osipov.jpg",revision:"d61fd82d392413a3c572085ebea9733b"},{url:"/pavel.jpg",revision:"64c08bf9a5836574ac81fb9201b2bf93"},{url:"/pavel1.jpg",revision:"02a4c790e7e7eebec767f02fdcc607af"},{url:"/pavel2.jpg",revision:"760994d4fd018e85da8365540cda5e1d"},{url:"/prince.jpg",revision:"9e8aefa87976ee48a273af4a552211b6"},{url:"/renat.jpg",revision:"41b6011ee91baa498ce0013d6ed9c0ff"},{url:"/robots.txt",revision:"d7b43352f6b86f1970a224d4062d6385"},{url:"/roman.jpg",revision:"4a5dc5dbc8208489ed6d80bacaaac8ed"},{url:"/romeo.jpg",revision:"09bceecbced30a5c5af0dc9ede242407"},{url:"/rss-feed.xml",revision:"a004eed8fb744f4f2b1c341448e1b985"},{url:"/ruslan2.jpg",revision:"84a874793f3c32bc12ce6715f8652c94"},{url:"/rustam.jpg",revision:"b29d31f3851ba1db55ddec8d0999e25a"},{url:"/sashulya.jpeg",revision:"4d5dcff32ea6c968fa9af842b529590f"},{url:"/sebastian.jpg",revision:"164be5b2642dd88c21b75cc9fb0c5319"},{url:"/selyutin.jpg",revision:"35a83462d5d2a394c62741e0a15f657f"},{url:"/semenk.jpg",revision:"2aa894f7059405a25e6848e7b5f1a7ed"},{url:"/semenov.jpg",revision:"ce60bd23b9c40b660e890a2ac8d55fa7"},{url:"/sergey.jpg",revision:"0946a3b3f8c016ec829c5433e73b8cfb"},{url:"/sergey2.jpg",revision:"3b899aa855102e5529f3540c6c46db38"},{url:"/sergio.jpg",revision:"113932333add98fa8b33c045a82e7465"},{url:"/shestakov.jpg",revision:"b9d4ed1d6a2b52cf7b140f85f2873b7f"},{url:"/sitemap.xml",revision:"f5cd403748e476ff0ef1accee9cbfeed"},{url:"/sk.jpg",revision:"b96f8f8ae8ebc33e6098a978adbecc66"},{url:"/social-icons/email.svg",revision:"18264905df2ca6589f8dc13ab05035ec"},{url:"/social-icons/instagram.svg",revision:"2fa21f6fce030076be9d89dd85496a56"},{url:"/social-icons/phone.svg",revision:"421c31c98fd81a2430d9a62ad0a75bf2"},{url:"/social-icons/telegram.svg",revision:"919a6e225ffc16e8543738b5e4bd3694"},{url:"/social-icons/vk.svg",revision:"c3616da17470c036401ee6258f72cd3b"},{url:"/sultan.jpg",revision:"61515767515c995c5033fd762fd7cd7e"},{url:"/svetlana.jpg",revision:"041880cfae84b1456a907bf091e86d12"},{url:"/telegaSmall.svg",revision:"b7c658cb327a3e6679388f40975c6b6f"},{url:"/telegram.svg",revision:"894018a5c459b9c13087b11f9ff95d5c"},{url:"/timofeev.jpg",revision:"c22097eb428509c84f57c7f80321d733"},{url:"/tyrgeneva.jpg",revision:"e54b48ad1c07069e0ea6f3e3d17f8ecb"},{url:"/ulcha.jpg",revision:"f6b95e9d6662ddf38decc84d81e4cf69"},{url:"/umpa.jpg",revision:"24bdd8ae68987b44586fb8ff1ab7015f"},{url:"/user-default.svg",revision:"e2eec97760cfe5c13afb856477b26f24"},{url:"/vervik.jpg",revision:"88fd6eaba449415a924fe05ee5f0517c"},{url:"/violetta.jpg",revision:"99c7a118ff2d22683b6fd0062839e000"},{url:"/vitaliy.jpeg",revision:"0a16cd32ed1843e3ae048d1808ef9db9"},{url:"/vitaliy.jpg",revision:"a52e85f3db173a2c608a3adc886cacd9"},{url:"/vitaliy2.jpg",revision:"81c035faa583c4934ba7417372a0b124"},{url:"/vitaliyo.jpg",revision:"a547ed79caa7bddfa41438a221dc70fa"},{url:"/vladimir.jpg",revision:"6528c83bd8deb56ad31745f6138e8a4f"},{url:"/vladimir2.jpg",revision:"78f255d5407dd91aa3bf890002eb77bf"},{url:"/vladislav.jpg",revision:"f73c435e39663a7bd153e2aa95757efd"},{url:"/volkov.jpg",revision:"35077cb3871bf6e2121c4c1d2504b908"},{url:"/yulia.jpg",revision:"06a8cb95fd2ab6c3129c5dc92fd80a62"},{url:"/yuriy1.jpg",revision:"d8a313ba4450727f19b432614db69b08"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
