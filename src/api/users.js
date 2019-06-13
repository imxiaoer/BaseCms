import base from './base'
import axios from '@/utils/http'

/**
 * 用户接口定义
 */

const users = {
  // 列表
  list (params = {}) {
    return axios.get(`${base.server1}/api/user/list`, { params: params })
  },

  // 新增
  add (model) {
    return axios.post(`${base.server1}/api/user/insert`, model)
  },

  // 修改
  modify (model) {
    return axios.post(`${base.server1}/api/user/update`, model)
  },

  /**
   * 删除
   * 批量删除和单个删除共用这一个方法
   * @param {Array} ids
   */
  remove (ids) {
    return axios.post(`${base.server1}/api/user/delete`, ids)
  }
}

export default users
