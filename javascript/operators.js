// Assignment operator

// var myFavnum = 5;
// console.log(myFavnum)

// arithmetic operator

// let x = 4;
// let y = 6;
// let sum = x + y;
// console.log(sum)

// subtract

// let x = 6;
// let y = 4;
// let diffence = x - y;
// console.log(diffence)

// multipliction

// let x = 6;
// let y = 4;
// let diffence = x * y;
// console.log(diffence)

// divison

// let x = 6;
// let y = 4;
// let diffence = x / y;
// console.log(diffence)

// challenge

// let result = "hello" / 2;
// console.log(result)


// let result = 0.1 + 0.2;
// console.log(result.toFixed(4))

// let num1 = 5;
// let num2 = "5";
// if (num1 === num2) {
//     console.log("equal");
// }
// else{
//     console.log("not equal");

// }

//logical AND

// let a = 5;
// let b = 10;
// console.log(a > 0 && b < 0);

// logical OR
// let a = 5;
// let b = 10;
// console.log(a > b || b > a);

// question

// let age = 20 ;
// let drivingLicences = true;
// console.log(age >=18 && drivingLicences);

//ternary operator  

// let score = 69;
// let result = score >= 60? "passed":"fail";
// console.log(result);

// if statement

// let temp = 15;
// if (temp > 30) {
//     console.log("Go to beech");
// }
// else if (temp >= 20 && temp < 30) {
//     console.log("watch TV");
// }
// else {
//     console.log("go to bed");

// }

// nested if else statement 

// let isAge = 18;
// let isCitizen = true;
// let isRegistered = true;

// if (isAge >= 18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("you are eligible to vote");


//         }
//         else {
//             console.log("you are not eligible to vote due to registered");

//         }

//     }
//     else {
//         console.log("you are not eligible to vote due to citizenship");
//     }

// }
// else {
//     console.log("you are not eligible to vote ");
// }

// question
// let num = 5;
// if (num % 2 == 0) {
//    console.log("Number is even");
// }
// else{
//     console.log("Number is odd");

// }

// let num = 0;
// if (num == 0) {
//     console.log("num is zero");
// }
// else if (num > 0) {
//     console.log("num is positive");

// }
// else{
//     console.log("num is negative");

// }

// Switch statement

// let day = "tuesday";
// switch (day) {
//     case "monday":
//         console.log("go to school");

//         break;

//     case "wednesday":
//         console.log("stay home");
//         break;

//     case "sunday":
//         console.log("lets go to cinema");
//         break;


//     default:
//         console.log("lets play");

//         break;
// }

// var areaofShapes = "circle";
// var a = 5;
// var b = 10;
// var result;

// switch (areaofShapes) {
//     case "square":
//         result = a * a;
//         console.log(result);

//         break;

//     case "rectangle":
//         result = a * b;
//         console.log(result);

//     case "circle":
//         var r = 2;
//         result = 3.14 *(r * r);
//         console.log(result);


//     default:
//         break;
// }

// while loop

// var num = 1;
// while (num<=10) {
//     console.log(num);
//     num++;

// }

// var num = 1;
// while (num<=10)   {

//     console.log('5 * ' + num + ' = ' + 5 * num);
//     num++;

// }


// do while

// let i = 1;
// do {
//     console.log(i);
//     i++

// } while (i<=10);

// let userInput;
// let positiveNumber;

// do {

//     userInput = prompt("enter any number")
//     positiveNumber = parseFloat(userInput)

// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("Valid number is ", positiveNumber);

//  for loop

// var sum = 0;
// for (let num = 1; num <= 10; num++) {
//      sum = sum + num ;

// }
// console.log(sum);

// var num = 2;
// var isPrime = true;

// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         isPrime = false;
//         break;
//     }

// }
// if (isPrime) {
//     console.log("num is prime");

// }
// else {
//     console.log("num is not prime");

// }

// pattren

// for (var i = 1; i <= 5; i++) {
//     var pattren = "";

//     for (var j = 1; j <= i; j++) {
//         pattren = pattren + " * ";
//     }
//     console.log(pattren);

// }

// let data = 7
// while(data>=0){
//     if (data<=5){
//         data--;
//         continue;
//     }
//     console.log(data);
//     data--;
// }

// let i = 5;
// while (true) {
//     console.log(i);
//     i += 5;
//     if (i > 30) {
//         break;
//     }
// }

let sum = 0;
const n = 100;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("sum : ",sum);
