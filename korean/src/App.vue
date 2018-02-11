<template>
  <div id="app">
  	<div class="site_name">아름다움</div>
      	<div class="row">
				<div class="col" v-for="(post, index) in posts">
			  	<img :src="post.img" :alt="post.name">
			  	<router-link :to="{ name: 'post', params: { id: post.id } }"  class="name">	</card-txt>{{ post.name }} </router-link>
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
        searchQuery:''
      }
    }
  }
</script>
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
<style src="./assets/style.css"></style>