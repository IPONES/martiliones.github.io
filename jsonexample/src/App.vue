<template>
  <div id="app">
    <input type="text" v-model="query" @keyup.enter="getAllPhotos()" placeholder="Search.."> 
    <button class="btn_search" @click="getAllPhotos()">🔎</button>
    <div v-for="photo in photos" class="photo__info">
      
      <img :src="photo.urls.full" class="photo">

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      link: 'https://api.unsplash.com/search/photos?page=1&client_id=e392065781c82c67b822f21ad9c61862b4ad2ae785be563cae795ec29fe54e7c&query=',
      photos: [],

      query:''
    }
  }, 
  methods: {
    getAllPhotos: function () {


      var options = {
        params: {
          _limit:10
        }
      }

      const link = this.link + this.query


      this.$http.get(link, options).then(

        function(response) {
          this.photos = response.body.results
        }, 

        function (error) {
          // body...
        }

      )
    }
  }
}
</script>


<style src="./assets/style.scss" lang="scss"></style>
