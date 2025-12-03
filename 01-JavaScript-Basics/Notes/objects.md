
# JavaScript Objects – Complete Guide

An **object** is a collection of **key-value** pairs.  
Keys (properties) are strings/symbols → Values can be anything!

## 1. Creating Objects

```js
let person = {
  name: "Ali",
  age: 25,
  isStudent: true,
  hobbies: ["Cricket", "Coding"],
  greet: function() {
    console.log("Hello!");
  }
};

// Empty object
let emptyObj = {};
let obj = new Object(); // same as {}
```

## 2. Accessing Properties

```js
// Dot notation (preferred when key is known & valid identifier)
console.log(person.name);     // Ali

// Bracket notation (use when key has spaces/special chars or is dynamic)
console.log(person["age"]);   // 25
let key = "name";
console.log(person[key]);     // Ali
```

## 3. Adding & Updating Properties

```js
person.country = "Pakistan";     // Add new property
person.age = 26;                 // Update existing
person["isAdmin"] = true;        // Bracket way
```

## 4. Deleting Properties

```js
delete person.isStudent;
console.log(person.isStudent);   // undefined
```

## 5. Nested Objects & Arrays

```js
let student = {
  name: "Zara",
  age: 20,
  address: {
    city: "Karachi",
    zip: "75500"
  },
  marks: {
    math: 95,
    english: 88,
    science: [90, 85, 92]
  }
};

console.log(student.address.city);        // Karachi
console.log(student.marks.science[1]);    // 85
```

## 6. Object Methods

```js
let user = {
  name: "Ahmed",
  greet() {
    console.log("Hello, " + this.name);
  },
  getAge: function() {
    return this.age;
  }
};

user.greet(); // Hello, Ahmed
```

## 7. ES6+ Object Features

```js
// Shorthand property names
let name = "Sara", age = 22;
let user = { name, age };

// Computed property names
let key = "status";
let person = {
  [key]: "active"
};

// Object destructuring
let { name, age } = person;
console.log(name, age);
```

## 8. Useful Object Methods

| Method             | Purpose                              |
|--------------------|--------------------------------------|
| `Object.keys()`    | Returns array of keys                |
| `Object.values()`  | Returns array of values              |
| `Object.entries()` | Returns array of [key, value] pairs  |
| `Object.assign()`  | Copy properties (shallow)            |
| `Object.freeze()`  | Prevent modifications                |
| `Object.seal()`    | Prevent adding/removing properties   |

→ Full working examples in `objects.js`
```

---

### 2. `objects.js` (Full Working Demo – Ready to Run)

```js
// ========================================
// JavaScript Objects – Complete Demo
// ========================================

console.log("1. BASIC OBJECT & ACCESS");
let person = {
  name: "Ali",
  age: 25,
  country: "Pakistan",
  isStudent: true
};

console.log("Name :", person.name);
console.log("Age  :", person["age"]);
console.log("Keys :", Object.keys(person));
console.log("Values :", Object.values(person));

console.log("\n2. ADD, UPDATE & DELETE");
person.job = "Developer";        // Add
person.age = 26;                 // Update
console.log("After update:", person);

delete person.isStudent;         // Delete
console.log("After delete:", person);

console.log("\n3. NESTED OBJECTS");
let student = {
  name: "Zara",
  rollNo: 101,
  address: {
    city: "Lahore",
    province: "Punjab",
    coordinates: { lat: 31.5, lng: 74.3 }
  },
  subjects: {
    math: 95,
    english: 88,
    science: [90, 85, 92]
  }
};

console.log("City :", student.address.city);
console.log("Science Marks :", student.subjects.science);
console.log("Second Science Mark :", student.subjects.science[1]);

console.log("\n4. OBJECT METHODS");
let user = {
  name: "Ahmed",
  age: 23,
  greet() {
    console.log("Hello! My name is " + this.name);
  },
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
};

user.greet();
console.log("Born in:", user.getBirthYear());

console.log("\n5. ES6+ FEATURES");
let fname = "Sara", score = 99;
let player = { fname, score };  // shorthand
console.log("Player:", player);

let dynamicKey = "level";
let game = {
  [dynamicKey]: "Expert"
};
console.log("Game level:", game.level);

console.log("\n6. DESTRUCTURING");
let { name, age, country } = person;
console.log("Destructured →", name, age, country);

console.log("\n7. USEFUL OBJECT METHODS");
console.log("Entries :", Object.entries(person));
console.log("Is Frozen?", Object.isFrozen(person));

// Shallow copy
let copy = Object.assign({}, person);
copy.name = "Copied User";
console.log("Original name:", person.name);
console.log("Copy name    :", copy.name);

