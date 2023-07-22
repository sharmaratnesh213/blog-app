import axios from "axios";

export const BASE_URL = "https://91e6-4-240-87-123.ngrok-free.app"
// export const BASE_URL = "http://localhost:5000/api" 


export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'ngrok-skip-browser-warning': '5000'
    }
})