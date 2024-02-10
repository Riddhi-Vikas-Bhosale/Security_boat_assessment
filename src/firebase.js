import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVijCX6D-vv9jH6EV-o3k0YNGZJF2EXmg",
  authDomain: "securtiyboat.firebaseapp.com",
  projectId: "securtiyboat",
  storageBucket: "securtiyboat.appspot.com",
  messagingSenderId: "1058702406654",
  appId: "1:1058702406654:web:8b266217ac597f848506af",
  measurementId: "G-XT61Z2CZY9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;
