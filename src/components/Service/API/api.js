// api.js
import axios from "axios";
import { AppConstant } from "../../../AppConstant";

const api = axios.create({
  baseURL: `${AppConstant.API.URL}`, // Your API base URL
  headers: {
    "Content-Type": "application/json", // Example header
    // Add more headers here as needed
  },
});

// Set the authentication token in the headers
// const setAuthToken = (token) => {
//   if (token) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete instance.defaults.headers.common['Authorization'];
//   }
// };
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Replace with your token retrieval logic
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
