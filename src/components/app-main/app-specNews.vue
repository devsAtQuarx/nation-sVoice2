<template>
  <div>
    <!-- test specNews => {{ $route.params.id }} -->

    <!--specNews -->
    <v-card>

      <!-- cardContent -->
      <home-newsCardContents :news="specNews"></home-newsCardContents>

      <!--Action-->
      <v-card-actions class="card-action-div">
        <home-newsCardActions></home-newsCardActions>
      </v-card-actions>

    </v-card>

  </div>
</template>

<script>
import {db} from  '../../firebase'
import {mapGetters} from 'vuex'
import home_newsCardActions from './home-newsCard/home-newsCardActions'
import home_newsCardContents from './home-newsCard/home-newsCardContents'

export default{

  //methods
  methods:{

    //getSpecNews
    getSpecNews(){
      let vm = this

      db.ref('allNews/'+this.$route.params.id).once('value',function(snapshot){
        vm.$store.state.app_specNews.specNews =  snapshot.val()
      })

    }

  },

  //computed
  computed:{
    ...mapGetters([
      'specNews'
    ])
  },

  //components
  components : {
    'home-newsCardContents' : home_newsCardContents,
    'home-newsCardActions' : home_newsCardActions
  },

  //beforeMount
  beforeMount(){
    this.getSpecNews()

    //backButton v/s Toolbar
    this.$store.state.app_header.showBackBut = false
    this.$store.state.app_header.showToolbar = false

    //headerTitle
    //console.log(this.$store.state.app_header.headerTitle)
    //this.$store.state.app_header.headerTitle = "specNews"
    //console.log(this.$store.state.app_header.headerTitle)
  }

}
</script>
