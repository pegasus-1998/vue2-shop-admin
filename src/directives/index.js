export default {
    install(Vue) {

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
}