import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <Link to="/auth">GO TO AUTH</Link>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
    </div>
  )
}

export default HomePage