/**
 * 用户模块
 */

import Mock from 'mockjs'
import helper from './helper'

let datas = []

for (var i = 0; i < 45; i++) {
  datas.push(Mock.mock({
    Id: '@increment',
    RoleId: Mock.Random.integer(1, 3),
    Name: '@cname',
    Mobile: /^1[0-9]{10}$/,
    Address: '@county(true)',
    CreateTime: '@date("yyyy-MM-dd")'
  }))
}

const user = {
  list: Mock.mock(new RegExp('/api/user/list'), 'get', option => {
    let result = []
    let url = option.url

    // 获取地址栏参数
    let name = helper.getQuery(url, 'name')
    // let mobile = helper.getQuery(url, 'mobile')
    let index = helper.getQuery(url, 'index')
    let size = helper.getQuery(url, 'size')

    // 筛选姓名
    if (name) {
      datas.forEach(item => {
        if (item.Name.indexOf(name) !== -1) {
          result.push(item)
        }
      })
    } else {
      result = datas
    }

    // 筛选手机号
    // if (mobile) {
    //   datas.forEach(item => {
    //     if (item.Mobile.indexOf(mobile) !== -1) {
    //       result.push(item)
    //     }
    //   })
    // }

    // 筛选后总条数
    let total = result.length

    // 分页
    result = helper.pagination(index, size, result)

    return {
      code: 200,
      message: 'success',
      data: { list: result, total: total }
    }
  }),
  add: Mock.mock(new RegExp('/api/user/insert'), 'post', option => {
    let date = new Date()
    let body = JSON.parse(option.body)
    datas.unshift({
      Id: datas.length + 1,
      Name: body.Name,
      RoleId: body.RoleId,
      Mobile: body.Mobile,
      Address: body.Address,
      CreateTime: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    })
    return {
      code: 200,
      message: 'success'
    }
  }),
  modify: Mock.mock(new RegExp('/api/user/update'), 'post', option => {
    let body = JSON.parse(option.body)
    datas.forEach(item => {
      if (item.Id === body.Id) {
        item.Name = body.Name
        item.RoleId = body.RoleId
        item.Mobile = body.Mobile
        item.Address = body.Address
      }
    })
    return {
      code: 200,
      message: 'success'
    }
  }),
  remove: Mock.mock(new RegExp('/api/user/delete'), 'post', option => {
    let body = JSON.parse(option.body)
    body.forEach(id => {
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].Id === id) {
          datas.splice(i, 1)
        }
      }
    })
    return {
      code: 200,
      message: 'success'
    }
  })
}

export default user
