<template>
  <v-btn @click="fbLogOut();goBack()">
    LogOut
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
      goBack(){
        this.$router.go(-1)
      },
      //mapMutations
      ...mapMutations([
        'fbLogOut',

      ]),
    },

  }
</script>
