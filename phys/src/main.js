var Vue = require('vue')

var app = new Vue({
	el:'#app',
	data:{
		weight:"sd",
		density:'',
		volume:'',
		sdf:false
	},
	computed:{
		getDensity: function() { 
			this.density = this.weight/this.volume;

			if(  Boolean(this.density) && this.density != NaN  ){
				this.sdf = true;
			} else {
				this.sdf = false;
			}
			return 12;
		}
	}
})

