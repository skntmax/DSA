# 🔹 Types of Polymorphism in Java

There are mainly **two types**:

## 1. Compile-Time Polymorphism (Static Binding)

Also called:

* Method Overloading
* Static Polymorphism

### ✔️ Definition:

When the method call is resolved **at compile time**, it is called compile-time polymorphism.

### ✔️ How it works:

Same method name but **different parameters** (type, number, or order).



### ✔️ Key Points:

* Happens at **compile time**
* Method Overloading
* Faster execution
* No inheritance require



## 2. Runtime Polymorphism (Dynamic Binding)

Also called:

* Method Overriding
* Dynamic Polymorphism

### ✔️ Definition:

When the method call is resolved **at runtime**, it is called runtime polymorphism.

### ✔️ How it works:

A subclass provides a **specific implementation** of a method already defined in the parent class.


### ✔️ Key Points:

* Happens at **runtime**
* Method Overriding
* Requires inheritance
* Uses dynamic method dispatch
* Slightly slower than compile-time
*

*

---

# 🔥 Difference: Compile-Time vs Runtime Polymorphism


| Feature      | Compile-Time           | Runtime                  |
| ------------ | ---------------------- | ------------------------ |
| Binding Time | Compile Time           | Runtime                  |
| Method Type  | Overloading            | Overriding               |
| Inheritance  | Not required           | Required                 |
| Speed        | Faster                 | Slower                   |
| Decision     | Fixed before execution | Decided during execution |
