import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGvyebVxly6b8tdMjEmqOnlJohmJ4r7vY",
  authDomain: "emailpasswordlogin-ae0ad.firebaseapp.com",
  projectId: "emailpasswordlogin-ae0ad",
  storageBucket: "emailpasswordlogin-ae0ad.appspot.com",
  messagingSenderId: "812893136140",
  appId: "1:812893136140:web:995f8e6ea6f12e33f25529",
  measurementId: "G-0LYTMWVVWN",
  databaseUrl:"https://emailpasswordlogin-ae0ad-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const db = getAuth(app);