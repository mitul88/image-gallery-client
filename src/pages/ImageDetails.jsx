import React from 'react'

const ImageDetailsPage = () => {
  return (
    <section className='bg-slate-200 md:min-h-screen py-2'>
      <div className='container mx-auto h-[600px] flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-2/3 bg-red-100 h-full rounded-md'></div>
        <div className='w-full md:w-1/3 bg-red-400 h-full rounded-md'></div>
      </div>
      <h2 className='container mx-auto text-2xl'>More photos like this</h2>
      <div>

      </div>
    </section>
  )
}

export default ImageDetailsPage