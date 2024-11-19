// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuHJL-auWyFZlQECX7Ji3mnRU0Auravw8",
  authDomain: "laundry-purwadhika.firebaseapp.com",
  projectId: "laundry-purwadhika",
  storageBucket: "laundry-purwadhika.appspot.com",
  messagingSenderId: "430323104247",
  appId: "1:430323104247:web:65a7e62876c0aa70df56f2",
  measurementId: "G-R269R1E9Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);