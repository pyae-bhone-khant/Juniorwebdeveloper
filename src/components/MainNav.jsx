import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainNav.css'

export default function Nav() {
  return (
    <nav className='main-nav'>
        <div className="nav-container">
            <h1 className='logo'>Logo</h1>
            <ul>
                <li className='nav-items'><Link to='/'>Home</Link></li>
                <li className='nav-items'><Link to='/about'>About</Link></li>
            </ul>
        </div>
    </nav>
  )
}
