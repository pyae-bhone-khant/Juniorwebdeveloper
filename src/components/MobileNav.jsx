import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MobileNav.css'


export default function MobileNav( { width, isClicked, handleToggle }) {
  return (
    <>
    {width < 480 && isClicked && 
        <div className="mobileNav-container">
          <button onClick={(handleToggle)} className='cancel-button'>X</button>
          <ul className='mobileNav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/feedback'>Feedback</Link></li>
            <button>Log In</button>
          </ul>
        </div>
      }
    </>
  )
}
