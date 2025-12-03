
// Primitive Types
let name = "Ali";           // string
let age = 25;               // number
let isActive = true;        // boolean
let emptyValue = null;      // null
let notAssigned;            // undefined
let id = Symbol("id");      // symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof name); // string
console.log(typeof age);  // number
console.log(typeof isActive); // boolean
console.log(typeof emptyValue); // object (this is JS quirk)
console.log(typeof notAssigned); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint

// Reference Types
let person = {name: "Ali", age: 25};
let numbers = [1,2,3,4,5];
let greet = function(){ console.log("Hello"); }
let today = new Date();
let regex = /ab+c/;

console.log(typeof person); // object
console.log(typeof numbers); // object
console.log(typeof greet); // function
console.log(typeof today); // object
console.log(typeof regex); // object

// Type Conversion
let strNum = "100";
let numConverted = Number(strNum); // 100
console.log(numConverted, typeof numConverted);

let number = 123;
let strConverted = String(number); // "123"
console.log(strConverted, typeof strConverted);

let boolVal = 0;
console.log(Boolean(boolVal)); // false
