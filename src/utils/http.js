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