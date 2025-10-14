import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MobileNav.css'


export default function MobileNav( { width, isClicked, handleToggle }) {
  return (
    <>
    {isClicked && 
        <div className="mobileNav-container">
          <button onClick={(handleToggle)} className='cancel-button'>X</button>
          <ul className='mobileNav'>
            <li onClick={handleToggle}><Link to='/'>Home</Link></li>
            <li onClick={handleToggle}><Link to='/about'>About</Link></li>
            <li onClick={handleToggle}><Link to='/feedback'>Feedback</Link></li>
            <li onClick={handleToggle}><Link to='/team'>Team Members</Link></li>
            <button onClick={handleToggle}>Log In</button>
          </ul>
        </div>
      }
    </>
  )
}
