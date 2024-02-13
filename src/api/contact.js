import axios from "axios";

// export default axios.create({
//     // baseURL:"http://localhost:3006/",
//     baseURL:"http://localhost/ARAKNERDLIB-master/",
// });

// api.js

const BASE_URL = 'http://localhost/ARAKNERDLIB-master/'; // Replace this with your actual backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

const contactApi = {
    get: (endpoint) => api.get(`http://localhost/ARAKNERDLIB-master${endpoint}`),
    post: (endpoint, data) => api.post(endpoint, data),
    update: (endpoint) => api.update(endpoint),
    delete: (endpoint) => api.delete(endpoint),
  };
  

export default contactApi;
