import React from "react";
import {
    CalendarMonthOutlined,
    LocalFireDepartmentOutlined,
    SportsBasketballOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
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
const googleauth = new GoogleAuthProvider(auth);
const db = getDatabase(firebaseapp);



const signInWithGoogle = () => {
    signInWithPopup(auth, googleauth)
    .then(() => {
        window.location.assign('./profile');
    })
    .catch(error => {
        console.error(error);
    })
}
function writeUserData() {
    const userId = auth.currentUser.uid;
    set(ref(db, 'users/' + userId), {
      username: "name",
      email: "email",
      profile_picture : "imageUrl",
      workout : ["d", "D"]
    });
}


const Navbar = () => {
    return (
        <div className="Sidebar">
            <h1 className="logo">
                <NavLink to="/">Sportif</NavLink>
            </h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/calendar">
                        <CalendarMonthOutlined
                            style={{ justifySelf: "flex-start" }}
                        />
                        <p>Calendar</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/training">
                        <LocalFireDepartmentOutlined />
                        <p>Training</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/athletics">
                        <SportsBasketballOutlined />
                        <p>Athletics</p>
                    </NavLink>
                </li>
                <li className="login">
                    <button onClick = {signInWithGoogle}> Sign In With Google </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
