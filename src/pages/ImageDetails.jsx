import React, { useEffect, useState } from 'react'
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { Link, useLocation, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import CommentsListSection from '../components/imageDetails/CommentsList';
import ImageSuggestions from '../components/imageDetails/ImageSuggestions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteImage, editImageInformation, fetchCategories, fetchComments, fetchImage, fetchLikes, postComment, postLike, queryClient } from '../utils/http';

import { BiArrowBack, BiDotsVerticalRounded } from "react-icons/bi";
import DropdownOptions from '../ui/DropdownOptions';

import jwtDecode from 'jwt-decode';
import Modal from '../ui/Modal';
import UploadImageForm from '../components/shared/UploadImageForm';

const ImageDetailsPage = () => {
  const token = useRouteLoaderData('root');
  const params = useParams('imageId');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showImageDelete, setShowImageDelete] = useState(false);
  const [showImageEditModal, setShowImageEditModal] = useState(false);

  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };
  

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [pathname])

  const goBack = () => {
    navigate(-1);
  }

  const {data: categoryData, isError: isCategoryError, error: categoryError} = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories()
  })

  const {data: imageData, isError: isFetchError, error: fetchError} = useQuery({
    queryKey: ['image-details', params.imageId],
    queryFn: ({signal}) => fetchImage({signal, id: params.imageId})
  })

  const {data: commentData, isError: isFetchCommentError, error: fetchCommentError} = useQuery({
    queryKey: ['comments', params.imageId],
    queryFn:({signal})=> fetchComments({signal, id: params.imageId})
  })

  const {data: likeData} = useQuery({
    queryKey: ['likes', token],
    queryFn: ({signal, queryKey})=> fetchLikes({signal, id: params.imageId, token: queryKey[1]})
  })
  const current_user_likes = likeData.current_user_likes

  const {mutate: mutateComment, isLoading, isError: isPostCommentError, error: postCommentError } = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['comments']});
      setShowCommentForm(false);
      setShowEditForm(false);
    }
  });

  const {mutate: mutateLike} = useMutation({
    mutationFn: postLike,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['likes']})
    }
  })

  const {mutate: mutateImageInfo, isLoading: isImageInfoEditLoading, isError: isImageInfoEditError, error: imageInfoEditError } = useMutation({
    mutationFn: editImageInformation,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['image-details']});
      setShowImageEditModal(false);
    }
  });

  const submitComment = (formData) => {
    // sending comment data with user token, this fn is initiate from a nested component : CommentForm
    let method = "POST";
    mutateComment({formData, token, method});
  }

  const deleteComment = (formData) => {
    // sending comment data with user token, this fn is initiate from a nested component : CommentList
    let method = "DELETE";
    mutateComment({formData, token, method});
  }
  
  const editComment = (formData) => {
    // sending comment data with user token, this fn is initiate from a nested component : CommentList
    let method = "PUT";
    mutateComment({formData, token, method});
  }

  // delete photo
  const {mutate: mutateImage, isLoading: isImageMutateLoading, isError: isImageMutateError, error: imageMutateError} = useMutation({
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['images']});
      setShowImageDelete(false);
      navigate("/")
    }
  })

  const handleImageDelete = () => {
    const imageId = params.imageId;
    mutateImage({imageId, token});
  }

  const handleLikeSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image_id", e.target.image_id.value);
    let method;
    if (!current_user_likes) {
      method = "POST"
    } else {
      method="DELETE"
    }
    mutateLike({formData, token, method})
  }

  const editImageInfo = (formData) => {
    const imageId = params.imageId
    mutateImageInfo({formData, imageId, token})
  }

  const toggleCommentForm = () => {
    if(!token) navigate("/auth?mode=login")
    setShowCommentForm(!showCommentForm);
  }

  const toggleEditForm = () => {
    if(!token) navigate("/auth?mode=login")
    setShowEditForm(!showEditForm);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const toggleImageEdit = () => {
    setShowDropdown(false)
    setShowImageEditModal(true)
  }

  const toggleImageDelete = () => {
    setShowDropdown(false)
    setShowImageDelete(true)
  }

  return (
    <section className='bg-slate-200 md:min-h-screen md:py-2 px-5'>
      <div className='container mx-auto md:mt-3 h-[600px] flex flex-col lg:flex-row md:gap-5'>
        <div className='w-full lg:w-3/4 h-full sm:rounded-md'>
          <img 
              className="h-full object-cover w-fit mx-auto sm:rounded-md" 
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
            {token && (
              <button 
                className="absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 right-3 p-2 text-gray-400 flex flex-col justify-center items-center"
                onClick={toggleDropdown}
              ><BiDotsVerticalRounded /></button>
            )}
            <DropdownOptions show={showDropdown}>
              {decoded && decoded._id === imageData.image.uploaded_by._id ? (
                  <>
                    <button onClick={toggleImageEdit} className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Edit</button>
                    <button onClick={toggleImageDelete} className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Delete</button>
                  </>
                ) : null}
              <button className='hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150'>Report</button>
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
              deleteComment={deleteComment}
              editComment={editComment} 
              toggleCommentForm={toggleCommentForm} 
              showCommentForm={showCommentForm}
              toggleEditForm={toggleEditForm}
              showEditForm={showEditForm} 
              isCommentPending={isLoading}
              isPostCommentError={isPostCommentError}
            />
          </div>
        </div>
      </div>
      <h2 className='container mx-auto font-bold text-3xl text-center md:text-left my-5 pointer-events-none'>More photos like this</h2>
      <div className='container mx-auto lg:mb-5'>
        <ImageSuggestions category={imageData.image.category} />
      </div>
      <Modal isVisible={showImageDelete} onClose={()=>setShowImageDelete(false)}>
        <div className='w-[200px] p-5'>
          {isImageMutateLoading && (
            <div className='px-3 py-1 rounded bg-gray-200'>
              <span className='animate-pulse text-red-600 font-bold tracking-wide'>Image deleting...</span>
            </div>
          )}
          {isImageMutateError && (
            <div className='px-3 py-1 rounded bg-red-200'>
              <span className='text-red-600 font-bold tracking-wide'>{imageMutateError.info.message}</span>
            </div>
          )}
          <h3 className="text-2xl text-center text-gray-600 font-semibold">Are You Sure ?</h3>
          <div className='mx-auto flex justify-center my-2'>
              <button onClick={handleImageDelete} className="px-2 bg-red-600 text-white rounded">Yes</button>
              <button onClick={()=>setShowImageDelete(false)} className="px-2 bg-green-600 text-white rounded ml-2">No</button>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showImageEditModal} onClose={()=>setShowImageEditModal(false)}>
        <UploadImageForm 
          categoryData={categoryData} 
          submitFn={editImageInfo} 
          method="edit" 
          imageData={imageData}
        />
      </Modal>
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