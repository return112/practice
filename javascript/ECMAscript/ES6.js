// var datatype ....var is used anywhere because it is global used datatype
// var myName = "shubham";
// if (true)  {
//     myName = "paul"
//     console.log (myName)    
// }
// myName = "shubhu"
// console.log(myName);


// let datatype....let is used only in blocked code ..thi is not used global 
// let myName = "shubham";
// if (true)  {
//     let myName = "paul";   // this is   used inly in if blocked 
//     console.log (myName) 
// }
// myName = "shubhu"
// console.log(myName);


// const datatype ....const is used for constant value which is not change it 
// const myName = "shubham";
// if (true)  {
//     const myName = "paul"
//     console.log (myName)    
// }
// myName = "shubhu"
// console.log(myName);


// template string  ..... ${} -- this template string

// let firstName = "shubham";
// let lastName = "pal";
// let fullName =  `${ firstName } ${lastName}`;
// console.log (fullName);

// string interpolation

// let age = 23;
// let message = ` I am ${age} years old `;
// console.log(message);

// let multilineString =`My name is Shubham Pal.
// I am 23 years old.
// I live in Ludhiana (Punjab).`
// console.log(multilineString);

// let num = 5;
// for (let i = 1; i <= 10; i++) {   
//     console.log(`5 * ${i} = ${5 * i}`);  ////-- This is tempalte string interpolation 
// }


// Default Function parameter

// function sum(a,b) {
//     return a+b;    
// }
// console.log(sum(5,10)); 

//--But if default funtion parameters

// function sum(a = 5, b = 10) {
//     return a + b;
// }
// console.log(sum(4));



// Fat Arrow Funtion

// const sum = function(a,b){
// console.log(`The sum of two number is ${a+b}`);  ////--- this is only function without function name 

// }
// sum(5,5)

// const sum = (a, b) => console.log(`The sum of two number is ${a + b}`);
// sum(5, 5)  ///-- this is fat arrow function

// --we can aslo write fat arrow function given in below
// const sum = (a, b) => {
//     console.log(`The sum of two number is ${a + b}`);
// }
// sum(5, 5)


// practice question

// function calculator(a, b, operator) {
//     let result;
//     switch (operator) {

//         case '+':
//             result = a + b;
//             return result;

//         case '-':
//             result = a - b;
//             return result;
//         case '%':
//             result = a % b;
//             return result;
//         case '/':
//             result = a / b;
//             return result;


//         default:
//             return 'No operator found';

//     }
// }
// console.log(calculator(5, 3, '+'));
// console.log(calculator(5, 3, '-'));
// console.log(calculator(5, 3, '%'));
// console.log(calculator(5, 3, '/'));


// reverse function

// const isReverse = (str) => {
//     let reverse ="";
//     for (i = str.length - 1; i >= 0; i--) {
//       reverse = reverse + str[i];
//     }
//     return reverse;
// }
// console.log(isReverse("Shubham"));

// palindrome 

// const isReverse = (str) => {
//     let reverse = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         reverse = reverse + str[i];
//     }
//     if (str === reverse) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isReverse("level"));


// Array 

;



