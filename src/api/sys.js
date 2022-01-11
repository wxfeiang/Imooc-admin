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
