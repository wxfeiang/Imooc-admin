import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'Hwllow word'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const local = 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  local,
  messages
})

export default i18n
