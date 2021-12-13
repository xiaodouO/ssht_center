import { Message } from 'element-ui';
import axios from 'axios';
import qs from 'qs';
import Device from '@/plugins/device';
import store from '@/store/index';

const game_id = store.getters.gameInfo.id || 0;
const alias = getGameAlias();
const isProd = process.env.NODE_ENV === 'production';
const BASE_URL = '';
const service = axios.create({
  baseURL: isProd ? '' : BASE_URL,
  timeout: 60 * 1000 * 5,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    'game-id': game_id,
    'game-alias': alias,
    // 1=>app,2=>pc,3=>wap
    device: Device.desktop ? 2 : 3
  }
});
const err = error => {
  if (error.message.includes('timeout')) {
    Message({
      message: '请求超时',
      type: 'error'
    });
  }
  return Promise.reject(error);
};

// 请求拦截
service.interceptors.request.use(config => {
  // console.log('request----->', config);
  // 设置token
  config.headers['Access-Token'] = localStorage.getItem('userToken') || '';
  return config;
}, err);

// 回调拦截
service.interceptors.response.use(response => {
  // console.log('response----->', response);
  const config = response.config;
  let res = response.data;
  if (res.code === 0) {
    // 提示成功信息
    if (config && config.successToast) {
      Message({
        message: res.msg,
        type: 'success'
      });
    }
    return res;
  } else {
    if (config.errToast || config.errToast === undefined) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 50000
      });
    }
    return Promise.reject(res);
  }
}, err);

function getGameAlias () {
  let host = window.location.host;
  host = host.split('.');
  return host[0] == 10 ? 'yfb' : host[0];
  // return host[0] == 10 ? 'cstw' : host[0];
}

export default service;
