// Context in JS

// 1. Function declarations are scanned and made available
// 2. Variable dedclarations are scanner and made undefined

// Represents  global object.
// console.log(this);


// // refer first point
// sayHello();
// function sayHello () {
//     console.log("Hello");
// }

// sayHi();
// function sayHi ()  {
//     console.log(this);
// }


// // refer to second point - returns undefined
// console.log(a);
// var a = 5;

// returns an error, since it is a variable 
// sayHello();

// var sayHello = function () {
//     console.log(this);
// }

// console.log(name);
// var name = "Vishnu";

// sayName();

// // This function will have it's own context
// // Line 41 returns undefined
// // Line 44 returns vishnu;
// function sayName () {
//   console.log(name);
//   var name = "Vishnu";
//   console.log(name);
// }


// console.log(name);


// // Scope chaining
// // 1. Inner scopes can access elements of outer scopes
// // 2. Outer scopes cannot access elements of inner scopes
// var name = "Vishnu";
// console.log(name);

// function sayName () {
//     // var name = "Mr. M";
//     console.log(name);
//     sayNameSecond();

//     function sayNameSecond () {
//         // var name = "Mr. V";
//         console.log(name);
//     }
// } 

// sayName();

// this keyword - Part 1

// console.log(this);

// function sayName () {
//     console.log(this);
// }

// sayName();

// var sayHi = function () {
//     console.log(this);
// }

// sayHi();



// Arrays
// Collection of elements - [] or new Array()

// var countries = ["India", "USA", "Japan", "Russia"];

// push - Appends new elements to the end of an array, and returns the new length of the array.
// pop - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// length - Gets or sets the length of the array. This is a number one higher than the highest index in the array.
// unshift - Inserts new elements at the start of an array, and returns the new length of the array.
// shift - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// foreach - Performs the specified action for each element in an array.

// Try to add remaining methods of array when you got time.
// var states = new Array("AP", "Tamil Nadu", "Ts", "Karnataka", "Kerala");

// console.log(countries);
// console.log(countries[0]); // Aceessing elements
// console.log(countries.length); // Finding the length of array
// console.log(countries.pop());
// console.log(countries);

// states.unshift("Temp"); // Insert element at beginning of array
// console.log(states);
// states.shift();  // Removes first element of array
// console.log(states);
// states.shift();
// console.log(states);

// console.log(states.push(4));
// var newLength = states.push(5);
// console.log(newLength);


// Arrow functions

// Normal arrow function
// var arrowFun = () => {
//     return "This is an arrow function";
// }

// console.log(arrowFun());


// Arrow function with parameters
// var arrowFun = (element) => {
//     var x = 6;
//     var y = 7;
//     var z = 8;
//     return element + x + y + z + 7;
// }

// console.log(arrowFun(2));

// // Another way to write an arrow function
// var arrowFun = (a, b) => a + b;
// console.log(arrowFun(2, 5));


// Call back function example
// Definition : Any function that is passed as an argument to another function so that it can be executed
// in that other function is called as a callback function.

// var ans = [2, 4 ,6 ,8].every((e) => {
//     return e % 2 === 0;
// });

// console.log(ans);

// every() : applies condition which is there in call back function to all the elements in array
// return true if all elements in array satisfy the condition otherwise false

// fill() : fill the array with given elements
// 1.
// var arr = [2,3,4,5,6,7];
// console.log(arr);
// arr.fill("v");
// console.log(arr);

// 2.
// var arr = [2,3,4,5,6,7];
// arr.fill("v", 2, 5);
// console.log(arr);



// filter() : expects a call back function
// Filter elements based on call back
// return new array

// const myNumber = [2,3,5,6,3,2,5];

// const ans = myNumber.filter((num) => num > 3);
// console.log(ans);


// slice() : splices the array into two parts

// let arr = [2,3,5,6,3];
// let ans = arr.slice(2,4);
// console.log(ans);


// splice() : parameters are start index, count, content to replace the count of values from start index

var users = ["Hitesh", "Vishnu", "Striver", "Kunal"];
users.splice(1, 1, "Good to go");
console.log(users)






