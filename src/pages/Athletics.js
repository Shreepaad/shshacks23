import React from "react";
import { NavLink } from "react-router-dom";

const Athletics = () => {
    return (
        <div className="idk">
            <h1>Athletics</h1>

            <div className="sportsSelector">
                <NavLink to="/">
                    <div className="sportBox"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox2"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox3"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox4"></div>
                </NavLink>
                <NavLink to="/cross">
                    <div className="sportBox5"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox6"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox7"></div>
                </NavLink>
                <NavLink to="/">
                    <div className="sportBox8"></div>
                </NavLink>
            </div>
        </div>
    );
};

export default Athletics;
