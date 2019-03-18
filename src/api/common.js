import base from './base'
import axios from '@/utils/http'

/**
 * 这里存放的是一些公用不便分类的接口
 */

const common = {
  /**
   * 登录
   * @param {Object} user
   * 参数 user 包含两个属性 { username: '', userpwd: '' }
   */
  login (user) {
    return axios.post(`${base.server1}/api/login`, user)
  }
}

export default common
