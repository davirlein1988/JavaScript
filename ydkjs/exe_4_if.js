const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;

var amount = 99.99;

amount = amount * 2;

if ( amount < bank_balance) {
	console.log("I will take the accessory");
	amount = amount + ACCESSORY_PRICE;
}
else {
	console.log("No, Thank you!!!");
}
