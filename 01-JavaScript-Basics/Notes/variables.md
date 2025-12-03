
````markdown
# Variables in JavaScript

A **variable** is a container used to store data.  

## Types of Variables

### 1) var
- Old way (not recommended)  
- Function scoped  
- Can be re-declared  
- Can be updated  

Example:
```js
var x = 10;
var x = 20; // allowed
````

### 2) let

* Modern way
* Block scoped (`{ }`)
* Cannot be re-declared
* Can be updated

Example:

```js
let name = "Ali";
name = "Ahmed"; // allowed
```

### 3) const

* Block scoped
* Cannot be re-declared
* Cannot be updated
* Must have a value at creation

Example:

```js
const country = "Pakistan";
country = "India"; // ❌ ERROR
```

---

## Scope of Variables

### Global Scope

Variable can be used anywhere.

```js
let a = 10;
function test() {
  console.log(a); // access allowed
}
```

### Function Scope

`var` is function scoped.

```js
function test() {
  var x = 5;
}
console.log(x); // ❌ ERROR
```

### Block Scope

`let` and `const` are block scoped.

```js
{
  let a = 10;
}
console.log(a); // ❌ ERROR
```

`var` is NOT block scoped:

```js
{
  var b = 20;
}
console.log(b); // ✅ accessible
```



## Summary Table

| Feature         | var  | let   | const |
| --------------- | ---- | ----- | ----- |
| Modern use?     | ❌ No | ✅ Yes | ✅ Yes |
| Re-declare?     | Yes  | No    | No    |
| Update value?   | Yes  | Yes   | No    |
| Block scope?    | No   | Yes   | Yes   |
| Function scope? | Yes  | No    | No    |

---

## When to Use

* **let** → when value changes (age, score)
* **const** → when value is fixed (API keys, URLs)
* **Avoid var**





