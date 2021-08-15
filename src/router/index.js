import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
import seckillRouter from './seckill'
import shopCarRouter from './shopCar'
import otherRoute from './otherRoute'

Vue.use(VueRouter)

const routes = [
   ...homeRouter,
   ...seckillRouter,
   ...shopCarRouter,
   ...otherRoute,
   {
     path: '/person',
     component: () => import('@/pages/person'),
     meta: {
       title: '个人信息'
     }
   }
]

const router = new VueRouter({
  routes
})

VueRouter.prototype.goBack = function () {
  this.go(-1)
}

router.beforeEach((to,from,next) => {
  if(!to.matched[0]) {
    next('/pathError')
  }
  next()
})

router.afterEach((to,from) => {
  document.title = to.meta.title || '淘宝网 - 淘！我喜欢'
})

export default router
