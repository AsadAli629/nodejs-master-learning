# Events Module in Node.js – Theory & Explanation

## What is the Events Module?
The **Events** module is a core part of Node.js that enables **event-driven programming**.  
It allows your code to respond to things that "happen" (events) instead of constantly checking for them.

Node.js is built on the idea:  
**"Don't wait for things — get notified when they happen."**

This makes Node.js **non-blocking** and very fast.

## Real-Life Analogy
Think of a restaurant:
- You place an order → an event is created.
- You don't keep asking "Is my food ready?" every second.
- Instead, the waiter calls you when food is ready → you **listen** for the event.
- When the event happens, you react (eat!).

In Node.js:
- Something happens → an **event is emitted**
- You have code ready to run → a **listener** (callback function)

## Core Concept: EventEmitter
The main tool is the **`EventEmitter`** class.

You can:
- Create your own events
- Listen for events (`.on()`)
- Trigger events (`.emit()`)
- Pass data with events
- Have multiple listeners for the same event

## Why Events Are Important in Node.js
Almost everything in Node.js uses events:
- HTTP servers → `'request'` event
- File reading → `'data'`, `'end'`, `'error'` events
- Timers → `'timeout'` event
- Streams → many events
- Real-time apps (chat, live updates)

Events make Node.js **asynchronous** and **efficient**.

## Key Methods
- `.on(eventName, listener)` → Register a listener
- `.emit(eventName, ...args)` → Trigger an event
- `.removeListener(eventName, listener)` → Stop listening
- `.once(eventName, listener)` → Listen only one time

## Summary
The Events module + EventEmitter lets you build reactive, fast, and scalable applications by responding to events instead of blocking the program.