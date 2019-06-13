/**
 * 描述: axios封装，方便使用
 */

import axios from 'axios'
import router from '../router'
import store from '../store'
import { Message } from 'element-ui'

// 提示
const tip = msg => Message.error(msg)

// 跳转到登录页
const toLogin = () => {
  router.replace({
    path: '/login',
    query: { redirect: router.currentRoute.fullPath }
  })
}

// 错误统一处理
const errorHandle = (status, other) => {
  switch (status) {
    // 未登录
    case 401:
      toLogin()
      break

    // 登录过期，清除token，跳转到登录页
    case 403:
      tip('登录过期，请重新登录！')
      localStorage.removeItem('token')
      // store.commit('loginSuccess', null)
      setTimeout(() => { toLogin() }, 1000)
      break

    // 未找到资源
    case 404:
      tip('请求的资源不存在！')
      break

    // 其他状态码
    default:
      console.log(other)
  }
}

// 实例对象
let instance = axios.create({
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    if (res.data.code === 200) {
      return Promise.resolve(res)
    } else {
      tip(res.data.message)
      return Promise.reject(res)
    }
  },

  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但状态码不在 2XX 的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      tip('请求未响应，超时或断网')
      return Promise.reject(error)
      // 请求未发出，超时或断网
      // store.commit('changeNetwork', false)
    }
  }
)

export default instance
