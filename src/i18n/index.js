import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'login'
    }
  },
  zh: {
    msg: {
      test: '登陆'
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局使用t  min.js 倒入
  locale, //  默认项目
  messages //  数据源
})
//  保存国际化状态到vuex

// const getCurrentLanguage = () => {
//   const UAlang = navigator.language
//   console.log(UAlang)
// }

export default i18n
