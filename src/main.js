// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store'
import VueResource from 'vue-resource'
import './assets/cssLib/vuetify.min.css'
import './assets/cssLib/googleFont.css'




Vue.use(VueFire)
Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

/*function FBfun(path) {
  setTimeout(function() {
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1822465887769751',
      xfbml      : true,
      version    : 'v2.1'
    });
  };


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    FB.XFBML.parse();
  }, 100);
}*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
