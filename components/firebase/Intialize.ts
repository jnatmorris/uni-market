import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCdiNx1IBYXdG7_IeloWZfgiwGCpRTfXHU",
    authDomain: "uni-market-f02ac.firebaseapp.com",
    databaseURL: "https://uni-market-f02ac-default-rtdb.firebaseio.com",
    projectId: "uni-market-f02ac",
    storageBucket: "uni-market-f02ac.appspot.com",
    messagingSenderId: "907050157185",
    appId: "1:907050157185:web:3049a17c08ce7cadccf980",
};

export const app = initializeApp(firebaseConfig);
