import React from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom'

const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  return (
    <header className='w-full h-[60px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <div>Image Gallery</div>
      <nav className={`flex justify-${!token ? 'between' : 'end'} items-center min-w-[250px]`}>
      <Link to='/profile'>Profile</Link>
      <Link to='/'>Home</Link>
        {token && <Link to='/profile'>Profile</Link>}
        {token && <Link to='/'>Home</Link>}
        {token ? 
          <Link to='/logout'>Logout</Link> : <Link to='auth?mode=login' className='px-5 py-2 rounded-lg border border-white'>login</Link>
        }
      </nav>
    </header>
  )
}

export default MainNavigation