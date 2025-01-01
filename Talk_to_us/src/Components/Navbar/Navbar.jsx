import React from 'react'
import './Navbar.css'

function Navbar () {
  return (
    <div className='navbar'>
        <div className="logo">LOGO</div>
        <div className='menu-bar'>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="btn">Contact</div>
        </div>
    </div>
  )
}

export default Navbar