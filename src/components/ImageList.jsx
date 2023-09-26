import React, { useEffect, useState } from 'react'
import ImageItem from './ImageItem'
import CategoryNavigation from './CategoryNavigation'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchImages } from '../utils/http';
import { useLocation } from 'react-router';
import LoadingImage from '../ui/LoadingImage';
 
const ImageList = ({categoryData}) => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('id');

  const {data: imageData, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    {
      queryKey: ['images',  {category: searchParam}],
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

  {isFetchingNextPage && (<LoadingImage />)}

  let content;

  if(imageData) {
    content = (
        <>
          {
            imageData.pages.map((page) => 
              page.data.docs.map((imageItem) => (
                <ImageItem key={imageItem._id} image={imageItem}/>
                )
              )
            )
          }
          {isFetchingNextPage && (<LoadingImage />)}
        </>
    )
  }

  return (
    <>
    <CategoryNavigation categoryData={categoryData} />
    <div className='min-h-full grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-[0px] lg:px-[150px]'>
      {content}
    </div>
    </>
  )
}

export default ImageList