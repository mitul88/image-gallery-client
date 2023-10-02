import { useQuery } from '@tanstack/react-query';
import UploadImageForm from '../components/shared/UploadImageForm';
import { fetchCategories } from '../utils/http';

const UploadImagePage = () => {

  const {data: categoryData, isError: isCategoryError, error: categoryError} = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories()
  })
 
  return (
    <>
      <UploadImageForm categoryData={categoryData} method="create" />
    </>
  )
}

export default UploadImagePage