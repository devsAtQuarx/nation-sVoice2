import Vue from 'vue'
import Vuex from 'vuex'

import app_header from './modules/app_header'
import app_login from './modules/app_login'
import app_profile from './modules/app_profile'
import app_home from './modules/app_home'

import home_newsCardContents from './modules/home_newsCard/home_newsCardContents'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    app_header,
    app_profile,
    app_login,
    app_home,

    home_newsCardContents,
    //
  }
})
