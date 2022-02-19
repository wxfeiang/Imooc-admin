import varilables from '@/styles/varilables.scss'
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // true  用户信息已经存在了

    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => varilables,
  siderbarOpen: (state) => state.app.siderbarOpen
}

export default getters
