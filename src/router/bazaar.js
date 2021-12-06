const bazaar = () => import('@/pages/bazaar')
const swiper = () => import('@/pages/swiper')

const bazaarRouter = {
    path: '/bazaar',
    component: bazaar,
    meta: {
        title: '主题市场'
    },
    children: [
        {
            path: '',
            component: swiper,
        },
        {
            path: 'swiper',
            component: swiper,
            meta: {
                title: '主题市场- 轮播效果'
            }
        }
    ]
}

export default bazaarRouter