What is Collection Framework?

The Java Collection Framework (JCF) is a set of:

Interfaces

Implementations (classes)

Algorithms 


used to store and manipulate groups of objects dynamically.

👉 Before collections:
We used arrays.

Problem with arrays:

Fixed size

No built-in utility methods

Manual resizing logic


                Iterable
                   |
               Collection
          _________|__________
         |         |          |
        List      Set       Queue
                              |
                            Deque


Map  (NOT part of Collection interface)

3️⃣ Collection Interface
import java.util.*;

Basic methods:
add()
remove()
size()
isEmpty()
contains()
clear()


## 12. Most Used Collections in Real Backend 
: ### (In Spring Boot / Backend systems:)
| Collection        | Use              |
| ----------------- | ---------------- |
| ArrayList         | storing results  |
| HashMap           | caching / lookup |
| HashSet           | unique values    |
| PriorityQueue     | task scheduling  |
| ConcurrentHashMap | multithreading   |



## Interview Important Differences
| Feature       | ArrayList     | LinkedList    |
| ------------- | ------------- | ------------- |
| Structure     | Dynamic Array | Doubly Linked |
| Access        | Fast          | Slow          |
| Insert/Delete | Slow          | Fast          |


| Feature   | HashSet   | TreeSet       |
| --------- | --------- | ------------- |
| Order     | Unordered | Sorted        |
| Structure | HashTable | RedBlack Tree |
| Speed     | Faster    | Slower        |

That is the complete beginner → intermediate understanding of Java Collections.
