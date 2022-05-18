import axios from "axios";
const api = axios.create({
    baseURL: "",
    withCredentials: false,
})

export default api;