import vm from '@/main.js'
const shopCarModule = {
    namespaced: true,
    state: {
        shopMessage: []   //保存商品数据的每条对象到session中
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        ADD__SHOP_MESSAGE(state, obj) {   // 添加数据
           const temp = state.shopMessage.some(item => item.path == obj.path && item.id == obj.id)
            if(!temp) {
                state.shopMessage.push(obj)
                vm.$message({
                    type: 'success',
                    message: '添加成功'
                })
            }else {
                vm.$message({
                    type: 'warning',
                    message: '您已经加入了购物车'
                }) 
            } 
        },
        DELETE_SHOP_MESSAGE(state, idx) {  
            vm.$delete(state.shopMessage, idx)
        }
    }
}

export default shopCarModule