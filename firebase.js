import * as firebase from "firebase/compat";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEpd0rZxheOLUF9YknToUmQJssJyVZZuY",
  authDomain: "signal-clone-yt-build-fa836.firebaseapp.com",
  projectId: "signal-clone-yt-build-fa836",
  storageBucket: "signal-clone-yt-build-fa836.appspot.com",
  messagingSenderId: "603193150453",
  appId: "1:603193150453:web:0f341cbfb40747248c6ebc",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
