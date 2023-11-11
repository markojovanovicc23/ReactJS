import React from 'react';
import './Hero.css';
import heroslika from '../Hero/slika.jpg';
import unutra from '../Hero/unutra.jpg';

function Hero() {
  return (
    <div className='hero-sec'>
        <img src={heroslika}/>

      <div className='hero-content'>
        <h1 className='hero-h1'>The <span>Best</span> Travel Agency On The Marketplace</h1>
        <p>It is better to see something once than to hear about it a thousand times.</p>

        <div className='btn-box'>
          <a href='#'>Offers</a>
        </div>
      </div>
      <h2>About <span>Us</span></h2>
      <div className='img-unutra'>
      <img src={unutra} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Placeat, veritatis. Porro cupiditate incidunt, corporis tempora asperiores iusto aut consequuntur, qui, quis temporibus et natus dolorem quibusdam. <br/> Praesentium, repellat non?</p>
      <div className='lista'>
        <ul>
        <li> 250 m2 <br/> <span>Total Flat Space</span> </li>
        <li> Contract </li>
        <li></li>
        <li></li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Hero