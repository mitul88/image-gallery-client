import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import ImageList from '../components/ImageList';
import Loading from '../ui/Loading';
import { fetchCategories } from '../utils/http';
import { useLoaderData } from 'react-router';

const HomePage = () => {
  const data = useLoaderData()
  return (
    <div className='min-h-full bg-neutral-300  bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-400'>
      <HeroSection />
      <main className="container mx-auto min-h-full">
        <Suspense fallback={<Loading />}>
          <ImageList categoryData={data.data} />
        </Suspense>
      </main>
    </div>
  )
}

export default HomePage

export const loader = async ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const param = searchParams.get('category');
  
  const response = await fetch(`http://localhost:4000/api/category`);
  return response.json()
}