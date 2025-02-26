Here's a beginner-friendly tutorial on `IndexMap` in Rust. `IndexMap` is a data structure from the [`indexmap`](https://docs.rs/indexmap/latest/indexmap/) crate, which provides a hash map that preserves the insertion order of its elements.

---

### **Introduction to `IndexMap` in Rust**
In Rust, the standard `HashMap` does not guarantee the order of elements, but sometimes you need a map that maintains insertion order. This is where `IndexMap` comes in.

#### **Installing `IndexMap`**
To use `IndexMap`, add it to your `Cargo.toml`:

```toml
[dependencies]
indexmap = "2"
```

Then, in your Rust file, include it:

```rust
use indexmap::IndexMap;
```

---

### **Basic Usage of `IndexMap`**
#### **Creating an `IndexMap`**
Let's start by creating an `IndexMap` and adding some key-value pairs:

```rust
use indexmap::IndexMap;

fn main() {
    let mut map = IndexMap::new();

    map.insert("apple", 3);
    map.insert("banana", 5);
    map.insert("orange", 2);

    println!("{:?}", map);
}
```
**Output:**
```
{"apple": 3, "banana": 5, "orange": 2}
```
Unlike `HashMap`, `IndexMap` preserves the order of insertion.

---

### **Accessing Elements**
#### **Using `get`**
You can retrieve values like a regular hash map:

```rust
println!("Apples: {:?}", map.get("apple"));
```

#### **Iterating Over an `IndexMap`**
The order is preserved when iterating:

```rust
for (key, value) in &map {
    println!("{}: {}", key, value);
}
```

**Output:**
```
apple: 3
banana: 5
orange: 2
```

---

### **Modifying Elements**
#### **Updating a Value**
```rust
map.insert("banana", 7);
println!("{:?}", map);
```

This updates `"banana"`'s value while keeping its position unchanged.

#### **Removing Elements**
```rust
map.remove("orange");
println!("{:?}", map);
```

**Output:**
```
{"apple": 3, "banana": 7}
```

---

### **Index-based Access**
A key feature of `IndexMap` is that you can access items by index.

#### **Get by Index**
```rust
if let Some((key, value)) = map.get_index(0) {
    println!("First inserted: {} -> {}", key, value);
}
```

#### **Get Index of a Key**
```rust
if let Some(index) = map.get_index_of("banana") {
    println!("Index of 'banana': {}", index);
}
```

#### **Remove by Index**
```rust
map.swap_remove_index(1);
println!("{:?}", map);
```

---

### **Sorting an `IndexMap`**
Since `IndexMap` preserves order, you can sort it:

```rust
map.sort_by(|_, v1, _, v2| v1.cmp(v2));
println!("{:?}", map);
```

This sorts by values in ascending order.

---

### **Conclusion**
- `IndexMap` behaves like `HashMap` but preserves insertion order.
- You can access elements by index.
- Sorting is possible while keeping order.

Would you like any additional examples? 🚀
