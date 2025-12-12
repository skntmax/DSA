Benefits of Using Cluster in Node.js

    Better CPU Utilization
    Uses all available CPU cores instead of just one.
    Each worker process handles requests independently.
    Higher Throughput
    Multiple workers can handle multiple requests simultaneously.
    Reduces request latency under high load.
    Fault Tolerance
    If a worker crashes, the master process can automatically restart it.
    Prevents the whole server from going down due to a single crash.
    Easy to Implement
    Node.js provides a built-in cluster module.
    No need for external load balancers for simple multi-core scaling.
    Independent Event Loops
    Each worker has its own event loop → CPU-bound tasks in one worker don’t block others.
    Horizontal Scaling Foundation
    Works well with process managers like PM2 or container orchestration for production.











Disadvantages / Limitations

    Memory Overhead
    Each worker is a separate Node.js process → more memory usage.
    No Shared Memory Between Workers
    Workers cannot directly share variables.
    Communication between workers requires IPC (Inter-Process Communication).
    Complexity
    Need to handle logging, session management, or sockets carefully.
    Sticky Sessions Required for WebSockets
    If you use WebSockets, you need sticky sessions so the client stays connected to the same worker.
    Master Process Overhead
    Master process manages workers but doesn’t serve requests itself.
    Adds a slight management overhead (usually negligible).
    File / Resource Initialization Caution
    Any shared file/folder setup must be done carefully to avoid multiple workers interfering.



Explanation:

    Node.js is single-threaded — it has one main event loop per process.
    Even if your machine has 4, 8, or more CPU cores, a single Node.js process will only use one core.
    This is why CPU-bound tasks or high traffic can become bottlenecks.
    How to use multiple cores:
    Cluster Module → spawns a worker per CPU core.
    PM2 in cluster mode → automatically forks multiple Node processes.
    💡 Example:
    If your machine has 8 cores and you run a standard node server.js, only 1 core is used.
    With cluster or PM2, you can utilize all 8 cores simultaneously.