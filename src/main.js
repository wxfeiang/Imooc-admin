import i18n from '@/i18n'
import '@/utils/permisssion' //  倒入路由守卫
import 'rest-css'
import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.warnHandler = () => null // 消除烦人的控制台警告信息
installElementPlus(app)

app.use(store).use(router).use(i18n).mount('#app')
