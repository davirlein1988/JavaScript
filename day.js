// application of swith statement

//computer choice
var day = Math.round(6*Math.random());
//alert("Pick a day number: " + day);
switch(day){
	case 0:
		alert('Monday');
		break;
	case 1:
		alert("Tuesday");
		break; 
	case 2:
		alert("Wednesday");
		break;
	case 3: 
		alert("Thursday");
		break;
	case 4:
		alert("Friday");
		break;
	case 5:
		alert("Saturday;");
		break;
	case 6:
		alert("TGIS Sunday");
		break;

}
// nicely done
// we use the random variable defined above
var daysOfWeek = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];
alert("This is how is printed out of an array: " + daysOfWeek[day]);