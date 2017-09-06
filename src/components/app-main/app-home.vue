<template>
  <div>

    <!-- drawer-icon-->
    <v-btn
      fab
      dark
      small
      class="blue drawer-icon"
      @click="openDrawer"
    >
      <v-icon dark v-if="isLoggedIn">person</v-icon>
      <v-icon dark v-else>person_add</v-icon>
    </v-btn>

    <!-- card in flex -->
    <v-flex xs12 sm8 offset-sm2>

      <!-- newsArr -->
      <v-card v-for="news in sortedNewsArr">

        <!-- cardContent -->
        <home-newsCardContents :news="news"></home-newsCardContents>

        <!-- divider line -->
        <v-divider></v-divider>

        <!-- cardActions -->
        <v-card-actions></v-card-actions>


      </v-card>

      <!--loadMoreNews-->
      <infinite-loading
        v-if="sortedNewsArr.length >= 3 && showLoader == true"
        :on-infinite="onInfinite"
        ref="infiniteLoading"
        class = "infiniteLoading"
      >
      </infinite-loading>

    </v-flex>
  </div>
</template>

<script>
import {db} from  '../../firebase'
import {mapGetters} from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import '../../assets/css/appHome.css'
import home_newsCardContents from './home-newsCard/home-newsCardContents'


export default{
  //data
  data(){
    return{

    }
  },

  //methods
  methods:{

    // 1__getNewsFromApi
    getNewsFromApi(){
      this.$http.get('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=b0a290260ac4478c98e35da0f5ca7d4a')
      .then(response=>{
        //console.log(response.body.articles)
        this.pushNewsToFirebase(response.body.articles)
      })
      .catch(response=>{
        console.log("network error") //planning to show catched data
      })
    },

    //2__push data to firebase database
    pushNewsToFirebase(fetchedNewsFromApi){
      //console.log(fetchedNewsFromApi)


      for(let i in fetchedNewsFromApi){
        //discard ads, ads dont have .cms
        if(fetchedNewsFromApi[i].url.lastIndexOf('.cms')!=-1){
          //check if pushing duplicate news
          db.ref('checkDuplicateNews/' +
            fetchedNewsFromApi[i].url.slice(fetchedNewsFromApi[i].url.lastIndexOf('/')+1,
              fetchedNewsFromApi[i].url.lastIndexOf('.'))).once('value',function(snapshot){
            //this will be null if no duplicate is already present in db
            //console.log(snapshot.val())
            if(snapshot.val() == null){
              //firebase setNews in db
              db.ref('allNews/' + fetchedNewsFromApi[i].publishedAt).set(fetchedNewsFromApi[i])

              //to check duplicate from api
              db.ref('checkDuplicateNews/' +
                fetchedNewsFromApi[i].url.slice(fetchedNewsFromApi[i].url.lastIndexOf('/')+1,
                  fetchedNewsFromApi[i].url.lastIndexOf('.'))).set(fetchedNewsFromApi[i])
            }
          })
        }
      }

      this.retrievNewsFromFirebase()

    },

    //3__retrievNewsFromFirebase - 1st Time newsFetch
    retrievNewsFromFirebase(){
      let vm = this

      db.ref('allNews/').limitToLast(3).once('value',function(snapshot){
        //console.log(snapshot.val())

        vm.showOnDom(snapshot.val())

      })
    },


    //loadMore
    loadMoreNews(){
      let vm = this

      this.$store.state.app_home.c += 2 //currently 3 in arr, show 2(last one in arr) more
        //on loadMoreNews

      //check if ended
      if(this.$store.state.app_home.newsArr[this.$store.state.app_home.c]
          != undefined ){

        //load 3 more
        db.ref('allNews/').orderByKey()
        .endAt(this.$store.state.app_home.newsArr[this.$store.state.app_home.c].key)
        .limitToLast(3).on('value',function(snapshot){ //
          //console.log(Object.keys(snapshot.val()).length)

          let tempLoadedNews = {}

          //check & remove last Object => need better method
          for(let i in snapshot.val()){
            //console.log(i+" "+snapshot.val())
            if(i == vm.$store.state.app_home.newsArr[vm.$store.state.app_home.c].key){
              //do nothing
            }else{
              tempLoadedNews[i] = snapshot.val()[i] //copy
            }
          }

          //call showOnDom
          vm.showOnDom(tempLoadedNews)
          vm.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })

      }else{
        //stop loader
        //vm.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        this.$store.state.app_home.showLoader = false
        //console.log("nothing to load more !")
      }
    },

    //showOnDom
    showOnDom(retrievedNews){
      //firebase returns object, push/convert it to array to show in DOM
      for(let i in retrievedNews){
        //console.log(i+" "+retrievedNews[i])

        //bind into object to push into arr of store
        let retrievedNewsObj = {
          key : i,
          title : retrievedNews[i].title,
          description : retrievedNews[i].description,
          url : retrievedNews[i].url,
          urlToImage : retrievedNews[i].urlToImage
        }

        //console.log(newsObj)

        //console.log(vm.$store.state.app_home.newArrHome)
        //push to store newsArrStore

        this.$store.state.app_home.newsArr.push(retrievedNewsObj)
      }

    },

    //onInfinite scroll => loadMoreNews
    onInfinite() {
        this.loadMoreNews()
    },

    //openDrawer
    openDrawer(){

      //isLoggedIn
      if(this.$store.state.app_profile.isLoggedIn==true){
        this.$router.push('/app-profile')
      }else { //!isLoggedIn
        this.$router.push('/app-login')
      }

    },

  },

  //beforeMount
  beforeMount(){
    //console.log("app-home")

    //if undefined
    //console.log(this.$store.state.app_home.newsArr)
    if(this.$store.state.app_home.newsArr.length == 0){
      //console.log("call")
      this.getNewsFromApi()
    }

    //backButton v/s Toolbar
    this.$store.state.app_header.showBackBut = false
    this.$store.state.app_header.showToolbar = true

    //headerTitle
    //console.log(this.$store.state.app_header.headerTitle)
    this.$store.state.app_header.headerTitle = "Nation's Voice"
    //console.log(this.$store.state.app_header.headerTitle)
  },

  //computed
  computed:{
    ...mapGetters([
      'newsArr','showLoader', 'isLoggedIn'
    ]),
    sortedNewsArr(){
      //sort array
      function compare(a,b) {
        if (a.key > b.key)
          return -1;
        if (a.key < b.key)
          return 1;
        return 0;
      }
      return this.$store.state.app_home.newsArr.sort(compare);
    }
  },

  //components
  components: {
    InfiniteLoading,
    'home-newsCardContents' : home_newsCardContents
  },

}
</script>
