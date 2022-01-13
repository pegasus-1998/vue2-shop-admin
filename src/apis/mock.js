import { getRequest, postRequest } from '@/server/require.js'

//获取首页裙子、洗发水等数据
function getHomeMockApi(path) {
    return getRequest(path)
        .then(
            res => res,
            error => console.log('网络请求出错了')
        )
}

//获取主题市场有好货数据
function getGoodShopApi() {
    return getRequest('/good/shop')
        .then(
            res => res,
            err => console.log('网络请求出错了')
        )
}

//获取主题市场猜你喜欢数据
function getGuessLikeApi() {
    return postRequest('/guess/like')
    .then(
        res => res,
        err => console.log('网络请求出错了')
    )
}

// 获取笑话接口
function getXhApi() {
    return getRequest('/message/xh')
    .then(
        res => res,
        err => console.log('网络请求出错了')
    )
}

// 获取视频接口
function getVideoApi() {
    return postRequest('/message/video')
    .then(
        res => res,
        err => console.log('网络请求出错了')
    )
}

export {
    getHomeMockApi,
    getGoodShopApi,
    getGuessLikeApi,
    getXhApi,
    getVideoApi
}