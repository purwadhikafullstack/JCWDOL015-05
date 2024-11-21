// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, getauth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7sCN3eNdoocTf0Jg_BiijGFWRoORRio4",
  authDomain: "wash-now-706cf.firebaseapp.com",
  projectId: "wash-now-706cf",
  storageBucket: "wash-now-706cf.firebasestorage.app",
  messagingSenderId: "998673475341",
  appId: "1:998673475341:web:09e91871e94cda24223244",
  measurementId: "G-2Y01Q05XVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);

export {auth, provider, signInWithPopup, signInWithRedirect}