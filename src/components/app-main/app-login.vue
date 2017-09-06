<template>
  <div>
    <span>You Are Not LoggedIn</span>
    <v-btn @click="fbLogIn();goBack()">
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
      goBack(){
        this.$router.go(-1)
      },
      //mapMutations
      ...mapMutations([
        'fbLogIn',
      ])
    }

  }
</script>
