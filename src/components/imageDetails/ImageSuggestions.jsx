import ImageItem from '../ImageItem';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../../utils/http';
import LoadingImage from '../../ui/LoadingImage';

const ImageSuggestions = ({category}) => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["img-suggestions", {category: category._id, limit: 5}],
    queryFn: ({signal, queryKey}) => fetchImages({signal, ...queryKey[1]})
  })

  let content;

  if (isLoading) {
    content = (<LoadingImage />)
  }

  if(data) {
    content = data.data.docs.map(image => (
      <ImageItem key={image._id} image={image} />
    ))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {content}
    </div>
  )
}

export default ImageSuggestions