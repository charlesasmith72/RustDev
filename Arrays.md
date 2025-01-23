# Here’s a quick overview of **Arrays in Rust**:

 
## Arrays in Rust

An **array** in Rust is a collection of elements of the same type with a fixed size. Arrays are stored on the stack, and their size must be known at compile time.

---

### Syntax to Define an Array
```rust
let array_name: [type; size] = [value1, value2, value3];
```

#### Examples:
1. **Explicit Type and Size**
   ```rust
   let numbers: [i32; 5] = [1, 2, 3, 4, 5];
   ```

2. **Type Inferred**
   ```rust
   let fruits = ["apple", "banana", "cherry"];
   ```

3. **Fill with the Same Value**
   ```rust
   let zeros = [0; 5]; // Creates an array: [0, 0, 0, 0, 0]
   ```

---

### Accessing Elements
Use indexing to access elements (zero-based indexing):
```rust
let first = numbers[0]; // Access the first element
let second = numbers[1]; // Access the second element
```

#### Example:
```rust
let nums = [10, 20, 30];
println!("First: {}", nums[0]); // Output: First: 10
```

---

### Iterating Over Arrays
Use a loop to iterate through an array:
1. **`for` Loop**
   ```rust
   let nums = [1, 2, 3, 4, 5];
   for num in nums.iter() {
       println!("{}", num);
   }
   ```

2. **With Index**
   ```rust
   for (i, num) in nums.iter().enumerate() {
       println!("Index: {}, Value: {}", i, num);
   }
   ```

---

### Array Length
Get the size of an array using the `.len()` method:
```rust
let nums = [1, 2, 3, 4];
println!("Length: {}", nums.len()); // Output: Length: 4
```

---

### Multidimensional Arrays
Rust supports arrays with multiple dimensions:
```rust
let matrix: [[i32; 3]; 2] = [
    [1, 2, 3],
    [4, 5, 6],
];

println!("Element: {}", matrix[1][2]); // Accesses the element 6
```

---

### Bounds Checking
Rust performs bounds checking at runtime. Accessing an invalid index will cause a **panic**:
```rust
let nums = [1, 2, 3];
println!("{}", nums[3]); // Panics: index out of bounds
```

---

### Limitations of Arrays
- Fixed size: Use **vectors** (`Vec<T>`) for a dynamic collection.
- Stored on the stack, making them less suitable for very large datasets.

---

### Key Use Cases
- Statically sized collections.
- High performance due to stack allocation.

---
 