import base from './base'
import axios from '@/utils/http'

const users = {
  // 用户列表
  userList () {
    return axios.get(`${base.develop}/user/list`)
  }
}

export default users
