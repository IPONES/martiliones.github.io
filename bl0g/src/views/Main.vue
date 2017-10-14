<template>
  <div class="blog">
    <input 
        type="text" 
        class="search__input" 
        placeholder="Поиск по названию" 
        v-model="searchQuery">

      <div class="chip">
        <button 
          @click="wasted(post.searchName)" 
          v-for="post in posts"  
          class="chip__s">
            {{ post.searchName }}
        </button>
      </div>

      <ul class="list__frameworks masonry">
        <div v-for="(post, index) in filteredPosts" class="all item">
          <div class="card" hover="">
              <div class="card-image">
                <img  :src="post.img">
                <span class="card-title">{{ post.name }}</span>
              </div>
              <div class="card-content">
                <p id="desc">{{ post.fullDescription.substr(0,362) + "..." }}</p>
              </div>
              <div  class="card-action">
              <router-link :to="{ name: 'post', params: { id: post.id } }"  class="card-txt" > Перейти </router-link>
              </div>
            </div>
        </div>
      </ul>
  </div>
</template>

<script>
  var posts = require('../posts')

  module.exports = {
    data: function() {
      return {
        posts: posts,
        searchQuery:''
      }
    },
    computed: {
      filteredPosts: function () {
          return this.posts.filter((post) => {
          return post.name.indexOf(this.searchQuery) > -1;
        });
      }
    },
    methods:{
      wasted: function (name){
        this.searchQuery = name
      }
    }
  }
</script>