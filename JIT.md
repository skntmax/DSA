<!-- Source Code → Interpreter → Profiler → Optimizing Compiler → Faster Machine Code -->


1. Parser

JS code is parsed into an AST (Abstract Syntax Tree)

2. Ignition – Interpreter

V8 first converts AST → Bytecode


This bytecode is run by Ignition


3. Profiler – finds "Hot" code

V8 watches your running code.
If a function runs many times or is expensive, it’s marked as hot.

function sum(a,b){ return a+b }
for (let i=0; i<100000; i++) {
  sum(i, i+1); // hot
}


sum() → HOT → Candidate for optimization


4. TurboFan – Optimizing JIT Compiler

Once a function is hot, it is sent to TurboFan.

TurboFan:

Infers types (a and b are numbers)

Removes unnecessary checks

Inlines functions

Optimizes loops

Uses inline caching info

It generates optimized machine code (CPU-level).

Boom: 🔥 very fast execution