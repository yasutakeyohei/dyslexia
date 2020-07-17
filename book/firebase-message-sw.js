importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
   console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{"revision":"93a876a9255b21732fe293d06e77a55c","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"book.js"},{"revision":"8c1aee733195a20aed5d298bdfd195cd","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"6659e82767897cd87da39032c3c6e053","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"52dc26a48d478e1df15f2efc462234b4","url":"daisy/books.html"},{"revision":"eccb9b8da00ea1449268de7aeedeeec2","url":"daisy/daisy4andepub3.html"},{"revision":"0a1dbd499ba059e87682c362eae1c78d","url":"daisy/index.html"},{"revision":"0aa1621925b1b92227740ba51968cfec","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"96ad80e7ed664dc52a4d05f20614145c","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"e64fcf14f569198f9eab8d6b9b4d053e","url":"giga-school.html"},{"revision":"3b31b1bd45c12d777a739d447fa6a35e","url":"hairyo/index.html"},{"revision":"49e0cc18e144a4624fe9fc43323da8f3","url":"hairyo/jouhou-hosyo.html"},{"revision":"53e60ff08a87635a5bb77b673548a024","url":"hairyo/jugyo-school-life.html"},{"revision":"8392700c52f7c3824b82fbcc96e5a7c1","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"9972e8567ed9a954bf13141b25145cf8","url":"honnin-hogosya-koe.html"},{"revision":"8ae1f3592561ec64d14cfc969f401116","url":"icon-192.png"},{"revision":"e015925a11c9539ef3260cffa64cd414","url":"icon-512.png"},{"revision":"ff00f9c2f0e5a75ef76daccf26f38d52","url":"icon-apple-192.png"},{"revision":"efc4c58dbb5eddf600251d9167683ec7","url":"index.html"},{"revision":"4b998532d3e1008ab571f4ce5588a70e","url":"kodaira-shi.html"},{"revision":"52d65e47f487f106e9ada4df372ea036","url":"laws/barrier-free.html"},{"revision":"74183b3f19138768363e04abceaa13d1","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"d942233d248606350d0c8c4552738225","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"3d0ca555c6b5a20c45d27dcd9dc84bf1","url":"laws/index.html"},{"revision":"f33c645bc9f22d2ae71266ca1095bbd6","url":"laws/kenpou.html"},{"revision":"7ced76d9aa4a762a39c3cc60bbdac9f3","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"20f80e241b490ed89393065115a26c73","url":"laws/kyokasyo-musho.html"},{"revision":"b4e9fac77a1eba507e641d334e69fb04","url":"laws/sabetsu-kaisyo.html"},{"revision":"1c60687b3ce0e86e5c666989c11d8b46","url":"laws/seishin-hoken-fukushi.html"},{"revision":"bd41f96f4f6b4bbedbc66d4da36ea6ee","url":"laws/syogai-kihon.html"},{"revision":"c23ceba6b5d1fdbde1768fa4029070ca","url":"laws/syogai-sougou-shien.html"},{"revision":"8413b3037982a27ba61fd0b05ccd8858","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"b0434afa8903e49a538e598a876797c5","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"c8e47fe31c5ef9cba449fb0547057884","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"d22c882366fe80b2401fede2d6b4de1c","url":"learning-supports/index.html"},{"revision":"e613018f61c55ef3d3382695b979300f","url":"local-govs/ikkatsu.html"},{"revision":"bb7adb3d9736bede9890009f7a9ed763","url":"local-govs/index.html"},{"revision":"f0929b029f1c17a77386f3697dd60527","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"9a7d04291fc9ffc3b53b0cd460928572","url":"local-govs/osaka-shi.html"},{"revision":"74b077c6a1de0853cb48ba367a4c847d","url":"local-govs/shibuya-ku.html"},{"revision":"0e5a7b9cb0830d67024f0883e0a0e809","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"35bd4382baf6497e86ae02dc9013c82e","url":"local-govs/tokyo-hino-shi.html"},{"revision":"9277777bc4d8345614e144dcb0ed9550","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"5bdcf7f912d8a1c663a9361d5a92e84f","url":"local-govs/ueda-maruko-syo.html"},{"revision":"543c22de7e89074dfc674e7f2ac8cd18","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"b7020eef1a97885c7e8eb4a71bb587c8","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"14b5937196f908415f9b73bf3d8ca556","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"a36c1e9ad7588291a7edb0f636f7d388","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"49eb88bef8476fa37e767a54414275ee","url":"onsei-kyouzai/access-reading.html"},{"revision":"d53d39acf6a59283f2e49774d68df02f","url":"onsei-kyouzai/beam.html"},{"revision":"cadf2f78b0f497035d7becafe3438061","url":"onsei-kyouzai/e-pat.html"},{"revision":"beccfd74a2bee472ed37f71e33032d22","url":"onsei-kyouzai/index.html"},{"revision":"29e21e46855859a44aaf80b65a6ddecf","url":"onsei-kyouzai/pen-touch.html"},{"revision":"8bdea2e83daad4f6675fa719f458691b","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"003c0a1618b0713a7fb6b115f530dc68","url":"onsei-kyouzai/unlock.html"},{"revision":"2d98d24fbcb315c3c7614fb7d043adc0","url":"potential-number/h14-mext-survey.html"},{"revision":"7f891a1d9559acce7d9967774f6a4598","url":"potential-number/h24-mext-survey.html"},{"revision":"3a2379a11b8edbc0893269f3eec71c23","url":"potential-number/h25-nise-survey.html"},{"revision":"336f8535e05e2ea616aec18c060b8e71","url":"potential-number/index.html"},{"revision":"3a23cd9f00b271d50338729f4c45fbce","url":"print.html"},{"revision":"2b16c3c390ae42ecfd44445f82c43472","url":"register-sw.js"},{"revision":"70f5fcd73dd12943b7c1831ee2a5f98b","url":"support-groups-activities/do-it-japan.html"},{"revision":"cb9adc0837cb353a9e703bf36ccee7b4","url":"support-groups-activities/index.html"},{"revision":"89982edd3e6ec5de01e6949c0257cf22","url":"syogaisya-techou.html"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"6659e82767897cd87da39032c3c6e053","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"61b1eb9facf7bfeafecaceefe8c8eef8","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"c5d666e04f13ce8aede895ceb1dc7c80","url":"tokyo/index.html"},{"revision":"fab9de3fbe7cfe95388ffb910f4005f6","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"9eae0e58efb32c7d864557d6b8a46ee2","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"2ddf12b5394ee8bf7ee275ab6fb2a958","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"0a34bb560e245bd2434436bf21bc90f0","url":"what-is-dyslexia/cases.html"},{"revision":"f0f5312f2c3970bc256ce3b4680cfd00","url":"what-is-dyslexia/celebrities.html"},{"revision":"a9e6aa0ca0acfd695228bd30f68d0376","url":"what-is-dyslexia/chino-tests.html"},{"revision":"52bc5a67001230e9517f63fbbe6e73cd","url":"what-is-dyslexia/ida-definition.html"},{"revision":"5ee64d7ed1563ad765e37992c2cd667d","url":"what-is-dyslexia/index.html"},{"revision":"a3c8f0a43230d896cffe5c11c8d410d8","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"0dd90519160611d94fe6df57ded19394","url":"what-is-dyslexia/shindan.html"},{"revision":"0677d4e553c0663529e65b64a084a4c1","url":"what-is-dyslexia/who-icd.html"},{"revision":"d939d36f277238404f721a0c28a4287c","url":"what-is-dyslexia/wikipedia-summaries.html"}], {
    ignoreUrlParametersMatching: [/.*/]
  });

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-stylesheets"
    })
  );

  self.addEventListener('activate', function(event) {
    
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {

          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

  self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });

  self.addEventListener("push", function (event) {
    if (event.data) {
      console.log('This push event has data: ', event.data.text());
    } else {
      console.log('This push event has no data.');
    }
  
    const title = "テスト用のタイトル";
    const options = {
      body: "bodyの内容です。",
      icon: '/img/icons/android-chrome-192x192.png',
      badge: '',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}