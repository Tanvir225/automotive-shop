// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALt6Cu3uTrKuvfapk1s1FE27gnxJ8Vr7c",
  authDomain: "automotive-shop-d08aa.firebaseapp.com",
  projectId: "automotive-shop-d08aa",
  storageBucket: "automotive-shop-d08aa.appspot.com",
  messagingSenderId: "796927918621",
  appId: "1:796927918621:web:b668f511e9ca0002497cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth