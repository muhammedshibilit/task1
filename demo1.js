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


// // higherOrder

// // const radius=[1,2,3,6,8,1000];

// // //logic to calculate area
 
// // const area= function(radius){
// //     return Math.PI*radius*radius;
// // }

// // //logic to calculate diameter


// // const diameter= function(radius){
// //     return 2*radius;
// // }

// // //logic to calculate circumeference

// // const circumeference= function(radius){
// //     return Math.PI*2*radius;
// // }

// // //
// // const calculate=function(radius,logic){
// //     const output=[];
// //     for(i=0; i<radius.length; i++){
// //         output.push(logic(radius[i]))
// //     }
// //     return output;
// // }

// // console.log(calculate(radius,area));
// // console.log(calculate(radius,diameter));
// // console.log(calculate(radius,circumeference));



// // //star

// // let n=6;
// // let m=10;

// // for(let i=0; i<n; i++){
// //     console.log("*   ".repeat(m));
// // }

  
    
    
// // //products

// let products=[
//     {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
// ]

// // // //product name only
// // // let product1=products.map(product1=>product1.pName)
// // // console.log(product1)

// // // //details of product with lcd display
// let product2=products.filter(product2=>product2.display==="lcd")
// console.log(product2)

// //print 5g mobile

// let product3=products.filter(p=>p.band==="5g")
// product3.forEach((p)=>console.log(p.price,p.pName))


// //filter mobiles based on prices 

// let minPrice=1000
// let maxPrice=10000
// let product4=products.filter(p=>p.price>=minPrice&&p.price<=maxPrice)
// product4.forEach((p)=>console.log(p.pName))


// // costly mobile

// let costlyproduct = products.reduce((minPriceproduct,currentProduct)=>{
//     return(currentProduct.price > minPriceproduct.price)? currentProduct:minPriceproduct;
// },products[0]);

// console.log("costly mobile:",costlyproduct.pName);


// // low cost mobile

// let lowcostproduct = products.reduce((maxPriceproduct,currentProduct)=>{
//     return(currentProduct.price < maxPriceproduct.price)? currentProduct:maxPriceproduct;
// },products[0]);

// console.log("costly mobile:",lowcostproduct.pName);

//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]


// //1. district having Highest +ve case - 

// let highestPositiveCase = covid_data.reduce(function(minCase,currentCase){
//     return(currentCase[2] > minCase[2])? currentCase:minCase;
// },covid_data[0]);

// console.log("highest positive case:",highestPositiveCase[1]);



// //2. district having Highest 1st dose vaccine - 

// let Highest_1st_dose_vaccine = covid_data.reduce(function(min,curr){
//     return(curr[5] > min[5])? curr:min;
// },covid_data[0]);

// console.log("Highest 1st dose vaccine",Highest_1st_dose_vaccine[1]);

// //3. district having lowest death rate - 

// let lowest_death_rate= covid_data.reduce(function(min,curr){
//     return(curr[3] > min[3])? curr:min;
// },covid_data[0]);

// console.log("lowest death rate",lowest_death_rate[1]);


// //7. Print Thrissur details - 

// let details_of_thrissur=covid_data.filter(function(district){
//     return district[1]==="Thrissur"
// })

// // Output the details of 'Thrissur'
//     console.log("Details of Thrissur:", details_of_thrissur);


// //5.positive case>15000
// const districts_above_15000 = covid_data.filter(district => district[2] > 15000);

// // Extract district names from filtered data
// const districtNames = districts_above_15000.map(district => district[1]);

// // Print the districts with positive cases greater than 15000
// console.log("Districts with positive cases greater than 15000:", districtNames);



// // 4.Sort the data by positive cases in descending order
// covid_data.sort((a, b) => b[2] - a[2]);
// console.log("Sorted data with positive cases in descending order:");
// console.table(covid_data);


// // 6.Sort the data by first dose vaccine in ascending order
// covid_data.sort((a, b) => a[5] - b[5]);

// // Print the sorted data
// console.log("Sorted data with first dose vaccine in ascending order:");
// console.table(covid_data);