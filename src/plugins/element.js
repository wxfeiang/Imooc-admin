/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-02 22:07:30
 * @LastEditTime: 2022-08-04 11:01:21
 * @FilePath: /Imooc-admin/src/plugins/element.js
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus, { locale })
}
