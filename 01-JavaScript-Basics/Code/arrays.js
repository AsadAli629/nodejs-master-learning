
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40, 50];

console.log("Original Arrays:");
console.log("fruits :", fruits);
console.log("numbers:", numbers);
console.log("Length :", fruits.length);

console.log("\n1. MODIFYING ARRAY (push, pop, unshift, shift)");
fruits.push("Orange");          // add end
console.log("After push :", fruits);

fruits.pop();                   // remove end
console.log("After pop  :", fruits);

fruits.unshift("Kiwi");         // add start
console.log("After unshift :", fruits);

fruits.shift();                 // remove start
console.log("After shift :", fruits);

console.log("\n2. NON-MUTATING METHODS (return new array)");
let doubled = numbers.map(n => n * 2);
console.log("map() → doubled :", doubled);
console.log("Original unchanged :", numbers);

let evens = numbers.filter(n => n % 20 === 0);
console.log("filter() → evens :", evens);

let firstBig = numbers.find(n => n > 25);
console.log("find() → first > 25 :", firstBig);

console.log("\n3. REDUCE & OTHER POWERFUL METHODS");
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce() → sum :", sum);

let total = numbers.reduce((a, b) => a + b);
console.log("reduce (no initial) :", total);

console.log("includes(30) :", numbers.includes(30));
console.log("indexOf(40)   :", numbers.indexOf(40));
console.log("join()       :", fruits.join(" → "));

console.log("\n4. SPREAD OPERATOR (Copy & Merge)");
let copy = [...fruits];
let merged = [...fruits, ...numbers, "Extra"];
console.log("Copy   :", copy);
console.log("Merged :", merged);

console.log("\n5. MUTATING METHODS (sort, reverse, splice)");
let nums = [50, 10, 40, 30, 20];
nums.sort((a, b) => a - b);     // numeric sort
console.log("Sorted ascending :", nums);

nums.reverse();
console.log("Reversed        :", nums);

nums.splice(2, 1, 999);         // remove 1 item at index 2, insert 999
console.log("After splice    :", nums);

console.log("\n6. forEach (looping)");
fruits.forEach((fruit, index) => {
  console.log(`   ${index + 1}. ${fruit}`);
});