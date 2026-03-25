🔥 1. @SpringBootApplication
✔️ Description:

Main annotation to bootstrap a Spring Boot app

⚙️ Working Mechanism:
Combines:
@Configuration → defines beans
@EnableAutoConfiguration → auto-configures based on classpath
@ComponentScan → scans packages for beans

👉 When app starts:

1. SpringApplication.run()
2. Component scanning starts
3. Beans are created & stored in IoC container
4. Auto-config kicks in
   🔥 2. @Component, @Service, @Repository
   ✔️ Description:

Marks a class as a Spring-managed bean

⚙️ Working:
1. ComponentScan finds annotated classes
2. Spring creates objects (beans)
3. Stores them in ApplicationContext (IoC container)

👉 Difference:

@Service → business logic
@Repository → DB + exception translation
🔥 3. @Autowired
✔️ Description:

Injects dependencies automatically

⚙️ Working:
1. Spring scans required type
2. Finds matching bean in container
3. Injects into field/constructor/setter

👉 Uses:

By type injection
Falls back to name if needed
🔥 4. @RestController
✔️ Description:

Handles REST APIs (returns JSON directly)

⚙️ Working:
1. HTTP request hits DispatcherServlet
2. Mapped to controller method
3. Return object → converted to JSON (Jackson)
4. Response sent to client
   🔥 5. @RequestMapping / @GetMapping etc.
   ✔️ Description:

Maps HTTP requests to methods

⚙️ Working:
1. URL + HTTP method matched
2. Spring finds correct handler method
3. Executes method
   🔥 6. @RequestBody
   ✔️ Description:

Converts JSON → Java object

⚙️ Working:
1. Request JSON received
2. Jackson converts JSON → Java object
3. Passed as method parameter
   🔥 7. @PathVariable / @RequestParam
   ✔️ Description:

Extract data from URL[springboot_basic_to_advance_interview_questions.md](springboot_basic_to_advance_interview_questions.md)

⚙️ Working:
@PathVariable → from URL path
@RequestParam → from query params
🔥 8. @Configuration & @Bean
✔️ Description:

Manual bean creation

⚙️ Working:
1. @Configuration class loaded
2. @Bean methods executed
3. Returned objects registered in container
   🔥 9. @Entity, @Id, @GeneratedValue
   ✔️ Description:

Maps Java class → database table

⚙️ Working:
1. Hibernate scans entities
2. Maps fields → columns
3. Generates SQL queries automatically
   🔥 10. @Transactional
   ✔️ Description:

Manages database transactions

⚙️ Working:
1. Method starts → transaction begins
2. Success → commit
3. Exception → rollback

👉 Uses AOP proxy internally

🔥 11. @ControllerAdvice & @ExceptionHandler
✔️ Description:

Global exception handling

⚙️ Working:
1. Exception thrown in controller
2. Spring redirects to handler method
3. Custom response returned
   🔥 12. @Value
   ✔️ Description:

Inject values from application.properties

⚙️ Working:
1. Spring reads config file
2. Resolves placeholder
3. Injects value into field
   🔥 Complete Request Flow (Important)
   4
   Client → DispatcherServlet
   ↓
   Controller (@RestController)
   ↓
   Service (@Service)
   ↓
   Repository (@Repository)
   ↓
   Database
   ↑
   Response (JSON)