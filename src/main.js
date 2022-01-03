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
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

const options = {
  maxSpreadZoom: 5, // 控制预览图最大的倍数，默认是2倍，我这里改成了原图
  fullscreenEl: true, //控制是否显示右上角全屏按钮
  closeEl: true, //控制是否显示右上角关闭按钮
  tapToClose: true, //点击滑动区域应关闭图库
  shareEl: false, //控制是否显示分享按钮
  zoomEl: true, //控制是否显示放大缩小按钮
  counterEl: false, //控制是否显示左上角图片数量按钮
  arrowEl: true,  //控制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, //点击应切换控件的可见性
  clickToCloseNonZoomable: true //点击图片应关闭图库，仅当图像小于视口的大小时
}

Vue.use(preview, options)
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

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
