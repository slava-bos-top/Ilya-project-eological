// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDNm3quIIAk_QmB7KPBAuzyDNp_7QFD2s",
    authDomain: "eco-pard.firebaseapp.com",
    projectId: "eco-pard",
    storageBucket: "eco-pard.appspot.com",
    messagingSenderId: "45381305579",
    appId: "1:45381305579:web:c92cec86389e2085566aae"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database: any = getFirestore(app);
export const firestore = () => {
  getFirestore()
}