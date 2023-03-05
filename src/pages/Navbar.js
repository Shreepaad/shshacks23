import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Sidebar">
            <h1 className="logo">Sportif</h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/">
                        <p>Calendar</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">
                        <p>Training</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">
                        <p>Athletics</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
