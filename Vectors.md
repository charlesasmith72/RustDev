# **Vectors in Rust**

## **What is a Vector?**
A **vector (`Vec<T>`)** is a **dynamic, growable array** in Rust that stores elements of the same type in a contiguous memory block. Unlike arrays (`[T; N]`), which have a fixed size, vectors can expand or shrink during runtime.

Vectors are defined in Rust’s **standard library (`std::vec::Vec`)**, making them a fundamental part of collections.

---

## **1. Creating Vectors**
Vectors can be created in multiple ways.

### **Example: Using `Vec::new()`**
```rust
fn main() {
    let v: Vec<i32> = Vec::new();  // Creates an empty vector
    println!("{:?}", v);            // Output: []
}
```
- Requires **explicit type annotation** (`Vec<i32>`).
- Initially **empty**, but can be modified.

### **Example: Using `vec![]` Macro (Recommended)**
```rust
fn main() {
    let v = vec![1, 2, 3, 4, 5];  // Initializes a vector with values
    println!("{:?}", v);           // Output: [1, 2, 3, 4, 5]
}
```
- **Type inference**: No need to specify `Vec<i32>` explicitly.
- **Best for initializing vectors with predefined values**.

### **Example: Creating a Vector with Default Values**
```rust
fn main() {
    let v = vec![0; 5];  // Creates a vector with five zeros
    println!("{:?}", v);  // Output: [0, 0, 0, 0, 0]
}
```
- **Syntax:** `[initial_value; size]`.
- Useful when **pre-filling** vectors with default values.

---

## **2. Reading Vector Elements**
You can access vector elements using **indexing** or the **`.get()` method**.

### **Example: Accessing Elements Using Indexing**
```rust
fn main() {
    let v = vec![10, 20, 30, 40];
    println!("{}", v[2]);  // Output: 30
}
```
- **Direct indexing (`v[index]`)** works but will **panic** if the index is out of bounds.

### **Example: Using `.get()` for Safe Access**
```rust
fn main() {
    let v = vec![10, 20, 30, 40];

    match v.get(2) {
        Some(value) => println!("Value: {}", value),
        None => println!("Index out of bounds"),
    }
}
```
- **Advantage**: `.get()` **returns `Option<T>`**, preventing crashes.

---

## **3. Writing Vector Elements**
### **Example: Modifying an Element**
```rust
fn main() {
    let mut v = vec![1, 2, 3];
    v[1] = 10;  // Changes the second element
    println!("{:?}", v);  // Output: [1, 10, 3]
}
```
- Vectors **must be mutable (`mut`)** to modify elements.

### **Example: Using `.get_mut()` for Safe Mutable Access**
```rust
fn main() {
    let mut v = vec![5, 10, 15];

    if let Some(val) = v.get_mut(1) {
        *val += 5;
    }

    println!("{:?}", v);  // Output: [5, 15, 15]
}
```
- **Advantage**: Avoids panicking if the index is invalid.

---

## **4. Adding and Removing Vector Elements**
Vectors allow dynamic resizing using methods like `.push()`, `.insert()`, `.pop()`, and `.remove()`.

### **Adding Elements**
#### **Example: Using `.push()` (Append to End)**
```rust
fn main() {
    let mut v = vec![1, 2, 3];
    v.push(4);
    println!("{:?}", v);  // Output: [1, 2, 3, 4]
}
```
- **O(1) operation** (amortized) as vectors grow dynamically.

#### **Example: Using `.insert()` (Insert at Specific Position)**
```rust
fn main() {
    let mut v = vec![10, 20, 30];
    v.insert(1, 15);  // Inserts 15 at index 1
    println!("{:?}", v);  // Output: [10, 15, 20, 30]
}
```
- **O(n) operation** as shifting occurs.

---

### **Removing Elements**
#### **Example: Using `.pop()` (Remove Last Element)**
```rust
fn main() {
    let mut v = vec![1, 2, 3];
    v.pop();
    println!("{:?}", v);  // Output: [1, 2]
}
```
- **Returns `Option<T>`**, allowing safe handling.

#### **Example: Using `.remove()` (Remove from a Specific Index)**
```rust
fn main() {
    let mut v = vec![100, 200, 300, 400];
    let removed = v.remove(1);
    println!("Removed: {}, Remaining: {:?}", removed, v);  
    // Output: Removed: 200, Remaining: [100, 300, 400]
}
```
- **O(n) operation** as shifting occurs.

---

## **5. The `.get()` Method**
The `.get()` method safely retrieves an element as an `Option<T>`.

### **Example: Safe Element Retrieval**
```rust
fn main() {
    let v = vec![5, 10, 15];

    match v.get(1) {
        Some(value) => println!("Value: {}", value),
        None => println!("Index out of bounds"),
    }
}
```
- **Returns `Some(value)`** if the index is valid.
- **Returns `None`** if the index is out of bounds.

---

## **6. Iterating Over Vectors**
### **Example: Iterating with a `for` Loop**
```rust
fn main() {
    let v = vec![1, 2, 3];

    for num in &v {
        println!("{}", num);
    }
}
```
- **`&v`** prevents **moving** the vector.

### **Example: Iterating Mutably**
```rust
fn main() {
    let mut v = vec![2, 4, 6];

    for num in &mut v {
        *num *= 2;
    }

    println!("{:?}", v);  // Output: [4, 8, 12]
}
```
- **`&mut v`** allows modifying elements.

---

## **7. Clearing and Resizing Vectors**
### **Example: Clearing a Vector**
```rust
fn main() {
    let mut v = vec![1, 2, 3];
    v.clear();  // Removes all elements
    println!("{:?}", v);  // Output: []
}
```
- Leaves the **capacity unchanged**.

### **Example: Resizing a Vector**
```rust
fn main() {
    let mut v = vec![1, 2, 3];
    v.resize(5, 0);
    println!("{:?}", v);  // Output: [1, 2, 3, 0, 0]
}
```
- **Adds default values (`0`)** if expanding.

---

# **📝 Summary Table**
| **Operation**          | **Method**        | **Example** |
|------------------------|------------------|------------|
| **Creating a vector**  | `Vec::new()`     | `let v: Vec<i32> = Vec::new();` |
| **Creating with values** | `vec![]`       | `let v = vec![1, 2, 3];` |
| **Reading elements**   | `v[index]`       | `println!("{}", v[1]);` |
| **Safe access**        | `.get(index)`    | `v.get(2).unwrap_or(&0);` |
| **Adding elements**    | `.push(value)`   | `v.push(4);` |
| **Inserting elements** | `.insert(i, val)` | `v.insert(1, 10);` |
| **Removing last item** | `.pop()`        | `v.pop();` |
| **Removing at index**  | `.remove(i)`    | `v.remove(2);` |
| **Clearing all items** | `.clear()`      | `v.clear();` |
| **Resizing**           | `.resize(n, val)` | `v.resize(5, 0);` |

---

# **🚀 Conclusion**
- **Vectors (`Vec<T>`)** are **dynamic arrays** that grow and shrink.
- Use **`.push()`** to add and **`.pop()`** to remove elements.
- Use **`.get()`** for safe access to prevent panics.
- Use **iterators (`for`)** for efficient traversal.

🚀 **Vectors are one of the most commonly used data structures in Rust!** 🚀
 
