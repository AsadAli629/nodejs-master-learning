
✅ 📄 FILE 3: block-vs-non-block.md  
```markdown
# Blocking vs Non-Blocking Code in Node.js

Node.js uses **non-blocking I/O** to stay fast and scalable.

---

# What is Blocking Code? (Synchronous)

- Code runs line-by-line.
- Next line waits until the previous line finishes.
- Slow for heavy tasks.

Example:
```js
const fs = require('fs');
const data = fs.readFileSync('large.txt'); // BLOCKING
console.log("File Read");
console.log("Done");


Output:
File Read\
Done

if file is huge, Everything Freezes

What is Non-Blocking Code? (Asynchronous)

Code does NOT wait.
Task runs in background.
Callback executes later.

Example:

fs.readFile('large.txt', (err, data) => {
console.log("File Read");
});
console.log("Done");

Output:
Done\
File Read
