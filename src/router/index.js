import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './home'
import seckillRouter from './seckill'
import shopCarRouter from './shopCar'
import bazaarRouter from './bazaar'
import jsxRouter from './jsx'
import adminRouter from './admin'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layout'),
    children: [
      ...homeRouter,
      ...seckillRouter,
      ...shopCarRouter,
      bazaarRouter,
      jsxRouter,
      {
        path: 'recr',
        component: () => import('@/pages/recr'),
        meta: {
          title: '娱乐'
        }
      },
      {
        path: '/person',
        component: () => import('@/pages/person'),
        meta: {
          title: '个人信息'
        }
      },
      {
        path: 'about',
        component: () => import('@/pages/about'),
        meta: {
          title: '关于'
        }
      }
    ]
  },
  adminRouter,
  {
    path: '/account',
    component: () => import('@/pages/account'),
    meta: {
      title: '账号'
    }
  },
  {
    path: '/detail',
    component: () => import('@/pages/details'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/401',
    component: () => import('@/pages/error/401.vue'),
    meta: {
      title: '401'
    }
  },
  {
    path: '*',
    component: () => import('@/pages/error/404.vue'),
    meta: {
      title: '404'
    }
  }
]

//解决点击路由跳转同名报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'  // hash  hash兼容性更好(虽然丑了点) history要跟后端沟通 正常下推荐使用hash
})

VueRouter.prototype.goBack = function () {
  this.go(-1)
}

router.beforeEach((to, from, next) => {
  if (to.path !== '/person') {
    next()
  } else {
    const users = store.state.userModule.users
    const token = store.state.userModule.token
    const flag = users.some(item => item.token === token)
    if (!flag) {
      next('/account')
      Vue.prototype.$message({
        type: 'error',
        message: '请先登录！'
      })
    } else {
      next()
    }
  }
})

router.afterEach(to => document.title = to.meta.title || 'vue2-whole')

export default router
