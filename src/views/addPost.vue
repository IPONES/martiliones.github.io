<template>
	<div style="display:block;">
		<input 
			type="text"
			placeholder="Название нового поста"
			class="search__input"
			v-model="namePost"/>

		<input 
			type="text"
			placeholder="Изображение"
			class="search__input"
			style="width:70%;" 
			v-model="image"/>


		<textarea
			placeholder="Полное описание"
			class="search__input textarea"
			v-model="fullDesc">
		</textarea> 
		
		<p class="limit">{{ fullDesc.length }} / 1301</p>
		

		<p 	v-if="fullDesc.length < 1301" 
			class="card-txt save__btn"
			@click="addNewPost">
			
			Сохранить
		</p>
	</div>
</template>

<script>
	var posts = require('../posts')

	module.exports = {
		data: function() {
	  		return {
	  			posts: posts,
	  			fullDesc:'',
	  			namePost:'',
	  			image:'',
	  			nextTODO:3
      		}
    	},
    	methods: {
		    addNewPost: function () {
		   	    posts.push({
		        	fullDescription: this.fullDesc,
		        	name: this.namePost,
		        	searchName: this.namePost,
		        	img: this.image,
		        	id: this.nextTODO
		    	})
		     	this.fullDesc = ''
		    	this.namePost= ''
		      	this.image = ''
		      	this.nextTODO++
		    }
		 }
   	}
	
</script>