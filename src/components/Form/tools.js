/*
 * @Author: wxfeiang
 * @Description:  处理各种数据
 * @Date: 2022-08-05 09:43:27
 * @LastEditTime: 2022-08-07 23:58:46
 * @FilePath: /Imooc-admin/src/components/Form/tools.js
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
 * @param {*} props   传入的
 * @param {*} defaultProps  组件默认
 * @return {*}  更新后的默认
 */
export function initDefaultProps(props, defaultProps) {
  if (!defaultProps) {
    defaultProps = {
      label: 'label',
      value: 'value'
    }
  }

  if (props && Object.prototype.toString.call(props) === '[object Object]') {
    // 获取默认值的key
    const keys = Object.keys(defaultProps)
    for (const key in props) {
      if (keys.includes(key)) {
        defaultProps[key] = props[key]
      }
    }
  }
  return defaultProps
}

/**
 * @description: 初始化  option
 * @return {*}
 */
export function initOptions(option) {
  let newOption = []
  if (option && Array.isArray(option) && option.length > 0) {
    newOption = option
  }
  return newOption
}
