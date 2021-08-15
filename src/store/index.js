/**
 * @ 通过vuex-along - 实现持久化存储
 */
import Vue from 'vue'
import Vuex from 'vuex'
import shopCarModule from './modules/shopCar'
import createVuexAlong from "vuex-along";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopCarModule
  },
  plugins: [
    createVuexAlong({
      // name: "customName",  设置本地数据集合的名字，默认为 vuex-along
      local: {   //永久存储

      },
      session: {  //会话存储
        list: ["shopCarModule.shopMessage"],
      },
    }),
  ],
})
