/*
 * @Author: wxfeiang
 * @Description:  处理各种数据
 * @Date: 2022-08-05 09:43:27
 * @LastEditTime: 2022-08-05 21:02:06
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
