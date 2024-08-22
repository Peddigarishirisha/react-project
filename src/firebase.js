
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  
   apiKey: "AIzaSyDJER3Afu7fvJE69Afim0WMYopha-kK2yU",
   authDomain:"netflix-clone2-9cce1.firebaseapp.com",
   projectId:  "netflix-clone2-9cce1",
   storageBucket:"netflix-clone2-9cce1.appspot.com",
  messagingSenderId:  "122780756261",
  appId: "1:528351523732:web:2f6d2d41642b0744c11581"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

