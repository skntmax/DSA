# Java Interview Questions – 3 Years Experience (With Answers)

This document contains **frequently asked Java interview questions with clear, concise answers** for candidates with around **3 years of experience**.

---

## 1. Core Java

### Q1. What are OOP principles?

**Answer:**

* **Encapsulation**: Wrapping data and methods together and hiding internal state using access modifiers.
* **Inheritance**: One class acquiring properties of another using `extends`.
* **Polymorphism**: Same method behaving differently (method overloading & overriding).
* **Abstraction**: Hiding implementation details using abstract classes or interfaces.

---

### Q2. Abstract class vs Interface

**Answer:**

| Abstract Class                     | Interface                             |
| ---------------------------------- | ------------------------------------- |
| Can have method implementation     | Only abstract methods (before Java 8) |
| Can have instance variables        | Only constants                        |
| Supports constructors              | No constructors                       |
| Multiple inheritance not supported | Multiple inheritance supported        |

---

### Q3. Why is String immutable?

**Answer:**

* For **security** (used in class loading, DB URLs)
* For **thread safety**
* Enables **String Constant Pool caching**
* Improves performance

---

### Q4. == vs equals()

**Answer:**

* `==` compares **memory reference**
* `equals()` compares **content**

---

## 2. Collections Framework

### Q5. Difference between List, Set, and Map

**Answer:**

* **List**: Ordered, allows duplicates
* **Set**: No duplicates
* **Map**: Key-value pairs

---

### Q6. ArrayList vs LinkedList

**Answer:**

| ArrayList          | LinkedList              |
| ------------------ | ----------------------- |
| Fast random access | Fast insert/delete      |
| Uses dynamic array | Uses doubly linked list |

---

### Q7. How HashMap works internally?

**Answer:**

* Uses **hashCode()** to find bucket
* Uses **equals()** to resolve collisions
* Stores data as **Node(key, value, next)**
* Converts to Red-Black Tree after threshold

---

## 3. Exception Handling

### Q8. Checked vs Unchecked Exceptions

**Answer:**

* **Checked**: Compile-time (IOException)
* **Unchecked**: Runtime (NullPointerException)

---

### Q9. throw vs throws

**Answer:**

* `throw`: Used to explicitly throw exception
* `throws`: Declares exception

---

## 4. Java 8 Features

### Q10. What is Lambda Expression?

**Answer:**
A concise way to implement functional interfaces.

---

### Q11. map() vs flatMap()

**Answer:**

* `map()` transforms one value
* `flatMap()` flattens nested structures

---

### Q12. What is Optional?

**Answer:**
A container to avoid `NullPointerException`.

---

## 5. Multithreading & Concurrency

### Q13. Thread vs Runnable

**Answer:**

* Thread: Extends Thread class
* Runnable: Implements Runnable interface (better)

---

### Q14. synchronized keyword

**Answer:**
Ensures only one thread accesses critical section at a time.

---

### Q15. wait() vs sleep()

**Answer:**

* `wait()` releases lock
* `sleep()` does not release lock

---

## 6. JVM Internals

### Q16. Heap vs Stack

**Answer:**

* Heap: Objects
* Stack: Method calls & local variables

---

### Q17. Garbage Collection

**Answer:**
Automatic memory management removing unused objects.

---

## 7. Spring & Spring Boot

### Q18. What is Dependency Injection?

**Answer:**
Providing object dependencies externally rather than creating them.

---

### Q19. @Component vs @Service vs @Repository

**Answer:**

* @Component: Generic
* @Service: Business logic
* @Repository: DAO layer + exception translation

---

### Q20. @Controller vs @RestController

**Answer:**

* @Controller returns views
* @RestController returns JSON

---

## 8. REST & Microservices

### Q21. PUT vs PATCH

**Answer:**

* PUT: Full update
* PATCH: Partial update

---

### Q22. What is JWT?

**Answer:**
JSON Web Token used for stateless authentication.

---

## 9. Database & SQL

### Q23. ACID properties

**Answer:**

* Atomicity
* Consistency
* Isolation
* Durability

---

### Q24. DELETE vs TRUNCATE vs DROP

**Answer:**

* DELETE: Row-wise, rollback possible
* TRUNCATE: Faster, no rollback
* DROP: Removes table

---

## 10. Coding Questions

### Q25. Reverse a String

**Answer:**
Use StringBuilder or loop from end to start.

---

### Q26. Find duplicates using HashMap

**Answer:**
Store frequency and check count > 1.

---

## 11. Scenario-Based

### Q27. How do you improve performance?

**Answer:**

* Proper indexing
* Caching
* Async processing
* JVM tuning

---

### Q28. How do you secure REST APIs?

**Answer:**

* JWT / OAuth2
* HTTPS
* Role-based authorization

---

## 12. HR & Project

### Q29. Explain your project

**Answer:**
Explain architecture, tech stack, your role, challenges, and impact.

---

## Final Tip

For **3-year experience**, interviewers expect:

* Strong **Core Java + Java 8**
* Clear **Spring Boot understanding**
* Ability to explain **real project scenarios**

---

**Best of luck for your Java interviews.**
