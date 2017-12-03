var load = document.getElementById('page-loader');


var load = function () {
	setTimeout(function() {
		load.style.opacity = 0;
		load.style.visibility= "hidden";
	},1000)
}
