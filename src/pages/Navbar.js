import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    return (
       <div className='Sidebar'>
        <h1 className = 'title'>Sportif</h1>
        <ul className='nav-list'>
            <li className='nav-item'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
       </div>
    );
}
 
export default Navbar;
