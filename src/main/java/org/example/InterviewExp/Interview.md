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
