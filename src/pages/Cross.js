import React from 'react';
import './sections.css';

const Cross = () => {
    return (
       <div className='cross_country'>
        <h1>Cross Country</h1>
        <p><br/>A form of long-distance running that<br/> takes place on natural terrain, such as <br/>trails, hills, and grassy fields.</p>
        
        <div className='card1'>
            <h2>Tryouts</h2>
            <div className='c1box1'>
                <p>hey bois<br/>hows it going</p>
            </div>
            <div className='c1box2'>
                <img src="https://resources.finalsite.net/images/f_auto,q_auto/v1559589797/d125org/o48oo2dglaabdyqqyvrk/Scott_Sommers.png" className="coach"></img>
                <h2>Scott Sommers</h2>
            </div>
        </div>
        <div className='card2'>
            <h2>Programs</h2>
            <div className='c2box1 c2box'>
                <h2>hey bois</h2>
            </div>
            <div className='c2box2 c2box'>
                <h2>wassup</h2>
            </div>
            <div className='c2box3 c2box'>
                <h2>sup</h2>
            </div>
            <div className='c2box4 c2box'>
                <h2>omg</h2>
            </div>
        </div>
       </div>
    );
}
 
export default Cross;