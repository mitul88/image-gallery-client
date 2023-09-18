import React from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ImageItem = ({image}) => {
  return (
    <Link to={`image/${image._id}`}>
      <div className='rounded-md h-[300px] max-w-[300px] mx-auto bg-white flex flex-col shadow shadow-md' style={{fontFamily: "Quicksand"}}>
          <img 
              className="h-[200px] rounded-t-md object-fill saturate-100 brightness-100" 
              src={image.url} 
              alt={image.title} 
              />
          <div className='h-[100px] px-2'>
            <div className="flex flex-row justify-between items-center my-2">
              <h4 className='text-xl tracking-widest font-bold text-gray-500  pointer-events-none'>{image.title.length > 14 ? image.title.slice(0, 14) + "..." : image.title }</h4>
              
            </div>
              <div className="flex flex-row justify-between items-center w-full pointer-events-none">
                  <div className='flex items-center'>
                    <div className='rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center mr-2'><BiLike className='mr-2' /> 22</div>
                    <div className='rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center'><BiCommentDetail className='mr-2' /> 8</div>
                  </div>
                  <p className="text-sm text-gray-400">@{image.uploaded_by.name}</p>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default ImageItem