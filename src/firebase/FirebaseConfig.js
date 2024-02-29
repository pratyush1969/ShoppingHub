// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYQiPqLR8r8zH9FAV9k6tbRRPohvk0s_8",
    authDomain: "shop-29adc.firebaseapp.com",
    projectId: "shop-29adc",
    storageBucket: "shop-29adc.appspot.com",
    messagingSenderId: "232325957108",
    appId: "1:232325957108:web:2d7b169b7a80905b0665a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)
const auth = getAuth(app)
export { DB, auth }