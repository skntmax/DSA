# Workers in Node.js

Node.js is **single-threaded by default**, but it provides worker-based multithreading through:

1. **Worker Threads** → True multithreading inside the same process
2. **Child Processes** → Separate process & memory
3. **Cluster Module** → Multi-core scaling for HTTP servers

---

## 1. Worker Threads (node:worker_threads)

Worker Threads run JavaScript in **parallel on multiple CPU cores** within the **same Node.js process**, but with **separate V8 instances and event loops**.

Best for:
- CPU-intensive tasks
- Heavy calculations
- Image / video processing
- Encryption / machine learning
- Blocking tasks

### Basic Example

**main.js**
```js
const { Worker } = require('worker_threads')

console.log('Main thread process:', process.pid)

const worker = new Worker('./worker.js', {
  workerData: { number: 40 }
})

worker.on('message', (result) => {
  console.log('Result from worker:', result)
})

worker.on('error', (error) => {
  console.error('Worker error:', error)
})

worker.on('exit', (code) => {
  console.log('Worker exited with code', code)
})
