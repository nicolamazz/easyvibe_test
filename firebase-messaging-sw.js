importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDgsCOdqyzN54mU9LAgYm4ucvFvpSWYy9A",
    authDomain: "easyvibe-eb29a.firebaseapp.com",
    projectId: "easyvibe-eb29a",
    storageBucket: "easyvibe-eb29a.appspot.com",
    messagingSenderId: "719598113229",
    appId: "1:719598113229:web:86c3144fc30f7db1b33484",
    measurementId: "G-YM0527CQT3"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});