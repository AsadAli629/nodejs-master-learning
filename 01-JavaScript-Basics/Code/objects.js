

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