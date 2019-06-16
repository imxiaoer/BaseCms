/**
 * 权限模块
 */

import Mock from 'mockjs'

let datas = [
  { Id: 1, Name: '管理员', CreateTime: '2018-01-02' },
  { Id: 2, Name: '业务员', CreateTime: '2018-01-02' },
  { Id: 3, Name: '采购员', CreateTime: '2018-01-02' }]

const authority = {
  list: Mock.mock(new RegExp('/api/authority/list'), 'get', option => {
    return {
      code: 200,
      message: 'success',
      data: { list: datas, total: datas.length }
    }
  }),
  add: Mock.mock(new RegExp('/api/authority/insert'), 'post', option => {
    let date = new Date()
    datas.unshift({
      Id: datas.length + 1,
      Name: JSON.parse(option.body).Name,
      CreateTime: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    })
    return {
      code: 200,
      message: 'success'
    }
  }),
  modify: Mock.mock(new RegExp('/api/authority/update'), 'post', option => {
    let body = JSON.parse(option.body)
    datas.forEach(item => {
      if (item.Id === body.Id) {
        item.Name = body.Name
      }
    })
    return {
      code: 200,
      message: 'success'
    }
  }),
  remove: Mock.mock(new RegExp('/api/authority/delete'), 'post', option => {
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

export default authority
