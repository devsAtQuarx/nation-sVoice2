<template>
  <div>


    <v-btn small primary dark flat class="mark-true-but" >
      <v-icon class="grey--text mark-true-icon">
        check
      </v-icon>
    </v-btn>

    <!--v-btn small primary dark flat class="spam-but" >
      <v-icon class="grey--text spam-icon">
        block
      </v-icon>
    </v-btn-->

    <v-btn
      small
      primary
      dark
      flat
      class="comments-but"
      @click="goToSpecNewsComments(news)"
    >
      <v-icon class="grey--text comments-icon">
        chat_bubble_outline
      </v-icon>
    </v-btn>


    <v-btn small primary dark flat class="comments-but" @click="shareNews()">
      <v-icon class="grey--text comments-icon">
        share
      </v-icon>
    </v-btn>




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

    //shareNews
    shareNews(){
      console.log("1")

      FB.ui({
        method: 'share',
        href: 'https://voiceof-nation.firebaseapp.com',
      }, function(response){
        console.log("2")
      });

    },

    //goToSpecNewsComments
    goToSpecNewsComments(news){
      this.$router.push('/app-specNewsComments/' + news.key)
    }
  }
}
</script>
