package org.example.Multithreading;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class CustomThreadPool2 {

    private final BlockingQueue<Runnable> taskQueue;
    private final WorkerThread[] workers;
    private volatile boolean isShutdown = false;

    public CustomThreadPool2(int numberOfThreads) {
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
