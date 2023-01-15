/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-15 15:29:43
 * @LastEditTime: 2022-08-10 18:33:43
 * @FilePath: /Imooc-admin/src/utils/auth.js
 */
import { TIME_SAMP, TOKEN, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storeage'

/**
 * @description: 获取时间戳
 * @return {*}
 */
export function getTimeStamp() {
  //  保存的登陆的时间
  return getItem(TIME_SAMP)
}
export function getToken() {
  //  保存的登陆的时间
  return getItem(TOKEN)
}

/**
 * @description: 设置时间戳
 * @return {*}
 */
export function setTimeStamp() {
  //  保存的登陆的时间
  setItem(TIME_SAMP, Date.now())
}

/**
 * @description: 对比是否超时
 * @return {*}
 */
export function isCheckTimeout() {
  //  当前时间
  const currentTime = Date.now()
  // 缓存时间
  const tiemStamp = getTimeStamp()
  return currentTime - tiemStamp > TOKEN_TIMEOUT_VALUE
}
