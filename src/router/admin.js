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
                title: 'admin - welcome'
            }
        }
    ]
}

export default adminRouter