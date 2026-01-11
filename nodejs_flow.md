TOP level code : 

1. Timers        -> setTimeout(), setInterval
2. I/O Callbacks -> network, file errors
3. Idle/Prepare  -> internal
4. Poll          -> fetch new I/O events
5. Check         -> setImmediate()
6. Close         -> cleanup events




# ⚙️ Node.js Working Architecture (Event Loop + Libuv)

---

## 📌 What is Node.js?

**Node.js** is a JavaScript runtime built on:
- **V8 Engine** (executes JS)
- **libuv** (handles async operations & event loop)

Node.js uses a **single-threaded event loop** with a **thread pool** for heavy tasks.

---

## 🧠 Core Components

- **Call Stack**
- **Node APIs**
- **libuv**
- **Event Loop**
- **Thread Pool**
- **Callback Queue**

---

## 🖼️ Node.js Architecture Diagram (ASCII)





                 ┌────────────────────┐
                 │    Client Request  │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │   Node.js Runtime   │
                 │────────────────────│
                 │   V8 JS Engine      │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │     Call Stack      │
                 │────────────────────│
                 │ main()              │
                 │ function calls      │
                 └─────────┬──────────┘
                           │
      ┌────────────────────┼────────────────────┐
      │                    │                    │
      ▼                    ▼                    ▼



┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ Node APIs │ │ libuv │ │ Thread Pool │
│──────────────────│ │──────────────────│ │──────────────────│
│ fs │ │ Event Loop │ │ File I/O │
│ http │ │ Timers │ │ Crypto │
│ crypto │ │ I/O callbacks │ │ DNS │
└─────────┬────────┘ └─────────┬────────┘ └─────────┬────────┘
│ │ │
└──────────────┬──────┴──────┬──────────────┘
▼ ▼
┌────────────────────┐
│ Callback Queues │
│────────────────────│
│ Timer Queue │
│ I/O Queue │
│ Check Queue │
│ Close Callbacks │
└─────────┬──────────┘
│
▼
┌────────────────────┐
│ Event Loop │
│────────────────────│
│ Phases Execution │
└─────────┬──────────┘
│
▼
┌────────────────────┐
│ Call Stack │
└────────────────────┘

┌────────────────────────────┐
│ Timers Phase │ → setTimeout, setInterval
├────────────────────────────┤
│ Pending Callbacks │ → system callbacks
├────────────────────────────┤
│ Idle, Prepare │
├────────────────────────────┤
│ Poll Phase │ → I/O callbacks
├────────────────────────────┤
│ Check Phase │ → setImmediate
├────────────────────────────┤
│ Close Callbacks │ → socket.close()
└────────────────────────────┘




📌 **Microtasks (Promises)** execute **after every phase**.

---

## 🧪 Example Code Flow

```js
const fs = require("fs");

setTimeout(() => console.log("Timer"), 0);
setImmediate(() => console.log("Immediate"));

fs.readFile(__filename, () => {
  console.log("File Read");
});

Promise.resolve().then(() => console.log("Promise"));
