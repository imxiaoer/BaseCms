import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/cover-element-css.scss'
import api from './api/index'
import utils from './utils/utils'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$api = api
Vue.prototype.utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
