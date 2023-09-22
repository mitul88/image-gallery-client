import React, { useEffect, useRef, useState } from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link, useLocation, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import CommentsListSection from '../components/imageDetails/CommentsList';
import ImageSuggestions from '../components/imageDetails/ImageSuggestions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchComments, fetchImage, fetchLikes, postComment, postLike, queryClient } from '../utils/http';

import { BiArrowBack, BiDotsVerticalRounded } from "react-icons/bi";
import DropdownOptions from '../ui/DropdownOptions';

const ImageDetailsPage = () => {
  const token = useRouteLoaderData('root');
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // const dropdownMenuRef = useRef();

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [pathname])

  // useEffect(() => {
  //   const closeDropDown = e => {
  //     if (e.target[0] !== dropdownMenuRef.current) {
  //       console.log("lol")
  //     } else {
  //       console.log('mongododo tunglo')
  //     }
  //   }

  //   document.body.addEventListener('click', closeDropDown)

  //   return () => document.body.addEventListener('click', closeDropDown)
  // }, [])


  const goBack = () => {
    navigate(-1);
  }

  const {data: imageData, isError: isFetchError, error: fetchError} = useQuery({
    queryKey: ['image-details', params.imageId],
    queryFn: ({signal}) => fetchImage({signal, id: params.imageId})
  })

  console.log(imageData.image.uploaded_by)
  const {data: commentData, isError: isFetchCommentError, error: fetchCommentError} = useQuery({
    queryKey: ['comments', params.imageId],
    queryFn:({signal})=> fetchComments({signal, id: params.imageId})
  })

  const {data: likeData} = useQuery({
    queryKey: ['likes', token],
    queryFn: ({signal, queryKey})=> fetchLikes({signal, id: params.imageId, token: queryKey[1]})
  })
  const current_user_likes = likeData.current_user_likes

  const {mutate: mutateComment, isPending, isError: isPostCommentError, error: postCommenttError } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['comments']});
      setShowCommentForm(!showCommentForm);
    }
  });

  const {mutate: mutateLike} = useMutation({
    mutationFn: postLike,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['likes']})
    }
  })

  const submitComment = (formData) => {
    // sending comment data with user token
    mutateComment({formData, token});
  }

  const handleLikeSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image_id", e.target.image_id.value);
    let method;
    if (!current_user_likes) {
      method = "POST"
    } else {
      method="DELETE"
    }
    mutateLike({formData, token, method})
  }

  const toggleCommentForm = () => {
    if(!token) navigate("/auth?mode=login")
    setShowCommentForm(!showCommentForm);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
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
            <button 
              className="absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 right-3 p-2 text-gray-400 flex flex-col justify-center items-center"
              onClick={toggleDropdown}
            ><BiDotsVerticalRounded /></button>
            <DropdownOptions show={showDropdown}>
              <Link className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Edit</Link>
              <Link className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Delete</Link>
              <Link className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Report</Link>
            </DropdownOptions>
          </div>
          <h2 className="text-3xl text-center mt-5 px-5">{imageData.image.title}</h2>
            <h4 className="text-sm text-center text-blue-600 italic mb-5"><Link to={`/${imageData.image.uploaded_by._id}/profile`}>@ {imageData.image.uploaded_by.name}</Link></h4>
          <p className="text-sm text-center tracking-widest px-5">{imageData.image.desc}</p>
          
          <div className='w-full flex flex-row justify-between items-center p-5'>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='p-2 rounded-full bg-orange-600 text-white mr-2'><BiLike /></span>
              <span className='text-gray-400'>{likeData.likeCount}</span>
            </div>
            <div className='flex flex-row justify-center items-center pointer-events-none'>
              <span className='text-gray-400'>{commentData.length}</span> 
              <span className='p-2 rounded-full bg-orange-600 text-white ml-2'><BiCommentDetail /></span>
            </div>
          </div>
          {token && (
            <div className='w-full flex flex-row justify-between px-10 items-center border-t border-b border-gray-200'>
              <form onSubmit={handleLikeSubmit} className='flex flex-row justify-center items-center '>
                <input 
                  type="text" 
                  className="hidden" 
                  value={params.imageId}
                  name="image_id" 
                  readOnly={true} 
                />
                <button type='submit' className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'><BiLike className='mr-2 mt-1' /> {current_user_likes ? "Liked" : "Like"}</button>
              </form>
              <div className='flex flex-row justify-center items-center'>
                <Link 
                  className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'
                  onClick={toggleCommentForm}  
                ><BiCommentDetail className='mr-5 mt-1' /> Comment</Link>
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