import base from './base'
import axios from '@/utils/http'

/**
 * 这里存放的是一些公用不便分类的接口
 */

const common = {
  // 登录
  login () {
    return axios.post(`${base.server1}/api/user/login`)
  }
}

export default common
