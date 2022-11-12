import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to='/'>Home</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/sign-in'>Sign In</Link>
      </nav>
    </div>
  )
}

export default Nav
