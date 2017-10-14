var pd = document.getElementById('page-loader');


var load = function () {
	setTimeout(function() {
		document.getElementById('page-loader').style.opacity = 0;
		document.getElementById('page-loader').style.visibility	= "hidden";
	},1000)
}