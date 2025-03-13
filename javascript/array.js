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

var fruits = ["apple", "mango", "banana", "grapes"];
// fruits.map((currEle, index, arr) => {
//      console.log(`${currEle} ${index}`)
//      console.log(fruits)
// })

const myMapArr = fruits.map((currEle, index, arr) => {
     return (` my favourite fruit is  ${currEle}`)
})
console.log(myMapArr);
console.log(fruits);


