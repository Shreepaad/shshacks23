import React from 'react';
import './sections.css';

const Tennis = () => {
    return (
       <div className='tennis'>
        <h1>Tennis</h1>
        <p><br/>Description</p>
        
        <div className='tcard1'>
            <h2>Tryouts</h2>
            <div className='tc1box1'>
                <p>Monday - TBD<br/>Tuesday - TBD</p>
            </div>
            <div className='tc1box2'>
                <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1670426192/d125org/smxhz9ietetds8xn2j83/Balase_Izris.png" className="tcoach"></img>
                <h2>Isriz Balase</h2>
            </div>
        </div>
        <div className='tcard2'>
            <h2>Programs</h2>
            <div className='tc2box1 tc2box'>
                <h2>Core</h2>
            </div>
            <div className='tc2box2 tc2box'>
                <h2>Agility</h2>
            </div>
            <div className='tc2box3 tc2box'>
                <h2>Lower Body</h2>
            </div>
            <div className='tc2box4 tc2box'>
                <h2>Speed</h2>
            </div>
        </div>
       </div>
    );
}
 
export default Tennis;