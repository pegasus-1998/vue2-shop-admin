import { getRequest, postRequest } from '@/server/require.js'

//获取首页裙子、洗发水等数据
function getHomeMockApi(path) {
    return getRequest(path)
        .then(
            res => res,
            error => console.log('网络请求出错了')
        )
}

export {
    getHomeMockApi
}