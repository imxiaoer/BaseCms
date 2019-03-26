import Vue from 'vue'
import Vuex from 'vuex'
import navtab from './navtab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navtab
  }
})
