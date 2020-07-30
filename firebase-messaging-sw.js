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
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}