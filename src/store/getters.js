const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // true  用户信息已经存在了
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
