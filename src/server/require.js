import axios from 'axios'
import config from './config.json'
const instance = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {
        // 'FH-Token': "",
        // "Authorization": '123',
        // "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    }
})

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log('请求拦截出错了')
    }
)
instance.interceptors.response.use(
    res => {
        return res
    },
    error => {
        console.log('响应拦截出错了')
    }
)

export const getRequest = (url, params = {}, config = {}) => {
    return instance({
        method: 'get',
        url,
        params,
        ...config
    }).then(response => {
        return response.data
    })
}

export const postRequest = (url, data, config = {}) => {
    return instance({
        method: 'post',
        url,
        data,
        ...config
    }).then(response => {
        return response.data
    })
}