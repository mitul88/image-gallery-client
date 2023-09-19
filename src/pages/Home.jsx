import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import ImageList from '../components/ImageList';
import Loading from '../ui/Loading';

const HomePage = () => {
  return (
    <div className='min-h-full bg-neutral-300  bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-400'>
      <HeroSection />
      <main className="container mx-auto min-h-full">
        <Suspense fallback={<Loading />}>
          <ImageList />
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage