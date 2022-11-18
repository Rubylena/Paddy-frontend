import React from 'react'
import { Link } from 'react-router-dom'
import play from '../../assets/icon/Play.svg'

const Hero = () => {
  return (
    <main className='flex gap-5 items-center justify-center'>
        <div>
            <h2>Write here,</h2>
            <h2>write now.</h2>
            <p>Its more than a notes app. More than a journal. Get started with Paddy to get the experience</p>
            <div className='flex gap-5 items-center'>
                <Link to='/sign-up' className='p-2 bg-purple text-white'>Try Paddy for free</Link>
                <Link to='/' className='flex gap-2'>
                  <div className='w-1/6'>
                    <img src={play} alt='play' className='w-full'></img>
                  </div>
                  <p>Watch and learn</p>
                  </Link>
            </div>
        </div>
        <div></div>
    </main>
  )
}

export default Hero
