# Trees – Complete Interview Guide (DSA)

## 1. What is a Tree?
A **tree** is a **non-linear hierarchical data structure** consisting of nodes connected by edges.

### Key Characteristics
- One **root node**
- Zero or more **child nodes**
- **No cycles**
- Exactly **one path** between any two nodes

---

## 2. Tree Terminologies (Very Important)

| Term | Description |
|----|----|
| Node | Individual element |
| Root | Topmost node |
| Parent | Node having children |
| Child | Node derived from a parent |
| Leaf | Node with no children |
| Siblings | Nodes with same parent |
| Edge | Connection between nodes |
| Height | Longest path from node to leaf |
| Depth | Distance from root |
| Level | Depth + 1 |
| Subtree | Tree formed from any node |

---

## 3. Properties of Trees
- A tree with **N nodes has N−1 edges**
- No cycles
- One unique path between nodes
- Recursive structure

---

## 4. Types of Trees

### 4.1 Binary Tree
Each node has **at most 2 children**.

Types:
- **Full Binary Tree** – 0 or 2 children
- **Complete Binary Tree** – Filled level by level
- **Perfect Binary Tree** – All levels filled
- **Skewed Tree** – All nodes on one side

---

### 4.2 Binary Search Tree (BST)
Rules:

Left Subtree < Root < Right Subtree

    Properties:
    - Inorder traversal gives **sorted order**
    - Average Time: `O(log n)`
    - Worst Case: `O(n)`

    ---

    ### 4.3 AVL Tree
    A **self-balancing BST**.

    Balance Factor:

BF = height(left) - height(right)
Allowed: -1, 0, 1

Rotations:
- LL
- RR
- LR
- RL

### 4.4 Red-Black Tree
Used in **Java TreeMap**, **C++ map**.

Properties:
- Node color: Red / Black
- Root is always Black
- No two adjacent Red nodes
- Equal black height for all paths

---

### 4.5 Heap
A **complete binary tree**.

Types:
- Min Heap
- Max Heap

Operations:
- Insert → `O(log n)`
- Delete → `O(log n)`
- Get Min/Max → `O(1)`

Use cases:
- Priority Queue
- Dijkstra
- Top K problems

---

### 4.6 Trie (Prefix Tree)
Used for **string searching**.

Applications:
- Auto-complete
- Spell checker
- Dictionary

Time Complexity:
- Insert/Search → `O(length of word)`

---

### 4.7 Segment Tree
Used for **range queries**.

Operations:
- Build → `O(n)`
- Query → `O(log n)`
- Update → `O(log n)`

---
## 5. Tree Traversals

### 5.1 Depth First Search (DFS)

| Traversal | Order |
|----|----|
| Inorder | Left → Root → Right |
| Preorder | Root → Left → Right |
| Postorder | Left → Right → Root |

---

### 5.2 Breadth First Search (BFS)
Also called **Level Order Traversal**  
Uses a **Queue**

---

## 6. Recursive vs Iterative
- Recursive → uses call stack
- Iterative → uses explicit stack/queue
- Recursive is cleaner, iterative is memory-controlled

---

## 7. Important Tree Algorithms

### Basic
- Height of a tree
- Count nodes
- Count leaf nodes
- Diameter of tree
- Mirror tree
- Check identical trees
- Check balanced tree

### BST
- Validate BST
- Lowest Common Ancestor (LCA)
- Kth smallest element
- Insert / Delete

### Advanced
- Serialize & Deserialize
- Boundary traversal
- Vertical order traversal
- Zigzag traversal
- Flatten binary tree

---

## 8. Time Complexity Summary

| Operation | Binary Tree | BST (Avg) | BST (Worst) |
|----|----|----|----|
| Search | O(n) | O(log n) | O(n) |
| Insert | O(n) | O(log n) | O(n) |
| Delete | O(n) | O(log n) | O(n) |

---

## 9. Real-World Applications
- File systems
- Database indexing (B-Trees)
- HTML DOM
- Routing tables
- Compiler syntax trees
- Decision trees (AI)

---

## 10. Common Interview Questions
1. Binary Tree vs BST
2. Why inorder traversal of BST is sorted?
3. Height vs Depth
4. Balanced vs Unbalanced tree
5. AVL vs Red-Black Tree
6. Why Heap is not used for searching?
7. Find LCA of two nodes
8. Can a tree have cycles? (No)

---

## 11. Typical Interview Flow
1. Traverse tree
2. Modify tree
3. Optimize solution
4. Handle edge cases

---

## 12. One-Line Definition
> A tree is a hierarchical, non-linear data structure used to represent relationships efficiently.

---



other questions 👍

    JS / Java tree implementations

    Top 50 Tree interview questions

    Visual diagrams (ASCII + explanation)