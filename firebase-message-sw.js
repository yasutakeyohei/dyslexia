importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
   console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
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