/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-11 11:10:33
 * @LastEditTime: 2022-08-09 00:58:13
 * @FilePath: /Imooc-admin/src/utils/storeage.js
 */
//  数据本地化存储

/**
 * 存储数据
 * @param {*} key
 * @param {*} value
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * @description: 获取指定的本地缓存
 * @param {*} key
 * @return {*} data
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

/**
 * @description: 删除指定数据
 * @param {*} key
 * @return {*}
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * @description: 删除所有缓存数据
 * @param {*} key
 * @return {*}
 */
export const removeAllItem = (key) => {
  window.localStorage.clear()
}
