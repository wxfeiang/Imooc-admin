import axios from 'axios'

console.log(process.env.VUE_APP_BASE_API, 'process.env.VUE_APP_BASE_API')
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 封装接口请求模块
export default service
