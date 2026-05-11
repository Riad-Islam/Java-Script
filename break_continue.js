
// break
// for(let i=11; i<=20; i++){
//     if(i%5 !== 0){
//         console.log(i);
//         break;
//     }else{
//         continue;
//     }
// }


// let n = 54;
// while(n > 25){
//     if(n < 50){
//         console.log(n);
//         break;
//     }
//     n--;
// }


//Sum to numbers from 25 to 200 . If sum is gater than 100 stop the calculation.

let i = 25;
let sum = 0;

for(i=25; i<=200; i++){
    console.log(i);
    sum = sum+i;
    if(sum >= 100){
        console.log(sum-i);
        break;
    }else{
        continue;
    }
}