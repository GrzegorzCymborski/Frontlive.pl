if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8v7xwktd_cFhtJRt1mXPq/_buildManifest.js",revision:"a58ceeb248dec68f0522710ecdec0d34"},{url:"/_next/static/8v7xwktd_cFhtJRt1mXPq/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/122871220829627de73f68cfc1e479303701bb2b.ae42403da640f672ca9c.js",revision:"acea4f2ba3b365b8e45927678ec00fa7"},{url:"/_next/static/chunks/75da2af423652fd0c814449032256e0bf7815bed.e107b8114a0322fbb0db.js",revision:"53856213cc65f653fe6f677862c05610"},{url:"/_next/static/chunks/be05e7c691ebb866a9a072f3ec32ccc4d8b2566f.adeb604edee61660f575.js",revision:"4223da9bc0d3e2acbd73bf4931e55a24"},{url:"/_next/static/chunks/cd5bab3e.b528cc4a2fcd89584ea3.js",revision:"895bd860af6890e0e53f2f1981691e2c"},{url:"/_next/static/chunks/commons.839faed4e72e77b54a3e.js",revision:"52b1dfb70604c1b3489d77a2661491f4"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-1bb670cd0a5967892d76.js",revision:"277064060c628b628a3554012a2c3718"},{url:"/_next/static/chunks/pages/_app-037b58654969be075425.js",revision:"5cfa03839e48bbcf5ff4ea69b0569a0f"},{url:"/_next/static/chunks/pages/_error-4fae9101b507f2c6c337.js",revision:"b6510d3de6445c3e88fcbc08fbf0c0ce"},{url:"/_next/static/chunks/pages/blog-b0e032ceb9db634e57da.js",revision:"c5f1e40adb4a46c4a29caa43d516f94e"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-dda528192a3928b4fb87.js",revision:"bcf749b372df1d28335bcec19ecb0876"},{url:"/_next/static/chunks/pages/index-8e896850f08b09bb0bc7.js",revision:"5aca7c9b27b35d7c30d896ee3537eeeb"},{url:"/_next/static/chunks/pages/kategorie-a9f7c2930e037b357c2d.js",revision:"a5b31ab1296d2d6ea2dbcca35b4a4a99"},{url:"/_next/static/chunks/pages/kategorie/%5Bslug%5D-5e7e84e0c88ed01bae55.js",revision:"9b79e3f7671b4d5ba4423fc6f5d0f2d3"},{url:"/_next/static/chunks/pages/o-mnie-087b9ad8a74d6340fb76.js",revision:"6e8f7ac2aee8f8a3515ea4f098ddb411"},{url:"/_next/static/chunks/pages/portfolio-0f8e1c8d99b21f8c106d.js",revision:"1206eb86767f384c394d98bd16bfbf2d"},{url:"/_next/static/chunks/pages/portfolio/%5Bslug%5D-bf5e793ab357a0792ae1.js",revision:"a6a8fc78e877534aa2ea3b5a46cde655"},{url:"/_next/static/chunks/polyfills-f8d88fc6aa27b790f2ac.js",revision:"39fc3ebf8906547cf8ea2693e3191e64"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/1bc45fd90ed16996bdaf.css",revision:"2a2bfbc610d3b9842955068e6e252b3b"},{url:"/_next/static/css/3bc0e078d3defc4fb7c3.css",revision:"0e403e17fcb0dba72e39ce15d1af5123"},{url:"/_next/static/css/5af8fc888b2e02e4b73d.css",revision:"6905ecfc2b5856964f82d7118e78ed55"},{url:"/_next/static/css/83130e772849a594283f.css",revision:"2ee15935de6032c0fc1b3334f3794f50"},{url:"/_next/static/css/8b4d9b9154a23bd209bf.css",revision:"85b04329c864bad79cda408fb2267e6d"},{url:"/_next/static/css/8f7f3022acae85cef069.css",revision:"5ee7c2c084226bdf42d9370da201dfeb"},{url:"/_next/static/css/a69daff21b4be8d6b461.css",revision:"25d51344fd79f035dac440ab42eccdf8"},{url:"/_next/static/css/f2462be2f26b278c5aa6.css",revision:"0fead04ea23585e3a0fbaf694fe17ae9"},{url:"/browserconfig.xml",revision:"d274430c2db6d83fbb368aeb171d5fa2"},{url:"/favicons/android-chrome-192x192.png",revision:"3ed83baa13122d8a5e201079728dc2e1"},{url:"/favicons/android-chrome-512x512.png",revision:"84b227d4489a340e9d27255fb36b8793"},{url:"/favicons/apple-touch-icon.png",revision:"6601e4159da1fe4abc29e98d57f28f23"},{url:"/favicons/favicon-16x16.png",revision:"6e21bb0063b15d9f8661eeb93964dafd"},{url:"/favicons/favicon-32x32.png",revision:"8a599f4d100652ab6698918d14237106"},{url:"/favicons/favicon.ico",revision:"4a958eed55fd112dcf97cad96ba7b822"},{url:"/favicons/mstile-150x150.png",revision:"b4689c0338289648c987396ffd60954e"},{url:"/favicons/safari-pinned-tab.svg",revision:"d1fe704636974ad72b2f6830d5cee737"},{url:"/fonts/CriteriaCFBold.ttf",revision:"a8a1593ce70a690380219fe00719e675"},{url:"/fonts/CriteriaCFBold.woff",revision:"e320ff75a066cfb5fd8072b90aa66e48"},{url:"/fonts/CriteriaCFDemibold.ttf",revision:"4c548f7c0863ea4aa143410c386fb34a"},{url:"/fonts/CriteriaCFDemibold.woff",revision:"450eec6514b85c04e557d25721c5603b"},{url:"/icons/anchor.svg",revision:"627c5d5e5cb9838617b2aea6141a5a1c"},{url:"/icons/arrow-right.svg",revision:"b45869161478ee5facc27c06f75a1449"},{url:"/icons/check-mark.svg",revision:"2e7eb535ba04f3974ff51d93e7dc4532"},{url:"/icons/circle.svg",revision:"7d569946bd3a7956772f09ea7ab7a1a5"},{url:"/icons/facebook.svg",revision:"246c880186fbe4d4859ad626a610cc23"},{url:"/icons/github.svg",revision:"c5297de4c7e16e0d8e681533ddd4e538"},{url:"/icons/graphql.svg",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/icons/linkedin.svg",revision:"7f596d1c7040bfae2b9b20821b7c229f"},{url:"/icons/quote.svg",revision:"d889c4bd0f773144e273147ea1ccda61"},{url:"/icons/sparkle.svg",revision:"cbdd14b75508f862600296514bff38cf"},{url:"/icons/twitter.svg",revision:"6e5885cfaebab3acc43c844645b00abd"},{url:"/icons/typescript.svg",revision:"c71c26eb3c7d1b42da2ad9008450ff2c"},{url:"/images/a11y.png",revision:"844560be0df46fc7f34561a3ee142245"},{url:"/images/articlesImages/Apollo-app.png",revision:"bd328fd4b6eba5c2608ef6cd76695136"},{url:"/images/articlesImages/AtomicImage.png",revision:"0cd278fa2a638c97994d8ee7be40ac57"},{url:"/images/articlesImages/Covid-ulotki.png",revision:"267eb0254ad4077445056e0ccb787107"},{url:"/images/articlesImages/CyrisXD-Readme.png",revision:"e5d926077879541bd424d29c3c749532"},{url:"/images/articlesImages/DevTools-a11y.png",revision:"181e9b24f162b030bd2cd8ad7bf8e430"},{url:"/images/articlesImages/DevTools-vision.jpg",revision:"de5b6c8c6f74a403a8a5a08e1cbae377"},{url:"/images/articlesImages/Firestore-twórcy.png",revision:"e1651eb1c197b1e91f17e40738fa5674"},{url:"/images/articlesImages/Firestore.png",revision:"8c257f346776fc7fc4ceb6f9592b18fd"},{url:"/images/articlesImages/GraphQLvsRest.png",revision:"5049d9b249aca0efdec816b1f6373d5a"},{url:"/images/articlesImages/InterfacevsType.jpeg",revision:"ca0f2e36db5eef5415922ab26b99bf5a"},{url:"/images/articlesImages/Jason-Readme.png",revision:"39bd01b90c4e8f68371b4941298bb22c"},{url:"/images/articlesImages/Michael-Readme.png",revision:"036058a83929bd86b1e1f3df1d09281b"},{url:"/images/articlesImages/Monica-Readme.png",revision:"52c670f6e9a0e58ce172420f689ec9d7"},{url:"/images/articlesImages/Olaf-Readme.png",revision:"d3abd8b4bc70ae32a15bc9853286c225"},{url:"/images/articlesImages/Olaf-readme-fixed.png",revision:"f5bf269901866b12d8dc67a7ccfd36ef"},{url:"/images/articlesImages/Readme-Olaf.png",revision:"7c0c6fe2a6132caf038a320c12306dcc"},{url:"/images/articlesImages/SR-01.png",revision:"faf17d9420ac954dbd748e6d271ca2eb"},{url:"/images/articlesImages/SR-02.png",revision:"e1786e664f68d923b66ef03c5aa7a655"},{url:"/images/articlesImages/SR-03.png",revision:"7b7b5323074af7f8358314394d797b17"},{url:"/images/articlesImages/TypedDocumentNode.gif",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/images/articlesImages/accessibility-tree.jpg",revision:"719fb4c36b861942cd35ac5d498844db"},{url:"/images/articlesImages/alias-gql.png",revision:"48f1006b3c0e6be4350b4022425892d3"},{url:"/images/articlesImages/apollo-postacie.png",revision:"636931f32b98eed4b35367b8bcbe299f"},{url:"/images/articlesImages/atomic.png",revision:"316cee40636741ccfb625c39bd72039c"},{url:"/images/articlesImages/atoms.jpg",revision:"6dc3d4d52fd9ffbd628f5ca33ba63461"},{url:"/images/articlesImages/ci-test.png",revision:"b3fcc2ef761a4d4fba4e19a0de2debbe"},{url:"/images/articlesImages/clamp-fn-1.png",revision:"85a753591b5a39d3ab9599a22bda880a"},{url:"/images/articlesImages/clamp-margin.png",revision:"730cceb0e9f6449f7b707d87404d87f2"},{url:"/images/articlesImages/clamp-paragraph.png",revision:"083b3b434fdc95a30d8704a460397e1e"},{url:"/images/articlesImages/clamp-wsparcie.png",revision:"6ccf44663600ead8bd4cfb84f8614f22"},{url:"/images/articlesImages/color-contrast.png",revision:"485816a4ca3bc2c785b3960129b925de"},{url:"/images/articlesImages/dan-abramov-redux.jpeg",revision:"5f6294d726c1da641b322fcf8b708d00"},{url:"/images/articlesImages/dostepnosc-niepoprawny-layout.webp",revision:"fc247390a84f9f54495c2e2a5f94d79a"},{url:"/images/articlesImages/dostepnosc-poprawiony-layout.webp",revision:"5b71653dedbb80f673d82b1c12698b41"},{url:"/images/articlesImages/fluid-1.mp4",revision:"5779f671e16e962a6c4791c5430389cc"},{url:"/images/articlesImages/grapqhl-playground-blank.png",revision:"863a7b2869671c0fc9c4e18d546ac6b9"},{url:"/images/articlesImages/karta-postaci-apollo.png",revision:"5593773b4499e057c2d0e29879feb2a6"},{url:"/images/articlesImages/max-fn-1.png",revision:"1f18ee3868b1a935160667789084bf3f"},{url:"/images/articlesImages/max-fn-2.png",revision:"5200adf3a072ab2131ab395dbdbdb337"},{url:"/images/articlesImages/min-fn-1.png",revision:"e0e82369bac025e848df789de5502d1d"},{url:"/images/articlesImages/min-fn-2.png",revision:"88cbd506fed763c78ffaa2cb9cc70e62"},{url:"/images/articlesImages/molecule.jpg",revision:"71358925bac0478fa4d53d97b2aec24e"},{url:"/images/articlesImages/molecules.png",revision:"60eef7d87d83bce7d13a56f840888fbb"},{url:"/images/articlesImages/organisms.jpg",revision:"084dcef2fb158aadab334c660c5871d1"},{url:"/images/articlesImages/organisms.png",revision:"737729c50d427312cc9386798cd49ded"},{url:"/images/articlesImages/pages.jpg",revision:"eb19a3bc98cc129145376265e7e9b8d3"},{url:"/images/articlesImages/readme-template.png",revision:"2f342579959d4375db1d853e8cc36d80"},{url:"/images/articlesImages/readme.png",revision:"aa66614154687f50a9298fa798cccb73"},{url:"/images/articlesImages/svg-a11-pattern.webp",revision:"cae7894817afe753167c5e54c669f66f"},{url:"/images/articlesImages/templates.jpg",revision:"e4ccae48036d6844ec6db4df7dbc7fe7"},{url:"/images/articlesImages/term.png",revision:"db857ee64ffe3d2cd4c7e1c372e71c92"},{url:"/images/articlesImages/whocanuse.png",revision:"6903af4641fbf7fdc1a1f5a944ab7325"},{url:"/images/articlesImages/wsparcie-houdini.png",revision:"b584daf11ad4972a55e4a82edf47561d"},{url:"/images/blacksoft-logo.png",revision:"91bf9ae446700bf1641475a2a62783e1"},{url:"/images/category-css.png",revision:"a7f2705dd04d78da0881c32d24f5b804"},{url:"/images/category-dostepnosc.png",revision:"3971b8ec08d80924c574a1a7e424f7c9"},{url:"/images/category-firebase.png",revision:"9a6cce38ae5fb272b126e068828c9b25"},{url:"/images/category-graphql.png",revision:"77212a79e84e6d845f5fa1bff7d02c6c"},{url:"/images/category-javascript.png",revision:"be9a01ecd6710e116ba2a48716c2f650"},{url:"/images/category-typescript.png",revision:"434353e28e41762dc7b47e3b9344b1de"},{url:"/images/category-webpack.png",revision:"7e7c62bbf7bc738f61910280a0d32d7c"},{url:"/images/css.png",revision:"631c32af654394daa7b58393880245e3"},{url:"/images/devfeedback.png",revision:"ff6d074d55a75c01f606972342d2d18c"},{url:"/images/devops.png",revision:"d7cb23728380e76619c10714c0d3ceb2"},{url:"/images/firebase.png",revision:"efe83b6ee3818f1a9b673ba84ead0876"},{url:"/images/gatsby-cta.png",revision:"51237961bc44d4fdb2c4a020f24a7955"},{url:"/images/gatsby.png",revision:"1f5f4de2f7c7abf40cfc24fdea055327"},{url:"/images/graphql.png",revision:"5edcf8150e17f1b67b0b616737eec609"},{url:"/images/hand.png",revision:"50594070bac7e0ffaa1c3bac383c815c"},{url:"/images/hypnocoders-logo.png",revision:"b883efe7901215bcca50c25c5f7d7d04"},{url:"/images/inne.png",revision:"4dbe3b76c505bf89ebff0646794a0193"},{url:"/images/javascript.png",revision:"d4917378901d9954c0e32187233a2075"},{url:"/images/logo.png",revision:"0e655a6ef3db5d425c936e94e28076ab"},{url:"/images/main.png",revision:"9897c7eda14e8877cb3e8d6d7ceed2b1"},{url:"/images/me.png",revision:"fc1c084d4fdd2a71704172774e5effad"},{url:"/images/olaf.png",revision:"1ba8d55cb7b6fa99651deeb97c5a98f0"},{url:"/images/projecty.png",revision:"6def7270a592365476c54ddbe255d8fd"},{url:"/images/przeprogramowani-logo.png",revision:"7c451b05e208e7ef21fd655610c999e8"},{url:"/images/przeprogramowani.png",revision:"f831c01065c86045bd396a39abf6e6bb"},{url:"/images/react.png",revision:"e201953d4bf08c6d4667305c72834072"},{url:"/images/recenzje.png",revision:"44c30ea562092d8e2275008df239d520"},{url:"/images/svelte.png",revision:"f7a2394c93c7c9ae22e311a992fa8d20"},{url:"/images/typescript.png",revision:"168b54f4f969cfb89e5cd9a4618eb215"},{url:"/images/use-haki.png",revision:"9a849c2c4e589227880b8591ceb3ca92"},{url:"/images/user.png",revision:"48753a99c169bddaadb6ceb3d6d3a7b5"},{url:"/images/webpack.png",revision:"02d38a50ba4495d3761c3dfbffb9a821"},{url:"/robots.txt",revision:"25ea0615cbd9efeabf349585a9ecff1d"},{url:"/rss.xml",revision:"ccd321b8e576aa0eedc95ab33ba6897d"},{url:"/site.webmanifest",revision:"e44dc49b212305f4d24b9cbb11830d18"},{url:"/sitemap.xml",revision:"59acd54adedabe14c1a9acaa1019a3cd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));