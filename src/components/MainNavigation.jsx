import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className='w-full h-[60px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <div>Image Gallery</div>
      <nav className='w-1/5 flex justify-between items-center'>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='auth?mode=/login'>login</Link>
        <Link to='/logout'>Logout</Link>
      </nav>
    </header>
  )
}

export default MainNavigation