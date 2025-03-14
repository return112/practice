// array constructor

// var fruits = ["apple","mango","banana","grapes"];
// {
// console.log(fruits);
// }

// accessing element 
// var fruits = ["apple","mango","banana","grapes"];
// {
// console.log(fruits[3]);
// }


// modifying element

// var fruits = ["apple", "mango", "banana", "grapes"];
// {
//      fruits[2] = "lichi"   //modifying element
//      console.log(fruits);
// }


// for of loop
// var fruits = ["apple", "mango", "banana", "grapes"];
// for (let item of fruits)
// {
//      console.log(item)
// }


// for in loop

// var fruits = ["apple", "mango", "banana", "grapes"];
// for (let item in fruits)
// {
//      console.log(item)
// }


// forEach method

// var fruits = ["apple", "mango", "banana", "grapes"];

// fruits.forEach((currEle, index, arr) => {
//      console.log(`${currEle} ${index}`)
//      console.log(fruits)
// })

// const myforEachArr = fruits.forEach((currEle, index, arr) => {
//      return (`${currEle} ${index}`)
// })
// console.log(myforEachArr);


// .map method / array

// var fruits = ["apple", "mango", "banana", "grapes"];
// fruits.map((currEle, index, arr) => {
//      console.log(`${currEle} ${index}`)
//      console.log(fruits)
// })

// const myMapArr = fruits.map((currEle, index, arr) => {
//      return (` my favourite fruit is  ${currEle}`)
// })
// console.log(myMapArr);
// console.log(fruits);


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((currEle) => {        //this is used to performs any action on the element
//      console.log(currEle*2)    
// })


// let numbers = [1, 2, 3, 4, 5];

// const doubleNum = numbers.map((currEle) =>{   //this is used to creates new array with transfomed element
//      return currEle * 2;
// })
// console.log(doubleNum);



// .push() method 

// let fruits = ["apple", "banana", "mango", "grapes"]
// console.log(fruits.push("guava"))
// console.log(fruits);

// .pop() method

// let fruits = ["apple", "banana", "mango", "grapes"]
// console.log(fruits.pop())
// console.log(fruits);

// used both .push()  && .pop() method

// let fruits = ["apple", "banana", "mango", "grapes"]

// console.log(fruits.push("guava"))  //this is used to add new element in last of an array 
// console.log(fruits);         

// console.log(fruits.pop())   //this is used to remove element from the last of an array
// console.log(fruits);


//  .unshift() method 

// let fruits = ["apple", "banana", "mango", "grapes"]
// console.log(fruits.unshift("guava"))  //used to aad element in begining of array
// console.log(fruits);


// .shift() method 

// let fruits = ["apple", "banana", "mango", "grapes"]
// console.log(fruits.shift())  //used to removes element in begining of array
// console.log(fruits);



// used both .unshift() and .shift() method
let fruits = ["apple", "banana", "mango", "grapes"]

console.log(fruits.unshift("guava"))  //used to aad element in begining of array
console.log(fruits);

console.log(fruits.shift())  //used to removes element in begining of array
console.log(fruits);
