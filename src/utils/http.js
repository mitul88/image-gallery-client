import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true }}
});

export const fetchCategories = async ({id, signal}) => {
  const response = await fetch(`http://localhost:4000/api/category`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const fetchImages = async ({pageParam=1, limit, category, user}) => {
 
  let url = `http://localhost:4000/api/image/?page=${pageParam}`;
  
  if(category && user && limit) {
    url += '&limit=' + limit + '&category=' +  category + '&user=' + user;
  } else if(category && limit) {
    url += '&limit=' + limit + '&category=' +  category;
  } else if (category) {
    url += '&category=' + category;
  } else if (user) {
    url += '&user=' + user;
  } else if (limit) {
    url += '&limit=' + limit;
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

export async function postComment(commentData) {
  const formData = commentData.formData;
  const token = commentData.token;
  const postData = {
    "user_comment": formData.get('user_comment'),
    "image_id": formData.get('image_id')
  }

  const response = await fetch(`http://localhost:4000/api/comment/`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}