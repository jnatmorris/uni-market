import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCdiNx1IBYXdG7_IeloWZfgiwGCpRTfXHU",
    authDomain: "uni-market-f02ac.firebaseapp.com",
    databaseURL: "https://uni-market-f02ac-default-rtdb.firebaseio.com",
    projectId: "uni-market-f02ac",
    storageBucket: "uni-market-f02ac.appspot.com",
    messagingSenderId: "907050157185",
    appId: "1:907050157185:web:3049a17c08ce7cadccf980",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
