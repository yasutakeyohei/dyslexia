importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
  "https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js",
  "https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js"
);

firebase.initializeApp({
  messagingSenderId: "659926117267"
});

const messaging = firebase.messaging();

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
      clients.openWindow(event.action);
  }
  event.notification.close();
}); 

if (workbox) {
   console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{"revision":"bf87fd1f8dde06195d714bd10d6d7cad","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"book.js"},{"revision":"00c1317e97ac3519d891e977d22870b5","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"698be65e847933deecce987c61d09ffb","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"f906e4fb295d0e7371baa0e169f9cf1d","url":"daisy/books.html"},{"revision":"220d1314305c081ee9a70225e6e00633","url":"daisy/daisy4andepub3.html"},{"revision":"fcefc538cbb237a665efc3b4eb9535e8","url":"daisy/index.html"},{"revision":"ffc600eee3494bc47d97581bbd3651c9","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"404467aa3a679d17c52aab258b0fd3d2","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"c9779f831989eeaffc354afb90d49405","url":"giga-school.html"},{"revision":"68be1fb2fd043278b7aedeac95a5ecb3","url":"growl-notification/colored-theme.min.css"},{"revision":"bb08376d62a145ba7446d7be22e0541b","url":"growl-notification/growl-notification.min.js"},{"revision":"027b49deeaa67b3677a32e89fdfbb7cd","url":"hairyo/index.html"},{"revision":"4d66daef1b64690a9aeead6e8be030fb","url":"hairyo/jouhou-hosyo.html"},{"revision":"c08e6f672420fc363db87bde14d1ec30","url":"hairyo/jugyo-school-life.html"},{"revision":"83cf354db0706f9666d7c4e0099deb91","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"d500a2e93db440df05d1d6936f2b678b","url":"honnin-hogosya-koe.html"},{"revision":"8ae1f3592561ec64d14cfc969f401116","url":"icon-192.png"},{"revision":"e015925a11c9539ef3260cffa64cd414","url":"icon-512.png"},{"revision":"ff00f9c2f0e5a75ef76daccf26f38d52","url":"icon-apple-192.png"},{"revision":"06443fc96614be8f39e5875a4c9f8d64","url":"index.html"},{"revision":"c22360d05f5014f324fddf8a9b54a5d0","url":"kodaira-shi.html"},{"revision":"1807bf817f0b487039dba936db4ef9e6","url":"laws/barrier-free.html"},{"revision":"edb59d09d2e6b8ded169a9313ae4b095","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"e6086f1239eb4fcacd4dff5652eb9eec","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"783d7798e4ae8c51bdf3e47b59699b63","url":"laws/index.html"},{"revision":"a82fa038c15be796c91b5dc3191a76b3","url":"laws/kenpou.html"},{"revision":"71ab77f12faff3fb84fd0b91a9447c6f","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"f809146296994adbe876ea17e93adabb","url":"laws/kyokasyo-musho.html"},{"revision":"529b515f0b912cdf4a9f995deeff652d","url":"laws/sabetsu-kaisyo.html"},{"revision":"adf8c0cff1757b32285d96b470b41c6b","url":"laws/seishin-hoken-fukushi.html"},{"revision":"5c88f06203717d2080efd3d7a691048d","url":"laws/syogai-kihon.html"},{"revision":"2e5fb1343b6508a2e9c2ea0501e76edd","url":"laws/syogai-sougou-shien.html"},{"revision":"e3b5679d2a5f76b5bb6c9f2592ace1db","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"2ef2b16534dcb0a912208da7d7a73e6c","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"babe0d382b3069bf7b172d63a2c61321","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"e5b9a2b73b620a4aed00e9886b45e0a1","url":"learning-supports/index.html"},{"revision":"3e14a4a8a2d96880a0147f139bfdab2a","url":"local-govs/ikkatsu.html"},{"revision":"d25c339103a739c2468481b4ad178877","url":"local-govs/index.html"},{"revision":"34decbace5eed25eaba12000cf245519","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"8bd26a35b5bec3657ada667cfb7beff3","url":"local-govs/osaka-shi.html"},{"revision":"01eb15a834b8e399c6689a3bcd160b94","url":"local-govs/shibuya-ku.html"},{"revision":"ae00c22a3d81da7bb5986d0bfe10c494","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"1b90b2e115fb7221d06787d5a4efca68","url":"local-govs/tokyo-hino-shi.html"},{"revision":"c842ff2405062c1ca5856d04f0dcbda3","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"3fbf6ffa8c712c4edf8659bed42469b5","url":"local-govs/ueda-maruko-syo.html"},{"revision":"81dadf3a9453405e29cbf2764020c79f","url":"notification.js"},{"revision":"2cae6ebf7fb08899aad64c8e64ff0cdb","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"7833e6b9d40ec4a156a4a57c4c8ec540","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"8ad353ee41ab4a3de5de67ba394a8245","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"4ba9db7aa0e0d6c06c00ebda4f337ef4","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"bc6e67bde2626c21ebe50e8a98c20516","url":"onsei-kyouzai/access-reading.html"},{"revision":"46c6b278d656a140ff63bea90eca1f4e","url":"onsei-kyouzai/beam.html"},{"revision":"6a44a5ba1e69b2be931f47b4cb74b23e","url":"onsei-kyouzai/e-pat.html"},{"revision":"ac88eee49f29bc0c753769cda3a904f0","url":"onsei-kyouzai/index.html"},{"revision":"677987e17270f58979f363c96775750a","url":"onsei-kyouzai/pen-touch.html"},{"revision":"dcaba5521cd39d55c1895dafff7e4fff","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"cd727fc551c86d0a56d2fe9b4a5d981e","url":"onsei-kyouzai/unlock.html"},{"revision":"9b7792c3dae3ff08866793b4c1125de3","url":"potential-number/h14-mext-survey.html"},{"revision":"491e0124517c753fc59fd9810a76916d","url":"potential-number/h24-mext-survey.html"},{"revision":"2068b47e6afa04a5dc96c393c104b146","url":"potential-number/h25-nise-survey.html"},{"revision":"61f0920fb5854b25baa334f3ebfc573b","url":"potential-number/index.html"},{"revision":"5939649152d560888716b206b82106d0","url":"print.html"},{"revision":"678ae8f6a6d073d3c560808fd35d7e49","url":"register-sw.js"},{"revision":"d66c8f86a7aaa02a65a3bc673bc6ec04","url":"support-groups-activities/do-it-japan.html"},{"revision":"1b82a360680bc701af0ee720967711dc","url":"support-groups-activities/index.html"},{"revision":"69e30ee84bc7eae9854bbeb87718ec84","url":"syogaisya-techou.html"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"698be65e847933deecce987c61d09ffb","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"c14e61fad37b98eb52bd9f2de7cd01d4","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"1abbbfc699bd268002e66bebb0671288","url":"tokyo/index.html"},{"revision":"954a8305a51fa93b8370987103f28ffe","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"9a2ad8333c7ac93e0d4c3cf7f7ad6e50","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"98dae176352e6200ca7a273b9f82c84b","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"af490d1c8448935dce3c03100773734e","url":"what-is-dyslexia/cases.html"},{"revision":"f915abd414c761a2f50711233eabcaf2","url":"what-is-dyslexia/celebrities.html"},{"revision":"f78b59dfe2626ce728d5513113b0db94","url":"what-is-dyslexia/chino-tests.html"},{"revision":"c067dac973a3ebd67f1fe147cc22c75d","url":"what-is-dyslexia/ida-definition.html"},{"revision":"b16d3178977ceaf8695ede6d958e6fbd","url":"what-is-dyslexia/index.html"},{"revision":"dc8e49417be14d56097c06a3f59cb19f","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"d20b9c4cfff5fa97c9ff16566108f284","url":"what-is-dyslexia/shindan.html"},{"revision":"62e5c5db3ea87bd87a1e0da845f408a8","url":"what-is-dyslexia/who-icd.html"},{"revision":"8e90d2ed13083f66de3d15eab04aa734","url":"what-is-dyslexia/wikipedia-summaries.html"}], {
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