window.onkeyup = processKeyUp;
//the same could be written adding event listeners
//window.addEventListener('keyup', processKeyUp);

window.onkeydown = processKeyDown;
// also
//window.addEventListener('keydown', processKeyDown);

function processKeyUp(evt){
	var keys = document.querySelector("#keys");
	keys.innerHTML += "Keyup: " + evt.key + " code: "+ evt.keyCode + " has been released now <br>";

}

function processKeyDown(evt){
	var keys =  document.querySelector('#keys');
	keys.innerHTML += 'Key Down: ' + evt.key + ' code: ' + evt.keyCode + " has been pressed<br>";
}