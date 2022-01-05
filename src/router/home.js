const home = () => import('@/pages/home/index.vue')

const homeRouter = [
    {
        path:'/',
        component: home,
        meta: {
            title: 'vue2-shop-admin'
        }
    },
    {
        path:'/home',
        component: home,
        meta: {
            title: 'vue2-shop-admin'
        }
    }
]

export default homeRouter
