import React from 'react'
import { Link } from 'react-router-dom'

const ImageGridItem = ({image}) => {
  return (
    <Link className="rounded-md flex w-[180px] h-[180px]">
      <img src={image.url} alt="" className="rounded-md w-full h-full transition duration-300 ease-out hover:brightness-50" />
    </Link>
  )
}

export default ImageGridItem