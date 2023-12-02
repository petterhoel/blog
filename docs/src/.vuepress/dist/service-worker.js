/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1608248e7216c6d9350b93a290022f07"
  },
  {
    "url": "about/index.html",
    "revision": "7f64d78d7b90d3a4d2720c7dd90d3f5b"
  },
  {
    "url": "assets/css/0.styles.8e4c7566.css",
    "revision": "d2a893ea9dade8b10a7f999fefe619ee"
  },
  {
    "url": "assets/images/touch/apple-touch-icon.png",
    "revision": "deede9863806dcf2305467aee48a922d"
  },
  {
    "url": "assets/images/touch/favicon.png",
    "revision": "0d801cd53df30bc7ae846ba9f78bf938"
  },
  {
    "url": "assets/images/touch/icon-128x128.png",
    "revision": "15e5ad82a4ff901474ddc2807479b6de"
  },
  {
    "url": "assets/images/touch/icon-144x144.png",
    "revision": "b64e57a250b133aee354465a2f18eb25"
  },
  {
    "url": "assets/images/touch/icon-150x150.png",
    "revision": "10a254a815c9e8a42d3e83da8bf0e985"
  },
  {
    "url": "assets/images/touch/icon-152x152.png",
    "revision": "deede9863806dcf2305467aee48a922d"
  },
  {
    "url": "assets/images/touch/icon-192x192.png",
    "revision": "b6abda4514ced4205066773a90a915c7"
  },
  {
    "url": "assets/images/touch/icon-512x512.png",
    "revision": "c140a0ca14313c4db307f93365d6a5c8"
  },
  {
    "url": "assets/images/touch/icon-72x72.png",
    "revision": "d0bd8841c09c1ed2fa4e33f55eb8cfbc"
  },
  {
    "url": "assets/images/touch/icon-96x96.png",
    "revision": "5f67b21c31bc88a618c7fa028828f236"
  },
  {
    "url": "assets/images/touch/icon.png",
    "revision": "b64e57a250b133aee354465a2f18eb25"
  },
  {
    "url": "assets/images/touch/icon.svg",
    "revision": "86128646957df42e36e570f7b9e1e397"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/petter-2.af749ec1.jpg",
    "revision": "af749ec1f068f39844a0e788b12da841"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b739abc.js",
    "revision": "6492d8329c8b7d7fb354e7ee66de361b"
  },
  {
    "url": "assets/js/11.c7033f6a.js",
    "revision": "2530c3296e795e8f98ce4b99d651c39a"
  },
  {
    "url": "assets/js/12.abafce8c.js",
    "revision": "fb9c62489f2d7de32e5fe7bc7756864c"
  },
  {
    "url": "assets/js/13.daffb00c.js",
    "revision": "edb3d0696047dd0d3ab5c546182fe171"
  },
  {
    "url": "assets/js/14.7b8f5cc9.js",
    "revision": "e6cbf0f32123b814d431d5450d3534d2"
  },
  {
    "url": "assets/js/15.7dce3d8c.js",
    "revision": "39dcad96d721fc371ed505999369d04c"
  },
  {
    "url": "assets/js/16.630bd5eb.js",
    "revision": "47f44487cb3f632a60d4ea4aea65fe7e"
  },
  {
    "url": "assets/js/17.1d12062b.js",
    "revision": "b3da74f13141aa38640be5b26ca110ce"
  },
  {
    "url": "assets/js/18.42fee5a0.js",
    "revision": "0cff87824fe5d42c24669aec03294ffc"
  },
  {
    "url": "assets/js/19.53877b02.js",
    "revision": "06fb07c2dad9771aaddb0bf8242165af"
  },
  {
    "url": "assets/js/2.2489a6ef.js",
    "revision": "2d18416060960d842b8e621a8f3171ac"
  },
  {
    "url": "assets/js/20.2eb95830.js",
    "revision": "6f5ccfda49e7409da0b11ddaabda8ab8"
  },
  {
    "url": "assets/js/21.7c300813.js",
    "revision": "15fa7bf5dcb1ce80eee696656059262d"
  },
  {
    "url": "assets/js/22.0335ceec.js",
    "revision": "8cf585f6820fc7e397d1356a8fef39d5"
  },
  {
    "url": "assets/js/23.4327f5bc.js",
    "revision": "710de5d918664d33adf8b3711ff48b30"
  },
  {
    "url": "assets/js/24.49564f76.js",
    "revision": "d654b67baf29121ea41313da0154fbe8"
  },
  {
    "url": "assets/js/25.96dbeebc.js",
    "revision": "714ee60fa025e3aff0aae67cc142cec0"
  },
  {
    "url": "assets/js/26.adec87ea.js",
    "revision": "c01002105a555dd5e707ea5964d7b07c"
  },
  {
    "url": "assets/js/27.243c26b2.js",
    "revision": "fff2475382004d2af4a795e573e798cc"
  },
  {
    "url": "assets/js/28.b39793c9.js",
    "revision": "98a203bd4f38d9bb041c0d8fc694f76d"
  },
  {
    "url": "assets/js/29.9043f45b.js",
    "revision": "9063f22158b04c8a57687ddd3b78eadb"
  },
  {
    "url": "assets/js/3.79958784.js",
    "revision": "6ecf95b5ca81cb92f9d11ba04d67e017"
  },
  {
    "url": "assets/js/30.4d804c15.js",
    "revision": "ccf53b52ea0b522651e693b6df848cc8"
  },
  {
    "url": "assets/js/31.94cebda1.js",
    "revision": "633c24df284b9b22ae3bc4d192573307"
  },
  {
    "url": "assets/js/32.3b7cd58b.js",
    "revision": "30a2799cd76e18f01b09b543e5aeca11"
  },
  {
    "url": "assets/js/33.4ef44fef.js",
    "revision": "b8603797de8d82ad5b7d8ce3054ec70d"
  },
  {
    "url": "assets/js/34.c34f4d36.js",
    "revision": "00fbc2a5b6dd2f1bfdea1aa9a9afb959"
  },
  {
    "url": "assets/js/35.97c873c6.js",
    "revision": "1e020aafb45878d2c4968bd10f9d8b30"
  },
  {
    "url": "assets/js/36.3045e56f.js",
    "revision": "9f2232c2c52f38a872c549f799060c3f"
  },
  {
    "url": "assets/js/4.5bd48017.js",
    "revision": "4a3bde29b09316bf03b96c245bd688d1"
  },
  {
    "url": "assets/js/5.647c63bb.js",
    "revision": "e221680c4903c06ef6905e182100f042"
  },
  {
    "url": "assets/js/6.85fdeada.js",
    "revision": "881942d0cd82d6c8db5001bb26738d50"
  },
  {
    "url": "assets/js/7.d186c6c4.js",
    "revision": "c6786524e800091440033c7c0d250002"
  },
  {
    "url": "assets/js/8.cb4e119b.js",
    "revision": "2563d61a5e3c52b6f7105157dbf1e689"
  },
  {
    "url": "assets/js/9.17045ca4.js",
    "revision": "9340a3f39d0d858e9c319bdb08fb7e07"
  },
  {
    "url": "assets/js/app.f76b30db.js",
    "revision": "fea41c644bff4d25966422cf7a9bd421"
  },
  {
    "url": "blog/all-stories-in-a-nx-workspace.html",
    "revision": "52ff8e5320f03fd2e58b683cd21e6b64"
  },
  {
    "url": "blog/angular-in-vue.html",
    "revision": "592e8a19f1562acdb99d5a87424f72fc"
  },
  {
    "url": "blog/center-both-ways-with-css-grid.html",
    "revision": "975222424060c0001206c8b98cb7c557"
  },
  {
    "url": "blog/change-your-origin.html",
    "revision": "eaac2926af07a51c90a64316bc8bb79c"
  },
  {
    "url": "blog/getting-meta-with-your-table-using-sp_help.html",
    "revision": "b933725c661d1b9813ddb83026f3d3a0"
  },
  {
    "url": "blog/handy-key-filtering-in-angular.html",
    "revision": "78e686a77b45134e249e3931bf9c9437"
  },
  {
    "url": "blog/how-to-keep-your-angular-project-up-to-date.html",
    "revision": "98d3248e5f715057319c56e900075e57"
  },
  {
    "url": "blog/import-your-angular-scss-files-in-storybook.html",
    "revision": "ce31e02dbcc1121a9c2ad4cff7558a46"
  },
  {
    "url": "blog/index.html",
    "revision": "49de2bf4ee8a6eb40b0487df55eafe54"
  },
  {
    "url": "blog/javascript-cheatsheat.html",
    "revision": "3a1c1160657c795a3967703a9071d695"
  },
  {
    "url": "blog/npm-version-annotation.html",
    "revision": "0ba4b76a17560864eab4149a9c3d2de0"
  },
  {
    "url": "blog/nuget-secrets.html",
    "revision": "00e89b9605597473d22f2ca4a3cc00c0"
  },
  {
    "url": "blog/nx-version-links.html",
    "revision": "64b03f6f1e58f313cd9a39ef2fb6d42a"
  },
  {
    "url": "blog/read-and-register-dotnet-configuration.html",
    "revision": "d228902bf3b6f08b57725b4f22e9045f"
  },
  {
    "url": "blog/run-sql-server-on-m1-mac.html",
    "revision": "62e49b72855330c7cc81f44635697fac"
  },
  {
    "url": "blog/scanner-or-person-part-1.html",
    "revision": "f4bfa857347e1c99e1184c37e4f0bae5"
  },
  {
    "url": "blog/sql-localdb-connectionstring.html",
    "revision": "85b4e3bdc4a035e29e9e30fbd6cd1b6f"
  },
  {
    "url": "blog/storybooking-custom-control-value-accessor-form-controls.html",
    "revision": "38cbaf30c07958eec41c06fa64820c02"
  },
  {
    "url": "blog/terminal-goodies.html",
    "revision": "55fba94019c10094e536e396ce413260"
  },
  {
    "url": "blog/tiny-dotnet-wab-api.html",
    "revision": "0ced7255d17a6975bdca34b26025b3c4"
  },
  {
    "url": "config/index.html",
    "revision": "53187e9dd89c7f8c12f5c0f88b6380c0"
  },
  {
    "url": "guide/index.html",
    "revision": "1c80eb99399aad76c044ae2af06a1803"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "125c6a7ee5a16b9fd97332012fb1d70f"
  },
  {
    "url": "index.html",
    "revision": "733b7c2658282288fe79c5de40a534c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
