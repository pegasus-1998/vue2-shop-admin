const seckill = () => import('@/pages/seckill/index.vue')

const seckillRouter = [
    {
        path:'/seckill',
        component: seckill,
        meta: {
            title: '秒杀'
        }
    }
]

export default seckillRouter
