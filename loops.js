// while 
var i =1, j = 1;
while (i < 4) {
	j += i;
	i += 1;
	console.log(i);
	console.log(j);
}
// do-while statement
var i = 0;

do {
	console.log('i = ' + i);
	i++;
}while(i < 20);
console.log('value of i after the do-while statement: ' + i);

// for statement
for(var i = 1, j = 1; i <= 10; i++, j+=2) {
	console.log('i = ' + i + ' j = ' + j);
}
// for-in statement

var lein = {
	familyName: 'Prada',
	givenName: 'Lein',
	age: 28
}
for(var p in lein){
	console.log(p);
	console.log(lein[p]);
}

// continue statement
for(var i = 1, k = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
 
    k += 2*i;
    console.log('k += ' + (2*i));
}
console.log('Final k value:' + k)

// break statement
var people = ['michel', 'john', 'donald', 'paul', 'patricia', 'Lein', 'marcela'];
function whereIsName(name, myArray){
	console.log("Number of elements in the array is: " + myArray.length);

	for(var i = 0; i < myArray.length; i++){
		console.log("Comparing elements at position: " + i);

		if(myArray[i] === name){
			console.log("The name " + name + 
				' is in position: ' + i);
			break;
		}else {
			console.log(name + " is not at position "+ i);
		}
	}
}
 
whereIsName("marcela", people);