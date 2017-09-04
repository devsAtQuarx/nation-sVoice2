import Vue from 'vue'
import Vuex from 'vuex'

import app_drawer from './modules/app_drawer'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_drawer
  }
})
