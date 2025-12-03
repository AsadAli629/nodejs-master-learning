// ARITHMETIC, ASSIGNMENT, COMPARISON, LOGICAL, STRING CONCATENATION, TERNARY OPERATORS
console.log("ARITHMETIC OPERATORS");
let x = 10, y = 3;
console.log("10 + 3 =", x + y);     // 13
console.log("10 - 3 =", x - y);     // 7
console.log("10 * 3 =", x * y);     // 30
console.log("10 / 3 =", x / y);     // 3.333...
console.log("10 % 3 =", x % y);     // 1
console.log("2 ** 4 =", 2 ** 4);    // 16
x++; console.log("x++ →", x);       // 11
y--; console.log("y-- →", y);       // 2

console.log("\nASSIGNMENT OPERATORS");
let a = 5;
a += 4; console.log("a += 4 →", a); // 9
a -= 2; console.log("a -= 2 →", a); // 7
a *= 3; console.log("a *= 3 →", a); // 21
a /= 7; console.log("a /= 7 →", a); // 3
a %= 2; console.log("a %= 2 →", a); // 1

console.log("\nCOMPARISON OPERATORS");
console.log("5 == '5'  →", 5 == "5");    // true
console.log("5 === '5' →", 5 === "5");   // false
console.log("10 != 5   →", 10 != 5);     // true
console.log("10 !== '10' →", 10 !== "10"); // true
console.log("8 > 5     →", 8 > 5);       // true
console.log("8 < 5     →", 8 < 5);       // false
console.log("10 >= 10  →", 10 >= 10);    // true
console.log("5 <= 10   →", 5 <= 10);     // true

console.log("\nLOGICAL OPERATORS");
console.log("true && false →", true && false); // false
console.log("true || false →", true || false); // true
console.log("!true         →", !true);         // false
console.log("(5 > 3) && (10 < 20) →", (5 > 3) && (10 < 20)); // true

console.log("\nSTRING CONCATENATION");
let first = "JavaScript";
let last = "Rocks";
console.log(first + " " + last + "!"); // JavaScript Rocks!

console.log("\nTERNARY OPERATOR");
let age = 17;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Age ${age} → Can vote: ${canVote}`);

let category = age < 13 ? "Child" : age < 18 ? "Teen" : "Adult";
console.log("Category:", category);