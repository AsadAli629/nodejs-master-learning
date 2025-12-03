
console.log("JavaScript Basics – 50 Questions Solutions\n");

// ————————————————————————
// 1. Declare a variable and print its value
// ————————————————————————
let message = "Hello JavaScript!";
console.log("1. Variable:", message);

// ————————————————————————
// 2. Declare a constant and print its value
// ————————————————————————
const PI = 3.14159;
console.log("2. Constant PI:", PI);

// ————————————————————————
// 3. Find the type of a variable using typeof
// ————————————————————————
let name = "Ali";
let age = 25;
let isStudent = true;
let scores = [90, 85];
console.log("3. Types →", typeof name, typeof age, typeof isStudent, typeof scores);

// ————————————————————————
// 4. Convert a string to number
// ————————————————————————
let strNum = "123";
let num1 = Number(strNum);
let num2 = parseInt(strNum);
let num3 = +strNum;
console.log("4. String to Number →", num1, num2, num3);

// ————————————————————————
// 5. Convert a number to string
// ————————————————————————
let number = 456;
let str1 = String(number);
let str2 = number.toString();
let str3 = number + "";
console.log("5. Number to String →", str1, str2, str3);

// ————————————————————————
// 6–10. Arithmetic Operators
// ————————————————————————
let a = 10, b = 3;
console.log("6. Add:", a + b);
console.log("7. Subtract:", a - b);
console.log("8. Multiply:", a * b);
console.log("9. Divide:", a / b);
console.log("10. Remainder:", a % b);

// ————————————————————————
// 11–12. == vs ===
// ————————————————————————
console.log("11. Loose equality (==):", 5 == "5");   // true
console.log("12. Strict equality (===):", 5 === "5"); // false

// ————————————————————————
// 13–15. Logical Operators
// ————————————————————————
console.log("13. AND (&&):", true && false);  // false
console.log("14. OR (||):", true || false);   // true
console.log("15. NOT (!):", !true);           // false

// ————————————————————————
// 16. Check if a number is positive
// ————————————————————————
let num = 7;
if (num > 0) {
  console.log("16. Number is Positive");
} else if (num < 0) {
  console.log("16. Number is Negative");
} else {
  console.log("16. Number is Zero");
}

// ————————————————————————
// 17. Check even or odd
// ————————————————————————
let n = 10;
console.log("17.", n % 2 === 0 ? "Even" : "Odd");

// ————————————————————————
// 18. Check voting eligibility
// ————————————————————————
let voterAge = 19;
console.log("18.", voterAge >= 18 ? "Eligible to vote" : "Not eligible");

// ————————————————————————
// 19. Find largest of 3 numbers
// ————————————————————————
let x = 10, y = 25, z = 15;
let largest = x > y ? (x > z ? x : z) : (y > z ? y : z);
console.log("19. Largest:", largest);

// ————————————————————————
// 20. Switch – Day of the week
// ————————————————————————
let day = 3;
switch (day) {
  case 1: console.log("20. Monday"); break;
  case 2: console.log("20. Tuesday"); break;
  case 3: console.log("20. Wednesday"); break;
  case 4: console.log("20. Thursday"); break;
  case 5: console.log("20. Friday"); break;
  case 6: console.log("20. Saturday"); break;
  case 7: console.log("20. Sunday"); break;
  default: console.log("20. Invalid day");
}

// ————————————————————————
// 21–23. Print 1 to 10 using all loops
// ————————————————————————
console.log("21. For loop 1–10:");
for (let i = 1; i <= 10; i++) console.log("   ", i);

console.log("22. While loop 1–10:");
let i = 1;
while (i <= 10) {
  console.log("   ", i);
  i++;
}

console.log("23. Do-while loop 1–10:");
let j = 1;
do {
  console.log("   ", j);
  j++;
} while (j <= 10);

// ————————————————————————
// 24. Sum numbers from 1 to 10
// ————————————————————————
let sum = 0;
for (let k = 1; k <= 10; k++) sum += k;
console.log("24. Sum 1–10:", sum); // 55

// ————————————————————————
// 25. Print even numbers 1–20
// ————————————————————————
console.log("25. Even numbers 1–20:");
for (let e = 2; e <= 20; e += 2) console.log("   ", e);

// ————————————————————————
// 26. Function to add 2 numbers
// ————————————————————————
function add(a, b) {
  return a + b;
}
console.log("26. Add(5, 7):", add(5, 7));

// ————————————————————————
// 27. Factorial of a number
// ————————————————————————
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("27. Factorial(5):", factorial(5)); // 120

// ————————————————————————
// 28. Check if number is prime
// ————————————————————————
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("28. 17 is prime?", isPrime(17)); // true

// ————————————————————————
// 29. Reverse a string
// ————————————————————————
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("29. Reverse 'hello':", reverseString("hello"));

// ————————————————————————
// 30. Check palindrome
// ————————————————————————
function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log("30. 'Racecar' is palindrome?", isPalindrome("Racecar"));

// ————————————————————————
// 31–35. Arrays
// ————————————————————————
let numbers = [10, 20, 30, 40, 50];
console.log("31. Array:", numbers);

let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("32. Sum of array:", total);

let max = Math.max(...numbers);
console.log("33. Largest in array:", max);

let reversedArr = [...numbers].reverse();
console.log("34. Reversed array:", reversedArr);

let arr1 = [1, 2], arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log("35. Merged arrays:", merged);

// ————————————————————————
// 36–40. Objects
// ————————————————————————
let person = { name: "Ali", age: 25 };
console.log("36. Person object:", person);

person.age = 26;
console.log("37. Updated age:", person.age);

delete person.name;
console.log("38. After deleting name:", person);

let student = { name: "Sara", scores: [85, 90, 88] };
console.log("40. Nested array in object – 2nd score:", student.scores[1]);

// ————————————————————————
// 41–50. ES6 Features
// ————————————————————————
let username = "Zara";
console.log(`41. Template literal: Welcome ${username}!`);

const addArrow = (a, b) => a + b;
console.log("42. Arrow function add(10,20):", addArrow(10, 20));

let count = 100;        // let – block scoped
const GRAVITY = 9.8;    // const – cannot reassign
console.log("43. Using let & const → count:", count, "Gravity:", GRAVITY);

let [first, second] = [100, 200];
console.log("44. Array destructuring →", first, second);

let { age: personAge } = { age: 22 };
console.log("45. Object destructuring → age:", personAge);

let original = [1, 2, 3];
let copy = [...original];
console.log("46. Spread copy:", copy);

function printAll(...items) {
  console.log("47. Rest parameter:", items);
}
printAll("A", "B", "C");

function greet(name = "Guest") {
  console.log("48. Default parameter → Hello", name);
}
greet();
greet("Ahmed");

let doubled = [1, 2, 3, 4].map(n => n * 2);
console.log("49. map() – doubled:", doubled);

let evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log("50. filter() – even numbers:", evens);

console.log("\nAll 50 Questions Completed Successfully!");