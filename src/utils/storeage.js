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
 * 取出数据
 * @param {*} key
 * @param {*} value
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
 * 删除指定数据
 * @param {*} key
 * @param {*} value
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
/**
 * 删除所有
 * @param {*} key
 * @param {*} value
 */
export const removeAllItem = (key) => {
  window.localStorage.clear()
}
