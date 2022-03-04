import axios from "axios";
// 创建axios，赋给变量service

const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API;
const service = axios.create({
    baseURL: BASEURL,  // http://192.168.0.106:8080/devApi/  == http://www.web-jshtml.cn/productapi/productapi
    timeout: 15000,   // 超时
});

//添加请求拦截器
service.interceptors.request.use(
    function (config) {
        config.headers['Access-Control-Allow-Origin'] = '*';
        //在发送请求之前做一些事情
        return config;
    },
    function (error) {
        //队请求错误做些什么
        return Promise.reject(error);
    }
);
//添加响应拦截器
service.interceptors.response.use(
    function (response) {
        //使用响应数据返回响应；
        const data = response;
        // 如果data.code
        if (data) {
            return Promise.resolve(data);
        }
        return response;
    },
    function (error) {
        //使用响应错误返回
        return Promise.reject(error);
    }
);
// 将service 导出
export default service;
