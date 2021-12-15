const bazaar = () => import('@/pages/bazaar')
const swiper = () => import('@/pages/swiper')
const echarts = () => import('@/pages/echarts')
const editor = () => import('@/pages/editor')

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
        }
    ]
}

export default bazaarRouter