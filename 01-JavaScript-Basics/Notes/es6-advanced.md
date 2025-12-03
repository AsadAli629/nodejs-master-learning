
# ES6+ Advanced JavaScript Features – Modern Syntax Guide

ES6 (2015) brought game-changing features that make JavaScript cleaner, safer, and more powerful.

## 1. Spread Operator (...)

Expands an iterable (array/object) into individual elements.

```js
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];        // [1,2,3,4,5]
let copy = [...arr1];              // true copy

// Objects
let obj1 = { name: "Ali", age: 25 };
let obj2 = { ...obj1, city: "Karachi" };  // merge + add
let clone = { ...obj1 };           // shallow clone
```

Use cases: copy arrays/objects, merge, pass args, etc.

---

## 2. Rest Parameter (...)

Collects remaining arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));     // 15
console.log(sum(10, 20));            // 30
```

Must be the last parameter!

---

## 3. Destructuring Assignment

Extract values from arrays/objects in one line.

```js
// Array destructuring
let [a, b, c] = [10, 20, 30];
let [x, , z] = [1, 2, 3];           // skip middle

// Object destructuring
let person = { name: "Sara", age: 22, country: "Pakistan" };
let { name, age } = person;

// Rename + default
let { name: fullName, job = "Student" } = person;
```

Perfect for function parameters!

---

## 4. Template Literals (Backticks `)

Multi-line strings + easy variable interpolation.

```js
let name = "Ali";
let age = 25;

console.log(`Hello ${name}!
You are ${age} years old.
Next year you'll be ${age + 1}.`);
```

No more + "+" + "mess"!

---

## 5. Default Parameters

Set fallback values for function parameters.

```js
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet("Ahmed");     // Hello, Ahmed!
greet();            // Hello, Guest!
greet(undefined, "Hi"); // Hi, Guest!
```

---

## 6. Enhanced Object Literals (ES6)

```js
let name = "Zara", age = 20;

// Shorthand properties
let user = { name, age };

// Shorthand methods
let calc = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};

// Computed property names
let key = "status";
let player = { [key]: "active" };
```

→ Full working examples in `es6-advanced.js`



