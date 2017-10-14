var Vue = require('vue')
import VueRouter from 'vue-router'

var Main = require('./views/Main.vue')
var Post = require('./views/Post.vue')
var addPost = require('./views/addPost.vue')

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{path: '/', component: Main},
		{path: '/post/:id', name:'post', component: Post},
		{path: '/add', component: addPost}
	]
})

new Vue({
  el: '#app',
  router: router
})
