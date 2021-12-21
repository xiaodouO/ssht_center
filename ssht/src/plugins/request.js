import axios from "axios";
const service = axios.create({
  baseURL: "http://172.20.54.25/QmsApi/",
  // baseURL: "http://223.112.126.90:8005/QmsApi/",
  timeout: 60 * 1000 * 5,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "X-Requested-With": "XMLHttpRequest",
  },
});
const err = (error) => {
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
  if (res.result) {
    return res;
  } else {
    return Promise.reject(res);
  }
}, err);

export default service;
