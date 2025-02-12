Rust provides several built-in **collections** in its standard library (`std::collections`). These collections are **heap-allocated** data structures designed for storing and managing data efficiently. The most commonly used Rust collections include:

---

## **1. Vectors (`Vec<T>`)**
A **dynamically sized array** that allows elements to be stored sequentially in memory.

### **Key Features:**
- Stores elements in contiguous memory.
- Can grow or shrink in size.
- Best for when you need a **resizable** list of elements.

### **Example:**
```rust
fn main() {
    let mut numbers = vec![1, 2, 3, 4, 5];
    
    numbers.push(6);  // Add element
    numbers.pop();     // Remove last element
    
    println!("{:?}", numbers); // Output: [1, 2, 3, 4, 5]
}
```

---

## **2. Strings (`String` and `&str`)**
- `String` is a **mutable, growable** heap-allocated string.
- `&str` is a string slice (**immutable** and usually points to a section of a `String`).

### **Example:**
```rust
fn main() {
    let mut s = String::from("Hello");
    s.push_str(", World!");
    println!("{}", s);  // Output: Hello, World!
}
```

---

## **3. Hash Maps (`HashMap<K, V>`)**
A **key-value pair** data structure similar to Python's dictionary or Java's HashMap.

### **Key Features:**
- Stores keys and values efficiently.
- Uses **hashing** for fast lookups.
- Keys must be **hashable** (e.g., integers, strings).

### **Example:**
```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    
    scores.insert("Alice", 90);
    scores.insert("Bob", 85);
    
    println!("{:?}", scores.get("Alice")); // Output: Some(90)
}
```

---

## **4. Hash Sets (`HashSet<T>`)**
A **collection of unique values** that does not allow duplicates.

### **Example:**
```rust
use std::collections::HashSet;

fn main() {
    let mut numbers = HashSet::new();
    numbers.insert(1);
    numbers.insert(2);
    numbers.insert(2);  // Duplicate won't be added
    
    println!("{:?}", numbers); // Output: {1, 2}
}
```

---

## **5. Linked List (`LinkedList<T>`)**
A **doubly linked list** where each element points to the next and previous elements.

### **Example:**
```rust
use std::collections::LinkedList;

fn main() {
    let mut list = LinkedList::new();
    list.push_back(10);
    list.push_front(5);

    println!("{:?}", list); // Output: [5, 10]
}
```

---

## **6. Binary Heap (`BinaryHeap<T>`)**
A **priority queue** that always pops the largest element first.

### **Example:**
```rust
use std::collections::BinaryHeap;

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(3);
    heap.push(5);
    heap.push(1);

    println!("{:?}", heap.pop()); // Output: Some(5)
}
```

---

## **7. VecDeque (`VecDeque<T>`)**
A **double-ended queue** that allows fast insertions/removals at both ends.

### **Example:**
```rust
use std::collections::VecDeque;

fn main() {
    let mut queue = VecDeque::new();
    queue.push_back(1);
    queue.push_front(2);

    println!("{:?}", queue); // Output: [2, 1]
}
```

---

### **Comparison of Collections**
| Collection   | Use Case |
|-------------|---------|
| `Vec<T>`    | Fast, dynamic arrays |
| `String`    | Growable text storage |
| `HashMap<K, V>` | Key-value store with fast lookups |
| `HashSet<T>` | Unique unordered values |
| `LinkedList<T>` | Fast insert/remove at both ends |
| `BinaryHeap<T>` | Priority queue (max heap) |
| `VecDeque<T>` | Double-ended queue |

---

### **Which Rust Collection to Use?**
- **Use `Vec<T>`** if you need a dynamic array with fast indexing.
- **Use `HashMap<K, V>`** for key-value lookups.
- **Use `HashSet<T>`** to store unique items efficiently.
- **Use `VecDeque<T>`** if you need efficient insertions/removals at both ends.
- **Use `BinaryHeap<T>`** when you need a priority queue.

 
