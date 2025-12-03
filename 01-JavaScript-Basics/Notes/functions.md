
# JavaScript Functions – Complete Guide

A **function** is a reusable block of code that performs a specific task.  
Functions can take inputs (parameters) and return a result.

## 1. Function Declaration (Traditional)
Hoisted → can be called before declaration.

```js
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ali")); // Hello Ali
```

## 2. Function Expression
Not hoisted → must be defined before use.

```js
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Sara")); // Hello Sara
```

Can be anonymous.

## 3. Arrow Functions (ES6+)
Concise syntax, no own `this`, `arguments`, or `super`.

```js
// Regular arrow
const greet = (name) => {
  return "Hello " + name;
};

// Implicit return (single expression)
const greetShort = name => "Hello " + name;

const add = (a, b) => a + b;
```

## 4. Parameters vs Arguments

```js
function multiply(x, y) {     // x, y → Parameters
  return x * y;
}

multiply(4, 5);               // 4, 5 → Arguments
```

- **Parameters**: variables in function definition  
- **Arguments**: actual values passed when calling

## 5. Default Parameters (ES6)

```js
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet());     // Hello Guest
console.log(greet("Ali")); // Hello Ali
```

## 6. Rest Parameters (ES6)

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

## 7. Return Statement

```js
function square(num) {
  return num * num;   // returns value
}

function noReturn() {
  console.log("I return nothing");
  // → returns undefined automatically
}
```

- `return` exits the function immediately
- No `return` → function returns `undefined`

## Key Differences Summary

| Feature                  | Function Declaration | Function Expression | Arrow Function |
|--------------------------|----------------------|---------------------|----------------|
| Hoisting                 | Yes                  | No                  | No             |
| Has its own `this`       | Yes                  | Yes                 | No (lexical)   |
| Can be named             | Yes                  | Optional            | No             |
| Implicit return          | No                   | No                  | Yes            |
| Best for methods         | Yes                  | Yes                 | No             |

→ Full working examples in `functions.js`