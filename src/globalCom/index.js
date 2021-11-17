import loading from '@/components/loading.vue'
import backTop from '@/components/backTop.vue'

function install(Vue) {
    Vue.component('loading',loading)
    Vue.component('backTop', backTop)
}

export default install