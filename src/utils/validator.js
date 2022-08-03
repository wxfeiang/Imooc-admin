/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-08-03 22:05:58
 * @LastEditTime: 2022-08-03 22:06:03
 * @FilePath: /Imooc-admin/src/utils/validator.js
 */
const regPhone = /^1[3456789]\d{9}$/
const resPass = /^[a-zA-Z0-9]{6,18}$/
const regEmail = /1/
/**
 * 校验手机号
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validatorPhone(rule, value, callback) {
  if (regPhone.test(value)) {
    callback()
  } else {
    callback(new Error('请输入11位数字的手机号'))
  }
}

/**
 * 校验邮箱
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validatorEmail(rule, value, callback) {
  if (regEmail.test(value)) {
    callback()
  } else {
    callback(new Error('请输入11位数字的手机号'))
  }
}

/**
 * 校验密码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function validatorPass(value) {
  return resPass.test(value)
}
