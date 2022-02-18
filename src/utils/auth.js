import { TIME_SAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from '@/utils/storeage'

/**
 *  获取时间戳
 */
export function getTimeStamp() {
  //  保存的登陆的时间
  return getItem(TIME_SAMP)
}

/**
 *  设置时间戳
 */
export function setTimeStamp() {
  //  保存的登陆的时间
  setItem(TIME_SAMP, Date.now())
}

/**
 *  对比是否超时
 */
export function isCheckTimeout() {
  //  当前时间
  const currentTime = Date.now()

  // 缓存时间

  const tiemStamp = getTimeStamp()
  // console.log(currentTime - tiemStamp > TOKEN_TIMEOUT_VALUE, '缓存时间是否过期')
  return currentTime - tiemStamp > TOKEN_TIMEOUT_VALUE
}
