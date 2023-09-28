import ImageGridItem from '../components/profile/ImageGridItem';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

import jwtDecode from 'jwt-decode';
import Modal from '../ui/Modal';
import UploadImageForm from '../components/shared/UploadImageForm';
import { useState } from 'react';

const UserPhotoPage = () => {

  const data = useLoaderData();
  const params = useParams('userId');
  const token = useRouteLoaderData('root');
  const [uploadImageModal, setUploadImageModal] = useState(false);

  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };

  let content;

  if(data) {
    if(data.data.docs.length !== 0) {
      content = (
        data.data.docs.map(image => (
          <ImageGridItem key={image._id} image={image}/>
        ))
      )
    } else {
      if (params.userId === decoded._id) {
        content = (
          <button onClick={()=>setUploadImageModal(true)} className='h-[80px] w-[80px] rounded bg-gray-100 hover:bg-gray-200 ease-in duration-300'>
            <AiOutlinePlus className='scale-150 mx-auto text-gray-400' />
          </button>
        )
      } else {
        content =(<h3 className="text-xl text-gray-400 tracking-wide">Manahil Has not uploaded any photo yet</h3>)
      }
    }
  } 

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-5 my-5'>
        {content}
      <Modal isVisible={uploadImageModal} onClose={()=>setUploadImageModal(false)}>
        <UploadImageForm />
      </Modal> 
    </div>
  )
}

export default UserPhotoPage 

export const loader = async ({params}) => {
  let url = `http://localhost:4000/api/image/?user=${params.userId}`;
  const response = await fetch( url )
   return response.json()
}