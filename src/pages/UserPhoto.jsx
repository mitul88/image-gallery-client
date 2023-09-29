import ImageGridItem from '../components/profile/ImageGridItem';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

import jwtDecode from 'jwt-decode';
import Modal from '../ui/Modal';
import UploadImageForm from '../components/shared/UploadImageForm';
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { fetchImages, postImage, queryClient } from '../utils/http';

const UserPhotoPage = () => {
  const params = useParams('userId');
  const token = useRouteLoaderData('root');
  const [uploadImageModal, setUploadImageModal] = useState(false);

  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };

  const {mutate: uploadImageMutate, isPending: isUploadPending, isError: isUploadError, error: uploadError } = useMutation({
    mutationFn: postImage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['images']});
      setUploadImageModal(false);
    }
  });

  const handleUploadImage = (formData) => {
    uploadImageMutate({formData, token})
  }

  const {data: imageData, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    {
      queryKey: ['images',  {user: params.userId}],
      queryFn:({ pageParam = 1, queryKey}) => fetchImages({pageParam, ...queryKey[1]}),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined;
      }
    }
  );

  useEffect(()=> {
    let fetching = false;
    const onScroll = async (event) => {
      const {scrollHeight, scrollTop, clientHeight} = event.target.scrollingElement;
    
      if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if(hasNextPage) await fetchNextPage();
        fetching = false;
      }
    }

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    }
  }, [])

  let content;
  if(imageData) {
      content = imageData.pages.map(page => page.data.docs.map(image => <ImageGridItem key={image._id} image={image}/>))
  } 
  

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-5 my-5'>
        {content}
        {
          params.userId === decoded?._id ? (
            <button onClick={()=>setUploadImageModal(true)} className='h-[80px] w-[80px] rounded bg-gray-100 hover:bg-gray-200 ease-in duration-300'>
              <AiOutlinePlus className='scale-150 mx-auto text-gray-400' />
            </button>
          ) : null
        }
      <Modal isVisible={uploadImageModal} onClose={()=>setUploadImageModal(false)}>
        <UploadImageForm 
            handleUploadImage={handleUploadImage} 
            isUploadPending={isUploadPending}
            isUploadError={isUploadError}
            uploadError={uploadError}
          />
      </Modal> 
    </div>
  )
}

export default UserPhotoPage 
