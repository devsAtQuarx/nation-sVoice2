import Vue from 'vue'
import Router from 'vue-router'

import routes from './modules/routesInMain'


//import app_contents from '@/components/app-contents'
//import app_drawer from '@/components/app-drawer'

//import content_home from '@/components/app-contents-components/content-home'
//import content_page1 from '@/components/app-contents-components/content-newsPetitions'

Vue.use(Router)



export default new Router({
  routes,
  mode: 'history'
})
