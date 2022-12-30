// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeU4t1z8e7morivsUB_Gw6s4qOwGWfM1c",
  authDomain: "taskit-85674.firebaseapp.com",
  projectId: "taskit-85674",
  storageBucket: "taskit-85674.appspot.com",
  messagingSenderId: "69685771558",
  appId: "1:69685771558:web:d5daa9850fded7a38455e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;