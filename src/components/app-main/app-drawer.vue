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

//console.log(db)
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import login from './login'
import logout from './logout'

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
  
  },
  components:{
    login,
    logout
  }
}
</script>

<style scoped>
<style>
