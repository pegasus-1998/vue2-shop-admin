export default {
    install(Vue) {

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
        
    }
}