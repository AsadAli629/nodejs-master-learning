
console.log("1. SPREAD OPERATOR");
let nums = [10, 20, 30];
let more = [...nums, 40, 50];
console.log("Spread array :", more);

let person = { name: "Ali", age: 25 };
let updated = { ...person, city: "Lahore", age: 26 };
console.log("Spread object:", updated);

console.log("\n2. REST PARAMETER");
function logAll(...args) {
  console.log("Arguments:", args);
  console.log("Count    :", args.length);
}
logAll("A", "B", "C", 1, 2, 3);

function multiply(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}
console.log("multiply(3, 1,2,3):", multiply(3, 1, 2, 3));

console.log("\n3. DESTRUCTURING");
let colors = ["red", "green", "blue"];
let [primary, secondary] = colors;
console.log("Primary:", primary, "Secondary:", secondary);

let { name, age: userAge = 18 } = { name: "Sara" };
console.log("Name:", name, "Age:", userAge);

function intro({ name, age, country = "Unknown" }) {
  console.log(`Hi, I'm ${name}, ${age} years old from ${country}`);
}
intro({ name: "Ahmed", age: 23 });

console.log("\n4. TEMPLATE LITERALS");
let product = "Laptop";
let price = 85000;
console.log(`Product: ${product}
Price: Rs. ${price.toLocaleString()}
Discounted: Rs. ${price * 0.9}`);

console.log("\n5. DEFAULT PARAMETERS");
function createUser(name = "Anonymous", role = "user", active = true) {
  console.log(`User: ${name}, Role: ${role}, Active: ${active}`);
}
createUser("Admin", "admin");
createUser();

console.log("\n6. ENHANCED OBJECT LITERALS");
let status = "online";
let user = {
  name: "Zara",
  age: 22,
  [status]: true,
  greet() {
    console.log(`Hello! I'm ${this.name}`);
  }
};
user.greet();
console.log("User status:", user.online);