import React from "react";
import "./workouts.css";

const workouts = () => {
    return (
        <div className="workouts">
            <div className="p1">
                <p>Day 1: </p>
                <p>
                    1. Warm up with 5-10 minutes of light cardio (e.g. jumping
                    jacks, high knees, or jump rope) <br />
                    2. Barbell Squats: 4 sets x 6 reps <br />
                    3. Deadlifts: 4 sets x 6 reps <br />
                    4. Bulgarian Split Squats: 3 sets x 8 reps (each leg) <br />
                    5. Seated Calf Raises: 3 sets x 10 reps <br />
                    6. Box Jumps: 3 sets x 10 reps <br />
                </p>
            </div>

            <div className="p2">
                <p>Day 2: </p>
                <p>
                    1. Warm up with 5-10 minutes of light cardio (e.g. jumping
                    jacks, high knees, or jump rope) <br />
                    2. Romanian Deadlifts: 4 sets x 6 reps <br />
                    3. Dumbbell Lunges: 3 sets x 8 reps (each leg) <br />
                    4. Glute-Ham Raises: 3 sets x 10 reps <br />
                    5. Calf Raises (standing): 3 sets x 10 reps <br />
                    6. Plyometric Box Jumps: 3 sets x 10 reps <br />
                </p>
            </div>

            <div className="p3">
                <p>Day 3: </p>
                <p>
                    1. Warm up with 5-10 minutes of light cardio (e.g. jumping
                    jacks, high knees, or jump rope) <br />
                    2. Squat Jumps: 4 sets x 6 reps <br />
                    3. Single-Leg Deadlifts: 3 sets x 8 reps (each leg) <br />
                    4. Kettlebell Swings: 3 sets x 10 reps <br />
                    5. Seated Calf Raises: 3 sets x 10 reps <br />
                    6. Box Jumps: 3 sets x 10 reps <br />
                </p>
            </div>

            <div className="p4">
                <p>Notes: </p>
                <p>
                    -Rest for 60-90 seconds between sets <br />
                    -Use weights that allow you to perform the exercises with
                    good form <br />
                    -Increase the weight gradually as you get stronger and more
                    comfortable with the exercises <br />
                    -Be sure to cool down with some light stretching after each
                    workout <br />
                </p>
            </div>
        </div>
    );
};

export default workouts;
