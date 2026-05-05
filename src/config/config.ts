import axios from "axios";

const token = axios.create({
    baseURL: "http://94.158.50.204:40080/api",
});

export default token