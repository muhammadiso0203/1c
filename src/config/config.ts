import axios from "axios";

const token = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default token