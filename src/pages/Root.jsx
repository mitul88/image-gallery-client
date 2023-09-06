import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const RootPage = () => {
  return (
    <div>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootPage