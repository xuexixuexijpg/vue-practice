import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login' //默认路径
  },
  {
    path: '/login',
    component: () => import('@/views/login/loginView.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/mainView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
