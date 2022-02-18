import layout from '@/layout/index'
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 私有路由表
 */
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manger',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manger',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: 'userManger',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        component: () => import('@/views/role-list/index'),
        meta: {
          title: 'rolelist',
          icon: 'roul'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('@/views/permission-list/index'),
        meta: {
          title: 'permissionlist',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userinfo',
        component: () => import('@/views/user-info/index'),
        meta: {
          title: 'userinfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index'),
        meta: {
          title: 'import'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/: id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]
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
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
