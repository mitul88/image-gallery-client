import React from 'react'
import ImageItem from '../ImageItem'

const ImageSuggestions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
    </div>
  )
}

export default ImageSuggestions