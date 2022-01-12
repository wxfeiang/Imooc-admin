import { login } from '@/api/sys'
import { TOKEN } from '@/constant'
import router from '@/router'
import { getItem, setItem } from '@/utils/storeage'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     *
     * @param {*} context
     * @param {*} userInfo
     * @returns
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
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
