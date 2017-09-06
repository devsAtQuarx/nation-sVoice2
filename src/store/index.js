import Vue from 'vue'
import Vuex from 'vuex'

import app_header from './modules/app_header'
import app_login from './modules/app_login'
import app_profile from './modules/app_profile'
import app_home from './modules/app_home'

import home_newsCardActions from './modules/home_newsCard/home_newsCardActions'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_header,
    app_profile,
    app_login,
    app_home,

    home_newsCardActions,
    //
  }
})
