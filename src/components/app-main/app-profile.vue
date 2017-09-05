<template>
  <div>
<h6  >{{userDetail.displayName}}</h6>
<img :src="userDetail.photoURL" />
   </div>
</template>
<script>

//console.log(db)
import {mapGetters} from 'vuex'
import Firebase from 'firebase'

export default{
  //data
  data(){
    return {

    }
  },

  //methods
  methods:{

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


</style>
