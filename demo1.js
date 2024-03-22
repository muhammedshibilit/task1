// //fahrenheit

// function toFahrenheit(c){
//     return (9/5*c)+32
// }

// let value = toFahrenheit(100)

// console.log(value);


// //prime number

// let n,i,flag;
// flag=1;
// i=2;
// n=1;
// while(i<n){
//     if(n%i==0){
//     flag=0;
//     console.log(n+" is not a prime number");
//     break;
//     }
//     else{
//         i++;
//     }
        
    
// }
//     if(flag==1){
//         console.log(n+ "is a prime number");
//     }







// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Function to display prime numbers between two intervals

// function displayPrimeNumbers(start, end) {
//     console.log(`Prime numbers between ${start} and ${end}:`);
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example usage
// const startInterval = 1;
// const endInterval = 35;
// displayPrimeNumbers(startInterval, endInterval);


// higherOrder

// const radius=[1,2,3,6,8,1000];

// //logic to calculate area
 
// const area= function(radius){
//     return Math.PI*radius*radius;
// }

// //logic to calculate diameter


// const diameter= function(radius){
//     return 2*radius;
// }

// //logic to calculate circumeference

// const circumeference= function(radius){
//     return Math.PI*2*radius;
// }

// //
// const calculate=function(radius,logic){
//     const output=[];
//     for(i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));
// console.log(calculate(radius,circumeference));



// //star

// let n=6;
// let m=10;

// for(let i=0; i<n; i++){
//     console.log("*   ".repeat(m));
// }

  
    
    
// //products

// let products=[
//     {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
// ]

// //product name only
// let product1=products.map(product1=>product1.pName)
// console.log(product1)

// //details of product with lcd display
// let product2=products.filter(product2=>product2.display==="lcd")
// console.log(product2)
