import base from './base'
import axios from '@/utils/http'

/**
 * 用户接口定义
 */

const users = {
  // 列表
  list () {
    return axios.get(`${base.server1}/api/user/list`)
  },

  // 新增
  add (user) {
    return axios.post(`${base.server1}/api/user/insert`, user)
  },

  // 修改
  modify (user) {
    return axios.post(`${base.server1}/api/user/update`, user)
  },

  /**
   * 删除
   * 批量删除和单个删除共用这一个方法
   * 因为 delete 是 JS 关键字，所以方法名用 remove
   * @param {Array} ids
   */
  remove (ids) {
    return axios.post(`${base.server1}/api/user/delete`, ids)
  }
}

export default users
