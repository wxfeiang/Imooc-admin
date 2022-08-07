/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-15 15:29:43
 * @LastEditTime: 2022-08-07 17:57:18
 * @FilePath: /Imooc-admin/src/utils/auth.js
 */
import { TIME_SAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storeage'

/**
 * @description: 获取时间戳
 * @return {*}
 */
export function getTimeStamp() {
  //  保存的登陆的时间
  return getItem(TIME_SAMP)
}

/**
 * @description: 设置时间戳
 * @return {*}
 */
export function setTimeStamp() {
  console.log('设置了时间----22')
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
  console.log('🌭[tiemStamp]:', tiemStamp)

  return currentTime - tiemStamp > TOKEN_TIMEOUT_VALUE
}
