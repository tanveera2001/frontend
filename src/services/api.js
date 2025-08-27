import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",   // backend domain
    withCredentials: true,  // this is used for cookies
});

export default api;