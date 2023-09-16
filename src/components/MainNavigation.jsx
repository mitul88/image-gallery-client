import React from 'react'
import { Form, Link, useRouteLoaderData } from 'react-router-dom'

const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  return (
    <header className='w-full h-[60px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <div>Image Gallery</div>
      <nav className={`flex justify-${token ? 'between' : 'end'} items-center min-w-[250px]`}>
        {token && <Link to='/profile'>Profile</Link>}
        {token && <Link to='/'>Home</Link>}
        {token ? 
          <Form action='/logout' method='post'><button to='/logout'>Logout</button></Form> : <Link to='auth?mode=login' className='px-5 py-2 rounded-lg bg-green-600'>login</Link>
        }
      </nav>
    </header>
  )
}

export default MainNavigation