/**
 * 登录模块
 */

import Mock from 'mockjs'

const login = Mock.mock(new RegExp('/api/login'), 'post', option => {
  let { username, password } = JSON.parse(option.body)
  let result
  if (username === 'admin' && password === 'admin') {
    result = {
      code: 200,
      message: 'success',
      data: { token: 'imtoken==' }
    }
  } else {
    result = {
      code: 400,
      message: '用户名或密码错误'
    }
  }
  return result
})

export default login
