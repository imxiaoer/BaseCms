/**
 * 角色模块
 */

import Mock from 'mockjs'

const role = {
  list: Mock.mock('http://localhost:8080/api/role/list', 'get', option => {
  }),
  add: Mock.mock('', 'post', option => {

  }),
  modify: Mock.mock('', 'post', option => {

  }),
  remove: Mock.mock('', 'post', option => {

  })
}

export default role
