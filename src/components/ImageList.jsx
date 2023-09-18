import React, { useEffect } from 'react'
import ImageItem from './ImageItem'
import CategoryNavigation from './CategoryNavigation'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchImages } from '../utils/http'
import ImageGridItem from './profile/ImageGridItem'

const ImageList = () => {

  const {data, hasNextPage, fetchNextPage} = useInfiniteQuery(
    {
      queryKey: ['image'],
      queryFn:({ pageParam = 1 }) => fetchImages(pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      getPreviousPageParam: (firstPage, allPages) => firstPage.prevPage,
    }
  );

  useEffect(()=> {
    let fetching = false;
    const onScroll = async (event) => {
      const {scrollHeight, scrollTop, clientHeight} = event.target.scrollingElement;
    
      if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if(hasNextPage) await fetchNextPage();
        fetching = false;
      }
    }

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    }
  })

  

  let content;

console.log(data)

  if(data) {
    content = (
        data.pages.map((page) => 
          page.data.docs.map((imageItem) => (
            <ImageItem key={imageItem.id} image={imageItem}/>
            )
          )
      )
    )
  }

  return (
    <>
    <CategoryNavigation />
    <div className='grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-[0px] lg:px-[150px]'>
      {content}
    </div>
    </>
  )
}

export default ImageList