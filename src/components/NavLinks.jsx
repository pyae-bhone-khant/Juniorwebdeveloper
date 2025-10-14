import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  return (
    <ul className='link-items'>
      <li className='nav-items'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          Home
        </NavLink>
      </li>

      <li className='nav-items'>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
      </li>

      <li className='nav-items'>
        <NavLink
          to='/feedback'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Feedback
        </NavLink>
      </li>

      <li className='nav-items'>
        <NavLink
          to='/team'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Team Members
        </NavLink>
      </li>


      <button className='navButton'>Log In</button>
    </ul>
  )
}
