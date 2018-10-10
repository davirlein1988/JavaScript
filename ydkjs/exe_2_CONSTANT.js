
// var TAX_RATE = 0.08 commented line after adding conts below
const TAX_RATE = 0.09;

var amount = 99.99;

amount = amount * 2;

amount = amount + ( amount * TAX_RATE);

console.log( amount);

console.log( amount.toFixed( 2));
