import React from 'react'
import { Form, Link, useRouteLoaderData } from 'react-router-dom'

const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  return (
    <header className='w-full h-[80px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <div className='text-2xl font-bold'>Image Gallery</div>
      <nav className={`flex justify-${token ? 'between' : 'end'} items-center min-w-[250px]`}>
        {token && <Link to='/'>Home</Link>}
        {token && <Link to='/profile'>Profile</Link>}
        {token && <Link to='/image'>Image</Link>}
        {token ? 
          <Form action='/logout' method='post'><button to='/logout'>Logout</button></Form> : <Link to='auth?mode=login' style={{fontFamily: 'Quicksand'}} className='px-5 py-1 rounded-lg bg-sky-900 md:shadow-lg md:shadow-sky-950 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 tracking-widest text-lg'>Signin</Link>
        }
      </nav>
    </header>
  )
}

export default MainNavigation