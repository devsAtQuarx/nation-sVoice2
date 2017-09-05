import Vue from 'vue'
import Vuex from 'vuex'

import app_drawer from './modules/app_drawer'
import content_home from './modules/content_home'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_drawer,
    content_home
  }
})
