import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true }}
});

export const fetchRepositories = async (page=1) => {
    const response = await fetch( 
        `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
     )
     return response.json()
}

export const fetchImages = async ({pageParam=1, limit, category, user}) => {
  console.log('http', category)
  console.log('http', limit)
  let url = `http://localhost:4000/api/image/?limit=5&page=${pageParam}`;

  if(category && user && limit) {
    url += '?category' + category + '&user=' + user;
  } else if (category) {
    url += '?category=' + category;
  } else if (user) {
    url += '?user=' + user;
  } else if (limit) {
    url += '?limit=' + limit;
  }

  const response = await fetch( url )
   return response.json()
}

export const fetchImage = async ({id, signal}) => {
  const response = await fetch(`http://localhost:4000/api/image/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();

  return data;
}

export async function fetchUser({ id, signal }) {
    const response = await fetch(`http://localhost:4000/api/user/${id}`, { signal });
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the user');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    
    const { data } = await response.json();
  
    return data;
  }