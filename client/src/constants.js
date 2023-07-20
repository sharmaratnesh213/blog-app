// export const BASE_URL = "https://4e3a-4-240-87-123.ngrok-free.app"
// export const BASE_URL = "http://localhost:5000/api" 

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://4e3a-4-240-87-123.ngrok-free.app/api/"
})