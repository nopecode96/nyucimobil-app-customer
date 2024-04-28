importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBCJ63aM499AkVe3OY5R7S7m3pdJd7MCl4",
  authDomain: "carwash-rype.firebaseapp.com",
  databaseURL: "",
  projectId: "carwash-rype",
  storageBucket: "carwash-rype.appspot.com",
  messagingSenderId: "533555380098",
  appId: "1:533555380098:web:791a657befa6efab44199b",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});