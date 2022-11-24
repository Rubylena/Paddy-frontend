import React from 'react'
import { Link } from 'react-router-dom'
import play from '../../assets/icon/Play.svg'
import heroImg from '../../assets/img/hero-img.svg'

const Hero = () => {
  return (
    <main className='flex gap-5 items-center justify-center'>
      <div className='flex flex-col gap-5 w-3/6'>
        <div>
          <h2 className='font-serif font-bold text-8xl'><span className='text-purple'>Write</span> here,</h2>
          <h2 className='font-serif font-bold text-8xl'><span className='text-purple'>write</span> now.</h2>
          <p className='font-semibold text-sm text-right italic text-purple'>...a safe space for techies to relax, journal and meme.</p>
        </div>
        <p className='font-semibold text-xl'>Its more than a notes app. More than a journal. Get started with Paddy to get the experience.</p>
        <div className='flex gap-5 items-center'>
            <Link to='/sign-up' className='p-2 bg-purple text-white'>Try Paddy for free</Link>
            <Link to='/' className='flex gap-2 p-2 items-center'>
              <div className='w-1/6'>
                <img src={play} alt='play' className='w-full'></img>
              </div>
              <p className='w-5/6'>Watch and learn</p>
            </Link>
        </div>
      </div>
      <div className='w-2/6'>
        <img src={heroImg} alt='hero' className='w-full'></img>
        <p className='text-right text-xs mt-1'>All your ideas in one place.</p>
      </div>
    </main>
  )
}

export default Hero
