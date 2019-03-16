import base from './base'
import axios from '@/utils/http'

/**
 * 权限接口定义
 */

const authorities = {
  // 列表
  list () {
    return axios.get(`${base.server1}/api/authority/list`)
  },

  // 新增
  add (authority) {
    return axios.post(`${base.server1}/api/authority/insert`, authority)
  },

  // 修改
  modify (authority) {
    return axios.post(`${base.server1}/api/authority/update`, authority)
  },

  /**
   * 删除
   * 批量删除和单个删除共用这一个方法
   * 因为 delete 是 JS 关键字，所以方法名用 remove
   * @param {Array} ids
   */
  remove (ids) {
    return axios.post(`${base.server1}/api/authority/delete`, ids)
  }
}

export default authorities
