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

export const fetchUser = async ({ id, signal }) => {
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

export const postComment = async (commentData) => {
  const formData = commentData.formData;
  const token = commentData.token;
  const method = commentData.method

  let postData = {}
  if (method === "POST") {
    postData = {
      "user_comment": formData.get('user_comment'),
      "image_id": formData.get('image_id')
    }
  } else if (method === "PUT") {
    postData = {
      "user_comment": formData.get('user_comment'),
      "comment_id": formData.get('comment_id')
    }
  } else if (method === "DELETE") {
    postData = {
      "comment_id": formData.get('comment_id'),
    }
  } 

  const response = await fetch(`http://localhost:4000/api/comment/`, {
    method: method,
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

export const fetchComments = async ({id, signal}) => {
  const response = await fetch(`http://localhost:4000/api/comment/image-comments/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const postLike = async (likeData) => {
  const formData = likeData.formData;
  const token = likeData.token;
  const method = likeData.method;
  
  const postData = {
    "image_id": formData.get('image_id')
  }

  const response = await fetch(`http://localhost:4000/api/like/`, {
    method: method,
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

export const fetchLikes = async ({id, token, signal}) => {
  let response;
  if (token !== null) {
    response = await fetch(`http://localhost:4000/api/like/counts/${id}`,{
    method: "GET",
    headers: {
      'authorization': `Bearer ${token}`
    }
  }, { signal });
  } else {
    response = await fetch(`http://localhost:4000/api/like/counts/${id}`, { signal });
  }
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const postProfilePhoto = async (photoData) => {
  console.log(photoData.formData)

  const formData = photoData.formData;
  const token = photoData.token;
  const userId = photoData.userId;

  const response = await fetch(`http://localhost:4000/api/user/upload_profile_photo/${userId}`, {
    method: "POST",
    body: formData,
    headers: {
      'authorization': `Bearer ${token}`,
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

export const editSingleInput = async (inputData) => {
  const formData = inputData.formData;
  const token = inputData.token;
  const userId = inputData.userId;

  let postData = {
    "bio" : formData.get('bio'),
    "interest" : formData.get('interest'),
    "profession" : formData.get('profession'),
  }

  const response = await fetch(`http://localhost:4000/api/user/single-update/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}
