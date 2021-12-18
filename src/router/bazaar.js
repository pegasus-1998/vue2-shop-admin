const bazaar = () => import('@/pages/bazaar')
const swiper = () => import('@/pages/bazaar/routes/swiper')
const echarts = () => import('@/pages/bazaar/routes/echarts')
const editor = () => import('@/pages/bazaar/routes/editor')
const transition = () => import('@/pages/bazaar/routes/transition')

const bazaarRouter = {
    path: '/bazaar',
    component: bazaar,
    meta: {
        title: '主题市场'
    },
    children: [
        {
            path: '',
            // component: swiper,
            redirect: '/bazaar/swiper'
        },
        {
            path: 'swiper',
            component: swiper,
            meta: {
                title: '主题市场- 轮播效果'
            }
        },
        {
            path: 'echarts',
            component: echarts,
            meta: {
                title: '主题市场- 图表库'
            }
        },
        {
            path: 'editor',
            component: editor,
            meta: {
                title: '主题市场- 富文本'
            }
        },
        {
            path: 'transition',
            component: transition,
            meta: {
                title: '主题市场- 过渡'
            }
        }
    ]
}

export default bazaarRouter