import React from 'react'

const LoadingImage = () => {
  return (
    <div className='rounded-md h-[300px] w-[300px] mx-auto bg-white flex flex-col shadow shadow-md animate-pulse'>
        <div className="h-[200px] mx-5 mt-5 rounded-t-md object-fill bg-gray-200" ></div>
        <div className='h-[100px] mx-5'>
            <div className="flex flex-row justify-between items-center my-2 ">
                <h4 className='bg-gray-200 p-2 pointer-events-none w-full h-[20px]'></h4>
            </div>
            <div className="flex flex-row justify-between items-center w-full pointer-events-none">
                <div className='flex items-center'>
                <div className='rounded-md bg-gray-100 p-3 mr-2'></div>
                <div className='rounded-md bg-gray-100 p-3 '></div>
                </div>
                <p className="text-sm bg-gray-200 p-2 w-[60px]"></p>
            </div>
        </div>
    </div>
  )
}

export default LoadingImage