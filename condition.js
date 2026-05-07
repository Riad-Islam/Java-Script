/**
if (10 > 5){
    console.log('Number is larger');
}
*/

// var ApplePrice = 250;
// var OrangePrice = 300;
// if (ApplePrice > OrangePrice){
//     console.log('Give me 1kg Apple');
// }
// else {
//     console.log("Give me half kg Orange");
// }


// const salary = 25000;
// const isBCS = false;
// hasCar = false;

// if (salary > 2000 && isBCS==true){
//     console.log("Secelted");
// }
// else{
//     console.log("Not Selected");
// }


// if (salary > 2000 || isBSC == true){
//     console.log("Selected");
// }
// else{
//     console.log("Not Selected");
// }


// if ((salary > 20000 && hasCar == true) || isBCS == true){
//     console.log("Passed for Marriage");
// }
// else{
//     console.log("Not Passed");
// }


// let price = 3100;

// if (price >= 5000){
//     //10% Discount
//     const discount = (price*10)/100;
//     const payable = price-discount;
//     console.log("You have to Pay : "+payable);
// }
// else if (price >= 3000){
//     //5% Discount
//     const discount = (price*5)/100;
//     const payable = price-discount;
//     console.log("You have to Pay : "+payable);
// }
// else{
//     console.log("you have to Pay : "+price);
// }



/**
 * Nested if else condition
 * 14-8
 */



/**
 * Ternary Condition
 * 
 * condition ? print : else er print
 */

// const age = 17;

// age >= 18 ? console.log('You can vote') : console.log('You can not vote') 


// semi advance ternary 
let price = 1000;
const isleader = true;

// if (isleader === true){
//     if(price >= 1000){
//         price = price/2;
//         console.log(price);
//     }else{
//         price = 0;
//         console.log(price);
//     }
// }else{
//     price = price-50;
//     console.log(price);
// }

price = isleader === true ? price >= 1000 ? price /2 : 0 : price - 50;
console.log(price);







