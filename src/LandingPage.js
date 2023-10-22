import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

// new Typewritter('#typewriter', {
//   strings: ['Welcome To my', 'Custom Counter App'],
//   autoStart: true,
//   loop: true
// });

export default function LandingPage (){

    return(
        <div className="counter_container main">
            <h1 id="typewriter" className="main_text">
            <Typewriter 
  options={{
    strings: 
    [
        'Welcome To my', 
        'Custom Counter App', 
        'Developed by...', 
        'Barakat Yetunde Oyewole'
    ],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <Link className="button" to={'/counter'}> Proceed to App</Link>
        </div>
    )
}