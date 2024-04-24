import axios, { AxiosInstance } from "axios";

const BASE_URL: string = 'http://localhost:3045/api';

const API: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

const getToken = (): string | null => {
    return localStorage.getItem("token");
};
  
API.interceptors.request.use(
    (config) => {
        const token = getToken();
        console.log(token,"token");
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;
