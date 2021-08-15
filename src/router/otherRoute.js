const account = () => import('@/pages/account/index.vue')
const detail = () => import('@/pages/details/index.vue')
const noPath = () => import('@/pages/noPath/index.vue')
const accountRouter = [
    {
        path: '/account',
        component: account,
        meta: {
            title: '账号'
        },
    },
    {
        path: '/detail',
        component: detail,
        meta: {
            title: '详情'
        }
    },
    {
        path: '/pathError',
        component: noPath
    }
]

export default accountRouter