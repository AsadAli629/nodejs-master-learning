# Node.js Event Loop — Detailed Explanation

Node.js uses the **Event Loop** to handle asynchronous operations while being single-threaded.

---

## Why Event Loop Exists?

JavaScript is single-threaded.  
If we use blocking operations (like reading big files), it would freeze the whole program.

Event Loop helps by:
- Offloading long tasks to background threads
- Letting other code run meanwhile
- Bringing finished tasks back to the main thread

---

# How Event Loop Works — Step by Step

### ▶ 1. **Call Stack**
Where JavaScript executes code line-by-line.

Example:
```js
console.log("Hello");

▶ 2. Web APIs / Node APIs
These handle async operations:

setTimeout
setInterval
Network requests
File system operations (fs)

They run outside the main JS thread.

▶ 3. Callback Queue
When an async task finishes, its callback is added to this queue.
Example:
setTimeout(() => console.log("After 2 sec"), 2000);
After 2 seconds → moves to callback queue.

▶ 4. Microtask Queue
Faster queue (priority queue) for:

Promises
Async/Await

These tasks execute before callback queue.

▶ 5. Event Loop
The event loop keeps checking:
Is the call stack empty?\
→ Yes: Move next task from microtask or callback queue and run it

Event Loop Cycle
Stack → Web APIs → Task Queue → Event Loop → Back to Stack
Simple Example


console.log("Start");
setTimeout(() => {
console.log("Timeout Done");
}, 2000);
console.log("End");

Output
Start\
End\
Timeout Done


SetTimeout does not block the code, thanks to the event loop.
