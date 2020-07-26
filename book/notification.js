const TOPIC = 'dyslexia';

//api
//const ROOT_URL = 'https://yasutakeyohei.com/notification-api.php';
const ROOT_URL = 'http://127.0.0.1:8080/public/notification-api.php';

const API_SUBSCRIBE_TOKEN_TO_TOPIC = 'subscribe-token-to-topic';
const API_UNSUBSCRIBE_FROM_TOPIC = 'unsubscribe-token-from-topic';
const API_STORE_TOKEN = 'store-token';
const API_DELETE_TOKEN = 'delete-token';

const TOKEN = 'instanceToken';
const TOKEN_SUBSCRIBED_TO_TOPIC = 'subscribedToTopic';

/*
var firebaseConfig = {
  apiKey: "AIzaSyAvfbEl1p4RMbQWcEAcv2w_cc1ThNsB2xQ",
  authDomain: "notify-c234b.firebaseapp.com",
  databaseURL: "https://notify-c234b.firebaseio.com",
  projectId: "notify-c234b",
  storageBucket: "notify-c234b.appspot.com",
  messagingSenderId: "659926117267",
  appId: "1:659926117267:web:70138bb6ddcd8d7b029666",
  measurementId: "G-0D7LN8MP18"
};
*/
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
  console.log("changed to " + subscribeCB.checked);
  await transitionEnd(subscribeEL);
}

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
    closeTimeout: 0
  });
}

const successMessage = (title, description) => {
  GrowlNotification.notify({
    image: { visible: true },
    type: 'success',
    position: 'top-left',
    closeTimeout: 0
  });
}

const displayMessage = async (message) => {
  await setState({
    snackbar: true,
    snackbarMessage: message
  });
}

const postAPI = async (mode, payload) => {
  try {
    return await axios.post(`${ROOT_URL}/${mode}`, payload);
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

      response = await postAPI(API_STORE_TOKEN, {currentToken});
      if(response) {
        localStorage.setItem(TOKEN, currentToken);
        storedToken = currentToken;
      } else {
        alertMessage('トークン保存エラー', '通知用トークンが保存できませんでした。時間が経ってから再度お試しください。');
        return false;
      }
    }

    const subscribed = await postAPI(API_SUBSCRIBE_TOKEN_TO_TOPIC, {storedToken, TOPIC});
    if (subscribed) {
      localStorage.setItem(TOKEN_SUBSCRIBED_TO_TOPIC, "TRUE");
      successMessage('登録完了', 'コンテンツの主な更新時に通知致します。');
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
  const isUnSubscribed = await postAPI(API_UNSUBSCRIBE_FROM_TOPIC, {storedToken, TOPIC});
  if (isUnSubscribed) {
    localStorage.removeItem(TOKEN_SUBSCRIBED_TO_TOPIC);
    await postAPI(API_DELETE_TOKEN, {storedToken});
    await setState({
      subscriptionChecked: false
    });
    successMessage('解除完了', '通知登録を解除致しました。');
  } else {
    alertMessage('トークン削除エラー', '時間が経ってから再度お試しください。');
  }
}

const retrieveInitialState = async () => {
  const storedToken = localStorage.getItem(TOKEN);
  const subscribed = (localStorage.getItem(TOKEN_SUBSCRIBED_TO_TOPIC) !== null);
  const permitted = (Notification.permission === 'granted');

  if (!subscribed || !permitted) {
    await setState({ subscriptionChecked: false });
    return;
  }

  // update storedToken if not valid
  if (storedToken !== null) {
    try {
      currentToken = await messaging.getToken();
      if (currentToken !== storedToken) {
        await postAPI(API_DELETE_TOKEN, {storedToken});
        await postAPI(API_STORE_TOKEN, {currentToken});
        localStorage.setItem(TOKEN, currentToken);
      }
    } catch (err) {
      console.log(err);
      //need something
    }
  }
  await setState({ subscriptionChecked: true });
}

const notifyMain = async () => {
  await retrieveInitialState();

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
console.log("nt");
notifyMain();