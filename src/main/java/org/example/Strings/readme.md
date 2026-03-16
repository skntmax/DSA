Good. This is a very common interview question, and most people answer it superficially. Let’s do it properly.

    We’re comparing:
    
    String
    
    StringBuilder
    
    StringBuffer
    
    All are in Java (java.lang package).

✅ When to use:

When value won’t change

For constants

For safe multi-thread usage

## If used inside loops:

    for(int i = 0; i < 1000; i++) {
    s += i;
    }

This creates 1000 objects ❌ (very slow)


2️⃣ StringBuilder
🔹 Nature:

    Mutable
    
    Not thread-safe
    
    Fast

    chaining support 

StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
It modifies same object — no new object created.

🔹 Performance:

Very fast in single-threaded environments.

Used internally by compiler when you do:

    String s = "A" + "B" + "C";
    new StringBuilder().append("A").append("B").append("C").toString();


✅ When to use:

    String manipulation
    
    Loops
    
    Performance critical code
    
    Single-threaded apps


3️⃣ StringBuffer
🔹 Nature:

    Mutable
    
    Thread-safe
    
    Synchronized methods

    support chaining 

StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");

🔹 Why slower?

All major methods are synchronized:
public synchronized StringBuffer append(String str)


✅ When to use:

    Multi-threaded environment
    
    Shared mutable string


⚖️ Side-by-Side Comparison

| Feature          | String              | StringBuilder | StringBuffer        |
| ---------------- | ------------------- | ------------- | ------------------- |
| Mutable          | ❌ No                | ✅ Yes         | ✅ Yes               |
| Thread-safe      | ✅ Yes (immutable)   | ❌ No          | ✅ Yes               |
| Performance      | Slow in loops       | Fastest       | Slower than Builder |
| Memory efficient | ❌ If modified often | ✅ Yes         | ✅ Yes               |
| Introduced       | Java 1.0            | Java 1.5      | Java 1.0            |
