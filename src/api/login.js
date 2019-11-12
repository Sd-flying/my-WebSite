import request from '@/utils/request'

//查询
export function login(params) {
  return request({
    url: '/users/login',
    method: 'get',
    params: params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
