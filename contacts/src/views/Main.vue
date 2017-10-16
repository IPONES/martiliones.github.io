<template>
  <div>
    <div class="contacts-list" v-for="contact in contacts">
      <p>{{ contact.name }}</p>
      <p>{{ contact.number }}</p>
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
      filteredContacts: function () {
          return this.contacts.filter((contact) => {
          return contact.name.indexOf(this.searchQuery) > -1;
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