importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
  workbox.precaching.precacheAndRoute([{"revision":"fe33a9fa98e3f7771d1db22d15a85a91","url":"assessments/index.html"},{"revision":"a51027801a8371b6e0cf36550155b545","url":"ayu-highlight.css"},{"revision":"af8cb160d1456faaa693ba2cd397fa39","url":"book.js"},{"revision":"509f8bd669c6bb7ca9acc9db21f83887","url":"books-info-sources/index.html"},{"revision":"f06c52bfddb458ad87349acf9fac06c5","url":"clipboard.min.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"css/chrome.css"},{"revision":"6659e82767897cd87da39032c3c6e053","url":"css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"css/variables.css"},{"revision":"eafd0dd2db89e9a362c7aa99bde86037","url":"daisy/books.html"},{"revision":"9168a4a169a2cd79a8472572dc5b1541","url":"daisy/daisy4andepub3.html"},{"revision":"c8a6bd3d75eca04dd6b4a92daae8137d","url":"daisy/index.html"},{"revision":"7048a87684ac4571946bf856ca7b7f09","url":"daisy/softwares.html"},{"revision":"f12a859f3f151f5a0e6006a94a76cd53","url":"dyslexia_ogp.jpg"},{"revision":"2b096712b26c89e7ef4cbb7d66bcc3cd","url":"experts.html"},{"revision":"687848eec4ea540caa733906495adda4","url":"favicon.png"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"FontAwesome/css/font-awesome.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"FontAwesome/fonts/fontawesome-webfont.eot"},{"revision":"912ec66d7572ff821749319396470bde","url":"FontAwesome/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"FontAwesome/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"FontAwesome/fonts/fontawesome-webfont.woff2"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"FontAwesome/fonts/FontAwesome.ttf"},{"revision":"973384190aed32ad4c6cd89ab4b2facc","url":"giga-school.html"},{"revision":"cbec6efdb04b3d0b034cdf15e1626905","url":"hairyo/index.html"},{"revision":"50ed071307515c307433f584be7efa0c","url":"hairyo/jouhou-hosyo.html"},{"revision":"4bd834f46572d53999786ac14e3c292c","url":"hairyo/jugyo-school-life.html"},{"revision":"d558fb810dfec4fc94cb47a0f947ee14","url":"hairyo/juken.html"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"highlight.js"},{"revision":"333b3ab85594064c2bdca4b760c7e175","url":"honnin-hogosya-koe.html"},{"revision":"4887b19383150e9cf8e0850322b36e35","url":"index.html"},{"revision":"ccf8350fefe761c84b33e642d43f64c0","url":"kodaira-shi.html"},{"revision":"43f9761a2432fa8611a732e12591a1a8","url":"laws/barrier-free.html"},{"revision":"3941d9f00427c884f72c9fc7fdc7a07b","url":"laws/h31-4-1-kyoikuho-kaisei.html"},{"revision":"5b2dcb1db3cf0bd38ee2f74d8e421242","url":"laws/hattatsu-syogaisya-shien.html"},{"revision":"f7f361d4f2ac5d28d4a5ad3e76a1977f","url":"laws/index.html"},{"revision":"12104bfe49701235af18ebfd02a06c39","url":"laws/kenpou.html"},{"revision":"df845ac142e57276931eb12a8fdc0370","url":"laws/kyokasyo-musho-sochi.html"},{"revision":"3c033f0e8189f24e2f2957b9eab2dfd5","url":"laws/kyokasyo-musho.html"},{"revision":"91680e3112e26de7c6ee586530962b82","url":"laws/sabetsu-kaisyo.html"},{"revision":"5b022eb069ce4138151c928785fc7d19","url":"laws/seishin-hoken-fukushi.html"},{"revision":"9fed3e68acc7e15e5cfb681a6e7a5372","url":"laws/syogai-kihon.html"},{"revision":"27f2bbc2565dcdd1a7c9069723208c63","url":"laws/syogai-sougou-shien.html"},{"revision":"46fd3c41539642dcdad33cb7e351f50c","url":"laws/syogaisya-kenri-joyaku.html"},{"revision":"12cc2675fda175a3bb69c3d982948b3e","url":"learning-supports/h27-tmbe-sido-jujitu.html"},{"revision":"9f3a1219f26934fe7e0fb94e715196dd","url":"learning-supports/h29-ict-katuyo-jireisyu.html"},{"revision":"c53009904cd871085d08cb0536fd9afd","url":"learning-supports/index.html"},{"revision":"e94234d4c43b8f6a7bd22c58988098ce","url":"local-govs/ikkatsu.html"},{"revision":"81537c42ab6c1099ef1ca3eb03a4b54b","url":"local-govs/index.html"},{"revision":"92b71b0fb70a86c196a0dd8635e3c5bf","url":"local-govs/nagano-nanbu-syo.html"},{"revision":"de0907f295b1a733e57426325c06b706","url":"local-govs/osaka-shi.html"},{"revision":"a1b4af3090882a2be70aca726f31dde1","url":"local-govs/shibuya-ku.html"},{"revision":"2b4a9ea5d1dcb15b07d23177167b5393","url":"local-govs/tokyo-gakugei-koganei-syo.html"},{"revision":"2e6a5c68ba912de3f52744b77671d4e5","url":"local-govs/tokyo-hino-shi.html"},{"revision":"86129033cf90e3215ebd8d0a087cdb6c","url":"local-govs/tokyo-tyofu-shi.html"},{"revision":"86318dcd246521e537e127b350b1e9e6","url":"local-govs/ueda-maruko-syo.html"},{"revision":"bd8a7e175073d8538fbdd17798824cc4","url":"onsei-kyouzai-fukyu-kaigi/h29.html"},{"revision":"f908899dc91767eb0d74bb3a4f2b8824","url":"onsei-kyouzai-fukyu-kaigi/h30.html"},{"revision":"30240458bbc2dd6b39b8bd261dff7c7e","url":"onsei-kyouzai-fukyu-kaigi/index.html"},{"revision":"6bb74f8ba16878c2d4cdd27522d3c9e8","url":"onsei-kyouzai-fukyu-kaigi/r1.html"},{"revision":"d190300ad9ccc520bc33e7b1be550854","url":"onsei-kyouzai/access-reading.html"},{"revision":"3c51f4dd6bfed3baad6bc7007bb2eae0","url":"onsei-kyouzai/beam.html"},{"revision":"b5b4e6cb276d73f6b6210a62fc098d76","url":"onsei-kyouzai/e-pat.html"},{"revision":"4754227fefaddc60c8904f4c180bad00","url":"onsei-kyouzai/index.html"},{"revision":"652f3df91094e072606aa4ef8cabdfa0","url":"onsei-kyouzai/pen-touch.html"},{"revision":"2b5e0eefe1cdf1d2134aabc06c92027b","url":"onsei-kyouzai/touch-and-read.html"},{"revision":"d9d68609f347f2449dcaf13d4832e74c","url":"onsei-kyouzai/unlock.html"},{"revision":"bcb1a2a13016a74d5ea72f1d212f9a45","url":"potential-number/h14-mext-survey.html"},{"revision":"046bf71cd616adcaa776ca88fb31a11c","url":"potential-number/h24-mext-survey.html"},{"revision":"bef7d7c465fd66826cf6fa77d4a3217f","url":"potential-number/h25-nise-survey.html"},{"revision":"33ec49d7a54f503d15a72a6b105e2207","url":"potential-number/index.html"},{"revision":"2f8d087a77bc53e90e3ff3fc2614470a","url":"print.html"},{"revision":"dab67ad3bf2a5e900cb01ebef032f8da","url":"register-sw.js"},{"revision":"cccc46e3fa61aae4ef2aec959c35a332","url":"support-groups-activities/do-it-japan.html"},{"revision":"caede4a1c18a31d0d62dcd85cd6e872c","url":"support-groups-activities/index.html"},{"revision":"8d538e9064345d36b445c3c8f93a27b3","url":"syogaisya-techou.html"},{"revision":"af8cb160d1456faaa693ba2cd397fa39","url":"theme/book.js"},{"revision":"651ca6ac060951a5920efa86ada18ae9","url":"theme/css/chrome.css"},{"revision":"6659e82767897cd87da39032c3c6e053","url":"theme/css/general.css"},{"revision":"d8fbfe012d73d4a638a3f7f06956e1db","url":"theme/css/print.css"},{"revision":"3d26620d2eb26af2590719f82526811b","url":"theme/css/variables.css"},{"revision":"687848eec4ea540caa733906495adda4","url":"theme/favicon.png"},{"revision":"6255f56c1e04a0663e76f1c1de6ffdde","url":"theme/highlight.css"},{"revision":"7f5bf8c7d91a73d3352b387b7042e71c","url":"theme/highlight.js"},{"revision":"96bf3cf6fbf52cdd7e4fd454727d8a82","url":"tokyo/hattatu-syogai-kyoiku-suishin-keikaku.html"},{"revision":"325615af22814ab499d1cf7000e33c02","url":"tokyo/index.html"},{"revision":"9fe5eac114e77f7a855d35798380f04f","url":"tokyo/tokubetu-shien-suishin-keikaku.html"},{"revision":"d6aebe1d6dd85f19549fb5026351cb67","url":"tokyo/tokyo-sabetsu-kaisyo-handbook.html"},{"revision":"a947232a1c1e2a761a2f6cc249567f00","url":"tomorrow-night.css"},{"revision":"7022e4e047aa54e561df7c49660c4810","url":"what-is-dyslexia/apa-dsm.html"},{"revision":"5405845df457d14f50da40f2295a4d3f","url":"what-is-dyslexia/cases.html"},{"revision":"816fa98573beab003a6f5d16eb98f775","url":"what-is-dyslexia/celebrities.html"},{"revision":"331a5adfb4e1bde14e0a1c889cd01482","url":"what-is-dyslexia/chino-tests.html"},{"revision":"d98487c90aeef2e977492bab7b659eda","url":"what-is-dyslexia/ida-definition.html"},{"revision":"624d9cda8a49a4c93bf11a66fa8cebc8","url":"what-is-dyslexia/index.html"},{"revision":"20dc3dfc210690977d3a4a84646e4922","url":"what-is-dyslexia/niji-syogai.html"},{"revision":"f4b675eb6037d2df3c02f468fd37ba5b","url":"what-is-dyslexia/shindan.html"},{"revision":"3617145bedda7ed7c5672f22841ac14f","url":"what-is-dyslexia/who-icd.html"},{"revision":"8e30e8c7ae20e12a2ff1ca7b246fd347","url":"what-is-dyslexia/wikipedia-summaries.html"}]);

  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([], {
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

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}