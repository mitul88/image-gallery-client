import React from 'react'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div>
        <div>RootPage</div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootPage