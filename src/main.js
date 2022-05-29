import i18n from '@/i18n'
import 'rest-css'
import { createApp } from 'vue'
import App from './App.vue'
import './permisssion' //  倒入路由守卫
import installElementPlus from './plugins/element'
import router from './router'
import { setupStore } from './store'

const app = createApp(App)
app.config.warnHandler = () => null // 消除烦人的控制台警告信息
installElementPlus(app)
setupStore(app)

app.use(router).use(i18n).mount('#app')
