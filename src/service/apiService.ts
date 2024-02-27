import axios from "axios";
import {baseURL} from "../constants/urls";


const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request=>{

    request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjdmYzRjNTVlNGQ5MmQ1ZDJiN2ExNWRjMzJhNGE3ZCIsInN1YiI6IjY1ZGI2NDAxMDBmYjZiMDE4NjRkMGMxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UFtzMeOQZUs1m0QqBsm35usgy955JtQ8Nww_BejcWnI`
    return request
})


export {
    apiService
}