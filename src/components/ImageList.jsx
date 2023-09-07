import React from 'react'
import ImageItem from './ImageItem'
import CategoryNavigation from './CategoryNavigation'

const ImageList = () => {
  return (
    <>
    <CategoryNavigation />
    <div className='grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-[0px] lg:px-[150px]'>
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
      <ImageItem />
    </div>
    </>
  )
}

export default ImageList