# **HashMaps in Rust**

A **HashMap** is a **key-value data structure** provided by Rust’s **`std::collections::HashMap`**. It allows for efficient data storage and retrieval by using a hashing function.

---

## **1. What is a HashMap?**
A **HashMap** (also known as an **associative array** or **dictionary**) stores **keys and associated values** in an unordered collection.

- **Keys must be unique.**
- **Values are retrieved using their corresponding keys.**
- **HashMaps are dynamically allocated and grow as needed.**
- **Stored in `std::collections::HashMap`**, so it must be imported before use.

---

## **2. Creating a HashMap**
### **Example: Creating an Empty HashMap**
```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();  // Creates an empty HashMap

    scores.insert(String::from("Alice"), 85);
    scores.insert(String::from("Bob"), 92);

    println!("{:?}", scores);  // Output: {"Alice": 85, "Bob": 92}
}
```
### **Explanation**
- `HashMap::new()` → Creates an empty HashMap.
- `.insert(key, value)` → Adds a key-value pair.

---

## **3. Accessing Values in a HashMap**
Use `.get(&key)` to retrieve values.

### **Example: Retrieving Values**
```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);

    match scores.get("Alice") {
        Some(score) => println!("Alice's score: {}", score),
        None => println!("Score not found"),
    }
}
```
- **Returns `Some(value)` if the key exists.**
- **Returns `None` if the key is missing.**

---

## **4. Updating a HashMap**
### **4.1 Overwriting a Value**
```rust
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);
    scores.insert(String::from("Alice"), 90); // Overwrites 85 with 90

    println!("{:?}", scores); // Output: {"Alice": 90}
}
```
- **A new `insert()` on the same key replaces the old value.**

### **4.2 Only Insert if the Key is Absent (`.entry().or_insert()`)**
```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);

    scores.entry(String::from("Bob")).or_insert(75);
    scores.entry(String::from("Alice")).or_insert(100); // Won't change existing value

    println!("{:?}", scores);  // Output: {"Alice": 85, "Bob": 75}
}
```
- **`entry().or_insert(value)`** → Inserts only if the key is absent.

### **4.3 Modifying a Value Based on the Old Value**
```rust
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);

    if let Some(score) = scores.get_mut("Alice") {
        *score += 10;  // Increases Alice's score by 10
    }

    println!("{:?}", scores); // Output: {"Alice": 95}
}
```
- **`get_mut()` provides a mutable reference.**
- **Use `*score += 10` to modify the value.**

---

## **5. Removing Elements**
Use `.remove(&key)` to delete a key-value pair.

### **Example: Removing a Key**
```rust
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);
    scores.remove("Alice");  // Removes the key "Alice"

    println!("{:?}", scores); // Output: {}
}
```
- **If the key exists, `.remove()` deletes it.**
- **If the key doesn’t exist, nothing happens.**

---

## **6. Iterating Over a HashMap**
Use a `for` loop to iterate through all key-value pairs.

### **Example: Looping Through a HashMap**
```rust
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);
    scores.insert(String::from("Bob"), 92);

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
```
- **The `&scores` reference is used to avoid ownership transfer.**
- **Outputs unordered key-value pairs.**

---

## **7. HashMap with Different Data Types**
Keys and values can be of different types, but both must have the same type within a HashMap.

### **Example: Using Integers as Keys**
```rust
fn main() {
    use std::collections::HashMap;

    let mut employee_ids = HashMap::new();
    employee_ids.insert(101, "Alice");
    employee_ids.insert(102, "Bob");

    println!("{:?}", employee_ids);  // Output: {101: "Alice", 102: "Bob"}
}
```
- **`i32` keys with `&str` values**.

---

## **8. Using HashMap with Strings**
String keys require explicit conversion.

### **Example: Collecting Data into a HashMap**
```rust
use std::collections::HashMap;

fn main() {
    let names = vec!["Alice", "Bob"];
    let scores = vec![85, 92];

    let mut student_scores: HashMap<_, _> = names.into_iter().zip(scores.into_iter()).collect();

    println!("{:?}", student_scores); // Output: {"Alice": 85, "Bob": 92}
}
```
- **`.zip()` combines two iterators into key-value pairs.**
- **`.collect()` converts it into a HashMap.**

---

## **9. Checking for Key Existence**
Use `.contains_key(&key)`.

### **Example: Checking for a Key**
```rust
fn main() {
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 85);

    if scores.contains_key("Alice") {
        println!("Alice's score exists.");
    }
}
```
- Returns **true** if the key is present.

---

## **10. Performance Considerations**
- **O(1) average time complexity** for insertions, deletions, and lookups.
- **Keys must implement `Eq` and `Hash` traits.** (e.g., integers, strings)
- **Uses `SipHash` by default for hashing** (secure but slower).
- **Use `std::collections::BTreeMap`** if key ordering is required.

---

## **📝 Summary Table**
| **Operation** | **Method** | **Example** |
|--------------|-----------|------------|
| **Create an empty HashMap** | `HashMap::new()` | `let mut map = HashMap::new();` |
| **Insert a key-value pair** | `.insert(key, value)` | `map.insert("Alice", 85);` |
| **Retrieve a value** | `.get(&key)` | `map.get("Alice")` → `Some(85)` |
| **Modify a value** | `.entry(key).or_insert(value)` | `map.entry("Bob").or_insert(75);` |
| **Remove a key-value pair** | `.remove(&key)` | `map.remove("Alice");` |
| **Check key existence** | `.contains_key(&key)` | `map.contains_key("Alice")` |
| **Iterate through HashMap** | `for (k, v) in &map` | `for (key, value) in &scores {}` |
| **Merge two vectors into a HashMap** | `.zip().collect()` | `let map: HashMap<_, _> = keys.zip(values).collect();` |

---

## **🚀 Conclusion**
- **HashMaps are powerful for key-value storage** and allow **fast lookups.**
- Use **`.get()` instead of direct indexing** to avoid panics.
- **`.entry().or_insert()` is useful for inserting values only if the key is missing.**
- **Keys must implement `Hash` and `Eq`.**
- **Use `.contains_key()` to check if a key exists** before accessing it.

🚀 **Rust's HashMaps provide high-performance key-value storage with strong safety guarantees!** 🚀

Let me know if you need further explanations! 😊
