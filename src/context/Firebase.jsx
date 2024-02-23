import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore,collection,getDocs } from 'firebase/firestore';

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

export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const usersCollection = collection(database, 'users');
  const [userName,setUserName] = useState("");
  const val = collection(database,"users");
  useEffect(() => {
    const getData = async () => {
      try {
        
        const querySnapshot = await getDocs(usersCollection);
        console.log(querySnapshot.docs[0].data().userid);
        setUserName(querySnapshot.docs[0].data().userid);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [val]);  
  return (
    <FirebaseContext.Provider value={{userName,setUserName}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const db = getAuth(app);