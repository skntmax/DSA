## Can we override static methods? Why/why not?

### 1. Static methods belong to the **class**, not the object

* Static methods are resolved using the **reference type (class)**, not the actual object.
* Overriding requires **dynamic binding (runtime decision)**, but static methods use **static binding (compile-time decision)**.

👉 So, there is no runtime polymorphism for static methods.

### 2. Method overriding needs runtime polymorphism

Overriding works like this:

Parent obj = new Child();
obj.method(); // runtime decides

But static methods:

Parent obj = new Child();
obj.staticMethod(); // compile-time decides (Parent)

## 🔹 What actually happens? (Method Hiding)

class Parent {
static void show() {
System.out.println("Parent static method");
}
}

class Child extends Parent {
static void show() {
System.out.println("Child static method");
}
}

public class Main {
public static void main(String[] args) {
Parent obj = new Child();
obj.show(); // Output?
}
}

## 🔥 Key Differences


| Feature      | Static Method  | Instance Method |
| ------------ | -------------- | --------------- |
| Binding      | Compile-time   | Runtime         |
| Overriding   | ❌ Not allowed | ✅ Allowed      |
| Polymorphism | ❌ No          | ✅ Yes          |
| Resolution   | Class-based    | Object-based    |

## What happens when you run a Java program? (JVM flow)

.java file → Compiler → .class (bytecode) → JVM → Output

# 🔹 Step-by-Step JVM Flow

## 1. Writing Code (.java file)

You write Java source code:

