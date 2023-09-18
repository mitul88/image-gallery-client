import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import ImageList from '../components/ImageList';

const HomePage = () => {
  return (
    <div className='bg-neutral-300  bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-400'>
      <HeroSection />
      <main className="container mx-auto">
        <Suspense fallback={<h2>Loading...</h2>}>
          <ImageList />
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage