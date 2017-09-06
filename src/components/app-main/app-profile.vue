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
    goBack(){
      this.$router.go(-1)
    },
    //mapMutations
    ...mapMutations([
      'fbLogOut',

    ]),
  },

  //computed
  computed:{
    ...mapGetters([
      'isLoggedIn',
      'userDetail',
    ])
  },

}
</script>

<style scoped>
<style>
