import ImageGridItem from '../components/profile/ImageGridItem';
import { useLoaderData } from 'react-router-dom';

const UserPhotoPage = () => {

  const data = useLoaderData();

  let content;

  if(data) {
    content = (
      data.data.docs.map(image => (
        <ImageGridItem key={image._id} image={image}/>
      ))
    )
  }

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-5 my-5'>
        {content}
    </div>
  )
}

export default UserPhotoPage 

export const loader = async ({params}) => {
  let url = `http://localhost:4000/api/image/?user=${params.userId}`;
  const response = await fetch( url )
   return response.json()
}