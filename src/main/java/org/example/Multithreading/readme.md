# Thread in Java – Complete Notes

---

## 1️⃣ What is a Thread in Java?

A **Thread** is the smallest unit of execution within a program.

It allows multiple tasks to run concurrently inside a single process.

> Thread enables multitasking and parallel execution.

---

## 2️⃣ Why Do We Need Threads?

- Perform background tasks
- Improve performance
- Handle multiple users (server apps)
- Execute asynchronous operations
- Better CPU utilization

---

## 3️⃣ Ways to Create a Thread in Java

### 1. Extending `Thread` Class

```java
class MyThread extends Thread {

    @Override
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // creates new thread
    }
}



# mplementing Runnable Interface (Recommended)

class MyRunnable implements Runnable {

    @Override
    public void run() {
        System.out.println("Runnable thread running...");
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}


✔ Preferred approach
✔ Supports better design (interface-based)


#. Using Lambda Expression (Modern Way) 

public class Example {
    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            System.out.println("Thread using lambda");
        });

        t1.start();
    }
}


4️⃣ Thread Lifecycle

A thread goes through the following states:

New – Created but not started

Runnable – Ready to run

Running – Currently executing

Blocked / Waiting – Waiting for resource

Terminated – Finished execution



# Important Thread Methods

Method	Description
start()	Starts new thread
run()	Contains logic
sleep(ms)	Pauses execution
join()	Waits for thread to finish
isAlive()	Checks if thread is active
setPriority()	Sets thread priority
getName()	Gets thread name


#Example: Multiple Threads 

public class MultiThreadExample {

    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {
            for(int i=1; i<=5; i++) {
                System.out.println("Thread 1: " + i);
            }
        });

        Thread t2 = new Thread(() -> {
            for(int i=1; i<=5; i++) {
                System.out.println("Thread 2: " + i);
            }
        });

        t1.start();
        t2.start();
    }
}

Output order may vary because threads execute independently.


# Thread vs Process
| Thread                   | Process                  |
| ------------------------ | ------------------------ |
| Lightweight              | Heavyweight              |
| Shares memory            | Separate memory          |
| Faster context switching | Slower context switching |
| Part of process          | Independent program      |


# What is Multithreading?
Multithreading is the execution of multiple threads simultaneously within a single program.

Benefits:

    Improved responsiveness
    
    Efficient CPU usage
    
    Parallel task execution


# Thread Priority
Thread.MIN_PRIORITY  // 1
Thread.NORM_PRIORITY // 5 (default)
Thread.MAX_PRIORITY  // 10


# What is join()?
Thread t1 = new Thread(() -> {
    System.out.println("Task done");
});

t1.start();
t1.join();  // main thread waits for t1


# What is sleep()? 
sleep() pauses the execution of the current thread for a given time.
Thread.sleep(1000); // pauses for 1 second


# What is Race Condition?

A race condition occurs when multiple threads modify shared data simultaneously, causing inconsistent results.


# What is Deadlock? 
Deadlock occurs when two or more threads wait for each other indefinitely.

# What is Thread Pool?
A Thread Pool reuses a fixed number of threads to execute tasks.

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {

    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(3);

        for(int i = 1; i <= 5; i++) {
            int task = i;
            executor.execute(() -> {
                System.out.println("Executing task " + task);
            });
        }

        executor.shutdown();
    }
}


# Executor Framework
Modern way to manage threads using :

    Executor
    
    ExecutorService
    
    ScheduledExecutorService
    
    Better than manually creating threads.


# Callable vs Runnable
| Runnable             | Callable                    |
| -------------------- | --------------------------- |
| No return value      | Returns value               |
| No checked exception | Can throw checked exception |


import java.util.concurrent.*;

public class CallableExample {

    public static void main(String[] args) throws Exception {

        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<Integer> task = () -> 10;

        Future<Integer> result = executor.submit(task);

        System.out.println(result.get());

        executor.shutdown();
}


# Interview Definition
A thread in Java is a lightweight unit of execution that allows concurrent processing within a program, enabling better performance and resource utilization.




# Custom Thread Pool in Java 

## 1️⃣ What is a Custom Thread Pool?

A **Custom Thread Pool** is a manually implemented pool of worker threads  
that execute submitted tasks from a shared task queue.

Instead of using Java's built-in `ExecutorService`,  
you create and manage:

- A fixed number of worker threads
- A task queue
- Task submission logic
- Shutdown handling

---

## 2️⃣ Why Create a Custom Thread Pool?

- To understand how thread pools work internally
- To implement custom scheduling logic
- To control thread lifecycle manually
- For learning multithreading deeply

⚠ In real production code, prefer `ExecutorService`.

---

## 3️⃣ Basic Working Idea

1. Create a **BlockingQueue** to store tasks
2. Create multiple worker threads
3. Workers continuously:
   - Take tasks from queue
   - Execute them
4. When pool shuts down → stop workers

---

## 4️⃣ Simple Custom Thread Pool Example

---

## Step 1: Create ThreadPool Class

```java
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

class CustomThreadPool {

    private final BlockingQueue<Runnable> taskQueue;
    private final WorkerThread[] workers;
    private volatile boolean isShutdown = false;

    public CustomThreadPool(int numberOfThreads) {
        taskQueue = new LinkedBlockingQueue<>();
        workers = new WorkerThread[numberOfThreads];

        for (int i = 0; i < numberOfThreads; i++) {
            workers[i] = new WorkerThread();
            workers[i].start();
        }
    }

    public void submit(Runnable task) {
        if (!isShutdown) {
            taskQueue.offer(task);
        }
    }

    public void shutdown() {
        isShutdown = true;
        for (WorkerThread worker : workers) {
            worker.interrupt();
        }
    }

    private class WorkerThread extends Thread {
        public void run() {
            while (!isShutdown || !taskQueue.isEmpty()) {
                try {
                    Runnable task = taskQueue.take();
                    task.run();
                } catch (InterruptedException e) {
                    break;
                }
            }
        }
    }
}