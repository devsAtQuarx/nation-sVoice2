import Vue from 'vue'
import Vuex from 'vuex'
import app_drawer from './modules/app_drawer'
import login from './modules/login'
import logout from './modules/logout'
import content_home from './modules/content_home'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_drawer,
    login,
    logout,
    content_home
  }
})
