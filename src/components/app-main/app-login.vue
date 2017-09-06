<template>
  <div>
    <span>You Are Not LoggedIn</span>
    <v-btn @click="fbLogIn();goBack()">
      LogIn
    </v-btn>
</div>
</template>
<script>
import {mapMutations} from 'vuex'

//onAuthStateChanged

export default{
  //data
  data(){
    return {

    }
  },

  //methods
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    //mapMutations
    ...mapMutations([
      'fbLogIn',
    ])
  },

  //beforeMount
  beforeMount(){
    //console.log("app-login")

    //backButton v/s Toolbar
    this.$store.state.app_header.showBackBut = true
    this.$store.state.app_header.showToolbar = false
  }

}
</script>
