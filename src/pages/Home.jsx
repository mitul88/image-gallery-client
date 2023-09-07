import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryNavigation from '../components/CategoryNavigation';
import { Outlet } from 'react-router-dom';
import ImageList from '../components/ImageList';

const HomePage = () => {
  return (
    <div className='bg-slate-200 md:min-h-screen'>
      <HeroSection />
      <main className="container mx-auto">
        <CategoryNavigation />
        {/* <Outlet /> */}
        <ImageList />
      </main>
    </div>
  )
}

export default HomePage