<template>
  <div class="app-header">

    <!-- drawer-con-->
    <div class="drawer-icon"
      @click="openDrawer"
      v-show="!drawerOpen"
    >
      <i class="material-icons app-drawer-icon">menu</i>
    </div>

    <!-- back-->
    <div class="drawer-icon"
      @click="closeDrawer"
      v-show="drawerOpen"
    >
      <i class="material-icons">keyboard_arrow_left</i>
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
      this.$router.push('/app-drawer')
    },

    //closeDrawer
    closeDrawer(){
      this.$router.go(-1)
    },
  },

  //computed
  computed:{
    ...mapGetters([
      'drawerOpen'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
