<template>
  <div class="app-header">

    <!-- back-icon-->
    <div class="back-icon"
      @click="goBack"
      v-show="showBackBut"
    >
      <i class="material-icons back-icon-icon">keyboard_arrow_left</i>
    </div>

    <!-- header -->
    <v-toolbar
      class="white"
      light dense
      v-show="showToolbar"
    >
      <span class="header-text">{{headerTitle}}</span>
    </v-toolbar>

  </div>
</template>

<script>
import '../assets/css/appHeader.css'
import {mapGetters} from 'vuex'

export default {
  name: 'app-header',

  //data
  data () {
    return {

    }
  },

  //methods
  methods:{

    //goBack
    goBack(){
      this.$router.go(-1)
    }

  },

  //computed
  computed:{
    ...mapGetters([
      'isLoggedIn', 'showBackBut', 'showToolbar', 'headerTitle'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
