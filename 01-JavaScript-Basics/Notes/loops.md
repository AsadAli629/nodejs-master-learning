
# JavaScript Loops – Complete Guide

Loops allow you to execute a block of code repeatedly based on a condition or iterable.

## 1. for Loop
The most commonly used loop when the number of iterations is known.

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4
```

**Structure**: `for (initialization; condition; increment/decrement)`

---

## 2. while Loop
Repeats as long as the condition is `true`. Condition checked before each iteration.

```js
let i = 0;
while (i < 5) {
  console.log("While iteration:", i);
  i++;
}
```

Warning: Don't forget to update the counter — or you'll get an infinite loop!

---

## 3. do...while Loop
Always executes the block at least once, then checks the condition.

```js
let j = 0;
do {
  console.log("Do-while iteration:", j);
  j++;
} while (j < 5);
```

Even if condition is false initially, it runs once.

---

## 4. for...of Loop (for Arrays & Iterables)
Iterates over values of iterable objects (arrays, strings, NodeList, etc.).

```js
const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
```

Clean and readable — perfect for arrays!

---

## 5. for...in Loop (for Objects)
Iterates over enumerable property keys of an object.

```js
const person = { name: "Ali", age: 25, city: "Karachi" };

for (let key in person) {
  console.log(key + ":", person[key]);
}
// Output:
// name: Ali
// age: 25
// city: Karachi
```

Note: Use `for...in` for objects, not arrays (order not guaranteed).

---

## Control Statements

| Statement   | Purpose                          | Example                     |
|-------------|----------------------------------|-----------------------------|
| `break`     | Exit the loop immediately        | `if (i === 3) break;`       |
| `continue`  | Skip current iteration           | `if (i === 2) continue;`    |

---

## Best Practices
- Use `for` → when you know the count
- Use `for...of` → for arrays/strings
- Use `for...in` → only for object properties
- Use `while` → when condition depends on user input or async operations
- Always prevent infinite loops!

→ See `loops.js` for full working examples with output.


