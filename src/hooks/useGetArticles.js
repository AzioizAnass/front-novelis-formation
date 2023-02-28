import axios from "axios"
import { useQuery } from "react-query"

export const axiosOne = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getArticles = async () => {
    const response = await axiosOne.get("http://localhost:8080/articles/getAll")
    return response.data
}

export const useGetArticles = ()=>{
const {
    isLoading,
    isError,
    error,
    data: articles,
    isFetching,
    isPreviousData,
} = useQuery('articles', () => getArticles(), {
})

if (isLoading) return <p>Loading Articles...</p>

if (isError) return <p>Error: {error.message}</p>

console.log(articles) 
} 