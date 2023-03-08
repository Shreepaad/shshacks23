import React from 'react';
import './sections.css';
import { NavLink } from "react-router-dom";

const Cheer = () => {
    return (
       <div className='cheer'>
        <h1>Cheerleading</h1>
        <p><br/>Description</p>
        
        <div className='ccard1'>
            <h2>Tryouts</h2>
            <div className='cc1box1'>
                <p>Monday - TBD<br/>Tuesday - TBD</p>
            </div>
            <div className='cc1box2'>
                <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1670270772/d125org/uaiok0nqmxuos4svgwl3/ElizabethLamb.png" className="ccoach"></img>
                <h2>Elizabeth Lamb</h2>
            </div>
        </div>
        <div className='ccard2'>
            <h2>Programs</h2>
            <div className='cc2box1 cc2box'>
                <h2>Push</h2>
            </div>
            <div className='cc2box2 cc2box'>
                <h2>Agility</h2>
            </div>
            <div className='cc2box3 cc2box'>
                <h2>Lower Body</h2>
            </div>
            <div className='cc2box4 cc2box'>
                <h2>Core</h2>
            </div>
        </div>
       </div>
    );
}
 
export default Cheer;