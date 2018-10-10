

 const TAX_RATE = 0.009, PHONE_PRICE = 699.99, ACCESSORY_PRICE = 19.99;
  var bank_balance = prompt("How much money is in your bank account?");
 bank_balance = Number(bank_balance);

 var amount = 0;

 let spending_theshold = (bank_balance * 0.3);

 function calculateTax(amount){
 	return amount * TAX_RATE;
 }


function formatAmount(amount){
	return "$" + amount.toFixed( 2 );
}

while(amount < bank_balance){
	amount = amount + PHONE_PRICE;

	if (amount < spending_theshold){
		amount = amount + ACCESSORY_PRICE;
	}

}

amount = amount + calculateTax(amount);


console.log(
	'Your purchase ' + formatAmount(amount)
	);

if ( amount < bank_balance) {
	console.log(
		"You can't afford this purchase. :("
		);
}
