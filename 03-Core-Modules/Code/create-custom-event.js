// events-practical.js
// Practical examples of Events Module & EventEmitter
// Run this file with: node events-practical.js

const EventEmitter = require('events');

// Create a new EventEmitter instance
const emitter = new EventEmitter();

// Example 1: Basic event
emitter.on('greet', () => {
    console.log('Hello! Someone triggered the greet event!');
});

console.log('--- Example 1: Basic Event ---');
emitter.emit('greet');
emitter.emit('greet'); // Can emit multiple times

// Example 2: Event with arguments (passing data)
emitter.on('login', (username, age) => {
    console.log(`${username} (age ${age}) has just logged in!`);
});

console.log('\n--- Example 2: Event with Data ---');
emitter.emit('login', 'Alice', 25);
emitter.emit('login', 'Bob', 30);

// Example 3: Multiple listeners for same event
emitter.on('order', () => console.log('Order received → Sending confirmation email'));
emitter.on('order', () => console.log('Order received → Updating database'));
emitter.on('order', () => console.log('Order received → Preparing shipment'));

console.log('\n--- Example 3: Multiple Listeners ---');
emitter.emit('order');

// Example 4: Removing a listener
const goodbyeHandler = () => console.log('User logged out – Goodbye!');

emitter.on('logout', goodbyeHandler);
console.log('\n--- Example 4: Before removing listener ---');
emitter.emit('logout'); // Will print

emitter.removeListener('logout', goodbyeHandler);
console.log('--- After removing listener ---');
emitter.emit('logout'); // Nothing happens

// Example 5: .once() – listen only one time
emitter.once('welcome', () => {
    console.log('This welcome message appears only ONCE!');
});

console.log('\n--- Example 5: .once() ---');
emitter.emit('welcome');
emitter.emit('welcome'); // Second time → no output

// Example 6: Real-world style – Custom event emitter class
class MyServer extends EventEmitter {
    start() {
        console.log('Server starting...');
        this.emit('started');
    }
}

const server = new MyServer();
server.on('started', () => {
    console.log('Server is now running on port 3000!');
});

console.log('\n--- Example 6: Custom EventEmitter ---');
server.start();