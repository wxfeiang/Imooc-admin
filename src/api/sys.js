import requset from '@/utils/request'

/**
 * 登陆
 * return pormise
 */

export const login = (data) => {
  return requset({
    url: '/mock/sys/login',
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
    url: '/mock/sys/profile',
    method: 'GET'
  })
}

export const getpicData = (params) => {
  return requset({
    url: '/acjson/picData',
    method: 'GET',
    params
  })
}

export const getpicDataDetl = (params) => {
  return requset({
    url: '/acjson/picDataDetl?id=' + params,
    method: 'GET'
  })
}
