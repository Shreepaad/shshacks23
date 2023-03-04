import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    return (
       <div className='Sidebar'>
        <h1 className = 'logo'>Sportif</h1>
        <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink to="/">Calendar</NavLink>
            </li>
            <div className='break'></div>
            <li className='nav-item'>
              <NavLink to="/about">Training</NavLink>
            </li>
            <div className='break'></div>
            <li className='nav-item'>
              <NavLink to="/contact">Athletics</NavLink>
            </li>
          </ul>
       </div>
    );
}
 
export default Navbar;
