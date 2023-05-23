/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-19 18:50:35
 * @LastEditTime: 2023-05-21 23:45:57
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { useUserStore } from '@/stores'
const BASE_URL = import.meta.env.VITE_API_BASE_URL
// 创建实例
const request: AxiosInstance = axios.create()
// 设置默认值
request.defaults.baseURL = BASE_URL
request.defaults.timeout = 6000

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前加入token
  config.headers['X-Access-Token'] = useUserStore().getToken()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 只让请求状态为200的进入业务层
  if(response.status === 200 && response.data && response.data.code === 200) {
    return response.data
  } else {
    return Promise.reject(response.data)
  }
}, function (error) {
  return Promise.reject(error?.response?.data);
});

export default request