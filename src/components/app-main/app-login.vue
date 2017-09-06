<template>
  <div>
    <span>You Are Not LoggedIn</span>
    <v-btn @click="fbLogIn();logged_in_page()">
      LogIn
    </v-btn>
</div>
</template>
<script>
//  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  //import Firebase from 'firebase'


  //onAuthStateChanged

  export default{
    //data
    data(){
      return {

      }
    },

    //methods
    methods:{
      logged_in_page(){
        this.$router.push('/app-profile')
      },
      //mapMutations
      ...mapMutations([
        'fbLogIn',
      ])
    }

  }
</script>
