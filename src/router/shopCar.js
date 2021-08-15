const shopCar = () => import('@/pages/shopCar/index.vue')

const shopCarRouter = [
    {
        path:'/shopCar',
        component: shopCar,
        meta: {
            title: '购物车'
        }
    }
]

export default shopCarRouter