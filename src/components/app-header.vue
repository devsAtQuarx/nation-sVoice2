<template>
  <div class="app-header">

    <!-- drawer-icon-->
    <div class="drawer-icon"
      @click="openDrawer"
      >
      <i class="material-icons app-drawer-icon">menu</i>
    </div>

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

    //openDrawer
    openDrawer(){

      if(this.$store.state.app_profile.isLoggedIn==true){
        this.$router.push('/app-profile')
      }
      else {
        this.$router.push('/app-login')
      }

    }

  },

  //computed
  computed:{
    ...mapGetters([
      'isLoggedIn'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
