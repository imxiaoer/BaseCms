import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/cover-element-css.scss'
import '@/style/common.scss'
import api from './api/index'
import utils from './utils/utils'
import './mock/mock'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })

Vue.prototype.$api = api
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
