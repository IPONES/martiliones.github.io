var Vue = require('vue')
import VueRouter from 'vue-router'

var Main = require('./views/Main.vue')


Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{path: '/', component: Main}
	]
})

new Vue({
  el: '#app',
  router: router
})
