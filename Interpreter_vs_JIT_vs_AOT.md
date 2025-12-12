1. Interpreter

What it does

Executes code line-by-line

Converts source → low-level instructions at runtime

No permanent machine code is generated

How it works

Source Code → Interpreter → Execute


Example

Python (CPython)

Old JavaScript engines

Bash

Pros

Fast startup

Easy debugging

Platform independent

Cons

Slower execution

Re-interprets every time loop runs

Example behavior

for (let i = 0; i < 100000; i++) {
  sum(i, i + 1);  // interpreted every time
}


Every loop = reprocessed


2. JIT (Just-In-Time Compilation)

What it does

Starts as interpreter

Finds hot (frequently used) code

Compiles that code into native machine code at runtime

How it works

Source → Bytecode → Run → Hot Code → JIT → Machine Code


Example

JavaScript (V8, SpiderMonkey)

Java Virtual Machine (HotSpot)

.NET CLR

Pros

Much faster than interpreter

Adapts to real user behavior

Better runtime optimization

Cons

Some runtime compilation cost

Needs warm-up time

Possible de-optimization


3. AOT (Ahead-Of-Time Compilation)

What it does

Compiles entire program before execution

Generates native binaries

How it works

Source Code → Compiler → Machine Code → Run


Example

C / C++

Rust

Swift

Go

Angular AOT mode

Pros

Fastest startup

Very efficient

No runtime compilation overhead

Cons

Less runtime adaptability

Not always cross-platform

Slower build time

Example behavior

int add(int a, int b) {
  return a + b;
}


Becomes:

Machine code stored in binary file




Core Differences (Interview Table)
Feature	Interpreter	JIT	AOT
Execution time	At runtime	At runtime + optimized	Before runtime
Startup speed	Fast	Medium	Slow
Execution speed	Slow	Fast	Fastest
Optimization	❌ Minimal	✅ Heavy	✅ Strong (static)
Example	Python	JavaScript (V8)	C / Rust
Runtime adaptation	❌ No	✅ Yes	❌ No
Uses profiling	❌ No	✅ Yes	❌ No
Binary produced	❌ No	✅ Temporary	✅ Permanent