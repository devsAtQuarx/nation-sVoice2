<template>
  <div>

    {{getUrl}}

    <div class="fb-like" :data-href="getUrl" data-layout="button_count" data-action="recommend" data-size="small" data-show-faces="false" data-share="false"></div>
    <div class="fb-share-button" :data-href="getUrl" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
    <div class="fb-send" :data-href="getUrl"></div>
    <div class="fb-comments" :data-href="getUrl" data-numposts="1"></div>


  </div>
</template>

<script>
import '../../../assets/css/appHomeNewsCard/homeNewsCardActions.css'


export default{

  //props
  props:['news'],

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
    getUrl(){
      let updatedUrl = 'https://voiceof-nation.firebaseapp.com/app-specNews/' +
          this.news.key
      //console.log(updatedUrl)
      return updatedUrl
    }
  },

  //beforeMount
  beforeMount(){
  
  }
}
</script>
