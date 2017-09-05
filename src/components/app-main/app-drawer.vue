<template>
  <div>

      <h4 @click="go_to_home()">Nation's Voice</h4>
        <span @click="go_to_profile()" v-if="isLoggedIn">{{this.$store.state.app_drawer.userDetail.displayName}}</span>
          <img :src="this.$store.state.app_drawer.userDetail.photoURL" v-if="isLoggedIn"/>
          <login v-if="!isLoggedIn"></login>
          <logout v-else></logout>


  </div>
</template>

<script>
import {db} from '../../firebase'
//console.log(db)
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import Firebase from 'firebase'
import login from './login'
import logout from './logout'
var vm

//onAuthStateChanged
Firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("// User is signed in.")
    vm.$store.state.app_drawer.isLoggedIn = true

    // The signed-in user info
  /* console.log(user)
     console.log(user.uid)
    console.log(user.email)
    console.log(user.displayName)
    console.log(user.photoURL)*/

    vm.$store.state.app_drawer.userDetail=user
    //console.log(vm.$store.state.userDetail)

  } else {
    console.log("// No user is signed in.")
    vm.$store.state.app_drawer.isLoggedIn = false
  }
});

export default{
  //data
  data(){
    return {

    }
  },

  //methods
  methods:{
    go_to_home(){
      this.$router.push('/');

    },
    go_to_profile(){
      this.$router.push('/app-profile');

    },
    //mapMutations
    ...mapMutations([
      'fbLogIn',
      'fbLogOut'
    ]),
  },

  //computed
  computed:{
    ...mapGetters([
      'drawerOpen',
      'isLoggedIn',
      'userDetail',
    ])
  },

  //beforeMount
  beforeMount(){
    this.$store.state.app_drawer.drawerOpen = true
    vm = this
  },
  components:{
    login,
    logout
  }
}
</script>

<style scoped>
<style>
