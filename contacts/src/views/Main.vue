<template>
  <div id="content">
    <div class="contacts">
      <input type="text" placeholder="Search..." class="search-field" v-model="searchQuery" />
        <router-link class="contact" v-for="contact in searchContacts" 
        :to="{ name: 'contact', params: { id: contact.id } }">
          <img class="contact-image" :src="contact.photo" width="60px" height="60px" />
            <div class="contact-info">
              <div class="contact-name"> {{ contact.name }} </div>
              <div class="contact-number"> {{ contact.number }} </div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
  var contacts = require('../contacts')

  module.exports = {
    data: function() {
      return {
        contacts: contacts,
        searchQuery:''
      }
    },
    computed: {
     	searchContacts: function () {
          return this.contacts.filter((contact) => {
            var searchValue = contact.name.toLowerCase()
            return searchValue.indexOf(this.searchQuery.toLowerCase()) !== -1;
        });
      }
    },
    methods:{
      wasted: function (contact){
        this.searchQuery = contact
      }
    }
  }
</script>