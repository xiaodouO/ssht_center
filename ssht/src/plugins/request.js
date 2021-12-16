import axios from "axios";
const service = axios.create({
  baseURL: "//223.112.126.90:8005/",
  timeout: 60 * 1000 * 5,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "X-Requested-With": "XMLHttpRequest",
  },
});
const err = (error) => {
  if (error.message.includes("timeout")) {
  }
  return Promise.reject(error);
};

// 请求拦截
service.interceptors.request.use((config) => {
  // console.log('request----->', config);
  return config;
}, err);

// 回调拦截
service.interceptors.response.use((response) => {
  // console.log('response----->', response);
  let res = response.data;
  if (res.code === 0) {
    return res;
  } else {
    return Promise.reject(res);
  }
}, err);

export default service;
