import React from 'react';
import './sections.css';

const Football = () => {
    return (
       <div className='football'>
        <h1>Football</h1>
        <p><br/>Description=</p>
        
        <div className='fcard1'>
            <h2>Tryouts</h2>
            <div className='fc1box1'>
                <p>Monday - TBD<br/>Tuesday - TBD</p>
            </div>
            <div className='fc1box2'>
                <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1559154725/d125org/vmawxubc16gczdc51bml/Brent_Becker.png" className="fcoach"></img>
                <h2>Brent Becker</h2>
            </div>
        </div>
        <div className='fcard2'>
            <h2>Programs</h2>
            <div className='fc2box1 fc2box'>
                <h2>Push</h2>
            </div>
            <div className='fc2box2 fc2box'>
                <h2>Agility</h2>
            </div>
            <div className='fc2box3 fc2box'>
                <h2>Lower Body</h2>
            </div>
            <div className='fc2box4 fc2box'>
                <h2>Speed</h2>
            </div>
        </div>
       </div>
    );
}
 
export default Football;