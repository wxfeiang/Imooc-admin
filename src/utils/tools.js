/*
 * @Author: wxfeiang
 * @Description:  处理各种数据
 * @Date: 2022-08-05 09:43:27
 * @LastEditTime: 2022-08-05 10:49:37
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
