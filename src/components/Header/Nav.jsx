import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './nav.scss'

const Nav = ({ user }) => {
  return (
    <header className='header'>
      <nav className='flex flex-col sm:flex-row gap-2 justify-between items-center py-5 px-10'>
        <Link to='/'><h1 className='font-serif font-black text-2xl'>PADDY</h1></Link>
        {/* <div className='flex gap-1 items-center'>
          <Link to='/' >
            <p className='text-semi-black'>About Us</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </Link>
        </div> */}
        <div>
          {user?.email === undefined ?
          <div className='flex gap-5 items-center font-medium'>
            <Link to='/sign-in' className='login'>Log In</Link>
            <Link to='/sign-up' className='p-2 bg-purple text-white'>Get Started</Link>
          </div>
          :
          <div className='flex items-center gap-3'>
            <p className='font-bold'>Hi, {user.firstName}</p>
            <div className='w-10'>
              <img src={user?.picture} alt='profile' className='w-full rounded-full'></img>
            </div>
          </div>
          }

        </div>
      </nav>
    </header>
  )
}

export default Nav
