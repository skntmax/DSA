package org.example.Multithreading.parallel;

import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ForkJoinPool;

class SumTask extends RecursiveTask<Long> {

    private final long start;
    private final long end;
    private static final long THRESHOLD = 10_000;

    public SumTask(long start, long end) {
        this.start = start;
        this.end = end;
    }

    protected Long compute() {

        if (end - start <= THRESHOLD) {
            long sum = 0;
            for (long i = start; i <= end; i++) {
                sum += i;
            }
            return sum;
        }

        long mid = (start + end) / 2;

        SumTask left = new SumTask(start, mid);
        SumTask right = new SumTask(mid + 1, end);

        left.fork();
        long rightResult = right.compute();
        long leftResult = left.join();

        return leftResult + rightResult;
    }
}

public class ForkJoinExample {

    public static void main(String[] args) {

        ForkJoinPool pool = new ForkJoinPool();

        SumTask task = new SumTask(1, 1_000_000);

        long result = pool.invoke(task);

        System.out.println("Sum = " + result);
    }
}
