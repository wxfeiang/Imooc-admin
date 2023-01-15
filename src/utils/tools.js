/*
 * @Author: wxfeiang
 * @Description:  处理各种数据
 * @Date: 2022-08-05 09:43:27
 * @LastEditTime: 2022-08-13 15:18:47
 * @FilePath: /Imooc-admin/src/utils/tools.js
 */

/**
 * @description:
 * @param {*} str  转化类型
 * @return {*}
 */

export function typeProcessing(value) {
  let msg = ''
  switch (value) {
    case 'input':
    case 'password':
    case 'textarea':
    case 'number':
      msg = 'input'
      break
    default:
      msg = value
      break
  }
  return msg
}

/**
 * @description: 检测是否有回调函数
 * @param {*} data
 * @return {*} Boolean
 */
export function testCallback(data) {
  if (data && Object.prototype.toString.call(data) === '[object Function]') {
    return true
  } else {
    return false
  }
}
/**
 * @description: label和value初始化
 * @return {*}
 */
/**
 * @description:
 * @param {*} props   传入的
 * @param {*} defaultPros  组件默认
 * @return {*}  更新后的默认
 */
export function initDefaultPros(props, defaultPros) {
  if (!defaultPros) {
    defaultPros = {
      label: 'label',
      value: 'value'
    }
  }
  // 获取默认值的key
  const keys = Object.keys(defaultPros)
  if (props && Object.prototype.toString.call(props) === '[object Object]') {
    for (const key in props) {
      if (keys.includes(key)) {
        defaultPros[key] = props[key]
      }
    }
  }
  return defaultPros
}
