import React from 'react'
import ImageItem from '../ImageItem'
import { useQuery } from '@tanstack/react-query'
import { fetchImages } from '../../utils/http'

const ImageSuggestions = ({category}) => {
  console.log('sug', category)
  const {data, isError, error} = useQuery({
    queryKey: ["img-suggestions", {category: category, limit: 4}],
    queryFn: ({signal, queryKey}) => fetchImages({signal, ...queryKey[1]})
  })

  console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {/* <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem /> */}
    </div>
  )
}

export default ImageSuggestions