const swFilePath = "/firebase-messaging-sw.js"

const main = async () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swFilePath, {updateViaCache: 'none'})
        .then(registration => {
          messaging.useServiceWorker(registration);
          console.log(`Service Worker registered! Scope: ${registration.scope}`);
        })
        .catch(err => {
          console.log(`Service Worker registration failed: ${err}`);
        });
    });
  }
}

main();