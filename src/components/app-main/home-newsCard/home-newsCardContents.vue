<template>
  <div>

    <!-- cardContent -->
    <v-card-media :src="news.urlToImage" height="55vh">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{news.title}}</h3>
        <div>
          {{news.description}}
          <v-btn flat class="orange--text" :href="news.url">
            See Detail
          </v-btn>
        </div>
      </div>
    </v-card-title>

  </div>
</template>

<script>
export default {

  //props
  props:['news'],

}
</script>
