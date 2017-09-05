<template>
  <div>


        <span  v-if="isLoggedIn">{{this.$store.state.app_drawer.userDetail.displayName}}</span>
        <img :src="this.$store.state.app_drawer.userDetail.photoURL" v-if="isLoggedIn"/>
        <span v-if="!isLoggedIn">You Are Not LoggedIn</span>
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
