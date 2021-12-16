import loading from '@/components/loading.vue'
import backTop from '@/components/backTop.vue'

function install(Vue) {
    // 全局组件
    Vue.component('loading',loading)
    Vue.component('backTop', backTop)

    // 全局过滤
    Vue.filter('defaultImg', function(value) {
        if(!value) return require('@/images/load.gif')
    })
    Vue.filter('formatSex', function(value) {
        if(value === 0) {
            return '女'
        }else {
            return '男'
        }
    })

    // 全局自定义指令
    Vue.directive('focus', {
        bind() {  //指令元素成功绑定时

        },
        inserted(el, binding) { //指令所在元素插入页面时
            el.focus()
        },
        update(el) {  //模板更新渲染时

        }
    })
    
}

export default install