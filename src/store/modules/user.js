/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-10 21:45:50
 * @LastEditTime: 2022-08-10 18:36:23
 * @FilePath: /Imooc-admin/src/store/modules/user.js
 */
import { getUserInfo, login } from '@/api/sys'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
import { getItem, removeAllItem, setItem } from '@/utils/storeage'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * @description:
     * @param {*} context
     * @param {*} userInfo
     * @return {*}
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            // 存储
            this.commit('user/setToken', data.token)

            // 跳转

            router.push('/')
            // 保存当前登陆时间
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    /**
     * @description: 获取用户信息
     * @param {*} context
     * @return {*}
     */
    async getUserInfo(context) {
      const res = await getUserInfo()

      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * @description: 退出
     * @return {*}
     */
    logout() {
      this.commit('user/setToken', null)
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
