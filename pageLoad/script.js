window.onload = init;
var progressBar;
function init(evt){
	resize;
	window.onresize = resize;
	progressBar = document.querySelector(".progress div");

	window.addEventListener('scroll', function(){
		var max = document.body.scrollHeight = window.innerWidth;
		var percentage = (window.pageYOffset / max) * 100;
		progressBar.style.width = percentage + "%";
	});

	console.log("page loaded");
	let span =  document.querySelector("#pageStatus");
	span.innerHTML = "PAGE LOADED";
	let b = document.querySelector("#myButton");

	b.addEventListener('mousemove', function(evt){
		console.log("x = " + evt.clientX);
		console.log("y = " + evt.clientY);
		
	})
	b.addEventListener('click', function(evt){
		alert("you clicked at x: " + evt.clientX + " and y: " + evt.clientY);
	})
	function resize(evt){
		console.log("resize");
		var pageSizeSpan = document.querySelector("#pageSize");
		pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;

		var screenSizeSpan =  document.querySelector("#screenSize");
		screenSizeSpan.innerHTML = "Width: " + screen.width + "Height: " + screen.height;
	}	

}