<template>
  <v-app id="app">

    <header>
      <app-header></app-header>
    </header>

    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
import app_header from '@/components/app-header'
import {mapGetters} from 'vuex'
import './assets/css/googleFont.css'

export default {
  name: 'app',

  //components
  components:{
    'app-header':app_header
  },

  //
  computed:{
    ...mapGetters([

    ])
  }
}
</script>

<style>

</style>
