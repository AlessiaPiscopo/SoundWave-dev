// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQz-2CpSU-UjSpIC3Rm0zYktjkt_yTS-s",
  authDomain: "soundwave-dev-f5472.firebaseapp.com",
  projectId: "soundwave-dev-f5472",
  storageBucket: "soundwave-dev-f5472.appspot.com",
  messagingSenderId: "32977672277",
  appId: "1:32977672277:web:2d152ebc0b3232fb1d1cdc",
};

// Initialize Firebase
app = initializeApp(firebaseConfig);

export const db = getFirestore();
