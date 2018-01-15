import Vue from'vue'
import VueRouter from 'vue-router'

import CV from './components/CV.vue'
import CoverLetter from './components/CoverLetter.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CV },
  { path: '/CoverLetter', component: CoverLetter }
]

const router = new VueRouter({
  routes 
})


import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
