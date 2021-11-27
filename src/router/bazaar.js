const bazaar = () => import('@/pages/bazaar')

const bazaarRouter = {
    path: '/bazaar',
    component: bazaar,
    meta: {
        title: '主题市场'
    },
    children: [
        
    ]
}

export default bazaarRouter