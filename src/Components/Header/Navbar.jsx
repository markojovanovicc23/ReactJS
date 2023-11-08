import React from 'react'
import './Navbar.css'

function Header() {
  return (
    <div className='header-sec'>
        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <a className='logo'>Travel Agency</a>

        </nav>
    </div>
  )
}

export default Header;