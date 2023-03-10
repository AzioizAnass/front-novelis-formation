import axios from "axios"

export const axiosOne = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getUsers = async () => {
    const response = await axiosOne.get("/articles/getAll")
    return response.data
}
