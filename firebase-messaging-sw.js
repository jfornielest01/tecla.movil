importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCAWM6KyEYGozVP6JfY_EpGv6kGxjWzzPk",
  messagingSenderId: "330090444658",
  appId: "1:330090444658:web:0ab0c98f2ab0235af74feb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body
    }
  );
});
