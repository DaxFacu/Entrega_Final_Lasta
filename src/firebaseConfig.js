import { initializeApp } from "firebase/app";
import { gerFirestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8j7Bb-7zQsSfV44isIYMsiw2wpIWj88k",
  authDomain: "todo3dimpresoras.firebaseapp.com",
  projectId: "todo3dimpresoras",
  storageBucket: "todo3dimpresoras.appspot.com",
  messagingSenderId: "195933700911",
  appId: "1:195933700911:web:72e63b7f0147d9633057da",
};

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROYECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID,
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
