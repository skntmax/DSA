# Executing Tasks in Parallel on Multiple CPU Cores (Java)

---

## 1️⃣ What Does “Parallel on Multiple Cores” Mean?

Running tasks **truly at the same time** using multiple CPU cores.

If your machine has:
- 4 cores → up to 4 tasks can run simultaneously
- 8 cores → up to 8 tasks can run simultaneously

⚠ This is different from simple multithreading (which may time-slice on one core).

---

# 2️⃣ Best Way: Use ExecutorService (Fixed Thread Pool)

Java automatically maps threads to CPU cores using OS scheduling.

---

## ✅ Example: Run Tasks in Parallel

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ParallelExample {

    public static void main(String[] args) {

        int cores = Runtime.getRuntime().availableProcessors();
        System.out.println("Available cores: " + cores);

        ExecutorService executor =
                Executors.newFixedThreadPool(cores);

        for (int i = 1; i <= 8; i++) {
            int taskNumber = i;

            executor.execute(() -> {
                System.out.println(
                        Thread.currentThread().getName() +
                        " executing task " + taskNumber
                );

                // Simulate heavy work
                long sum = 0;
                for (long j = 0; j < 1_000_000_000L; j++) {
                    sum += j;
                }

                System.out.println("Task " + taskNumber + " completed");
            });
        }

        executor.shutdown();
    }
}


Why This Uses Multiple Cores?

    Thread pool size = number of CPU cores
    
    OS schedules threads across cores
    
    CPU-bound tasks run truly in parallel



## Best Modern Way: ForkJoinPool (For CPU-Intensive Tasks)

Used for divide-and-conquer algorithms.
Example: Parallel Sum Using ForkJoinPool