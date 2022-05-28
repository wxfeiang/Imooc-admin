import i18n from '@/i18n'
import 'rest-css'
import { createApp } from 'vue'
import App from './App.vue'
import './permisssion' //  倒入路由守卫
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'

const app = createApp(App)
installElementPlus(app)

app.use(store).use(router).use(i18n).mount('#app')
