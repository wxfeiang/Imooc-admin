import router from '@/router'
import store from '@/store'
// 不登陆白名单

const whiteList = ['/login']

/**
 * 处理路由前置守卫
 */

router.beforeEach(async (to, from, next) => {
  // 已经登陆  不允许进入login
  // 未登陆 只允许 进入login

  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // baim
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
