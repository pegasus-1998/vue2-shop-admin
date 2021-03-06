const admin = () => import('@/pages/admin/index.vue')

const adminRouter = {
    path: '/admin',
    component: admin,
    redirect: 'admin/welcome',
    meta: {
        title: 'admin'
    },
    children: [
        {
            path: 'welcome',
            component: () => import('@/pages/admin/routers/welcome'),
            meta: {
                title: 'admin - welcome',
                bread: ['admin', 'home', 'welcome'],
                isNeedLogin: true,
            }
        },
        {
            path: 'message',
            component: () => import('@/pages/admin/routers/message'),
            meta: {
                title: 'admin - message',
                bread: ['admin', 'user', 'message']
            }
        },
        {
            path: '401',
            component: () => import('@/pages/error/401.vue'),
            meta: {
                title: 'admin - 401',
                bread: ['admin', 'error', '404']
            }
        },
        {
            path: '404',
            component: () => import('@/pages/error/404.vue'),
            meta: {
                title: 'admin - 404',
                bread: ['admin', 'error', '404']
            }
        },
        {
            path: 'vuedraggable',
            component: () => import('@/pages/admin/routers/vuedraggable'),
            meta: {
                title: 'admin - vuedraggable',
                bread: ['admin', 'components', 'vuedraggable']
            }
        }
    ]
}

export default adminRouter