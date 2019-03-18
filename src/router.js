import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'console',
          name: 'console',
          meta: { text: '主页' },
          component: () => import('./views/console/Console.vue')
        },
        {
          path: 'user',
          name: 'user',
          meta: { text: '用户' },
          component: () => import('./views/user/User.vue')
        },
        {
          path: 'role',
          name: 'role',
          meta: { text: '角色' },
          component: () => import('./views/role/Role.vue')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      meta: { text: '错误404' },
      component: () => import('./views/404.vue')
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})

export default router
