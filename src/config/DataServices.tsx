import axios from "axios";

const BASE_URL:string = 'http://localhost:3045/api'

const API = axios.create({
    baseURL: BASE_URL
})

export default API;