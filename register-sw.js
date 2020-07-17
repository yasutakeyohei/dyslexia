var localAddrs = ["localhost", "127.0.0.1", ""];
const swFilePath = (localAddrs.indexOf(document.location.hostname) === -1) ? "/books/dyslexia/firebase-message-sw.js" : "/firebase-message-sw.js"


const main = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swFilePath)
        .then(registration => {
          if (registration.waiting) {
            updateReady(registration.waiting);
            return;
          }
          if (registration.installing) {
            trackInstalling(registration.installing);
            return;
          }

          registration.addEventListener("updatefound", function() {
            trackInstalling(registration.installing);
          });

          console.log(`Service Worker registered! Scope: ${registration.scope}`);
        })
        .catch(err => {
          console.log(`Service Worker registration failed: ${err}`);
        });
    });
  }
}

const trackInstalling = (worker) => {
  worker.addEventListener("statechange", function() {
    if (worker.state == "installed") {
      updateReady(worker);
    }
  });
}

const updateReady = (worker) => {
  /*
  var res = confirm("New version available, reload page?");
  if (res) {
    */
    worker.postMessage({ action: "skipWaiting" });
    location.reload();
  /*}*/
}

main();