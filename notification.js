var localAddrs = ["localhost", "127.0.0.1", ""];
const API_URL = (localAddrs.indexOf(document.location.hostname) === -1) ? "https://yasutakeyohei.com/notification-api.php" : "http://127.0.0.1:8080/public/notification-api.php"

const TOPIC = 'dyslexia';

const API_SUBSCRIBE_TOKEN_TO_TOPIC = 'subscribe-token-to-topic';
const API_UNSUBSCRIBE_FROM_TOPIC = 'unsubscribe-token-from-topic';
const API_STORE_TOKEN = 'store-token';
const API_DELETE_TOKEN = 'delete-token';

const TOKEN = 'instanceToken';
const TOKEN_SUBSCRIBED_TO_TOPIC = 'subscribedToTopic';

var firebaseConfig = {
  apiKey: "AIzaSyAvfbEl1p4RMbQWcEAcv2w_cc1ThNsB2xQ",
  projectId: "notify-c234b",
  messagingSenderId: "659926117267",
  appId: "1:659926117267:web:70138bb6ddcd8d7b029666",
  measurementId: "G-0D7LN8MP18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const messaging = firebase.messaging();

let subscribeCB = document.getElementById("notify-subscription");
let subscribeEL = document.getElementsByClassName('check-trail')[0];
let howtoP = document.getElementById("how-to-set-notify");

let state = {
  subscriptionChecked: false
}

const setState = async (newState) => {
  state = {
    ...state,
    ...newState
  }; //merge state
  subscribeCB.checked = (state.subscriptionChecked === true);
  await transitionEnd(subscribeEL);
}

/**
 * Wait for checkbox animation end
 */
const transitionEnd = (el) =>
  new Promise(resolve => {
    const transitionEnded = e => {
      el.removeEventListener('transitionend', transitionEnded);
      resolve();
    }
    el.addEventListener('transitionend', transitionEnded);
  });


const alertMessage = (title, description) => {
  GrowlNotification.notify({
    title,
    description,
    image: { visible: true },
    type: 'error',
    position: 'top-left',
    closeTimeout: 5000
  });
}

const successMessage = (title, description) => {
  GrowlNotification.notify({
    title,
    description,
    image: { visible: true },
    type: 'success',
    position: 'top-left',
    closeTimeout: 5000
  });
}

const infoMessage = (title, description) => {
  GrowlNotification.notify({
    title,
    description,
    image: { visible: true },
    type: 'info',
    position: 'top-right',
    closeTimeout: 0
  });
}

/**
 * Post payload to api
 */
const postAPI = async (mode, payload) => {
  try {
    return await axios.post(`${API_URL}/${mode}`, payload);
  } catch (error) {
    return null;
  }
}

/**
 * Request browser notification permission
 */
const requestPermission = async () => {
  let permitted = false;
  const permission = Notification.permission;
  if (permission === "granted") {
    return true;
  }

  setState({ subscriptionChecked: false });
  try {
    const result = await Notification.requestPermission();
    if (result === "denied") {
      alertMessage("通知がブロックされています。", '通知ブロックを解除してください。');
    } else if (result === "default") {
      alertMessage("通知の許可が必要です。", '通知を許可してください。');
    }
    alertMessage(title, msg);
    return (result === "granted");
  } catch (err) {
    console.log(err);
    return false;
  }
}


/**
 * Subscribe app instance to notification topic if user permissions given
 */
const subscribeNotification = async () => {
  const requestPermitted = await requestPermission();
  if (requestPermitted) {
    let storedToken = localStorage.getItem(TOKEN);
    if (storedToken === null) {
      try {
        currentToken = await messaging.getToken(); // returns the same token on every invocation until refreshed by browser
      } catch (err) {
        alertMessage('トークン取得エラー', '通知用トークンが取得できませんでした。時間が経ってから再度お試しください。');
        return false;
      }

      const response = await postAPI(API_STORE_TOKEN, {token: currentToken});
      if(response.data.success) {
        localStorage.setItem(TOKEN, currentToken);
        storedToken = currentToken;
      } else {
        alertMessage('トークン保存エラー', '通知用トークンが保存できませんでした。時間が経ってから再度お試しください。');
        return false;
      }
    }

    const subscribed = await postAPI(API_SUBSCRIBE_TOKEN_TO_TOPIC, {token: storedToken, topic: TOPIC});
    if (subscribed) {
      localStorage.setItem(TOKEN_SUBSCRIBED_TO_TOPIC, "TRUE");
      successMessage('通知登録完了しました', 'コンテンツ更新時にお知らせいたします');
      return true;
    } else {
      alertMessage('トークン登録エラー', '通知サーバーへの登録ができませんでした。時間が経ってから再度お試しください。');
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Unsubscribe app instance from notification topic
 */
const unsubscribeNotification = async () => {
  const storedToken = localStorage.getItem(TOKEN);

  localStorage.removeItem(TOKEN_SUBSCRIBED_TO_TOPIC);
  localStorage.removeItem(TOKEN);

  const response1 = await postAPI(API_UNSUBSCRIBE_FROM_TOPIC, {token: storedToken, topic: TOPIC});
  const response2 = await postAPI(API_DELETE_TOKEN, {token: storedToken});
  if(response1.error) console.log(response1.error.message);
  if(response2.error) console.log(response2.error.message);

  successMessage('登録解除しました', '今後、お知らせは送信されません');

  return true;
}

/**
 * Retrieve initial state from localStorage and permission state
 */
const retrieveInitialState = async () => {
  const subscribedToTopic = (localStorage.getItem(TOKEN_SUBSCRIBED_TO_TOPIC) !== null);
  const permitted  = (Notification.permission === 'granted');
  const subscribed = (subscribedToTopic && permitted);

  await setState({ subscriptionChecked: subscribed });
}

/**
 * Main
 */
const notifyMain = async () => {
  await navigator.serviceWorker.ready;
  await retrieveInitialState();

  //Foreground notification
  messaging.onMessage((payload) => {
    const subscribedToTopic = (localStorage.getItem(TOKEN_SUBSCRIBED_TO_TOPIC) !== null);

    const body = `${payload.notification.body}<br><div><a href="${payload.fcmOptions.link}">ページはこちら</a></div>`;
    const title = payload.notification.title;

    if(subscribedToTopic) {
      infoMessage(title, body);
    }
    console.log("notification message:", title, body);
  });

  //Token refreshed
  messaging.onTokenRefresh(async () => {
    const subscribedToTopic = (localStorage.getItem(TOKEN_SUBSCRIBED_TO_TOPIC) !== null);
    if(subscribedToTopic) {
      const storedToken = localStorage.getItem(TOKEN);
      try {
        const refreshedToken = await messaging.getToken();
        console.log('Token refreshed.');

        if (refreshedToken !== storedToken) {
          await postAPI(API_DELETE_TOKEN, {token: storedToken});
          await postAPI(API_STORE_TOKEN, {token: refreshedToken});
          localStorage.setItem(TOKEN, refreshedToken);
        }

      } catch(err) {
        console.log('Unable to retrieve refreshed token ', err);
        alertMessage("トークン登録エラー", "更新されたトークンが登録できませんでした。再度通知登録をお願いします。");
        setState({ subscriptionChecked: false });
      }
    }
  });

  //Checkbox changed
  subscribeCB.addEventListener('change', async () => {
    howtoP.style.display = 'block';
    if (subscribeCB.checked) {
      await setState({ subscriptionChecked: true });
      const subscribed = await subscribeNotification();
      await setState({ subscriptionChecked: subscribed });
    } else {
      await setState({ subscriptionChecked: false });
      const unsubscribed = await unsubscribeNotification();
      await setState({ subscriptionChecked: !unsubscribed });
    }
  });

}

notifyMain();