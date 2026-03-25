# SQL Normalization (Normal Forms)

Database **Normalization** is the process of organizing data in a database to reduce redundancy and improve data integrity.

Normalization divides large tables into smaller tables and defines relationships between them.

---

# Table of Contents

1. First Normal Form (1NF)
2. Second Normal Form (2NF)
3. Third Normal Form (3NF)
4. Boyce-Codd Normal Form (BCNF)
5. Fourth Normal Form (4NF)
6. Fifth Normal Form (5NF)
7. Summary Table
8. Real World Example
9. Interview Tips

---

# 1. First Normal Form (1NF)

## Rules

A table is in **First Normal Form** if:

* Each column contains **atomic (indivisible) values**
* No repeating groups
* Each record can be uniquely identified

---

## Example (Not in 1NF)

| StudentID | Name  | Subjects      |
| --------- | ----- | ------------- |
| 1         | Ram   | Math, Physics |
| 2         | Shyam | Chemistry     |

Problem:

* The **Subjects column contains multiple values**

---

## Converted to 1NF

| StudentID | Name  | Subject   |
| --------- | ----- | --------- |
| 1         | Ram   | Math      |
| 1         | Ram   | Physics   |
| 2         | Shyam | Chemistry |

Now each column contains **single values only**.

---

# 2. Second Normal Form (2NF)

## Rules

A table is in **Second Normal Form** if:

1. It is already in **1NF**
2. There is **no partial dependency**

Partial dependency means a column depends only on part of a composite primary key.

---

## Example (Not in 2NF)

| StudentID | CourseID | StudentName |
| --------- | -------- | ----------- |
| 1         | C101     | Ram         |
| 2         | C102     | Shyam       |

Primary Key = `(StudentID, CourseID)`

Problem:

* `StudentName` depends only on `StudentID`, not the full key.

---

## Converted to 2NF

### Students Table

| StudentID | StudentName |
| --------- | ----------- |
| 1         | Ram         |
| 2         | Shyam       |

### Enrollment Table

| StudentID | CourseID |
| --------- | -------- |
| 1         | C101     |
| 2         | C102     |

---

# 3. Third Normal Form (3NF)

## Rules

A table is in **Third Normal Form** if:

1. It is already in **2NF**
2. There is **no transitive dependency**

Transitive dependency means:

```
A → B
B → C
Therefore A → C
```

---

## Example (Not in 3NF)

| StudentID | DeptID | DeptName   |
| --------- | ------ | ---------- |
| 1         | D1     | Computer   |
| 2         | D2     | Mechanical |

Dependencies:

```
StudentID → DeptID
DeptID → DeptName
```

Therefore:

```
StudentID → DeptName (indirect)
```

---

## Converted

Students : 
| StudentID | DeptID |
| --------- | ------ |
| 1         | D1     |
| 2         | D2     |


department : 
| DeptID | DeptName | HOD        |
| ------ | -------- | ---------- |
| D1     | Computer | Dr. Sharma |
| D2     | Mech     | Dr. Verma  |


