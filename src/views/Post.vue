<template>
  
  <div  class="container">
    <div  class="row">
      <div  class="cardPost" hover="">
        <div  class="post__img unkown">
          <img  :src="post.img" class="post__img imgP">
          <span class="card-titlePost">{{ post.name }}</span>
        </div>
      <div  class="card-contentPost">
        <p>{{ post.fullDescription }}</p>
      </div>
      <div class="card-actionPost">
        <router-link to="/"  style="cursor: pointer" class="card-txt">Назад</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  var posts = require('../posts')

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