import React from "react";
import { NavLink } from "react-router-dom";

const Athletics = () => {
    return (
        <div className="section athletics">
            <h1>Athletics</h1>
            <p>Content</p>
            <NavLink to="/cross_country.js">
                <p>Cross Country</p>
            </NavLink>
            <div className="sportsSelector">
                <div className="sportBox"></div>
                <div className="sportBox2"></div>
                <div className="sportBox3"></div>
                <div className="sportBox4"></div>
                <div className="sportBox5"></div>
                <div className="sportBox6"></div>
                <div className="sportBox7"></div>
                <div className="sportBox8"></div>
            </div>
        </div>
    );
};

export default Athletics;
