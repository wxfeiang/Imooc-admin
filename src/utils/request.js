import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { Encrypt } from './encry'
// console.log(
//   process.env.NODE_ENV,
//   process.env.VUE_APP_BASE_API,
//   'process.env.VUE_APP_BASE_API-----'
// )

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 36000 * 10
})
// 请求拦截  设置统一header
service.interceptors.request.use(
  (config) => {
    console.log(config)

    // params  data 进行加密
    config.data = { data: config.data ? Encrypt(config.data) : '' }
    config.params = { data: config.params ? Encrypt(config.params) : '' }
    // config.params = Encrypt(config.params)

    console.log(config)

    if (store.getters.token) {
      // token 是否过期
      if (isCheckTimeout()) {
        // 退出 logout
        store.dispatch('user/logout')
        return Promise.reject(new Error('token---失效了'))
      }
      // Bearer + ''  后端已经加好了
      config.headers.Authorization = `${store.getters.token}`
    }
    return config // VREAM
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截  401 token过期处理
service.interceptors.response.use(
  (response) => {
    const { code, message, data } = response.data // 后台返回的标准数据格式
    // NProgress.done()

    // 请求是否成功
    // 成功后解析数据
    // 请求成功 业务失败
    if (code == 200) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    /** *** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理   可从接口返回数据判断
      if (JSON.stringify(error).includes('timeout')) {
        error.message = '服务器响应超时，请刷新当前页'
        store.dispatch('user/logout')
      }
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
// 封装接口请求模块
export default service
