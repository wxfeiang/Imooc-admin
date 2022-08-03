/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-08-03 22:03:55
 * @LastEditTime: 2022-08-03 22:36:35
 * @FilePath: /Imooc-admin/src/components/SeachTable/createRules.js
 */
import {
  validatorEmail,
  validatorPass,
  validatorPhone
} from '@/utils/validator'
const createRules = (data, field) => {
  data.forEach((item) => {
    // 检测规则是一个数组类型 Array
    let rulesArray = []
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item),
        trigger: 'blur'
      }
      rulesArray.push(rule)
    }
    // 校验手机号
    if (item.type && item.type === 'phone') {
      const rule = { validator: validatorPhone, trigger: 'change' }
      rulesArray.push(rule)
    }
    // 校验邮箱
    if (item.type && item.type === 'email') {
      const rule = { validator: validatorEmail, trigger: 'change' }
      rulesArray.push(rule)
    }
    // 校验密码
    if (item.type && item.type === 'password') {
      const validatorPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'))
        } else if (!validatorPass(value)) {
          callback(new Error('请输入输入6~18的数字、字母组合'))
        } else {
          callback()
        }
      }
      const rule = { validator: validatorPassword, trigger: 'change' }
      rulesArray.push(rule)
    }
    if (item.type && item.type === 'passwords') {
      const p1 = data.filter((item) => item.type === 'password')[0]
      const validatorPassword = (rule, value, callback) => {
        const p1Value = field[p1.prop]
        if (!value) {
          callback(new Error('请输入密码'))
        } else if (!validatorPass(value)) {
          callback(new Error('请输入输入6~18的数字、字母组合'))
        } else if (p1Value && p1Value !== value) {
          callback(new Error('确认密码不一致'))
        } else {
          callback()
        }
      }
      const rule = { validator: validatorPassword, trigger: 'change' }
      rulesArray.push(rule)
    }
    // 是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules)
    }
    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input':
      msg = '请输入'
      break
    case 'select':
    case 'checkbox':
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}
export default createRules
