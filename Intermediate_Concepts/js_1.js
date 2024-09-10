// Objects - An object is a collection of properties(a key-value pair)

// Example of an object

// var user = {
//     first_name : "Vishnu",
//     last_name : "Mora",
//     role : "Student",
// }

// Key points:
// 1. user is the name of the Object.
// 2. first_name, last_name, role are the property names(keys).
// 3. Their associated values are called property values.

// // Accessing property of an object
// console.log(user.first_name);
// // Manipulating the properties of an onject
// user.role = "Intern";
// console.log(user);

// Methods in Object.
// If a property's value is a function then in such case the property is known as a method.



// var user = {
//     first_name : "Vishnu",
//     last_name : "Mora",
//     role : "Student",
//     courseList : [],
//     buyCourse : function (courseName) {
//         this.courseList.push(courseName);
//     },
//     getCourseCount : function () {
//       return `${this.first_name} is enrolled in total of ${this.courseList.length} courses`
//     }
// };

// user.buyCourse("C++");
// console.log(user.courseList);
// console.log(user.getCourseCount());




// Note : Here "this" represents user object. we can use user in place of this, but it is a good practice.
// This represents context and acts as a placeholder to actual object.


// For Each

// const states = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka"];
// states.forEach((s) => console.log(s));
/*
// var i = 0;
// // This for loop represents infinite loop
// for(;;) {
//     console.log(i);
//     if(i > 3) break;
//     i++;
// }
*/



// for of - Majorly used in arrays

// const names = ["Facebook", "Instagram", "Netflix", "Google", "Microsoft"];
// // for(const name of names) {
// //     console.log(name);
// // }

// for(const name in names) {
//     console.log(name);
// }

// // for in - used in objects
// const names = {
//     fb : "Facebook",
//     ig : "Instagram",
//     gg : "Google"
// }

// for(const name in names) {
//     console.log(name);
// }



// In depth about this keyword


// 1.For all regular function calls, this points to global object / window object / empty  object.

console.log(this);  // this represents empty object

var user = {
    first_name : "Vishnu",
    last_name : "Vardhan",
    obj_fun : function () {
       console.log("Line 102", this);  // this represents object user.
       function regular_fun () {
        console.log("Line 105", this);  // this represents global object since it is a regular function
     }
     regular_fun();
    },
};

user.obj_fun();
