import React, { useState } from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import CommentsListSection from '../components/imageDetails/CommentsList';
import ImageSuggestions from '../components/imageDetails/ImageSuggestions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchComments, fetchImage, postComment, queryClient } from '../utils/http';

import { BiArrowBack, BiDotsVerticalRounded } from "react-icons/bi";

const ImageDetailsPage = () => {
  const token = useRouteLoaderData('root');
  const params = useParams();
  const navigate = useNavigate();
  const [showCommentForm, setShowCommentForm] = useState(false);

  const goBack = () => {
    navigate(-1);
  }

  const {data: imageData, isError: isFetchError, error: fetchError} = useQuery({
    queryKey: ['image-details', params.imageId],
    queryFn: ({signal}) => fetchImage({signal, id: params.imageId})
  })

  const {data: commentData, isError: isFetchCommentError, error: fetchCommentError} = useQuery({
    queryKey: ['comments', params.imageId],
    queryFn:({signal})=> fetchComments({signal, id: params.imageId})
  })

  const {mutate, isPending, isError: isPostCommentError, error: postCommenttError } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['comments']});
      setShowCommentForm(!showCommentForm);
    }
  });

  const submitComment = (formData) => {
    // sending comment data with user token
    mutate({formData, token});
  }

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
              src={imageData.image.url} 
              alt="" 
          />
        </div>
        <div className='w-full lg:w-1/4 bg-white h-full rounded-md'>
          <div className="w-full relative">
            <button 
              className="absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 left-3 p-2 text-gray-400 flex flex-col justify-center items-center"
              onClick={goBack}
            ><BiArrowBack /></button>
            <button className="absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 right-3 p-2 text-gray-400 flex flex-col justify-center items-center"><BiDotsVerticalRounded /></button>
          </div>
          <h2 className="text-3xl text-center my-5 px-5">{imageData.image.title}</h2>
          <p className="text-sm text-center tracking-widest px-5">{imageData.image.desc}</p>
          
          <div className='w-full flex flex-row justify-between items-center p-5'>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='p-2 rounded-full bg-orange-600 text-white mr-2'><BiLike /></span>
              <span className='text-gray-400'>{imageData.likes}</span>
            </div>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='text-gray-400'>{commentData.length}</span> 
              <span className='p-2 rounded-full bg-orange-600 text-white ml-2'><BiCommentDetail /></span>
            </div>
          </div>
          {token && (
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
          )}

          <div className="pl-5 pt-5">
            <CommentsListSection
              commentData={commentData} 
              submitComment={submitComment} 
              toggleCommentForm={toggleCommentForm} 
              showCommentForm={showCommentForm} 
              isCommentPending={isPending}
              isPostCommentError={isPostCommentError}
            />
          </div>
        </div>
      </div>
      <h2 className='container mx-auto font-bold text-3xl text-center md:text-left my-5 pointer-events-none'>More photos like this</h2>
      <div className='container mx-auto lg:mb-5'>
        <ImageSuggestions category={imageData.image.category} />
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