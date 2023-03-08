import React from "react";
import { NavLink } from "react-router-dom";

const Training = () => {
    return (
        <div className="idk">
            <h1>Training</h1>
            <p>Content</p>
            <NavLink to="/workouts">
                    <p>Current Workout</p>
            </NavLink>
            
        </div>
    );
};

export default Training;
