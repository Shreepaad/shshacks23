import React from "react";
import "./workouts.css";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, ref, set, child ,get, onValue, push, update} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
import data from "./Workouts.json";
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

/*
function updateWorkout(choice) {
    const starCountRef = ref(db, 'Workouts/' + choice );
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const userId = auth.currentUser.uid;
        push(ref(db, 'users/' + userId), {
            workout : data,
            workoutPos : 0  
          });
          console.log(data)
    });
}


 function getWorkout(choice) {
    return get(ref(db, 'Workouts/' + choice)).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        return "loading";
      });
  }

  const printAddress = async () => {
    const a = await getWorkout(2);
    console.log(a)
    return a;
  };
printAddress();

getWorkout(2).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})*/
const currentW = data.Workouts[0];
const d = currentW.name;
const w1 = currentW.w1;
const w2 = currentW.w2;
const w3 = currentW.w3;

console.log(d)
const workouts = () => {
    
    return (







        
    <div className="workouts">
        

        <div className = "p1">
            
            


            </div>

        <div className = "p2">

        <p>Day 2: </p>
            <p>1. Warm up with 5-10 minutes of light cardio (e.g. jumping jacks, high knees, or jump rope) <br/>
                            2. Romanian Deadlifts: 4 sets x 6 reps <br/>
                            3. Dumbbell Lunges: 3 sets x 8 reps (each leg) <br/>
                            4. Glute-Ham Raises: 3 sets x 10 reps <br/>
                            5. Calf Raises (standing): 3 sets x 10 reps <br/>
                            6. Plyometric Box Jumps: 3 sets x 10 reps <br/>
                </p>

        </div>

        <div className = "p3">

        <p>Day 3: </p>
            <p>1. Warm up with 5-10 minutes of light cardio (e.g. jumping jacks, high knees, or jump rope) <br/>
                            2. Squat Jumps: 4 sets x 6 reps <br/>
                            3. Single-Leg Deadlifts: 3 sets x 8 reps (each leg) <br/>
                            4. Kettlebell Swings: 3 sets x 10 reps <br/>
                            5. Seated Calf Raises: 3 sets x 10 reps <br/>
                            6. Box Jumps: 3 sets x 10 reps <br/>
                </p>

        </div>

        <div className = "p4">

        <p>Notes: </p>
            <p>-Rest for 60-90 seconds between sets <br/>
-Use weights that allow you to perform the exercises with good form <br/>
-Increase the weight gradually as you get stronger and more comfortable with the exercises <br/> 
-Be sure to cool down with some light stretching after each workout <br/>
                </p>

                </div>

                <div className="wrapper">
                    
                <button className="b2">Add to Workout</button>
                    </div>
                    <br/>
    </div>
    
    );
    
};

export default workouts;
