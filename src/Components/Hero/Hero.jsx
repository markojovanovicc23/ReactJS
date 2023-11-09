import React from 'react';
import './Hero.css';
import heroslika from '../Hero/slika.jpg';

function Hero() {
  return (
    <div className='hero-sec'>
        <img src={heroslika}/>

      <div className='hero-content'>
        <h1>The <span>Best</span> Travel Agency On The Marketplace</h1>
        <p>It is better to see something once than to hear about it a thousand times.</p>

        <div className='btn-box'>
          <a href='#'>Offers</a>
        </div>
      </div>
    </div>
  )
}

export default Hero