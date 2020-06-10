import axios from "axios";
import Loading from './loading'
// 手动创建一个 axios 对象, 参考: https://github.com/axios/axios#creating-an-instance
const request = axios.create({
  // 请求配置参考: https://github.com/axios/axios#request-config
  // 根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
  // 比如 get('/test'), 最终发送请求是: /dev-api/test
  // baseURL: '/dev-api',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 //请求超时
});



// 设置请求拦截器
request.interceptors.request.use(
  config => {
    // 将token放入请求头
    const token = localStorage.getItem('adminToken')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    if (config.url !== '/user/login' && config.url !== '/user/info/admin' ) {
      // 打开loading加载
      Loading.open()
    }
    return config;
  },
  error => {
    // 关闭loading加载
    Loading.close()
    return Promise.reject(error);
  }
);

// 设置响应拦截器
request.interceptors.response.use(
  response => {
    // 关闭loading加载
    Loading.close()
    return response;
  },
  error => {
    // 关闭loading加载
    Loading.close()
    return Promise.reject(error);
  }
);

// 导出 axios实例对象
export default request;
