Most important questions  about springboot development. 

# Spring Boot Interview Questions – Basic to Advanced (With Answers)

This **Spring Boot interview guide** is designed for **0–5 years experience**, covering **basic to advanced concepts** with **clear, interview-ready answers**.

---

## 1. Spring Boot Basics

### Q1. What is Spring Boot?

**Answer:**
Spring Boot is an extension of the Spring Framework that simplifies application development by providing **auto-configuration**, **embedded servers**, and **production-ready features**.

---

### Q2. Why Spring Boot over Spring?

**Answer:**

* No XML configuration
* Embedded servers (Tomcat, Jetty)
* Auto-configuration
* Faster development
* Production-ready features

---

### Q3. What are the main features of Spring Boot?

**Answer:**

* Auto Configuration
* Starter Dependencies
* Embedded Server
* Actuator
* Externalized Configuration

---

### Q4. What is Spring Boot Starter?

**Answer:**
Starters are predefined dependency descriptors that simplify Maven/Gradle configuration.

Example:

* `spring-boot-starter-web`
* `spring-boot-starter-data-jpa`

---

## 2. Auto Configuration & Configuration

### Q5. What is Auto-Configuration?

**Answer:**
Auto-configuration automatically configures Spring beans based on **classpath dependencies** and **application properties**.

---

### Q6. How does @SpringBootApplication work?

**Answer:**
It is a combination of:

* `@Configuration`
* `@EnableAutoConfiguration`
* `@ComponentScan`

---

### Q7. How to disable auto-configuration?

**Answer:**
Using `exclude` attribute:

```java
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
```

---

## 3. Dependency Injection & Beans

### Q8. What is Dependency Injection?

**Answer:**
Dependency Injection means **injecting dependencies from outside** rather than creating them manually.

---

### Q9. Types of Dependency Injection

**Answer:**

* Constructor Injection (recommended)
* Setter Injection
* Field Injection

---

### Q10. @Component vs @Service vs @Repository

**Answer:**

* `@Component`: Generic component
* `@Service`: Business logic
* `@Repository`: DAO layer + exception translation

---

### Q11. What is Bean Lifecycle?

**Answer:**

1. Bean instantiation
2. Dependency injection
3. Initialization
4. Destruction

---

## 4. Spring Boot Web & REST

### Q12. @Controller vs @RestController

**Answer:**

* `@Controller`: Returns views
* `@RestController`: Returns JSON/XML

---

### Q13. Common HTTP Methods

**Answer:**

* GET – Fetch data
* POST – Create
* PUT – Full update
* PATCH – Partial update
* DELETE – Remove

---

### Q14. What is @RequestMapping?

**Answer:**
Maps HTTP requests to handler methods.

---

### Q15. PUT vs PATCH

**Answer:**

* PUT replaces the entire resource
* PATCH updates specific fields

---

## 5. Exception Handling

### Q16. How to handle exceptions globally?

**Answer:**
Using `@ControllerAdvice` with `@ExceptionHandler`.

---

### Q17. What is ResponseEntity?

**Answer:**
Represents HTTP response including status code, headers, and body.

---

## 6. Spring Data JPA

### Q18. What is Spring Data JPA?

**Answer:**
Simplifies database access by reducing boilerplate code.

---

### Q19. JpaRepository vs CrudRepository

**Answer:**

* CrudRepository: Basic CRUD
* JpaRepository: Pagination + sorting

---

### Q20. Lazy vs Eager loading

**Answer:**

* Lazy: Loads when required
* Eager: Loads immediately

---

## 7. Security

### Q21. What is Spring Security?

**Answer:**
Framework for authentication and authorization.

---

### Q22. What is JWT?

**Answer:**
JSON Web Token used for stateless authentication.

---

### Q23. How do you secure REST APIs?

**Answer:**

* JWT/OAuth2
* Role-based access
* HTTPS

---

## 8. Configuration & Profiles

### Q24. What are Spring Profiles?

**Answer:**
Used to define environment-specific configurations.

---

### Q25. application.properties vs application.yml

**Answer:**

* properties: Key-value
* yml: Hierarchical & readable

---

## 9. Actuator & Monitoring

### Q26. What is Spring Boot Actuator?

**Answer:**
Provides production-ready endpoints for monitoring.

---

### Q27. Common Actuator Endpoints

**Answer:**

* /health
* /metrics
* /info

---

## 10. Advanced Spring Boot

### Q28. What is AOP?

**Answer:**
Aspect-Oriented Programming separates cross-cutting concerns like logging and security.

---

### Q29. What is Caching in Spring Boot?

**Answer:**
Improves performance by storing frequently used data.

---

### Q30. How does Spring Boot support Microservices?

**Answer:**

* REST APIs
* Spring Cloud
* Config Server
* Service Discovery

---

## 11. Performance & Best Practices

### Q31. How to improve Spring Boot performance?

**Answer:**

