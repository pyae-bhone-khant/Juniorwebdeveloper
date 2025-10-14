import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import '../styles/MainNav.css'

export default function Nav({ isClicked, handleToggle ,width }) {
  return (
    <nav className='main-nav'>
        <div className="nav-container">
            <h1 className='logo'>Logo</h1>
            {width > 767 ? <NavLinks /> 
            : <div className='hamburger-menu' onClick={handleToggle}>
                <div className="line line1" style={{ transform: isClicked ? "rotate(40deg) translateY(8px)" : "translateX(0)" }}></div>
                <div className="line line2" style={{ opacity: isClicked ? "0" : "1" }}></div>
                <div className='line line3' style={{ transform: isClicked ? "rotate(-40deg) translate(0px, -8px)" : "translateX(0)" }}></div>
              </div>}
        </div>
    </nav>
  )
}
