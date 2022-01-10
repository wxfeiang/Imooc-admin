import { createRouter, createWebHashHistory } from 'vue-router'

/*
公开的路由表
*/

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/test',
    component: () => import('@/views/login/test')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
