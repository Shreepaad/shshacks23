import React from 'react';
import './sections.css';

const Soccer = () => {
    return (
       <div className='soccer'>
        <h1>Soccer</h1>
        <p><br/>Two teams of eleven players each attempt to score points<br/> by kicking a ball into the opposing team's goal, while also<br/> defending their own goal from the other team's attempts.</p>
       
        <div className='scard1'>
            <h2>Tryouts</h2>
            <div className='s1box1'>
                <p>Aug 8-Aug 12: Varsity JV Frosh<br/>Aug 13: Varsity JV Freshman</p>
            </div>
            <div className='s1box2'>
                <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1643745790/d125org/sglwlmvow9nh2obcdi5b/PepeJonChavez_crop.jpg" className="scoach"></img>
                <h2>PepeJon Chavez</h2>
            </div>
        </div>
        <div className='scard2'>
            <h2>Programs</h2>
            <div className='s2box1 s2box'>
                <h2>Speed</h2>
            </div>
            <div className='s2box2 s2box'>
                <h2>Agility</h2>
            </div>
            <div className='s2box3 s2box'>
                <h2>Lower Body</h2>
            </div>
            <div className='s2box4 s2box'>
                <h2>Core</h2>
            </div>
        </div>
       </div>
    );
}
 
export default Soccer;