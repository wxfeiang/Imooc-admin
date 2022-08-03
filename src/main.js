/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-06-20 18:36:03
 * @LastEditTime: 2022-08-02 19:05:40
 * @FilePath: /Imooc-admin/src/main.js
 */
import i18n from '@/i18n'
import '@/utils/permisssion' //  倒入路由守卫
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import 'rest-css'
import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.warnHandler = () => null // 消除烦人的控制台警告信息
installElementPlus(app)

app.use(store).use(router).use(Avue).use(i18n).mount('#app')
