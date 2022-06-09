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

export const getUserInfo = (params) => {
  return requset({
    url: '/mock/sys/profile',
    method: 'GET'
  })
}

export const getpicData = (params) => {
  return requset({
    url: '/acjson/layui',
    method: 'GET',
    params
  })
}

export const getpicDataDetl = (params) => {
  return requset({
    url: '/acjson/picDataDetl',
    method: 'GET',
    params
  })
}

export const put = (params) => {
  return requset({
    url: '/api/acjson/put/' + params,
    method: 'PUT'
  })
}

export const Delete = (path) => {
  return requset({
    url: '/acjson/delete/',
    method: 'DELETE',
    path
  })
}

export const e404Data = () => {
  return requset({
    url: '/acjson/picDataDetl?id=11',
    method: 'GET'
  })
}
