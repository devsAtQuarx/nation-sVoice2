import Vue from 'vue'
import Vuex from 'vuex'
//import app_profile from './modules/app_profile'
import app_login from './modules/app_login'
import app_profile from './modules/app_profile'
import content_home from './modules/content_home'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_profile,
    app_login,
  //  logout,
    content_home
  }
})
