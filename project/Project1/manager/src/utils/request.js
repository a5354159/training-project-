import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "http://169.254.78.4:7001/",
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  }
);

export default service;