* Use caching
* Proper DB indexing
* Async processing
* Connection pooling

---

### Q32. Common Spring Boot Interview Mistakes

**Answer:**

* Overusing Field Injection
* Not handling exceptions globally
* Ignoring profiles

---

## Final Notes

For **mid-level interviews**, focus on:

* DI & Auto Configuration
* REST & JPA
* Security & Actuator
* Real project explanations

---

**You are now interview-ready for Spring Boot.

## working of @Autowired annotations

Looks like you’re asking about the **main difference between different `@Autowired` configurations in Spring** (field vs constructor vs setter injection). This is a very common interview topic 👍

---

# ✅ What is `@Autowired`?

👉 It tells Spring:

> “Inject this dependency automatically from the Spring container”

---

# 🔥 3 Ways to Use `@Autowired`

## 1️⃣ Field Injection ❌ (Not Recommended)

<pre class="overflow-visible! px-0!" data-start="399" data-end="454"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>@</span><span class="ͼe">Autowired</span><br/><span class="ͼ8">private</span><span> </span><span class="ͼe">UserService</span><span> </span><span class="ͼe">userService</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### ❌ Problems:

* Hard to test (no constructor)
* Hidden dependencies
* Reflection-based injection

---

## 2️⃣ Constructor Injection ✅ (Best Practice)

<pre class="overflow-visible! px-0!" data-start="609" data-end="747"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">private</span><span> </span><span class="ͼ8">final</span><span> </span><span class="ͼe">UserService</span><span> </span><span class="ͼe">userService</span><span>;</span><br/><br/><span class="ͼ8">public</span><span> </span><span class="ͼe">UserController</span><span>(</span><span class="ͼe">UserService</span><span> </span><span class="ͼe">userService</span><span>) {</span><br/><span>    </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">userService</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">userService</span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 In Spring Boot 4+, `@Autowired` is optional here

---

### ✅ Advantages:

* Dependencies are **explicit**
* Easy for **unit testing**
* Supports **immutability**
* Fail fast (if dependency missing)

---

## 3️⃣ Setter Injection ⚖️ (Use in rare cases)

<pre class="overflow-visible! px-0!" data-start="1003" data-end="1151"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">private</span><span> </span><span class="ͼe">UserService</span><span> </span><span class="ͼe">userService</span><span>;</span><br/><br/><span>@</span><span class="ͼe">Autowired</span><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">setUserService</span><span>(</span><span class="ͼe">UserService</span><span> </span><span class="ͼe">userService</span><span>) {</span><br/><span>    </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">userService</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">userService</span><span>;</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### ✅ Use Case:

* Optional dependencies
* Changing dependency at runtime

---

# 🚀 Key Differences


| Feature             | Field     | Constructor | Setter         |
| ------------------- | --------- | ----------- | -------------- |
| Testability         | ❌ Poor   | ✅ Best     | ⚖️ Medium    |
| Immutability        | ❌ No     | ✅ Yes      | ❌ No          |
| Required dependency | ❌ Hidden | ✅ Clear    | ⚖️ Optional  |
| Recommended         | ❌ No     | ✅ Yes      | ⚖️ Sometimes |

---

# 🔥 Interview Answer (Short)

👉 **Constructor injection is preferred** because:

* Makes dependencies mandatory
* Improves testability
* Supports immutability

---

# 💡 Bonus: Optional Dependency

<pre class="overflow-visible! px-0!" data-start="1743" data-end="1822"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>@</span><span class="ͼe">Autowired</span><span>(</span><span class="ͼe">required</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">false</span><span>)</span><br/><span class="ͼ8">private</span><span> </span><span class="ͼe">PaymentService</span><span> </span><span class="ͼe">paymentService</span><span>;</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

OR better:

<pre class="overflow-visible! px-0!" data-start="1836" data-end="1969"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼe">UserController</span><span>(</span><span class="ͼe">Optional</span><span><</span><span class="ͼe">PaymentService</span><span>> </span><span class="ͼe">paymentService</span><span>) {</span><br/><span>    </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">paymentService</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">paymentService</span><span class="ͼ8">.</span><span class="ͼe">orElse</span><span>(</span><span class="ͼb">null</span><span>);</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# ⚡ Real-world Best Practice

Always use:

<pre class="overflow-visible! px-0!" data-start="2019" data-end="2227"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>@</span><span class="ͼe">Service</span><br/><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">UserService</span><span> {</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">final</span><span> </span><span class="ͼe">UserRepository</span><span> </span><span class="ͼe">userRepository</span><span>;</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">UserService</span><span>(</span><span class="ͼe">UserRepository</span><span> </span><span class="ͼe">userRepository</span><span>) {</span><br/><span>        </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">userRepository</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">userRepository</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# ✅ Summary

👉 Use **Constructor Injection** in 99% cases
👉 Avoid Field Injection
👉 Use Setter only for optional dependencies
