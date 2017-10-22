var Vue = require('vue')
import VueRouter from 'vue-router'

var Main = require('./views/Main.vue')
var Contact = require('./views/Contact.vue')


Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{path: '/', component: Main},
		{path: '/contact/:id', name:'contact', component: Contact}
	]
})

new Vue({
  el: '#app',
  router: router
})
