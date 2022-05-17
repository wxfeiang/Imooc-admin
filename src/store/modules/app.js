import { LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storeage'

export default {
  namespaced: true,
  state: () => ({
    siderbarOpen: true, // 菜单开关状态
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSiderOpened(state) {
      state.siderbarOpen = !state.siderbarOpen
    },
    setLanguage(state, lang) {
      // 存储 lang
      setItem(LANG, lang)
      state.language = lang
    }
  }
}
