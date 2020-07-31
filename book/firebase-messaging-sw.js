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
  workbox.precaching.precacheAndRoute([{"revision":"69436b1cbcfbce41b5d140f6c0b2794e","url":"about-notification/index.html"},{"revision":"e9e124a7117c4658006c74990f6facd5","url":"about-notification/notification.jpg"},{"revision":"1323c041f5d40a4050c5c1f9cb76e7a9","url":"about-notification/notification2.jpg"},{"revision":"0ed8726c7abf60f1ff2ff4d3580f15df","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"book.js"},{"revision":"2a0d8f9a4b23a9581881a56e1a479b1c","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"0a95094f5d5791ffdf1473fa9b535dc9","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"73f0221f324bc5b816b631759dff2bc7","url":"daisy/books.html"},{"revision":"553727cac6e27629b4844c59a7780f15","url":"daisy/daisy4andepub3.html"},{"revision":"556f74578cc13c119ee26a7459acf9f3","url":"daisy/index.html"},{"revision":"a75404842daec4b27c2187e3366aa1c3","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"ba75c385ee0f2548d0cacb08a50b6ba8","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"4d4e82933ba53cba2401fd53381af88c","url":"giga-school.html"},{"revision":"bb08376d62a145ba7446d7be22e0541b","url":"growl-notification/growl-notification.min.js"},{"revision":"e4fb7bcd0ff227d537a079b274e4df76","url":"growl-notification/light-theme.min.css"},{"revision":"e0880981ed967795b400bdeaa9c7759c","url":"hairyo/index.html"},{"revision":"e44e8e36903d60119fc7490279bf6b1a","url":"hairyo/jouhou-hosyo.html"},{"revision":"30a15c8fb3dd7eb3759e77efdaed5533","url":"hairyo/jugyo-school-life.html"},{"revision":"8ea803ff911588c8a3a63291d69119f0","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"fa26e532c399dea606e3cf622e37ba72","url":"honnin-hogosya-koe.html"},{"revision":"8ae1f3592561ec64d14cfc969f401116","url":"icon-192.png"},{"revision":"e015925a11c9539ef3260cffa64cd414","url":"icon-512.png"},{"revision":"ff00f9c2f0e5a75ef76daccf26f38d52","url":"icon-apple-192.png"},{"revision":"c43f2e043cf033f40618828bab4707ee","url":"index.html"},{"revision":"78396436a2aa2936d98e61f4e98e6146","url":"kodaira-shi.html"},{"revision":"6715735271b2940994d81c71611c6590","url":"laws/barrier-free.html"},{"revision":"6988e58a034e85167acf3b577c471173","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"29dfbdfe0eac5d65d798d44c73d2f9d2","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"21328870e1ddc34fd081996dfbcd40f2","url":"laws/index.html"},{"revision":"ba17bd19f70f02341131ccd848843c5f","url":"laws/kenpou.html"},{"revision":"9728d263235ff1b50f5b79a8cdd2bc71","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"37772e8d288dcaec205aa0212b588053","url":"laws/kyokasyo-musho.html"},{"revision":"6150ae229b0596b65a5f612ef8feb077","url":"laws/sabetsu-kaisyo.html"},{"revision":"5e9ab94ba43570e6cfad077a39b160ab","url":"laws/seishin-hoken-fukushi.html"},{"revision":"149c219c4967dec7526cfb0fd9092437","url":"laws/syogai-kihon.html"},{"revision":"76d95fd0ecb34ac7c9aadf07f6514bdf","url":"laws/syogai-sougou-shien.html"},{"revision":"51d3de76f8b9354f3690aa638b5c241f","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"fc39faf96ea16095e6edf408a609dc58","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"78d3d8ad1445ddcd3fe89931d1aca24f","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"3a8ec6cae0fb3efd880b27d5a4524d40","url":"learning-supports/index.html"},{"revision":"bfc75cb372956b9154aaccc309199ab7","url":"local-govs/ikkatsu.html"},{"revision":"360714910f532cd9752c408abc12cb82","url":"local-govs/index.html"},{"revision":"e39f9c600745974811c8177186a1f39c","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"620d21f589a11d07c40ed4b5b4b42012","url":"local-govs/osaka-shi.html"},{"revision":"6ff8a221c430739dc4206446cc0a7daa","url":"local-govs/shibuya-ku.html"},{"revision":"c8fa7485c4a47d87ccea122644d8741c","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"60ab510a4ca6354f182bffaf023e5264","url":"local-govs/tokyo-hino-shi.html"},{"revision":"733732255cf24ed42107fdca997fdf86","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"e4971cc99cc9551be5c50f1a2702fa8f","url":"local-govs/ueda-maruko-syo.html"},{"revision":"9cb675c5e4a9684126e8ac397d6160a4","url":"notification.js"},{"revision":"8a53404217e4fdce26e9b95103386890","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"2c3366628ec377f382de10573dba5198","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"c6b6124d2394a7cee5452feb76092805","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"8275f20492afdc81d89d2e4586fa9189","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"8b27ce4fcd8c4bdb83c1a1aede875ebb","url":"onsei-kyouzai/access-reading.html"},{"revision":"2437a8609c9a20e97643911f1413151e","url":"onsei-kyouzai/beam.html"},{"revision":"77e01819ba031f9e07bb08fb6ec3359e","url":"onsei-kyouzai/e-pat.html"},{"revision":"0b142965599ef3b494ebbdf7c9bfbd15","url":"onsei-kyouzai/index.html"},{"revision":"32fc1d6b48556ca52a9fd6be5aa865fb","url":"onsei-kyouzai/pen-touch.html"},{"revision":"f59a61056e02f4879ddbdb1d2248c5b0","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"b8fe9c0aefe6377f8b7ea567974b461e","url":"onsei-kyouzai/unlock.html"},{"revision":"25aaa6464eb4ec4e93e1547912c377ef","url":"potential-number/h14-mext-survey.html"},{"revision":"b91aac4b2830cbea8a1310063f4ea6ff","url":"potential-number/h24-mext-survey.html"},{"revision":"d4b54e2eff353a60e7d5aadd33d57935","url":"potential-number/h25-nise-survey.html"},{"revision":"5a61fb5aac93964dd9a294e58490bab4","url":"potential-number/index.html"},{"revision":"da3a086cc0684334b6aa0ac9ea7e5756","url":"print.html"},{"revision":"14f7527f13e7b2b3598891c3b3aac0be","url":"register-sw.js"},{"revision":"584faad81cfbc26093106ac572a0f7e6","url":"support-groups-activities/do-it-japan.html"},{"revision":"ab0d70e71c39da3446a9d7c9f341a293","url":"support-groups-activities/index.html"},{"revision":"921eb5a7a1c38b47cd98e924cd9109c5","url":"syogaisya-techou.html"},{"revision":"ce7ed188168bd6e16ef2906a4f932c81","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"0a95094f5d5791ffdf1473fa9b535dc9","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"592b0a83f77d340182cf552cd9f1e7a3","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"6c8baf12b166aa06e69528067a1baa49","url":"tokyo/index.html"},{"revision":"20950753b4294c39b948f11d3cb66a4c","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"17eea37646254eeaa27d29efdbab81f8","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"9b050fcb84479605cfbaad0206c43471","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"5da071639a079df6a2073cc5f1a0486d","url":"what-is-dyslexia/cases.html"},{"revision":"51d1cc105489c53ed936d026032422e5","url":"what-is-dyslexia/celebrities.html"},{"revision":"97a8c67145596245393d811e63f6ef8b","url":"what-is-dyslexia/chino-tests.html"},{"revision":"dd4399a164b6303687f5a72f7f0f8916","url":"what-is-dyslexia/ida-definition.html"},{"revision":"b3d621d2979e965e8522b26b92928a49","url":"what-is-dyslexia/index.html"},{"revision":"aab91ef9eeddbb3b91673fa53ee4d0d6","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"023de1b51901673663541b93de9970fc","url":"what-is-dyslexia/shindan.html"},{"revision":"d2b93856d311b6850ff7f44b6be60e5d","url":"what-is-dyslexia/who-icd.html"},{"revision":"4245014d5ca2ffb31cc78c6383072ebc","url":"what-is-dyslexia/wikipedia-summaries.html"}], {
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