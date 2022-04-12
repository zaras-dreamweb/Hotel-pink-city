// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCROLZlySa632o7V7GmsSO8MRJ0nKxZIeY",
    authDomain: "hotel-pink-city.firebaseapp.com",
    projectId: "hotel-pink-city",
    storageBucket: "hotel-pink-city.appspot.com",
    messagingSenderId: "246111849531",
    appId: "1:246111849531:web:aeedd1c360be160c1f601e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;