import React, { useState } from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import CommentsListSection from '../components/imageDetails/CommentsList';
import ImageSuggestions from '../components/imageDetails/ImageSuggestions';
import { useQuery } from '@tanstack/react-query';
import { fetchImage, queryClient } from '../utils/http';

const ImageDetailsPage = () => {
  const token = useRouteLoaderData('root');
  const params = useParams();
  const navigate = useNavigate();

  const {data, isError, error} = useQuery({
    queryKey: ['image-details', params.imageId],
    queryFn: ({signal}) => fetchImage({signal, id: params.imageId})
  })
  console.log("details",data.image.category)
  const [showCommentForm, setShowCommentForm] = useState(false);

  const toggleCommentForm = () => {
    if(!token) navigate("/auth?mode=login")
    setShowCommentForm(!showCommentForm);
  }

  return (
    <section className='bg-slate-200 md:min-h-screen md:py-2 px-5'>
      <div className='container mx-auto md:mt-3 lg:h-[700px] flex flex-col lg:flex-row md:gap-5'>
        <div className='w-full lg:w-3/4 h-full sm:rounded-md'>
          <img 
              className="h-full w-fit mx-auto sm:rounded-md" 
              src={data.image.url} 
              alt="" 
          />
        </div>
        <div className='w-full lg:w-1/4 bg-white h-full rounded-md'>
          <h2 className="text-3xl text-center my-5 px-5">{data.image.title}</h2>
          <p className="text-sm text-center tracking-widest px-5">{data.image.desc}</p>
          
          <div className='w-full flex flex-row justify-between items-center p-5'>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='p-2 rounded-full bg-orange-600 text-white mr-2'><BiLike /></span>
              <span className='text-gray-400'>{data.likes}</span>
            </div>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='text-gray-400'>{data.comments}</span> 
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
        <ImageSuggestions category={data.image.category} />
      </div>
    </section>
  )
}

export default ImageDetailsPage

export const loader = ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ['image-details', params.imageId],
    queryFn: ({signal}) => fetchImage({signal, id: params.imageId})
  });
}