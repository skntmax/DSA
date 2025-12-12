## 2. Asynchronous JavaScript (Very Important)

**Difference between:**
- `setTimeout`
- `setImmediate`
- `process.nextTick`
- `Promises`
- `async/await`

**Key Topics:**
- Why are Promises executed before `setTimeout(0)`?
- Write a custom Promise implementation (polyfill)
- What is `Promise.allSettled` vs `Promise.any` vs `Promise.race`?
- How do you limit concurrent async calls?
- What are cancelable Promises / `AbortController`?
- Implement retry mechanism with exponential backoff
- How does `async/await` work internally?
- Can you deadlock JavaScript? If yes, how?

---

## 3. Closures, Scope & Memory

- Explain closures with a memory diagram
- What are memory leaks caused by closures and how to prevent them?
- Difference between `var`, `let`, `const` (execution/context level)
- What happens during the **creation phase** vs **execution phase**?
- What is **Lexical Environment** & **Scope Chain**?
- How do JS engines optimize closures?

---

## 4. Advanced Prototypes & OOP

- Difference between `__proto__` and `prototype`
- How does JS resolve property lookups in the prototype chain?
- Implement inheritance without using `class`
- What is **Shadowing** in Prototypes?
- Explain **Mixin pattern** in JS  
- Difference between **Class-based vs Prototypal-based** inheritance
- What is `Object.create(null)` used for?

---

## 5. Advanced Design Patterns in JS

- Module Pattern  
- Factory Pattern  
- Singleton Pattern (Lazy + Eager)  
- Observer Pattern  
- Pub-Sub Pattern  
- Middleware Pattern (Express-style)  
- Dependency Injection  
- Circuit Breaker Pattern  
- Saga Pattern in JS  
- CQRS in Node.js  

---

## 6. Functional Programming

- Implement currying & partial application
- Write custom `compose()` & `pipe()`
- Difference between pure vs impure functions
- What is referential transparency?
- What is immutability & how to enforce it?
- Difference between `map`, `reduce`, `forEach`
- Implement memoization from scratch

---

## 7. Performance Optimization

- Debounce vs Throttle (internals)
- Tree Shaking — how does it work?
- Code splitting strategies in Webpack/Vite
- How to reduce repaints and reflows?
- Lazy loading vs Preloading vs Prefetching
- Virtual DOM vs Real DOM diffing
- How does React use Fiber architecture?
- JS minification & compression techniques
- Web Workers / Service Workers

---

## 8. Advanced Outputs (Tricky Ones)

```js
console.log(typeof null)
console.log([] + [])
console.log({} + {})

for (var i=0;i<3;i++){
  setTimeout(()=>console.log(i),0)
}

Promise.resolve().then(()=>console.log(1))
setTimeout(()=>console.log(2))
process.nextTick(()=>console.log(3))

console.log(0.1+0.2 === 0.3)
