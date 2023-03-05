import React from "react";
import {
    CalendarMonthOutlined,
    LocalFireDepartmentOutlined,
    SportsBasketballOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Sidebar">
            <h1 className="logo">Sportif</h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/">
                        <CalendarMonthOutlined
                            style={{ justifySelf: "flex-start" }}
                        />
                        <p>Calendar</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">
                        <LocalFireDepartmentOutlined />
                        <p>Training</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">
                        <SportsBasketballOutlined />
                        <p>Athletics</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
