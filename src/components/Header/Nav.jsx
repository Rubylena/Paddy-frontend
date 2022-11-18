import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './nav.scss'

const Nav = () => {
  return (
    <header className='header'>
      <nav className='flex justify-between items-center py-5 px-10'>
        <h1>Paddy</h1>
        <div className='flex gap-1 items-center'>
          <p className='text-semi-black'>About Us</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className='flex gap-5 items-center'>
          <Link to='/sign-in' className='bg-white login'>Log In</Link>
          <Link to='/sign-up' className='p-2 bg-purple text-white'>Get Started</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
