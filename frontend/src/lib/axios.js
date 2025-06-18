import axios from "axios";

//since in production there's no local host so we made this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;