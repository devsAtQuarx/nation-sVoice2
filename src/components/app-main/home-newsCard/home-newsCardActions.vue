<template>
  <div>

    <!-- markTrue -->
    <v-btn fab dark small :class="markTrue">
      <v-icon dark>check</v-icon>
    </v-btn>

    <!-- petition -->
    <v-btn fab dark small :class="markTrue">
      <v-icon dark>border_color</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default{
  data(){
    return {
      markTrue : 'grey'
    }
  }
}
</script>
