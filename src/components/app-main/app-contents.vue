<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default{

  //beforeMount
  beforeMount(){
    this.$store.state.app_profile.drawerOpen = false
  }
}
</script>
