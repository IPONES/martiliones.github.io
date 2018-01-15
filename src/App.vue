<template>
  <div id="app">
    <div @click="changeMessage()" class="link__to">
      <router-link :to="linkMessage" class="link__to">{{txtMessage}}</router-link>
    </div>
      
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CV from './components/CV.vue'
import CoverLetter from './components/CoverLetter.vue'

export default {
  name: 'app',
  data () {
    return {
      txtMessage: 'СОПРОВОДИТЕЛЬНОЕ ПИСЬМО',
      linkMessage: '/CoverLetter'
    }
  },
  methods: {
    changeMessage: function () {
      if (this.txtMessage == 'СОПРОВОДИТЕЛЬНОЕ ПИСЬМО') {
        this.txtMessage = 'РЕЗЮМЕ'
        this.linkMessage = '/'
      } else {
        this.txtMessage = 'СОПРОВОДИТЕЛЬНОЕ ПИСЬМО'
        this.linkMessage = '/CoverLetter'
      }
    }
  }
}


</script>

<style src="./assets/style.css"></style>
