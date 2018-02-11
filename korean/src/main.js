import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var App = require('./App.vue').default; 
var Post = require('./Post.vue').default; 

var router = new VueRouter({
	routes: [
		{path: '/', component: App},
		{path: '/post/:id', name:'post', component: Post}
	]
})

new Vue({
  el: '#app',
  router
})
