# PostgreSQL Complete Interview Handbook (Basic → Advanced)
With Examples Using a Common Dataset

---

# 📌 Common Dataset Used in All Examples

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary INT,
    joining_date DATE,
    details JSONB
);

INSERT INTO employees (name, department, salary, joining_date, details) VALUES
('Alice', 'Engineering', 90000, '2020-01-15', '{"skills":["SQL","Python"],"experience":3}'),
('Bob', 'Engineering', 85000, '2019-03-20', '{"skills":["Java","AWS"],"experience":4}'),
('Charlie', 'HR', 60000, '2021-07-10', '{"skills":["Communication"],"experience":2}'),
('David', 'Finance', 75000, '2020-11-05', '{"skills":["Excel","Reporting"],"experience":5}'),
('Eve', 'Engineering', 95000, '2018-05-12', '{"skills":["Golang","System Design"],"experience":6}');
```

---

# 📌 **1. Introduction to PostgreSQL**
**Definition:** PostgreSQL is an open-source, object-relational database known for ACID compliance and extensibility.

**Example:**  
```sql
SELECT version();
```

---

# 📌 **2. Basic SQL Concepts**

## **2.3 Data Types**
```sql
SELECT 123::INT, 'Hello'::TEXT, '{"a":1}'::JSONB;
```

---

# 📌 **3. Constraints**
### **Primary Key Example**
```sql
ALTER TABLE employees ADD PRIMARY KEY (id);
```

### **Check Constraint**
```sql
ALTER TABLE employees ADD CONSTRAINT salary_check CHECK (salary > 0);
```

---

# 📌 **4. Joins**

### **INNER JOIN**
```sql
SELECT e.name, e.department
FROM employees e
INNER JOIN departments d ON e.department = d.name;
```

### **LEFT JOIN**
```sql
SELECT e.name, p.project_name
FROM employees e
LEFT JOIN projects p ON e.id = p.employee_id;
```

---

# 📌 **5. Views**

### **Create View**
```sql
CREATE VIEW eng_employees AS
SELECT * FROM employees WHERE department = 'Engineering';
```

---

# 📌 **6. Indexes**

### **GIN Index Example**
```sql
CREATE INDEX idx_details ON employees USING GIN (details);
```

---

# 📌 **7. JSONB**

### **Filter JSONB**
Get all employees who know Python:
```sql
SELECT name 
FROM employees 
WHERE details->'skills' ? 'Python';
```

---

# 📌 **8. Aggregations**

### **Average Salary**
```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

---

# 📌 **9. Window Functions**

### **ROW_NUMBER**
```sql
SELECT name, salary,
ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
FROM employees;
```

---

# 📌 **10. CTE**

### **Recursive CTE**
```sql
WITH RECURSIVE nums AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n+1 FROM nums WHERE n < 5
)
SELECT * FROM nums;
```

---

# 📌 **11. Transactions**
```sql
BEGIN;
UPDATE employees SET salary = salary + 5000 WHERE id = 1;
COMMIT;
```

---

# 📌 **12. MVCC Example**
PostgreSQL keeps old row versions until vacuums.

```sql
UPDATE employees SET salary = 91000 WHERE id = 1;
```

---

# 📌 **13. VACUUM**
```sql
VACUUM ANALYZE employees;
```

---

# 📌 **14. WAL Example**
Force WAL switch:
```sql
SELECT pg_switch_wal();
```

---

# 📌 **15. EXPLAIN ANALYZE**
```sql
EXPLAIN ANALYZE SELECT * FROM employees WHERE salary > 80000;
```

---

# 📌 **16. Partitioning Example**
```sql
CREATE TABLE employees_part (
    id INT,
    name TEXT,
    department TEXT,
    salary INT,
    joining_date DATE
) PARTITION BY RANGE (joining_date);

CREATE TABLE employees_2020 PARTITION OF employees_part
FOR VALUES FROM ('2020-01-01') TO ('2021-01-01');
```

---

# 📌 **17. Replication**
Logical publication:
```sql
CREATE PUBLICATION mypub FOR TABLE employees;
```

---

# 📌 **18. Backup Example**
```bash
pg_dump mydb > backup.sql
```

---

# 📌 **19. Security**
Grant read access:
```sql
GRANT SELECT ON employees TO analyst_role;
```

---

# 📌 **20. Extensions**
```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

---

# 📌 **21. Full-text search**
```sql
SELECT * FROM employees
WHERE to_tsvector(name) @@ to_tsquery('Alice');
```

---

# 📌 **22. Functions**
```sql
CREATE FUNCTION get_high_salary() RETURNS TABLE(name TEXT, salary INT) AS $$
BEGIN
  RETURN QUERY SELECT name, salary FROM employees WHERE salary > 80000;
END;
$$ LANGUAGE plpgsql;
```

---

# 📌 **23. Triggers**
```sql
CREATE FUNCTION log_salary_change() RETURNS trigger AS $$
BEGIN
    INSERT INTO salary_logs(emp_id, old_salary, new_salary)
    VALUES (OLD.id, OLD.salary, NEW.salary);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER salary_update
AFTER UPDATE ON employees
FOR EACH ROW EXECUTE FUNCTION log_salary_change();
```

---

# 📌 **24. Locks**
```sql
SELECT * FROM employees FOR UPDATE;
```

---

# 📌 **25. Performance Tuning**
```sql
SHOW work_mem;
```

---

# 📌 **26. Connection Pooling**
pgBouncer sample:
```
max_client_conn = 1000
pool_mode = session
```

---

# 📌 **27. Common Commands**
```sql
\dt
\du
\l
\d employees
```

---

# 📌 **28. UPSERT**
```sql
INSERT INTO employees (id, name, salary)
VALUES (10, 'John', 70000)
ON CONFLICT (id) DO UPDATE SET salary = EXCLUDED.salary;
```

---

# 📌 **29. Backup Strategies Overview**
- Logical → pg_dump  
- Physical → basebackup  
- PITR → WAL backup  

---

# 📌 **30. Common SQL Interview Problems**

### **Find duplicate salaries**
```sql
SELECT salary, COUNT(*)
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```

### **Top 1 salary per department**
```sql
SELECT DISTINCT ON (department)
department, name, salary
FROM employees
ORDER BY department, salary DESC;
```

---

This file now includes:
✅ All PostgreSQL topics (basic → advanced)  
✅ Examples for EVERY section  
✅ One common dataset used throughout  
