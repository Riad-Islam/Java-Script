var apple = 20;
var orange = 24;
var banana = '30'; //String type value
banana = parseInt(banana); //convert string to numeric

var mango = '7.55';
mango = parseFloat(mango);

console.log(typeof banana);
console.log(apple + banana);
console.log(apple+mango);

var num1 = 0.1;
var num2 = 0.2;
// console.log(num1+num2);
var total = num1 + num2;
console.log(total.toFixed(3));  //Show 3 digits after point

