
# JavaScript Arrays & Methods – Complete Guide

An **array** is an ordered collection of values.  
Indexes start at **0**.

## 1. Creating Arrays

```js
let numbers = [1, 2, 3, 4, 5];
let fruits  = ["Apple", "Banana", "Mango"];
let mixed   = [1, "Hello", true, { name: "Ali" }];
let empty   = [];
```

## 2. Accessing & Modifying Elements

```js
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);     // "Apple" (first)
console.log(fruits[2]);     // "Mango" (third)
console.log(fruits.length); // 3

fruits[1] = "Orange";       // modify element
```

## 3. Most Important Array Methods

| Method        | Description                          | Returns                    | Modifies Original? |
|---------------|--------------------------------------|----------------------------|--------------------|
| `push()`      | Add to end                           | new length                 | Yes                |
| `pop()`       | Remove from end                      | removed element            | Yes                |
| `unshift()`   | Add to beginning                     | new length                 | Yes                |
| `shift()`     | Remove from beginning                | removed element            | Yes                |
| `concat()`    | Merge arrays                         | new array                  | No                 |
| `slice()`     | Extract portion                      | new array                  | No                 |
| `splice()`    | Add/remove elements at index         | removed elements           | Yes                |
| `map()`       | Transform each element               | new array                  | No                 |
| `filter()`    | Keep elements that pass test         | new array                  | No                 |
| `find()`      | First element that passes test       | element or undefined       | No                 |
| `findIndex()` | Index of first match                 | index or -1                | No                 |
| `includes()`  | Check if value exists                | true/false                 | No                 |
| `indexOf()`   | Index of value                       | index or -1                | No                 |
| `join()`      | Convert array to string              | string                     | No                 |
| `reduce()`    | Reduce to single value               | any value                  | No                 |
| `forEach()`   | Loop (no return)                     | undefined                  | No                 |
| `sort()`      | Sort elements                        | same array                 | Yes                |
| `reverse()`   | Reverse order                        | same array                 | Yes                |

## 4. Spread Operator (ES6) – Super Useful!

```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
let copy = [...arr1];       // true copy
```

## 5. Important Notes
- Most methods do **not** mutate the original array → `map`, `filter`, `slice`, `concat`
- These **do** mutate → `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`
- Always prefer `const` for arrays (you can still modify contents)

→ Full working examples in `arrays.js`


