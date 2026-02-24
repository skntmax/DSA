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