import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/element'
import '@/styles/index.scss'
import '@/styles/element-variables.scss'
import plugins from '@/plugins'
import VueLazyload from 'vue-lazyload'
import { nanoid } from 'nanoid'
import JwChat from 'jwchat'
import _ from 'lodash'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/src/swiper.scss'
import * as echarts from 'echarts'

Vue.use(VueAwesomeSwiper) 
Vue.use(JwChat)
Vue.use(VueLazyload, {
  loading: require('@/images/load.gif'),
  // error: require('images/error.png') 
})
Vue.use(plugins)
Vue.prototype.$bus = new Vue()
Vue.prototype.$nanoid = nanoid
Vue.config.productionTip = false
Vue.prototype._ = _
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
