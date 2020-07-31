importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

firebase.initializeApp({
  messagingSenderId: "659926117267",
  projectId: "notify-c234b",
  apiKey: "AIzaSyAvfbEl1p4RMbQWcEAcv2w_cc1ThNsB2xQ",
  appId: "1:659926117267:web:70138bb6ddcd8d7b029666",
});

const messaging = firebase.messaging();

self.addEventListener('notificationclick', event => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});

// backgroundメッセージ
messaging.setBackgroundMessageHandler(payload => {
  console.log('Handling background message', payload);

  const subscribedToTopic = (localStorage.getItem(TOKEN_SUBSCRIBED_TO_TOPIC) !== null);

  if (subscribedToTopic) {
    return self.registration.showNotification(payload.title, {
      body: payload.body,
      icon: payload.icon,
      data: payload.link,
    });
  }
});

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  self.addEventListener('install', event => {
    self.skipWaiting();
  });
  workbox.precaching.precacheAndRoute([{"revision":"6f1c490960cc4e14696a935e3b1baea8","url":"about-notification/index.html"},{"revision":"e9e124a7117c4658006c74990f6facd5","url":"about-notification/notification.jpg"},{"revision":"1323c041f5d40a4050c5c1f9cb76e7a9","url":"about-notification/notification2.jpg"},{"revision":"1e24f88c26a9287259f82bfa6c34644b","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"book.js"},{"revision":"8395759e83d232c348f02f63e38c40e4","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"e220eb2079837fbcc9fbde7f8ea22f0d","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"9f8c20ca64aaa494273091a775f3cb66","url":"daisy/books.html"},{"revision":"2389ed04274c8e1c248ceb38ea4b7300","url":"daisy/daisy4andepub3.html"},{"revision":"e8260a959dca0c9350ece401852554ec","url":"daisy/index.html"},{"revision":"997cbfa04de25a520ee6b32ad08f5ce9","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"2d17013ac17478455fe2adf8e5333541","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"ca2dc6a35a83e67fa9bd23fd7fa953f1","url":"giga-school.html"},{"revision":"bb08376d62a145ba7446d7be22e0541b","url":"growl-notification/growl-notification.min.js"},{"revision":"e4fb7bcd0ff227d537a079b274e4df76","url":"growl-notification/light-theme.min.css"},{"revision":"fa73b63d80ef70476541f7502cdadee4","url":"hairyo/index.html"},{"revision":"ab02f1485e2f05ff3e91bb8721f72c67","url":"hairyo/jouhou-hosyo.html"},{"revision":"1b3b6d73c4be4ac4e4d79d11136cba71","url":"hairyo/jugyo-school-life.html"},{"revision":"f58e1fb9c21532967d1822d2c3e27e62","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"c2283d45a4ef37d7a4d25d3e2b84ed0f","url":"honnin-hogosya-koe.html"},{"revision":"8ae1f3592561ec64d14cfc969f401116","url":"icon-192.png"},{"revision":"e015925a11c9539ef3260cffa64cd414","url":"icon-512.png"},{"revision":"ff00f9c2f0e5a75ef76daccf26f38d52","url":"icon-apple-192.png"},{"revision":"aefd289d3035daed361cb5e2f0556200","url":"index.html"},{"revision":"89bddc85c4603b546723d4deb7793b48","url":"kodaira-shi.html"},{"revision":"b6a1be511d73c37b5a152559351c1502","url":"laws/barrier-free.html"},{"revision":"5ab0302981cef8913a78818f07086553","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"fa678c730d379470858ddb22d0607f7d","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"24ae89793422af3b9c85603d239c9082","url":"laws/index.html"},{"revision":"ca3bc6cfe472ce8db6d6efef69b6d353","url":"laws/kenpou.html"},{"revision":"9db5233f98d2bb5bf5c4444ab6c4243a","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"986f583fe7cc1f5fdd9e08be850930ea","url":"laws/kyokasyo-musho.html"},{"revision":"1180991a87dda242f10b712605fac447","url":"laws/sabetsu-kaisyo.html"},{"revision":"5dce05ffadde9d8569ec59bd653d05c4","url":"laws/seishin-hoken-fukushi.html"},{"revision":"912ae6ec52d813ccc677e11483da0482","url":"laws/syogai-kihon.html"},{"revision":"21b8dc557b053b2fbc50fffe09f26d07","url":"laws/syogai-sougou-shien.html"},{"revision":"bc8e3820d67d9c5f0d254c12c9f94fda","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"92e7c09e17309b384dbb5424835aa07e","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"cf0818eb462795121e264a34194133d3","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"87e12da1096198f12ed995cc25bfaaf1","url":"learning-supports/index.html"},{"revision":"ab94a1fd4a15c2150ac40261f8c0a4bd","url":"local-govs/ikkatsu.html"},{"revision":"50850ab498e6bb1ac36314b041f06ba8","url":"local-govs/index.html"},{"revision":"d2ed45e78e646d9ffb32ce0b5e65fb5a","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"dcdec316a8f78a783cc0fa342709a493","url":"local-govs/osaka-shi.html"},{"revision":"b859a30fb60693956ef939a2d5696969","url":"local-govs/shibuya-ku.html"},{"revision":"0bf03337af660c5b6d09cbe3a432a845","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"2811d1c71732554d1515ff09f5d317a8","url":"local-govs/tokyo-hino-shi.html"},{"revision":"fac5d30cb310301084bf126178d0666f","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"6ba97ea10d5bfd8d93d979b14326631c","url":"local-govs/ueda-maruko-syo.html"},{"revision":"9cb675c5e4a9684126e8ac397d6160a4","url":"notification.js"},{"revision":"c6fc19146d2af0b1444b629504c9b964","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"601d49215b0a9c5c7591e5d18a7a4129","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"f4b57a81529ccc1e5c09649470ce72eb","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"a0e0a6c32875d48f2b76b7e5a763e0a2","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"0850de2e642253acb9395a85f8a82883","url":"onsei-kyouzai/access-reading.html"},{"revision":"e1d65a99cddaf505c6610d1db2065add","url":"onsei-kyouzai/beam.html"},{"revision":"081ab0586de2390d2121cb2b217d7453","url":"onsei-kyouzai/e-pat.html"},{"revision":"5f506a3babae5f35cdcad8e48d4f1d98","url":"onsei-kyouzai/index.html"},{"revision":"4ec873bd05a15875c4ffc8792af78518","url":"onsei-kyouzai/pen-touch.html"},{"revision":"d75107a7e2a8d7897bdf53b1abe0b18d","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"3c03035da6a7f1afb3f5efc0d3abeca9","url":"onsei-kyouzai/unlock.html"},{"revision":"c21faa46b36b31be0f9407c1ea0375b0","url":"potential-number/h14-mext-survey.html"},{"revision":"ad8b90b18fad696c7dd9493fe2b3e9cd","url":"potential-number/h24-mext-survey.html"},{"revision":"1ce6e4e9022930346240e9642740c10f","url":"potential-number/h25-nise-survey.html"},{"revision":"51eea68cc253864b543cfc996629ac7f","url":"potential-number/index.html"},{"revision":"bf0a39cf695369bd12b7046e96f300ad","url":"print.html"},{"revision":"bed95da93d1cd948693f74dfd2e5b5b1","url":"register-sw.js"},{"revision":"3e024bcb5a9b5bba788866892d7f241d","url":"support-groups-activities/do-it-japan.html"},{"revision":"05f37132214cca7a52cbcc7aeaa18fbe","url":"support-groups-activities/index.html"},{"revision":"29ac2ced9e42917962a6e545c7e8d16e","url":"syogaisya-techou.html"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"e220eb2079837fbcc9fbde7f8ea22f0d","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"8b2f872e0f32853a8a0a144f99eabc05","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"2d0e487e9bb7cf990dd165804d301fa0","url":"tokyo/index.html"},{"revision":"54621fa5312dbdcce53a0daee5b905fe","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"392b204520a6937f6163a1959bddafff","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"4f273bb56f4142eb4b3cdf20707ae530","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"7408b51ebd5d01dfd1dfd747029a87a1","url":"what-is-dyslexia/cases.html"},{"revision":"f0eea7d3e3da748e845d150e2637edb1","url":"what-is-dyslexia/celebrities.html"},{"revision":"c90e0a6acde0078674ad022235000e90","url":"what-is-dyslexia/chino-tests.html"},{"revision":"119c1fe4ff2dff562a0490ce14f5fc3c","url":"what-is-dyslexia/ida-definition.html"},{"revision":"da56b57ff1756f39eaac7d26268404ee","url":"what-is-dyslexia/index.html"},{"revision":"fc3865aedeb057b77fc5d802eb0e261c","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"0dad637f3e2f9c08cd28ab0a7587e4a0","url":"what-is-dyslexia/shindan.html"},{"revision":"b0f59c7c593e6a212097f2663d8afc9d","url":"what-is-dyslexia/who-icd.html"},{"revision":"392186e5008925960caefff6c3c7ce3c","url":"what-is-dyslexia/wikipedia-summaries.html"}], {
    ignoreUrlParametersMatching: [/.*/]
  });

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-stylesheets"
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}