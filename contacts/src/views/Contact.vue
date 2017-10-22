<template>
	<div class="contacts">
		<img class="contact-image" :src="contact.photo" width="60px" height="60px" />
	    <div class="contact-info">
	        <div class="contact-name"> {{ contact.name }} </div>
	        <div class="contact-number"> {{ contact.number }} </div>
          <router-link to="/"><- back</router-link>
	    </div>
	</div>
</template>

<script>
var contacts = require('../contacts')

module.exports = {
    data: function() {
      return {
        contacts: contacts,
        post: null
      }
    },
    	created: function() {
      	var contactId = this.$route.params.id

      	this.contact = this.contacts[contactId]
   	  }
}
</script>