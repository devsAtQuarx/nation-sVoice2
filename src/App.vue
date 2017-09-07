<template>
  <v-app id="app">

    <header>
      <app-header></app-header>
    </header>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
import app_header from '@/components/app-header'
import {mapGetters} from 'vuex'
import Firebase from 'firebase'
import {db} from './firebase'
var vm

//onAuthStateChanged
Firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("// User is signed in.")
    vm.$store.state.app_profile.isLoggedIn = true

    // The signed-in user info
   console.log(user)
/*     console.log(user.uid)
    console.log(user.email)
    console.log(user.displayName)
    console.log(user.photoURL)*/

    vm.$store.state.app_profile.userDetail=user
    //console.log(vm.$store.state.userDetail)

  } else {
    console.log("// No user is signed in.")
    vm.$store.state.app_profile.isLoggedIn = false
  }
});

export default {
  name: 'app',

  //components
  components:{
    'app-header':app_header
  },

  //
  computed:{
    ...mapGetters([
      'isLoggedIn',
      'userDetail',
    ])
  },
  beforeMount(){
    vm = this
  }
}
</script>

<style>

</style>
