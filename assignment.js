let myNumber = Math.round(Math.random()* 100);

var guessed = false;
var attempt = 0;
var guess;
do {
	guess = prompt("Will you guess a number from 1 to 100 in 7 tries?, what is your first number...");
	if(guess > myNumber){
		attempt+= 1;
		alert("Your guess is too high think of a lower number");
		guessed = false;
	}else if (guess < myNumber){
		attempt += 1;
		alert("Your guess is too low, think of a higher number!!!");
		guessed = false;
	}else {
		alert("You guess the number in " + attempt + " tries");
		guessed = true;
	}
} while (guessed == false);