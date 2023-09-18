import React from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ImageItem = ({image}) => {
  return (
    <Link>
      <div className='rounded-md h-[300px] max-w-[300px] mx-auto bg-white flex flex-col shadow shadow-md'>
          <img 
              className="h-[200px] rounded-t-md object-fill saturate-150 brightness-100" 
              src={image.url} 
              alt={image.title} 
              />
          <div className='h-[100px] px-2'>
            <div className="flex flex-row justify-between items-center my-2">
              <h4 className='text-xl pointer-events-none'>{image.title}</h4>
              <p className="text-sm text-gray-400">@{image.uploaded_by.name}</p>
            </div>
              <div className="flex flex-row justify-between w-full pointer-events-none">
                  <div className='rounded-lg bg-gray-200 p-2 text-sm font-bold text-gray-500 flex flex-row items-center'><BiLike className='mr-2' /> 22</div>
                  <div className='rounded-lg bg-gray-200 p-2 text-sm font-bold text-gray-500 flex flex-row items-center'><BiCommentDetail className='mr-2' /> 8</div>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default ImageItem