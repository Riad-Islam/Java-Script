
/** 
const numbers = [1, 2, 3, 4, 5, 6];
let len = numbers.length;

for (let i=1; i<len; i++){
    console.log(numbers[i]);
}
*/

/** 
const names = ["akul", "bakul", "mokul"];
let len = names.length;

for(let i=0; i<len; i++){
    console.log(names[i]);
}
*/

// sum of number between 11 to 20
/** let sum = 0;
for (let i=11; i<=20; i++){
    sum = sum+i;
}
console.log(sum); */  


// for (let i=1; i<=30; i++){
//     if(i%3 == 0 || i%5 == 0){
//         console.log(i);
//     }
// }


for (let i=1; i<=30; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
    }
}