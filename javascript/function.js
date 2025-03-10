
// ? function

// function sum() {
//     var a = 5,
//     b= 10;
//     console.log(a+b);
// }
// sum();

// practice

// function greet (name){
//     console.log("Hello " + name + "", ", welcone to my kingdom");

// }
// greet("shubham")
// greet("paul")

// function sum (a,b){
//     console.log(a+b);

// }
// sum(5,8)
// sum(10,55)

// function sum (a,b){
//    return a+b;

// }
// var result = sum (10,5)
// console.log(result);

// Immediately invoked function expression with parameters

var result = (function sum(a, b) {
    console.log(a + b)
    return a+b;
})(5, 5)

console.log("the result is ",result);


