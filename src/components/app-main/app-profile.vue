<template>
  <div v-if="isLoggedIn==true">


        <span >{{userDetail.displayName}}</span>
        <img :src="userDetail.photoURL">

        <v-btn @click="fbLogOut();goBack()">
          LogOut
        </v-btn>


  </div>
</template>

<script>

//console.log(db)
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'


export default{
  //data
  data(){
    return {

    }
  },

  methods:{

    //mapMutations
    ...mapMutations([
      'fbLogOut',

    ]),

    //goBack
    goBack(){
      this.$router.go(-1)
    }

  },

  //computed
  computed:{
    ...mapGetters([
      'isLoggedIn', 'userDetail'
    ])
  },

  //beforeMount
  beforeMount(){
    //console.log("app-profile")

    //backButton v/s Toolbar
    this.$store.state.app_header.showBackBut = true
    this.$store.state.app_header.showToolbar = true

    //headerTitle
    this.$store.state.app_header.headerTitle = "Your Profile"
  }

}
</script>
