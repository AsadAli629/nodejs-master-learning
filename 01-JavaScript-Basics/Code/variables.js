
// VAR Example
var x = 10;
console.log(x); // 10
var x = 20;
console.log(x); // 20

// LET Example
let name = "Ali";
console.log(name); // Ali
name = "Ahmed";
console.log(name); // Ahmed
// let name = "Zara"; // ❌ ERROR

// CONST Example
const country = "Pakistan";
console.log(country); // Pakistan
// country = "India"; // ❌ ERROR

// Scope Examples
// Global Scope
let a = 5;
function showA() {
  console.log("Global Scope a:", a);
}
showA();

// Function Scope
function testVar() {
  var y = 10;
  console.log("Inside function y:", y);
}
testVar();
// console.log(y); // ❌ ERROR

// Block Scope
{
  let b = 15;
  const c = 20;
  var d = 25;
  console.log("Inside block b:", b); // 15
  console.log("Inside block c:", c); // 20
  console.log("Inside block d:", d); // 25
}
console.log("Outside block d:", d); // 25
// console.log(b); // ❌ ERROR
// console.log(c); // ❌ ERROR
