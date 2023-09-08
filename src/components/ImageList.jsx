import React, { useEffect } from 'react'
import ImageItem from './ImageItem'
import CategoryNavigation from './CategoryNavigation'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchRepositories } from '../utils/http'

const ImageList = () => {

  const {data, hasNextPage, fetchNextPage} = useInfiniteQuery(
    {
      queryKey: ['repositories'],
      queryFn:({ pageParam = 1 }) => fetchRepositories(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      }
    }
  )

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

  if(data) {
    content = (
      <ul className='grid grid-cols-4 gap-2'>
        {
          data.pages.map((page) => 
            page.items.map((repo) => (
              <li className='border-2 border-gray-900 p-3 mb-1' key={repo.id}>
                <p>{repo.name}</p>
                <p>{repo.description}</p>
              </li>
              )
            )
        )}
      </ul>
    )
  }

  return (
    <>
    <CategoryNavigation />
    {/* <div className='grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-[0px] lg:px-[150px]'>? */}
    <div>
      {content}
    </div>
    </>
  )
}

export default ImageList