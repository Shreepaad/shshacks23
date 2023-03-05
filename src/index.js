import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEKA9Dql4I2PABOPBCTKrJE8POVUXpgmg",
  authDomain: "sportif-973dd.firebaseapp.com",
  projectId: "sportif-973dd",
  storageBucket: "sportif-973dd.appspot.com",
  messagingSenderId: "695901937762",
  appId: "1:695901937762:web:b651907d68d404b366f13b",
  measurementId: "G-0W3FF527SK"
};

const app = initializeApp(firebaseConfig);

/*onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in');
    } else {
        console.log('No user');
    }
})*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
