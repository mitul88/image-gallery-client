import React, { useState } from 'react'
import ImageItem from '../components/ImageItem'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import CommentsListSection from '../components/CommentsList';

const ImageDetailsPage = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  }

  return (
    <section className='bg-slate-200 md:min-h-screen md:py-2 px-5'>
      <div className='container mx-auto md:mt-3 lg:h-[700px] flex flex-col lg:flex-row md:gap-5'>
        <div className='w-full lg:w-3/4 h-full sm:rounded-md'>
        <img 
            className="h-full w-fit mx-auto sm:rounded-md" 
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" 
            alt="" 
        />
        </div>
        <div className='w-full lg:w-1/4 bg-white h-full rounded-md'>
          <h2 className="text-3xl text-center my-5 px-5">Image Title</h2>
          <p className="text-sm text-center tracking-widest px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sapiente ipsam consequatur perferendis temporibus vel, consequuntur quos. Error, omnis officia.</p>
          
          <div className='w-full flex flex-row justify-between items-center p-5'>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='p-2 rounded-full bg-orange-600 text-white mr-2'><BiLike /></span>
              <span className='text-gray-400'>33</span>
            </div>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='text-gray-400'>25</span> 
              <span className='p-2 rounded-full bg-orange-600 text-white ml-2'><BiCommentDetail /></span>
            </div>
          </div>

          <div className='w-full flex flex-row justify-between px-10 items-center border-t border-b border-gray-200'>
            <div className='flex flex-row justify-center items-center '>
              <Link className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'><BiLike className='mr-2' /> Like</Link>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <Link 
                className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'
                onClick={toggleCommentForm}  
              ><BiCommentDetail className='mr-5' /> Comment</Link>
            </div>
          </div>

          <div className="pl-5 pt-5">
            <CommentsListSection toggleCommentForm={toggleCommentForm} showCommentForm={showCommentForm} />
          </div>
        </div>
      </div>
      <h2 className='container mx-auto font-bold text-3xl text-center md:text-left my-5 pointer-events-none'>More photos like this</h2>
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