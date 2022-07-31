import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main' //默认路径
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/loginView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/mainView.vue')
    // children: [] //根据userMenu来决定生成
  },
  {
    path: '/:pathMatch(.*)*', //路由匹配不到
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      //没有token
      return '/login'
    }
  }
})

export default router
