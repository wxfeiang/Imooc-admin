import requset from '@/utils/request'

/**
 * 登陆
 * return pormise
 */

export const login = (data) => {
  return requset({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取个人信息
 * @param {*} data
 * @returns
 */

export const getUserInfo = (data) => {
  return requset({
    url: '/sys/profile',
    method: 'GET'
  })
}
