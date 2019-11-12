import Mock from 'mockjs'
import {param2Obj} from '@/utils'

const Random = Mock.Random
Mock.setup({
  timeout: '500-800'
})


export default {
  getUserList: config => {
    const {name, page = 1, limit = 10} = param2Obj(config.url)
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 0,
      data: {
        total: mockList.length,
        users: pageList
      }
    }
  },

  login: config => {
    const info = param2Obj(config.url)
    console.log(info)
    if (info.username !== 'admin') {
      return {
        code: 201,
        data: {
          msg: '用户名错误！'
        }
      }
    }
    if (info.password !== 'admin') {
      return {
        code: 201,
        data: {
          msg: '密码错误！'
        }
      }
    }
    return {
      code: 200,
      data: {
        msg: 'sucess！'
      }
    }
  }
}
