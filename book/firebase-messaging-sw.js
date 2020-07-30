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
  workbox.precaching.precacheAndRoute([{"revision":"359bdb281e34cf1d761a69d8a4479839","url":"about-notification/index.html"},{"revision":"e9e124a7117c4658006c74990f6facd5","url":"about-notification/notification.jpg"},{"revision":"1323c041f5d40a4050c5c1f9cb76e7a9","url":"about-notification/notification2.jpg"},{"revision":"9df27f9964e6d9d07efd7316f5ba5650","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"book.js"},{"revision":"09e324d262ef8f7820740b083a0a23a2","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"0a95094f5d5791ffdf1473fa9b535dc9","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"01f6d0f73a8d06ea40f26eb119a4f6a5","url":"daisy/books.html"},{"revision":"b583665c151a957f45958f2d55175311","url":"daisy/daisy4andepub3.html"},{"revision":"91291fbcaeb8c3dcae38e76ad2a41d9e","url":"daisy/index.html"},{"revision":"38789f11b00c8a47823fa8f3083d8838","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"67f2e235420e14ccbc680955cd0ae9c5","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"dbfbf70598f3514947f38d8ae8b0662d","url":"giga-school.html"},{"revision":"bb08376d62a145ba7446d7be22e0541b","url":"growl-notification/growl-notification.min.js"},{"revision":"e4fb7bcd0ff227d537a079b274e4df76","url":"growl-notification/light-theme.min.css"},{"revision":"03b4f992baa35c9f86f77415b9991e14","url":"hairyo/index.html"},{"revision":"abe578ff9127d8b1ceb2068253b7e9ce","url":"hairyo/jouhou-hosyo.html"},{"revision":"9ea7b228b7c92648614c48a30c01735b","url":"hairyo/jugyo-school-life.html"},{"revision":"5c251b6bad194f681599d05256652693","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"29b5c1c7a87938ed9578a42fad256e00","url":"honnin-hogosya-koe.html"},{"revision":"8ae1f3592561ec64d14cfc969f401116","url":"icon-192.png"},{"revision":"e015925a11c9539ef3260cffa64cd414","url":"icon-512.png"},{"revision":"ff00f9c2f0e5a75ef76daccf26f38d52","url":"icon-apple-192.png"},{"revision":"d4ebde72ee2f4f2eaa8e73fedb3e5339","url":"index.html"},{"revision":"e97d2687393a9813d2be12cb67d740e5","url":"kodaira-shi.html"},{"revision":"f1c2d61080308b8c8f6ac591f349f341","url":"laws/barrier-free.html"},{"revision":"0b39f6d63d58f727b49bd292de3903db","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"39a2f64452056b5ea1e1b8759371a05d","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"b64eb66045ffe8abd39f01cffdfb9e45","url":"laws/index.html"},{"revision":"d2b67068b6bc698f2921e1cbcee92a35","url":"laws/kenpou.html"},{"revision":"1e1e3011cba450398a3dd5c953581c43","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"0e1c24699479dee6f8eda7ee40a7b713","url":"laws/kyokasyo-musho.html"},{"revision":"4821187144f4c81f1693bc72b6a6006d","url":"laws/sabetsu-kaisyo.html"},{"revision":"c7b43c1dec5a313b7cc89a575281c0fd","url":"laws/seishin-hoken-fukushi.html"},{"revision":"def5f7445649af884769ff9c578669dd","url":"laws/syogai-kihon.html"},{"revision":"7deb685100f198b05043e52b51ab14ca","url":"laws/syogai-sougou-shien.html"},{"revision":"f9437487caa300842042011849e05bc3","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"96d34970d2c21f5ea74fc9b7dcf3bab6","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"b30ec8a316d05adcadbcaa104b2cb89a","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"716371b2a2a80bcea2c720dca7206f1c","url":"learning-supports/index.html"},{"revision":"71921d9f44d8cbdd044c607605ea040b","url":"local-govs/ikkatsu.html"},{"revision":"f4cf77900a407108545a783774bc101c","url":"local-govs/index.html"},{"revision":"47d62a48caac2ff114eb72d392971f8b","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"fc16d7ef7d7584ee0ec340a5229b1e1c","url":"local-govs/osaka-shi.html"},{"revision":"9cd5bb19f57025a5cbc14abb21b26a1e","url":"local-govs/shibuya-ku.html"},{"revision":"e8633fe7eadc461d5a8f2596359a5b1c","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"411d3c038857a482848950aade37c9c3","url":"local-govs/tokyo-hino-shi.html"},{"revision":"38c1c1f1f527ea93a637c84ba171c135","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"fdf38ea8e42fd61a8ff9a9a479214fb3","url":"local-govs/ueda-maruko-syo.html"},{"revision":"be20e6b8236c9ab18958d634e3d2a684","url":"notification.js"},{"revision":"1313699fff6a6aa46140a9cdc6d2ebbb","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"1740f508d7ebfa3c710670a5be511e8a","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"f1268d97fa06920511c42d79574ae549","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"2f3fbd7b4e839cf1f4f369002e5f24a2","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"c9c2b1c82a877e7681ad580a358bbc1d","url":"onsei-kyouzai/access-reading.html"},{"revision":"999b5feb5967b075544164d97b3a653d","url":"onsei-kyouzai/beam.html"},{"revision":"7e0c971a03789dd917b7f652f39c5668","url":"onsei-kyouzai/e-pat.html"},{"revision":"beb85b92332ddca8dc457018a60903a0","url":"onsei-kyouzai/index.html"},{"revision":"40f99954722eb85b94160600c396c155","url":"onsei-kyouzai/pen-touch.html"},{"revision":"2fbfdf5144b5081e6b3e060813ed705a","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"0ec76e3bb07f5141c7f8b807ce0b4afa","url":"onsei-kyouzai/unlock.html"},{"revision":"73281be786d555edd5a3277129a84d6b","url":"potential-number/h14-mext-survey.html"},{"revision":"8ba55d1e5f835f2bb3c1d195e54f00a4","url":"potential-number/h24-mext-survey.html"},{"revision":"7665d1016f92d5f64ca87d841f3b0c11","url":"potential-number/h25-nise-survey.html"},{"revision":"513e282514ef0cdf3d3c3ebc5f79dbaa","url":"potential-number/index.html"},{"revision":"1655262dc72e51421f03484b6e2697ff","url":"print.html"},{"revision":"14f7527f13e7b2b3598891c3b3aac0be","url":"register-sw.js"},{"revision":"1fe70c44507c9b2043442214d98aa465","url":"support-groups-activities/do-it-japan.html"},{"revision":"cb9c229e57f530ec862e5dc104d61503","url":"support-groups-activities/index.html"},{"revision":"84335fcaca781b1dc39b43a58af61c11","url":"syogaisya-techou.html"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"0a95094f5d5791ffdf1473fa9b535dc9","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"fb98e106c76406cf72b6001837368910","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"036745571652f983287a2ebf43f0c097","url":"tokyo/index.html"},{"revision":"72b33d76121728da9a78cad6ed20576e","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"a5676638c0e6c847217d4d2771fa0a3d","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"cec5cab62a32bb8b4cdb0c28fc708020","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"6c112368b99526bc8627ca9bbb44dbac","url":"what-is-dyslexia/cases.html"},{"revision":"9068d24e15da397483820d1aede15666","url":"what-is-dyslexia/celebrities.html"},{"revision":"ce41c3565b1da6d69486e5065c1a3b7e","url":"what-is-dyslexia/chino-tests.html"},{"revision":"101ed95df6803680e7e3a39e3b1bce37","url":"what-is-dyslexia/ida-definition.html"},{"revision":"58e9e04bf87d3c2c16551b4b6ba36acd","url":"what-is-dyslexia/index.html"},{"revision":"eaa1c49bd099df968238ee408b096f98","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"4eb704fcb0f24d8fad704d48451bb369","url":"what-is-dyslexia/shindan.html"},{"revision":"8600668faee9f1c246760cd4f47aab25","url":"what-is-dyslexia/who-icd.html"},{"revision":"2f28f8126f76a9619d1713a36eee5327","url":"what-is-dyslexia/wikipedia-summaries.html"}], {
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