<pre class="overflow-visible! px-0!" data-start="346" data-end="466"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">class</span><span> </span><span class="ͼe">Main</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">main</span><span>(</span><span class="ͼe">String</span><span>[] </span><span class="ͼe">args</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Hello World"</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## 2. Compilation (javac)

* Command: `javac Main.java`
* The Java compiler converts code into **bytecode**

👉 Output:

<pre class="overflow-visible! px-0!" data-start="592" data-end="610"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Main.class</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔️ Bytecode is **platform-independent**

---

## 3. Class Loader Subsystem

When you run:

<pre class="overflow-visible! px-0!" data-start="702" data-end="719"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>java Main</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 JVM starts and loads the `.class` file using **ClassLoader**

### ClassLoader stages:

* **Loading** → Loads `.class` file into memory
* **Linking**
  * Verification (checks bytecode safety)
  * Preparation (allocates memory)
  * Resolution (resolves references)
* **Initialization** → Executes static blocks & variables

---

## 4. Runtime Data Areas (Memory Allocation)

JVM creates different memory areas:

* **Heap** → Objects stored here
* **Stack** → Method calls, local variables
* **Method Area** → Class metadata, static variables
* **PC Register** → Tracks current instruction
* **Native Method Stack** → For native code (C/C++)

---

## 5. Execution Engine

This is where actual execution happens.

### It has:

### ✔️ Interpreter

* Executes bytecode line by line
* Slower but quick to start

### ✔️ JIT Compiler (Just-In-Time)

* Converts bytecode into **native machine code**
* Improves performance

👉 Frequently used code becomes faster

---

## 6. Garbage Collector (GC)

* Automatically removes unused objects from memory (Heap)
* Prevents memory leaks

---

## 🔥 Final Output

<pre class="overflow-visible! px-0!" data-start="1828" data-end="1847"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Hello World</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

🔥 Heap vs Stack (Quick Overview)


| Feature    | Stack Memory                   | Heap Memory                  |
| ---------- | ------------------------------ | ---------------------------- |
| Usage      | Method calls & local variables | Objects & instance variables |
| Allocation | Automatic                      | Manual (via`new`)            |
| Access     | LIFO (Last In First Out)       | Global access via references |
| Speed      | Faster                         | Slower                       |
| Size       | Smaller                        | Larger                       |
| Thread     | Thread-specific                | Shared across threads        |
| GC         | Not required                   | Managed by Garbage Collector |

# Visual Understanding

## Stack (Method Calls & Variables)

![https://cs-prod-assets-bucket.s3.ap-south-1.amazonaws.com/Stack_Heap_Diagram_Excel_Draw_0e59d37aa9.png](https://cs-prod-assets-bucket.s3.ap-south-1.amazonaws.com/Stack_Heap_Diagram_Excel_Draw_0e59d37aa9.png)

![https://www.artima.com/insidejvm/ed2/images/fig5-11.gif](https://www.artima.com/insidejvm/ed2/images/fig5-11.gif)

![https://homework.study.com/cimages/multimages/16/stack_push_operation2294814496370743228.jpg](https://homework.study.com/cimages/multimages/16/stack_push_operation2294814496370743228.jpg)

## Heap (Objects & Dynamic Memory)

![https://miro.medium.com/1%2ATRrCTXjuOzGE17rKqLXP4Q.png](https://miro.medium.com/1%2ATRrCTXjuOzGE17rKqLXP4Q.png)

![https://i.imgur.com/8uh8SPy.png](https://images.openai.com/static-rsc-1/lMX09VhfpSy-zqOtHCM0-lJzrfYPn-0WOnyQxrqmjGsI_3ZmlUfQGfHVG5CfjiI1wonSGXDB85ntUDxt6rjIowYPvcS5_73zK2jSaDiL9J1E3Myndeecltfoua3TL22lgxEh0DFtWzwSciQXBtZ-PQ)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AiFsZC_GQ229Sz8jPveAAUg.png](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AiFsZC_GQ229Sz8jPveAAUg.png)

## example

`

class Demo {
int x = 10;
}

public class Main {
public static void main(String[] args) {
Demo d = new Demo();
}
}

### 👉 Memory Breakdown:

* `d` → stored in **Stack**
* `new Demo()` object → stored in **Heap**
* `x` → inside object (Heap)

## What is **Garbage Collection**?

# Why Garbage Collection is Needed

* Prevents **memory leaks**
* Avoids **manual memory management** (unlike C/C++)
* Improves application stability
* Frees Heap memory for new objects

# 🔹 How GC Works (Concept)

### ✔️ Key Idea: Reachability

An object becomes eligible for GC when it is **no longer reachable** from any active reference.

# 🔹 How GC Works (Concept)

### ✔️ Key Idea: Reachability

An object becomes eligible for GC when it is **no longer reachable** from any active reference.

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="666" data-end="844"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">class</span><span> </span><span class="ͼe">Test</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">main</span><span>(</span><span class="ͼe">String</span><span>[] </span><span class="ͼe">args</span><span>) {</span><br/><span>        </span><span class="ͼe">Test</span><span> </span><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Test</span><span>(); </span><span class="ͼ6">// object created</span><br/><span>        </span><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">null</span><span>; </span><span class="ͼ6">// now eligible for GC</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Once `obj = null`, the object has **no reference → eligible for GC**

---

# 🔹 When Object Becomes Eligible for GC

1. **Null reference**

<pre class="overflow-visible! px-0!" data-start="988" data-end="1020"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">null</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

2. **Reassigning reference**

<pre class="overflow-visible! px-0!" data-start="1051" data-end="1132"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">obj1</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Test</span><span>();</span><br/><span class="ͼe">obj1</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Test</span><span>(); </span><span class="ͼ6">// old object eligible</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

3. **Out of scope**

<pre class="overflow-visible! px-0!" data-start="1154" data-end="1249"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">void</span><span> </span><span class="ͼe">method</span><span>() {</span><br/><span>    </span><span class="ͼe">Test</span><span> </span><span class="ͼe">t</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Test</span><span>();</span><br/><span>} </span><span class="ͼ6">// after method ends → eligible</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

4. **Anonymous objects**

<pre class="overflow-visible! px-0!" data-start="1276" data-end="1335"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">new</span><span> </span><span class="ͼe">Test</span><span>(); </span><span class="ͼ6">// no reference → eligible</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

# 🔹 How JVM Performs GC

* Runs in the background (daemon thread)
* Uses algorithms like:

  * **Mark** → identifies reachable objects
  * **Sweep** → removes unused objects
  * **Compact** → rearranges memory

  # Can we force Garbage Collection?


  <pre class="overflow-visible! px-0!" data-start="1603" data-end="1636"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">gc</span><span>();</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

  But:

  * It is **just a request**, not guaranteed
  * JVM decides when to actually run GC

# 🔥 Visual Understanding

## Garbage Collection Process

![https://i.sstatic.net/W5pX6.gif](https://images.openai.com/static-rsc-1/StWvet8ZArAn8kuQuXA8ucxekZ6g2qW8HzRAF7qIinDyplJTIDQ6Zuz8TyJlkzBxmsKO-yL2Cdy4dgNi3rZi2w1XgMT9j0mBQVy8rLujbX-4mkDI2noYzByXag4FD2lc_buUVLPr9_rxu82RsymveIPp8nYPL096w0EFDBnCxd1Qs03NEBuSbpOYJduISPpR)

![https://help.sap.com/doc/ff5424946c55101492078c9de57bbafb/7.02.26/en-US/loio44a438452ba94658a8e21f998d248fa4_LowRes.png](https://help.sap.com/doc/ff5424946c55101492078c9de57bbafb/7.02.26/en-US/loio44a438452ba94658a8e21f998d248fa4_LowRes.png)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AMtJQShUuu-MBEY7CFCT5MA.png](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AMtJQShUuu-MBEY7CFCT5MA.png)

# 🔥 Important Points for Interviews

✔️ GC works only on **Heap memory**
✔️ Only **unreachable objects** are collected
✔️ Cannot guarantee exact timing of GC
✔️ Makes Java **memory-safe language

A **memory leak in Java** happens when **objects that are no longer needed are still referenced**, so the **Garbage Collector (GC) cannot remove them**.

🔹 Simple Definition

👉 **Memory leak = unused objects staying in Heap because references still exist.**

# 🔥 Why It’s a Problem

* Heap memory keeps filling up
* Performance degrades
* Can lead to **OutOfMemoryError**
* Application may crash

# 🔹 How Memory Leak Happens (Core Idea)

👉 GC only removes **unreachable objects**
👉 If a reference still exists (even if not needed) → object stays in memory

## Example

import java.util.*;

public class LeakExample {
static List<String> list = new ArrayList<>();

public static void main(String[] args) {
while (true) {
list.add("Data " + new Date());
}
}
}

### ❌ Problem:

* List keeps growing
* Objects are still referenced → GC cannot clean
* Memory keeps increasing → crash

## Memory Leak vs Normal GC

![https://i.sstatic.net/f56p8.png](https://images.openai.com/static-rsc-1/_cCSZ_MMm6_zOO2lpxsOmntSrJNyf3rXyUlmN1uKGdRve4p_qDz4vX_U7jTqolfKDa_oqSPR7wJBdCT2uu5sVhue20kSFGBF5KMSN_3woYDaq34xjNLkvI0_0a5Uwf-m90mSffZotMWfo9ljLq1Oew)

![https://blog.mindorks.com/images/how-to-use-memory-heap-dumps-data-garbage-collector-working.png](https://blog.mindorks.com/images/how-to-use-memory-heap-dumps-data-garbage-collector-working.png)

![https://miro.medium.com/v2/resize%3Afit%3A1200/1%2Amt3-woLnTOy73WsiS54xQA.png](https://miro.medium.com/v2/resize%3Afit%3A1200/1%2Amt3-woLnTOy73WsiS54xQA.png)

# 🔹 How to Prevent Memory Leaks

# 🔹 How to Prevent Memory Leaks

##### Remove unused references

<pre class="overflow-visible! px-0!" data-start="1879" data-end="1911"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">null</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

####### Close resources (use try-with-resources)

<pre class="overflow-visible! px-0!" data-start="1957" data-end="2008"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">try</span><span> (</span><span class="ͼe">Connection</span><span> </span><span class="ͼe">con</span><span> </span><span class="ͼ8">=</span><span> ...) {</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔️ Use Weak References

#### <pre class="overflow-visible! px-0!" data-start="2033" data-end="2077"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">WeakHashMap</span><span><</span><span class="ͼe">Key</span><span>, </span><span class="ͼe">Value</span><span>></span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔️ Avoid unnecessary static variables

✔️ Use proper cache size limits

🔥 Key Interview Points

* Java has GC, **but memory leaks are still possible**
* Caused by **unintentional object retention**
* Happens only in **Heap memory**
* Leads to **OutOfMemoryError**

Explain **ClassLoader hierarchy**

## Difference: ArrayList vs LinkedList

The difference between **ArrayList vs LinkedList** is a classic Java interview topic—mainly about **data structure + performance trade-offs**.

# 🔥 Core Difference

👉 **ArrayList uses a dynamic array**
👉 **LinkedList uses a doubly linked list**

# 🔹 ArrayList (Dynamic Array)

![https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/__visualselection_2025_06_11T024545_446MVMPQ.jpeg?pr-true=](https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/__visualselection_2025_06_11T024545_446MVMPQ.jpeg?pr-true=)

![https://miro.medium.com/v2/resize%3Afit%3A1200/1%2AO_8Fh87YHCiT6WHBWOkOXg.png](https://miro.medium.com/v2/resize%3Afit%3A1200/1%2AO_8Fh87YHCiT6WHBWOkOXg.png)

![https://miro.medium.com/1%2A98eJEZTQYVznRIOW2ajE4A.png](https://miro.medium.com/1%2A98eJEZTQYVznRIOW2ajE4A.png)

### ✔️ Features:

* Stores elements in **contiguous memory**
* Fast **random access** using index
* Resizes automatically

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="473" data-end="559"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">List</span><span><</span><span class="ͼe">Integer</span><span>> </span><span class="ͼe">list</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">ArrayList</span><span><>();</span><br/><span class="ͼe">list</span><span class="ͼ8">.</span><span class="ͼe">add</span><span>(</span><span class="ͼb">10</span><span>);</span><br/><span class="ͼe">list</span><span class="ͼ8">.</span><span class="ͼe">get</span><span>(</span><span class="ͼb">0</span><span>); </span><span class="ͼ6">// fast</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

# LinkedList (Doubly Linked List)

![https://miro.medium.com/v2/da%3Atrue/resize%3Afit%3A1200/1%2AlCPgbrm9f7MQ75hvGV5p8Q.gif](https://miro.medium.com/v2/da%3Atrue/resize%3Afit%3A1200/1%2AlCPgbrm9f7MQ75hvGV5p8Q.gif)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A1gEMjHnYbfHSfjHp5jthhQ.png](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A1gEMjHnYbfHSfjHp5jthhQ.png)

![https://codingnomads.com/images/17508d9d-3e8a-4e83-dde7-5d20ead28500/public](https://codingnomads.com/images/17508d9d-3e8a-4e83-dde7-5d20ead28500/public)

### ✔️ Features:

* Each element is a **node (data + pointers)**
* Not stored contiguously
* Efficient insert/delete

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="779" data-end="845"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">List</span><span><</span><span class="ͼe">Integer</span><span>> </span><span class="ͼe">list</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">LinkedList</span><span><>();</span><br/><span class="ͼe">list</span><span class="ͼ8">.</span><span class="ͼe">add</span><span>(</span><span class="ͼb">10</span><span>);</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

🔥 Detailed Comparison


| Feature            | ArrayList              | LinkedList            |
| ------------------ | ---------------------- | --------------------- |
| Internal Structure | Dynamic Array          | Doubly Linked List    |
| Access (get)       | ✅ Fast (O(1))         | ❌ Slow (O(n))        |
| Insertion          | ❌ Slow (shift needed) | ✅ Fast               |
| Deletion           | ❌ Slow                | ✅ Fast               |
| Memory             | Less overhead          | More (extra pointers) |
| Cache Friendly     | Yes                    | No                    |
| Traversal          | Faster                 | Slower                |

🔹 Time Complexity


| Operation     | ArrayList | LinkedList |
| ------------- | --------- | ---------- |
| Access        | O(1)      | O(n)       |
| Insert End    | O(1)\*    | O(1)       |
| Insert Middle | O(n)      | O(1)\*     |
| Delete        | O(n)      | O(1)\*     |

# 🔥 Core Difference

👉 **HashMap → NOT thread-safe**
👉 **ConcurrentHashMap → Thread-safe (designed for multithreading)**

---

# 🔹 HashMap

![https://pandac.in/content-img/hashmap.png](https://pandac.in/content-img/hashmap.png)

![https://www.algolist.net/img/hash-table-chaining.png](https://www.algolist.net/img/hash-table-chaining.png)

![https://miro.medium.com/v2/resize%3Afit%3A1010/0%2AHH6UbQXLHkl8lySH.png](https://miro.medium.com/v2/resize%3Afit%3A1010/0%2AHH6UbQXLHkl8lySH.png)

**4**

### ✔️ Features:

* Not synchronized
* Allows **1 null key + multiple null values**
* Faster in **single-threaded** environments
* Can cause **data inconsistency** in multithreading

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="551" data-end="623"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Map</span><span><</span><span class="ͼe">Integer</span><span>, </span><span class="ͼe">String</span><span>> </span><span class="ͼe">map</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">HashMap</span><span><>();</span><br/><span class="ͼe">map</span><span class="ͼ8">.</span><span class="ͼe">put</span><span>(</span><span class="ͼb">1</span><span>, </span><span class="ͼc">"A"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 ConcurrentHashMap

![https://miro.medium.com/1%2AFIu_mVGOGHt18TAbnpL2lg.jpeg](https://miro.medium.com/1%2AFIu_mVGOGHt18TAbnpL2lg.jpeg)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AZo6Op0p831tmXMuTPIPuvA.jpeg](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AZo6Op0p831tmXMuTPIPuvA.jpeg)

![https://miro.medium.com/1%2AghBq9UglFBnWl_b4mcEyoA.png](https://miro.medium.com/1%2AghBq9UglFBnWl_b4mcEyoA.png)

**4**

### ✔️ Features:

* Thread-safe (no need for external synchronization)
* Does **not allow null key or null value**
* Uses **fine-grained locking / CAS**
* Better performance than `Hashtable` in concurrent scenarios

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="935" data-end="1017"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Map</span><span><</span><span class="ͼe">Integer</span><span>, </span><span class="ͼe">String</span><span>> </span><span class="ͼe">map</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">ConcurrentHashMap</span><span><>();</span><br/><span class="ͼe">map</span><span class="ͼ8">.</span><span class="ͼe">put</span><span>(</span><span class="ͼb">1</span><span>, </span><span class="ͼc">"A"</span><span>);</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

# 🔥 When to Use What?

### ✔️ Use ArrayList when:

* Frequent **read operations**
* Need **fast access by index**
* Less insert/delete in middle

---

### ✔️ Use LinkedList when:

* Frequent **insert/delete operations**
* No need for random access
* Working with queues/deques

## 🔥 Detailed Comparison


| Feature            | HashMap                | ConcurrentHashMap            |
| ------------------ | ---------------------- | ---------------------------- |
| Thread Safety      | ❌ No                  | ✅ Yes                       |
| Synchronization    | None                   | Internal (bucket-level)      |
| Performance        | Faster (single thread) | Optimized for multithreading |
| Null Keys          | ✅ 1 allowed           | ❌ Not allowed               |
| Null Values        | ✅ Allowed             | ❌ Not allowed               |
| Locking            | No locking             | Fine-grained locking         |
| Fail-Fast Iterator | Yes                    | Weakly consistent            |

# 🔹 Key Internal Concept

### ✔️ HashMap:

* Entire structure unsafe for concurrent access
* Multiple threads → race conditions

---

### ✔️ ConcurrentHashMap:

* Java 8+: uses **CAS (Compare-And-Swap) + synchronized blocks**
* Locks only **specific buckets**, not whole map

👉 This improves scalability

# 🔹 Key Internal Concept

### ✔️ HashMap:

* Entire structure unsafe for concurrent access
* Multiple threads → race conditions

---

### ✔️ ConcurrentHashMap:

* Java 8+: uses **CAS (Compare-And-Swap) + synchronized blocks**
* Locks only **specific buckets**, not whole map

👉 This improves scalability

---

# 🔥 Example Problem (Important)

<pre class="overflow-visible! px-0!" data-start="1826" data-end="1910"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Map</span><span><</span><span class="ͼe">Integer</span><span>, </span><span class="ͼe">String</span><span>> </span><span class="ͼe">map</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">HashMap</span><span><>();</span><br/><br/><span class="ͼ6">// Multiple threads writing</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

❌ May cause:

* Infinite loop during resize
* Data corruption

---

<pre class="overflow-visible! px-0!" data-start="1983" data-end="2048"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Map</span><span><</span><span class="ͼe">Integer</span><span>, </span><span class="ͼe">String</span><span>> </span><span class="ͼe">map</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">ConcurrentHashMap</span><span><>();</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✅ Safe:

* Multiple threads can read/write simultaneously

---

# 💡 When to Use What?

### ✔️ Use HashMap:

* Single-threaded apps
* No concurrency needed
* Maximum performance

---

### ✔️ Use ConcurrentHashMap:

* Multi-threaded apps
* High concurrency
* Thread-safe without blocking entire map

A **hash collision** happens when **two different keys produce the same hash value** and try to go into the **same bucket** in a hash-based structure like `HashMap`.

---

# 🔹 Simple Definition

👉 **Hash collision = multiple keys mapped to the same index (bucket).**

---

# 🔥 What Actually Happens in Java (HashMap)

## Step-by-step:

1. Key → `hashCode()` generated
2. Hash → converted to bucket index
3. If bucket is empty → insert directly
4. ❗ If bucket already has data → **collision occurs**

---

# 🔹 How Java Handles Collision

## 1. Before Java 8 → Linked List (Chaining)

![https://www.algolist.net/img/hash-table-chaining.png](https://www.algolist.net/img/hash-table-chaining.png)

![https://i.sstatic.net/TXJYs.png](https://images.openai.com/static-rsc-1/Hcq3JC-TCGFHGG13AhFw5KpPI5jX91Pu8yFcBoE7MsZI4QGxTGGZ5G-6rldvlGsMJXmqgRtZCF5f8T4jxWKKt7a9k-dXbeevVTTjXkk1GaVYy7xR_8R5COVuAFHHbDW2Mi2kRV8qTX_K416YbSy-MA)

![https://labuladong.online/images/algo/ds-basic/hash-collision-en.jpeg](https://labuladong.online/images/algo/ds-basic/hash-collision-en.jpeg)

**4**

* Elements stored as a **linked list** in the same bucket
* New node added to the list
* Search becomes **O(n)** in worst case

---

## 2. Java 8+ → Tree (Optimization)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AVv-mhn03QMIzVxEZkGpsew.png](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AVv-mhn03QMIzVxEZkGpsew.png)

![https://miro.medium.com/1%2AjPM0jwnyL_przj93M_u0bQ.png](https://miro.medium.com/1%2AjPM0jwnyL_przj93M_u0bQ.png)

![https://i.sstatic.net/clp27.jpg](https://images.openai.com/static-rsc-1/8IEdz4t-FbYFT3zBquQtOWjrlyau-ob61v_MiGB6vHZwL3eaXEu0pPMA08hNfek38bs-chtSy4pNX-aA323lgdfSeAEaTEs1T-4NYu5gK2eZKmixYYyVIm2sfrp76jtPClYkN7Tqt_dxuFarrE2e2A)

**4**

* If bucket size > **8**, it converts to a **Red-Black Tree**
* Improves performance

👉 Search becomes **O(log n)** instead of O(n)

---

# 🔹 Example

<pre class="overflow-visible! px-0!" data-start="1009" data-end="1129"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Map</span><span><</span><span class="ͼe">Integer</span><span>, </span><span class="ͼe">String</span><span>> </span><span class="ͼe">map</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">HashMap</span><span><>();</span><br/><br/><span class="ͼe">map</span><span class="ͼ8">.</span><span class="ͼe">put</span><span>(</span><span class="ͼb">1</span><span>, </span><span class="ͼc">"A"</span><span>);</span><br/><span class="ͼe">map</span><span class="ͼ8">.</span><span class="ͼe">put</span><span>(</span><span class="ͼb">17</span><span>, </span><span class="ͼc">"B"</span><span>); </span><span class="ͼ6">// suppose same bucket index</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 If both hash to same index:

* Stored in same bucket
* Handled via list/tree

---

# 🔥 Key Concepts

### ✔️ equals() matters

Even if hash is same:

<pre class="overflow-visible! px-0!" data-start="1283" data-end="1317"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">if</span><span> (</span><span class="ͼe">key1</span><span class="ͼ8">.</span><span class="ͼe">equals</span><span>(</span><span class="ͼe">key2</span><span>))</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

* If true → value is **replaced**
* If false → stored separately (collision case)

# 🔥 Performance Impact


| Scenario              | Time Complexity |
| --------------------- | --------------- |
| No collision          | O(1)            |
| With collision (List) | O(n)            |
| With tree (Java 8+)   | O(log n)        |

## 

## Java 8+ Features (Very Important for 4 yrs)

**Lambda Expressions** in Java (introduced in **Java 8**) are a way to write **anonymous functions**—i.e., functions without a name—mainly used to make code **shorter, cleaner, and more functional**.

---

# 🔹 Simple Definition

👉 **A lambda expression is a concise way to represent a function (method) that can be passed as an argument.**

---

# 🔥 Basic Syntax

<pre class="overflow-visible! px-0!" data-start="366" data-end="404"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>(</span><span class="ͼe">parameters</span><span>) -> </span><span class="ͼe">expression</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

OR

<pre class="overflow-visible! px-0!" data-start="410" data-end="468"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>(</span><span class="ͼe">parameters</span><span>) -> {</span><br/><span>    </span><span class="ͼ6">// multiple statements</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 Example (Without Lambda)

<pre class="overflow-visible! px-0!" data-start="506" data-end="659"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">Add</span><span> {</span><br/><span>    </span><span class="ͼe">int</span><span> </span><span class="ͼe">sum</span><span>(</span><span class="ͼe">int</span><span> </span><span class="ͼe">a</span><span>, </span><span class="ͼe">int</span><span> </span><span class="ͼe">b</span><span>);</span><br/><span>}</span><br/><br/><span class="ͼe">Add</span><span> </span><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Add</span><span>() {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">int</span><span> </span><span class="ͼe">sum</span><span>(</span><span class="ͼe">int</span><span> </span><span class="ͼe">a</span><span>, </span><span class="ͼe">int</span><span> </span><span class="ͼe">b</span><span>) {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">a</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">b</span><span>;</span><br/><span>    }</span><br/><span>};</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 Same Using Lambda

<pre class="overflow-visible! px-0!" data-start="690" data-end="736"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Add</span><span> </span><span class="ͼe">obj</span><span> </span><span class="ͼ8">=</span><span> (</span><span class="ͼe">a</span><span>, </span><span class="ͼe">b</span><span>) -> </span><span class="ͼe">a</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">b</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Much shorter and cleaner

---

# 🔥 Where Lambdas Are Used

## ✔️ Functional Interfaces

A lambda works only with **Functional Interfaces**
(interfaces with exactly **one abstract method**)

Examples:

* `Runnable`
* `Callable`
* `Comparator`
* `Consumer`, `Supplier`, `Predicate`

---

## ✔️ Example with Runnable

<pre class="overflow-visible! px-0!" data-start="1057" data-end="1152"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">Runnable</span><span> </span><span class="ͼe">r</span><span> </span><span class="ͼ8">=</span><span> () -> </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Running..."</span><span>);</span><br/><span class="ͼ8">new</span><span> </span><span class="ͼe">Thread</span><span>(</span><span class="ͼe">r</span><span>)</span><span class="ͼ8">.</span><span class="ͼe">start</span><span>();</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## ✔️ Example with Collections

<pre class="overflow-visible! px-0!" data-start="1191" data-end="1298"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">List</span><span><</span><span class="ͼe">Integer</span><span>> </span><span class="ͼe">list</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">Arrays</span><span class="ͼ8">.</span><span class="ͼe">asList</span><span>(</span><span class="ͼb">1</span><span>, </span><span class="ͼb">2</span><span>, </span><span class="ͼb">3</span><span>);</span><br/><br/><span class="ͼe">list</span><span class="ͼ8">.</span><span class="ͼe">forEach</span><span>(</span><span class="ͼe">n</span><span> -> </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼe">n</span><span>));</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔥 Key Features

* Removes **boilerplate code**
* Enables **functional programming**
* Improves readability
* Works with **Streams API**
* Supports passing behavior as data

---

# 🔹 Types of Lambda Expressions

1. **No parameter**

<pre class="overflow-visible! px-0!" data-start="1540" data-end="1593"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>() -> </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Hello"</span><span>)</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

2. **Single parameter**

<pre class="overflow-visible! px-0!" data-start="1619" data-end="1649"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">x</span><span> -> </span><span class="ͼe">x</span><span> </span><span class="ͼ8">*</span><span> </span><span class="ͼe">x</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

3. **Multiple parameters**

<pre class="overflow-visible! px-0!" data-start="1678" data-end="1713"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>(</span><span class="ͼe">a</span><span>, </span><span class="ͼe">b</span><span>) -> </span><span class="ͼe">a</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">b</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

4. **Block body**

<pre class="overflow-visible! px-0!" data-start="1733" data-end="1803"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>(</span><span class="ͼe">a</span><span>, </span><span class="ͼe">b</span><span>) -> {</span><br/><span>    </span><span class="ͼe">int</span><span> </span><span class="ͼe">sum</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">a</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">b</span><span>;</span><br/><span>    </span><span class="ͼ8">return</span><span> </span><span class="ͼe">sum</span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔥 Real-Life Analogy

👉 Instead of writing a **full function**, you just write the **logic inline** where needed.

qtn :  supplier , function, predicate , PECS, Completable future and future, fork join pool vs parallel stream

# 🔥 What is an Interceptor?

👉 A **Spring Interceptor** is used to:

* Log requests
* Authenticate users
* Modify request/response
* Handle cross-cutting concerns

---

# 🔹 1. Create Interceptor Class

<pre class="overflow-visible! px-0!" data-start="399" data-end="1377"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">import</span><span> </span><span class="ͼe">jakarta</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">http</span><span class="ͼ8">.</span><span class="ͼe">HttpServletRequest</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">jakarta</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">http</span><span class="ͼ8">.</span><span class="ͼe">HttpServletResponse</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">HandlerInterceptor</span><span>;</span><br/><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">MyInterceptor</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">HandlerInterceptor</span><span> {</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">boolean</span><span> </span><span class="ͼe">preHandle</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Before Controller: "</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">request</span><span class="ͼ8">.</span><span class="ͼe">getRequestURI</span><span>());</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼb">true</span><span>; </span><span class="ͼ6">// return false to block request</span><br/><span>    }</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">postHandle</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><br/><span>                           </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>, </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">ModelAndView</span><span> </span><span class="ͼe">modelAndView</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"After Controller"</span><span>);</span><br/><span>    }</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">afterCompletion</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><br/><span>                               </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>, </span><span class="ͼe">Exception</span><span> </span><span class="ͼe">ex</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"After Completion"</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 2. Register Interceptor (Global)

👉 Create a config class:

<pre class="overflow-visible! px-0!" data-start="1450" data-end="1961"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">context</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">Configuration</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">config</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">InterceptorRegistry</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">config</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">WebMvcConfigurer</span><span>;</span><br/><br/><span>@</span><span class="ͼe">Configuration</span><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">WebConfig</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">WebMvcConfigurer</span><span> {</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">addInterceptors</span><span>(</span><span class="ͼe">InterceptorRegistry</span><span> </span><span class="ͼe">registry</span><span>) {</span><br/><span>        </span><span class="ͼe">registry</span><span class="ͼ8">.</span><span class="ͼe">addInterceptor</span><span>(</span><span class="ͼ8">new</span><span> </span><span class="ͼe">MyInterceptor</span><span>())</span><br/><span>                </span><span class="ͼ8">.</span><span class="ͼe">addPathPatterns</span><span>(</span><span class="ͼc">"/**"</span><span>); </span><span class="ͼ6">// apply to all endpoints</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔥 How It Works (Flow)

![https://miro.medium.com/1%2Af2pmYvhgRC6vdVQGkeCz8g.png](https://miro.medium.com/1%2Af2pmYvhgRC6vdVQGkeCz8g.png)

![https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/images/mvc.png](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/images/mvc.png)

![https://miro.medium.com/1%2ApzO7WFRRL9Cnjce8JLChvg.png](https://miro.medium.com/1%2ApzO7WFRRL9Cnjce8JLChvg.png)

**4**

<pre class="overflow-visible! px-0!" data-start="2036" data-end="2217"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Client Request</span><br/><span>      ↓</span><br/><span>Interceptor (preHandle)</span><br/><span>      ↓</span><br/><span>Controller</span><br/><span>      ↓</span><br/><span>Interceptor (postHandle)</span><br/><span>      ↓</span><br/><span>Response Sent</span><br/><span>      ↓</span><br/><span>Interceptor (afterCompletion)</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 Key Methods Explained


| Method              | When It Runs      | Purpose                 |
| ------------------- | ----------------- | ----------------------- |
| `preHandle()`       | Before controller | Authentication, logging |
| `postHandle()`      | After controller  | Modify response         |
| `afterCompletion()` | After response    | Cleanup, logging        |

---

# 🔥 Important Notes

✔️ `preHandle()` must return `true` to continue request
✔️ Works only for **Spring MVC (not WebFlux)**
✔️ Runs for **every request globally**
✔️ Can exclude paths if needed

---

# 🔹 Exclude Specific URLs

<pre class="overflow-visible! px-0!" data-start="2744" data-end="2895"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">registry</span><span class="ͼ8">.</span><span class="ͼe">addInterceptor</span><span>(</span><span class="ͼ8">new</span><span> </span><span class="ͼe">MyInterceptor</span><span>())</span><br/><span>        </span><span class="ͼ8">.</span><span class="ͼe">addPathPatterns</span><span>(</span><span class="ͼc">"/**"</span><span>)</span><br/><span>        </span><span class="ͼ8">.</span><span class="ͼe">excludePathPatterns</span><span>(</span><span class="ͼc">"/login"</span><span>, </span><span class="ͼc">"/register"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 💡 Interceptor vs Filter (Interview)


| Feature | Interceptor      | Filter          |
| ------- | ---------------- | --------------- |
| Level   | Spring MVC       | Servlet         |
| Access  | Controller-aware | Not aware       |
| Use     | Business logic   | Low-level tasks |

# 🔥 What is an Interceptor?

👉 A **Spring Interceptor** is used to:

* Log requests
* Authenticate users
* Modify request/response
* Handle cross-cutting concerns

---

# 🔹 1. Create Interceptor Class

<pre class="overflow-visible! px-0!" data-start="399" data-end="1377"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">import</span><span> </span><span class="ͼe">jakarta</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">http</span><span class="ͼ8">.</span><span class="ͼe">HttpServletRequest</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">jakarta</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">http</span><span class="ͼ8">.</span><span class="ͼe">HttpServletResponse</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">HandlerInterceptor</span><span>;</span><br/><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">MyInterceptor</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">HandlerInterceptor</span><span> {</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">boolean</span><span> </span><span class="ͼe">preHandle</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Before Controller: "</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼe">request</span><span class="ͼ8">.</span><span class="ͼe">getRequestURI</span><span>());</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼb">true</span><span>; </span><span class="ͼ6">// return false to block request</span><br/><span>    }</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">postHandle</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><br/><span>                           </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>, </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">ModelAndView</span><span> </span><span class="ͼe">modelAndView</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"After Controller"</span><span>);</span><br/><span>    }</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">afterCompletion</span><span>(</span><span class="ͼe">HttpServletRequest</span><span> </span><span class="ͼe">request</span><span>, </span><span class="ͼe">HttpServletResponse</span><span> </span><span class="ͼe">response</span><span>, </span><br/><span>                               </span><span class="ͼe">Object</span><span> </span><span class="ͼe">handler</span><span>, </span><span class="ͼe">Exception</span><span> </span><span class="ͼe">ex</span><span>) {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"After Completion"</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 2. Register Interceptor (Global)

👉 Create a config class:

<pre class="overflow-visible! px-0!" data-start="1450" data-end="1961"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">context</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">Configuration</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">config</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">InterceptorRegistry</span><span>;</span><br/><span class="ͼ8">import</span><span> </span><span class="ͼe">org</span><span class="ͼ8">.</span><span class="ͼe">springframework</span><span class="ͼ8">.</span><span class="ͼe">web</span><span class="ͼ8">.</span><span class="ͼe">servlet</span><span class="ͼ8">.</span><span class="ͼe">config</span><span class="ͼ8">.</span><span class="ͼe">annotation</span><span class="ͼ8">.</span><span class="ͼe">WebMvcConfigurer</span><span>;</span><br/><br/><span>@</span><span class="ͼe">Configuration</span><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">WebConfig</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">WebMvcConfigurer</span><span> {</span><br/><br/><span>    @</span><span class="ͼe">Override</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">addInterceptors</span><span>(</span><span class="ͼe">InterceptorRegistry</span><span> </span><span class="ͼe">registry</span><span>) {</span><br/><span>        </span><span class="ͼe">registry</span><span class="ͼ8">.</span><span class="ͼe">addInterceptor</span><span>(</span><span class="ͼ8">new</span><span> </span><span class="ͼe">MyInterceptor</span><span>())</span><br/><span>                </span><span class="ͼ8">.</span><span class="ͼe">addPathPatterns</span><span>(</span><span class="ͼc">"/**"</span><span>); </span><span class="ͼ6">// apply to all endpoints</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔥 How It Works (Flow)

![https://miro.medium.com/1%2Af2pmYvhgRC6vdVQGkeCz8g.png](https://miro.medium.com/1%2Af2pmYvhgRC6vdVQGkeCz8g.png)

![https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/images/mvc.png](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/images/mvc.png)

![https://miro.medium.com/1%2ApzO7WFRRL9Cnjce8JLChvg.png](https://miro.medium.com/1%2ApzO7WFRRL9Cnjce8JLChvg.png)

**4**

<pre class="overflow-visible! px-0!" data-start="2036" data-end="2217"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Client Request</span><br/><span>      ↓</span><br/><span>Interceptor (preHandle)</span><br/><span>      ↓</span><br/><span>Controller</span><br/><span>      ↓</span><br/><span>Interceptor (postHandle)</span><br/><span>      ↓</span><br/><span>Response Sent</span><br/><span>      ↓</span><br/><span>Interceptor (afterCompletion)</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🔹 Key Methods Explained


| Method              | When It Runs      | Purpose                 |
| ------------------- | ----------------- | ----------------------- |
| `preHandle()`       | Before controller | Authentication, logging |
| `postHandle()`      | After controller  | Modify response         |
| `afterCompletion()` | After response    | Cleanup, logging        |

---

# 🔥 Important Notes

✔️ `preHandle()` must return `true` to continue request
✔️ Works only for **Spring MVC (not WebFlux)**
✔️ Runs for **every request globally**
✔️ Can exclude paths if needed

---

# 🔹 Exclude Specific URLs

<pre class="overflow-visible! px-0!" data-start="2744" data-end="2895"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">registry</span><span class="ͼ8">.</span><span class="ͼe">addInterceptor</span><span>(</span><span class="ͼ8">new</span><span> </span><span class="ͼe">MyInterceptor</span><span>())</span><br/><span>        </span><span class="ͼ8">.</span><span class="ͼe">addPathPatterns</span><span>(</span><span class="ͼc">"/**"</span><span>)</span><br/><span>        </span><span class="ͼ8">.</span><span class="ͼe">excludePathPatterns</span><span>(</span><span class="ͼc">"/login"</span><span>, </span><span class="ͼc">"/register"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 💡 Interceptor vs Filter (Interview)


| Feature | Interceptor      | Filter                            |
| ------- | ---------------- | --------------------------------- |
| Level   | Spring MVC       | Servlet                           |
| Access  | Controller-aware | Not aware                         |
| Use     | Business logic   | Low-level tasks<br /><br /><br /> |

What is `String`?

### ✔️ Description:

👉 `String` is a **class in Java used to store text (sequence of characters)**

---

### ⚙️ Key Property:

👉 **Immutable (cannot be changed once created)**

---

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="324" data-end="381"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">String</span><span> </span><span class="ͼe">s</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼc">"Hello"</span><span>;</span><br/><span class="ͼe">s</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">s</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼc">" World"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 What actually happens:

<pre class="overflow-visible! px-0!" data-start="409" data-end="526"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>1. "Hello" → object created</span><br/><span>2. "Hello World" → new object created</span><br/><span>3. Old object remains in memory</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

❗ This creates **multiple objects → memory overhead**

---

# 🔥 String Memory (String Pool)

![https://journaldev.nyc3.cdn.digitaloceanspaces.com/2012/11/String-Pool-Java1-450x249.png](https://journaldev.nyc3.cdn.digitaloceanspaces.com/2012/11/String-Pool-Java1-450x249.png)

![https://miro.medium.com/0%2AW_v_rE7CzHeF4rt7](https://miro.medium.com/0%2AW_v_rE7CzHeF4rt7)

![https://miro.medium.com/1%2AueeD5dqG9SSogM60TFPAOg.jpeg](https://miro.medium.com/1%2AueeD5dqG9SSogM60TFPAOg.jpeg)

👉 Java uses **String Constant Pool** to optimize memory

---

# 🔥 2. What is `StringBuilder`?

### ✔️ Description:

👉 `StringBuilder` is a **mutable class used to modify strings without creating new objects**

---

### ⚙️ Key Property:

👉 **Mutable (can be changed)**

---

### ✔️ Example:

<pre class="overflow-visible! px-0!" data-start="956" data-end="1044"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼe">StringBuilder</span><span> </span><span class="ͼe">sb</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">StringBuilder</span><span>(</span><span class="ͼc">"Hello"</span><span>);</span><br/><span class="ͼe">sb</span><span class="ͼ8">.</span><span class="ͼe">append</span><span>(</span><span class="ͼc">" World"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Same object is modified → no extra objects

---

# 🔥 StringBuilder Working

![https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/__visual_selection_2025_06_09T162309_458NT7D0P.png?pr-true=](https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/__visual_selection_2025_06_09T162309_458NT7D0P.png?pr-true=)

![https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ASA-zWYQaxEvzhIRPDsg3IQ.jpeg](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ASA-zWYQaxEvzhIRPDsg3IQ.jpeg)

![https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/r5SK8YAP.png?pr-true=](https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/r5SK8YAP.png?pr-true=)

**4**

---

# 🔥 Key Differences


| Feature       | String             | StringBuilder          |
| ------------- | ------------------ | ---------------------- |
| Mutability    | ❌ Immutable       | ✅ Mutable             |
| Performance   | Slow (new objects) | Fast (same object)     |
| Memory        | More usage         | Less usage             |
| Thread Safety | Safe (immutable)   | Not thread-safe        |
| Use Case      | Fixed text         | Frequent modifications |

---

# 🔥 Example Comparison

<pre class="overflow-visible! px-0!" data-start="1540" data-end="1613"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ6">// String</span><br/><span class="ͼe">String</span><span> </span><span class="ͼe">s</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼc">"A"</span><span>;</span><br/><span class="ͼe">s</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">s</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼc">"B"</span><span>;</span><br/><span class="ͼe">s</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">s</span><span> </span><span class="ͼ8">+</span><span> </span><span class="ͼc">"C"</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Creates 3 objects ❌

---

<pre class="overflow-visible! px-0!" data-start="1644" data-end="1753"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ6">// StringBuilder</span><br/><span class="ͼe">StringBuilder</span><span> </span><span class="ͼe">sb</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">StringBuilder</span><span>(</span><span class="ͼc">"A"</span><span>);</span><br/><span class="ͼe">sb</span><span class="ͼ8">.</span><span class="ͼe">append</span><span>(</span><span class="ͼc">"B"</span><span>)</span><span class="ͼ8">.</span><span class="ͼe">append</span><span>(</span><span class="ͼc">"C"</span><span>);</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Uses 1 object ✅

---

# 💡 When to Use What?

### ✔️ Use String:

* When value **does not change**
* Constants, configs

---

### ✔️ Use StringBuilder:

* Frequent **modifications**
* Loops, concatenation-heavy logic

---

# 🔥 Bonus (Interview Trap)

👉 `StringBuffer` vs `StringBuilder`


| Feature       | StringBuilder | StringBuffer          |
| ------------- | ------------- | --------------------- |
| Thread Safety | ❌ No         | ✅ Yes (synchronized) |
| Performance   | Faster        | Slower                |

## Final keyword in java

# 🔒 final Keyword in Java

The `final` keyword in Java is used to **restrict modification**.

It can be applied to:

- Variables
- Methods
- Classes

---

## 🔹 1. final Variable

### ✅ Meaning:

Value cannot be changed once assigned

### 📌 Example:

```java
final int x = 10;
x = 20; // ❌ Error

💡 Notes:
Must be initialized once
Can be initialized later (only once)

final int x;
x = 10; // ✅ allowed

```

## 2. final Method

✅ Meaning:

Method cannot be overridden in child class

📌 Example:

```
class Parent {
    final void show() {
        System.out.println("Hello");
    }
}

class Child extends Parent {
    void show() { // ❌ Error
    }
}
```

## final Class

✅ Meaning:

Class cannot be inherited

📌 Example:

```
final class A {
}

// ❌ Error
class B extends A {
}
```

## . final with Objects

final List<String> list = new ArrayList<>();
list.add("Hello"); // ✅ allowed
list = new ArrayList<>(); // ❌ not allowed

💡 Meaning:
Reference cannot change
Object can still be modified

# 🔹 5. final vs finally vs finalize


| Keyword  | Meaning                              |
| -------- | ------------------------------------ |
| final    | Restriction keyword                  |
| finally  | Block in try-catch (always executes) |
| finalize | Method called by GC (deprecated)     |

## 6. Real-world Usage

Constants (final static)
Immutable classes
Prevent method overriding
Security-sensitive logic

## 7. Interview Summary

final variable → value cannot change
final method → cannot override
final class → cannot inherit
final object → reference fixed, object mutable

## 8. Example (Combined)

final class User {

final int id;

User(int id) {
this.id = id;
}

final void display() {
System.out.println(id);
}
}

## ✅ Conclusion

final helps in:

Writing secure
Immutable
predictable code

# static block

✅ 🔥 Basic Definition

👉 A static block:

* Runs **only once**
* Executes **when class is loaded (before main method)**
* Used for **complex static initialization

Example

public class Demo {

static {
System.out.println("Static block executed");
}

public static void main(String[] args) {
System.out.println("Main method executed");
}
}

output :

Static block executed
Main method executed


# when to use interfaces and abstract classes

---

# 🔥 Core Difference (Quick View)




| Feature     | Interface                           | Abstract Class                      |
| ----------- | ----------------------------------- | ----------------------------------- |
| Purpose     | Contract (what to do)               | Partial implementation (how + what) |
| Methods     | Only abstract (plus default/static) | Abstract + concrete                 |
| Variables   | `public static final`only           | Any type                            |
| Inheritance | Multiple                            | Single                              |
| Constructor | ❌ No                               | ✔ Yes                              |




# When to Use **Interface**

java 👍

```example
interface Payment {
    void pay();

```


```



class UPI implements Payment {
    public void pay() {
        System.out.println("Paid via UPI");
    }
}
```


## ✅ Use Interface When:

✔ Multiple classes share behavior
✔ You need **multiple inheritance**
✔ You want loose coupling
✔ You design APIs / contracts



## 🔥 Real-world Examples

* `Runnable`
* `Comparable`
* Spring Services / Repositories


# ✅ When to Use **Abstract Class**


👉 Use abstract class when you want:

> **Common base logic + shared state**


## 💡 Real-world Thinking:

> “What is this object?”


```java

abstract class Vehicle {

    String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    abstract void start();

    void fuel() {
        System.out.println("Fueling...");
    }
}
```

```java
class Car extends Vehicle {

    public Car(String brand) {
        super(brand);
    }

    void start() {
        System.out.println("Car starting");
    }
}
```
✅ Use Abstract Class When:

✔ You want **code reuse**
✔ You have **shared fields (state)**
✔ You want default behavior
✔ Strong relationship (“is-a”)



# 🔥 Key Decision Rule (Interview GOLD)

👉 Ask yourself:

### ✔ If focus is behavior → **Interface**

### ✔ If focus is base class → **Abstract class**


🚀 Real-world Comparison



| Scenario                            | Use                  |
| ----------------------------------- | -------------------- |
| Payment methods (UPI, Card, PayPal) | Interface            |
| Vehicle (Car, Bike)                 | Abstract Class       |
| Logging strategy                    | Interface            |
| Base service class                  | Abstract Class<br /> |




# ⚡ Advanced (Java 8+)

👉 Interfaces can now have:
