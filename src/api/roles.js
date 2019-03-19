import base from './base'
import axios from '@/utils/http'

/**
 * 角色接口定义
 */

const roles = {
  // 列表
  list (params) {
    return axios.get(`${base.server1}/api/role`, { params: params })
  },

  // 新增
  add (role) {
    return axios.post(`${base.server1}/api/role/addrole`, role)
  },

  // 修改
  modify (role) {
    return axios.post(`${base.server1}/api/role/update`, role)
  },

  /**
   * 删除
   * 批量删除和单个删除共用这一个方法
   * 因为 delete 是 JS 关键字，所以方法名用 remove
   * @param {Array} ids
   */
  remove (ids) {
    return axios.post(`${base.server1}/api/role/delete`, ids)
  }
}

export default roles
