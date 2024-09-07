// Ternery Operator

// var isAuthenticated = true;

// // Using normal if - else

// if (isAuthenticated) {
//     console.log("Show the signout button");
// } else {
//     console.log("Show the login button");
// }

// // Using ternary operator

// isAuthenticated ? console.log("Show the signout button") : console.log("Show the login button");



// Switch Cases

// if applications have multiple conditions to look at.

// var user = "testrunner";

// switch (user) {
//     case "admin": 
//       console.log("Admin has all priviliages");
//       break;

//     case "testrunner":
//       console.log("Testrunner can have access to create or delete tests");
//       break;

//     case "user":
//       console.log("Can able to consume content");
//       break;
    
//     default:
//       console.log("False user");
//       break;  
// }

// // Another way of writing switch case 
// switch (user) {
//     case "admin": 
//       return console.log("Admin has all priviliages");

//     case "testrunner":
//       return console.log("Testrunner can have access to create or delete tests");

//     case "user":
//       return console.log("Can able to consume content");
    
//     default:
//       return console.log("False user"); 
// }


// Type coercion and falsy values in JS

// coercion means automatic conversion of values from one data type to another.
// console.log(2  + 2.24);
// console.log(2 + "2");

// Falsy values - values which are treated as false 
// There are total of 6 values - (false, 0, ''(empty string), null, undefined, NaN)

// var a;
// console.log(a);
// console.log(typeof a);

// var b = null;
// console.log(b);
// console.log(typeof b);

// var c = NaN;
// console.log(c);
// console.log(typeof c);


// Functions

// // A simple function declaration
// function sayHello () {
//     console.log("Hi there, this is vishnu!");
// }

// // Calling a function
// sayHello();

// // Function with parameters
// function sayHi (name) {
//    console.log("Hi there this is",name);
//    console.log("Hi thete this is " + name);
//    console.log(`Hi there this is ${name}`);
// }

// sayHi ("Vishnu");

// // Function with return statement
// function fun(a) {
//     return a;
// }

// var ans = fun(7);
// console.log(ans);

// function getUserRole (name, role)  {
//     switch (role) {
//         case "admin":
//             return `${name} is an admin who had all accesses`;
//         case "subadmin":
//             return `${name} is a subadmin who can create/delete courses`;
//         case "testprep":
//             return `${name} is a test prep who can create/delete tests`;   
//         case "user":
//             return `${name} is a user who can consume content`;     
//         default:
//             return `${name} is just a normal user with no privialiages`;
//     }
// }

// The above code can be rewritten as :
var getUserRole = function (name, role)  {
    switch (role) {
        case "admin":
            return `${name} is an admin who had all accesses`;
        case "subadmin":
            return `${name} is a subadmin who can create/delete courses`;
        case "testprep":
            return `${name} is a test prep who can create/delete tests`;   
        case "user":
            return `${name} is a user who can consume content`;     
        default:
            return `${name} is just a normal user with no privialiages`;
    }
}


// console.log(getUserRole("Vishnu", "admin"));
// console.log(getUserRole("Kishore", "subadmin"));
// var user = getUserRole("Anil", "user");
// console.log(user);