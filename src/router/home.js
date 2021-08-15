const home = () => import('@/pages/home/index.vue')

const homeRouter = [
    {
        path:'/',
        component: home,
        meta: {
            title: '淘宝网-淘！我喜欢'
        }
    },
    {
        path:'/home',
        component: home,
        meta: {
            title: '淘宝网-淘！我喜欢'
        }
    }
]

export default homeRouter
