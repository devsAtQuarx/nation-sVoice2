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

    <v-btn small primary dark flat class="comments-but" >
      <v-icon class="grey--text comments-icon">
        chat_bubble_outline
      </v-icon>
    </v-btn>

  </div>
</template>

<script>
import '../../../assets/css/appHomeNewsCard/homeNewsCardActions.css'

export default{
  data(){
    return {

    }
  },
  methods:{
    goToPetitions(){
      this.$router.push('/app-petitions')
    }
  }
}
</script>
