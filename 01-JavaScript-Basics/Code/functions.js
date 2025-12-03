
console.log("1. FUNCTION DECLARATION");
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Ali"));        // Hello Ali
console.log(greet("Sara"));       // Hello Sara

console.log("\n2. FUNCTION EXPRESSION");
const sayHi = function(name) {
  return "Hi " + name + "!";
};
console.log(sayHi("Ahmed"));      // Hi Ahmed!

console.log("\n3. ARROW FUNCTIONS");
const welcome = (name) => {
  return "Welcome " + name;
};
console.log(welcome("Zara"));

const welcomeShort = name => "Welcome " + name;  // implicit return
console.log(welcomeShort("Khan"));

const add = (a, b) => a + b;
console.log("5 + 7 =", add(5, 7));    // 12

console.log("\n4. DEFAULT PARAMETERS");
function greetUser(name = "Friend") {
  return "Good morning, " + name + "!";
}
console.log(greetUser());         // Good morning, Friend!
console.log(greetUser("Omar"));   // Good morning, Omar!

console.log("\n5. REST PARAMETERS");
function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("sumAll(1,2,3,4) →", sumAll(1, 2, 3, 4));     // 10
console.log("sumAll(10, 20) →", sumAll(10, 20));         // 30

console.log("\n6. RETURN vs NO RETURN");
function square(num) {
  return num * num;
}
console.log("square(6) →", square(6));  // 36

function logMessage() {
  console.log("This function returns nothing");
}
console.log("logMessage() returns →", logMessage());  // undefined

console.log("\n7. IMMEDIATE INVOCATION (IIFE)");
(function() {
  console.log("I run immediately!");
})();