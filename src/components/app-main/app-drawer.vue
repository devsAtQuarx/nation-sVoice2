<template>
  <div>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

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
      'drawerOpen'
    ])
  },

  //beforeMount
  beforeMount(){
    this.$store.state.app_drawer.drawerOpen = true
  }
}
</script>

<style scoped>
<style>
