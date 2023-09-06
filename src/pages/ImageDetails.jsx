import React from 'react'
import ImageItem from '../components/ImageItem'

const ImageDetailsPage = () => {
  return (
    <section className='bg-slate-200 md:min-h-screen py-2'>
      <div className='container mx-auto lg:h-[600px] flex flex-col lg:flex-row gap-2'>
        <div className='w-full lg:w-2/3 h-full sm:rounded-md'>
        <img 
            className="h-full w-fit mx-auto sm:rounded-md" 
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" 
            alt="" 
        />
        </div>
        <div className='w-full lg:w-1/3 bg-white h-full rounded-md'></div>
      </div>
      <h2 className='container mx-auto font-bold text-3xl text-center md:text-left my-5'>More photos like this</h2>
      <div className='container mx-auto lg:mb-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
        </div>
      </div>
    </section>
  )
}

export default ImageDetailsPage