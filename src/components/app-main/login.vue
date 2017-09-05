<template>
  <v-btn @click="fbLogIn()">
    LogIn
  </v-btn>
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
      //mapMutations
      ...mapMutations([
        'fbLogIn',
      ])
    }

  }
</script>
