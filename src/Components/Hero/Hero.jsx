import React from 'react';
import './Hero.css';
import avion from '../Hero/avion.png';

function Hero() {
  return (
    <div className='hero-sec'>
      <div className='hero-img'>
        <img src={avion}/>
      </div>

      <div className='hero-content'>
        <h1>The <span>Best</span> Travel Agency On The Marketplace</h1>
        <p>It is better to see something once than to hear about it a thousand times.</p>
      </div>
    </div>
  )
}

export default Hero