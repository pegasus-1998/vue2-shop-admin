import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/element'
import '@/styles/index.scss'
import globalComponents from '@/components/index.js'
import VueLazyload from 'vue-lazyload'
import directives from '@/directives'

Vue.use(VueLazyload, {
  loading: require('@/images/load.gif'),
  // error: require('images/error.png') 
})
Vue.use(globalComponents)
Vue.use(directives)
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
