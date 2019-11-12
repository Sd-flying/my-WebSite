import Mock from 'mockjs'
import tableAPI from './user'
import loginAPI from './login'

//登录相关的
Mock.mock(/\/users\/login/, 'get', loginAPI.login)

// 用户相关
Mock.mock(/\/user\/listpage/, 'get', tableAPI.getUserList)
Mock.mock(/\/user\/remove/, 'get', tableAPI.deleteUser)
Mock.mock(/\/user\/add/, 'get', tableAPI.createUser)
Mock.mock(/\/user\/edit/, 'get', tableAPI.updateUser)
Mock.mock(/\/user\/batchremove/, 'get', tableAPI.batchremove)


