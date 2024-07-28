import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// initialize firebaseApp with firebase-config values
const firebaseConfig = {
  apiKey: "AIzaSyAKvuYTUmzdUtwlmRkPyhSMNMP_BIeaAuA",
  authDomain: "linkedin-clone-44c51.firebaseapp.com",
  projectId: "linkedin-clone-44c51",
  storageBucket: "linkedin-clone-44c51.appspot.com",
  messagingSenderId: "284298472707",
  appId: "1:284298472707:web:f307eb75b9d1eddf15cd36"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
