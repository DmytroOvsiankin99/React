import * as axios from 'axios'

const axiosInstance = axios.create({
    withcredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'a2eaa5ee-ea65-4b0b-8c62-e683eb4c4d17'
    },
})

export const getUsers = (currentPage = 1, pageSize = 6) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}