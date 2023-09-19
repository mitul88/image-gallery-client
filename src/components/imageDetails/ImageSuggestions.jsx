import React from 'react'
import ImageItem from '../ImageItem'
import { useQuery } from '@tanstack/react-query'
import { fetchImages } from '../../utils/http'
import LoadingIndicator from '../../ui/LoadingIndicator'

const ImageSuggestions = ({category}) => {
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["img-suggestions", {category: category, limit: 5}],
    queryFn: ({signal, queryKey}) => fetchImages({signal, ...queryKey[1]})
  })

  let content;

  if (isPending) {
    content = (<LoadingIndicator />)
  }

  if(data) {
    content = data.data.docs.map(image => (
      <ImageItem image={image} />
    ))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {content}
    </div>
  )
}

export default ImageSuggestions