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

**You are now interview-ready for Spring Boot.**
