/**
 * 所有api接口的总出口
 */

import common from './common'
import users from './users'
import roles from './roles'
import authority from './authority'

export default {
  users,
  roles,
  common,
  authority
}
