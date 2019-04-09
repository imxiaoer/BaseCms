/**
 * 登录模块
 */

import Mock from 'mockjs'

const login = Mock.mock('http://localhost:8080/api/login', 'post', option => {
  let { username, password } = JSON.parse(option.body)
  let result
  if (username === 'admin' && password === 'admin') {
    result = {
      status: 200,
      message: '登录成功',
      data: { token: 'imtoken==' }
    }
  } else {
    result = {
      status: 400,
      message: '用户名或密码错误',
      data: null
    }
  }
  return result
})

export default login
