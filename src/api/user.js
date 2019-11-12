import request from '@/utils/request'

//查询
export function getUserListPage(params) {
  return request({
    url: '/user/listpage',
    method: 'get',
    params: params
  })
}
//删除
export function removeUser(params) {
  return request({
    url: '/user/remove',
    method: 'get',
    params: params
  })
}
//批量删除
export function batchRemoveUser(params) {
  return request({
    url: '/user/batchremove',
    method: 'get',
    params: params
  })
}
//编辑
export function editUser(params) {
  return request({
    url: '/user/edit',
    method: 'get',
    params: params
  })
}
//添加
export function addUser(params) {
  return request({
    url: '/user/add',
    method: 'get',
    params: params
  })
}
