<template>
  
  <div  class="container">
    <div  class="row">
      <div  class="cardPost" hover="">
        <div  class="post__img unkown">
          <img  :src="post.img" class="post__img imgP">
          <div class="card-titlePost">{{ post.name }}</div>
        </div>
      <div  class="card-contentPost">
        <p>{{ post.fullDescription }}</p>
      </div>
      <div class="card-actionPost">
        <router-link to="/"  style="cursor: pointer" class="card-txt">
        	<button class="btn-card">Назад</button>
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  var posts = require('./posts')
  module.exports = {
    data: function() {
      return {
        posts: posts,
        post: null
      }
    },
    created: function() {
      var postId = this.$route.params.id
      this.post = this.posts[postId]
    }
  }
</script>

<style src="./assets/s.css"></style>
<style src="./assets/style.css"></style>