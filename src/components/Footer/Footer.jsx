import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/nav.scss'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between px-10 pb-5 text-footer'>
      <Link to='/'><p className='text-sm font-serif'>Paddy</p></Link>
      <small className='text-xs'>&#169; 2022 Paddy. All rights reserved</small>
    </div>
  )
}

export default Footer
