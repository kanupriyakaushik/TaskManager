import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers = req.headers || {};
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;