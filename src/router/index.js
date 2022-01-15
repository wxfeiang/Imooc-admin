import layout from '@/layout/index'
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 私有路由表
 */
// const privateRoutes = [
//   {
//     path: '/user',
//     component: layout,
//     meta: {
//       title: 'user',
//       icon: 'personnel'
//     },
//     children: []
//   }
// ]
/*
公开的路由表
*/

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    redirect: 'profile',
    component: layout,
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
