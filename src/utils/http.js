import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true }}
});

export const fetchRepositories = async (page=1) => {
    console.log(page)
    const response = await fetch( 
        `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
     )
     return response.json()
}

export async function fetchUser({ id, signal }) {
    const response = await fetch(`http://localhost:4000/api/user/${id}`, { signal });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the user');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { event } = await response.json();
  
    return event;
  }