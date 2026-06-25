importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCQm9pE1KOptRw8MQe7_pooY4ePzR-j57Y",
  authDomain: "labwa2.firebaseapp.com",
  projectId: "labwa2",
  storageBucket: "labwa2.firebasestorage.app",
  messagingSenderId: "401022812294",
  appId: "1:401022812294:web:7ff84cfaec75f5aa565107",
  measurementId: "G-YSKFSS4H8D"
};

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("تم استلام إشعار بالخلفية:", payload);

  const notificationTitle =
    payload.notification?.title || "سجل اللبوة";

  const notificationOptions = {
    body: payload.notification?.body || "يوجد تحديث جديد",
    icon: "/icon.png",
    badge: "/icon.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});