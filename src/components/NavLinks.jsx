import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks() {
  return (
        <ul className='link-items'>
            <li className='nav-items'><Link to='/'>Home</Link></li>
            <li className='nav-items'><Link to='/about'>About</Link></li>
            <li className='nav-items'><Link to='/feedback'>Feedback</Link></li>
            <button className='navButton'>Log In</button>
        </ul>
  )
}
