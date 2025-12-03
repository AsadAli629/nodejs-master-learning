


console.log("1. FOR LOOP");
for (let i = 0; i < 5; i++) {
  console.log("   Iteration:", i);
}
// Output: 0 1 2 3 4

console.log("\n2. WHILE LOOP");
let count = 0;
while (count < 5) {
  console.log("   Count:", count);
  count++;
}

console.log("\n3. DO...WHILE LOOP");
let num = 0;
do {
  console.log("   Number:", num);
  num++;
} while (num < 5);

// This would still run once even if condition was false
let x = 10;
do {
  console.log("   Runs once even if false →", x);
} while (x < 5);

console.log("\n4. FOR...OF LOOP (Arrays)");
const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let fruit of fruits) {
  console.log("   Fruit:", fruit);
}

console.log("\n5. FOR...IN LOOP (Objects)");
const person = {
  name: "Ali",
  age: 25,
  city: "Karachi",
  job: "Developer"
};

for (let key in person) {
  console.log(`   ${key}: ${person[key]}`);
}

console.log("\n6. LOOP CONTROLS: break & continue");
console.log("   Numbers (skip 3, stop at 7):");
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 8) break;     // stop at 8
  console.log("   ->", i);
}