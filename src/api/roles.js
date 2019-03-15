import base from './base'
import axios from '@/utils/http'

const roles = {
  // 角色列表
  roleList () {
    return axios.get(`${base.develop}/role/list`)
  }
}

export default roles
