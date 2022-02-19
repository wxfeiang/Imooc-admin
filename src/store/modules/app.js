export default {
  namespaced: true,
  state: () => ({
    siderbarOpen: true // 开关状态
  }),
  mutations: {
    triggerSiderOpened(state) {
      state.siderbarOpen = !state.siderbarOpen
    }
  }
}
