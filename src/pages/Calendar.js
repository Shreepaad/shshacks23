import React from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
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
    measurementId: "G-0W3FF527SK",
};
initializeApp(firebaseConfig);
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const goog = new GoogleAuthProvider(auth);

const signInWithGoogle = () => {
    console.log("dsaljfsd");
    signInWithPopup(auth, goog)
        .then(() => {
            window.location.assign("./profile");
        })
        .catch(error => {
            console.error(error);
        });
};

const Calendar = () => {
    return (
        <div className="section calendar">
            <h1>Calendar</h1>
            <p>Content</p>
            <button onClick={signInWithGoogle}> signinwithgooogle </button>
        </div>
    );
};

export default Calendar;
