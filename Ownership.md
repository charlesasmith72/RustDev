
# Ownership 

**Ownership** is a fundamental concept in Rust's memory management system. It enables Rust to ensure memory safety without requiring a garbage collector. Ownership defines how memory is allocated, accessed, and released during a program's execution.

---

## **Key Rules of Ownership**

1. **Each value in Rust has an owner.**
   - The variable that owns the value is called the owner.

2. **A value can have only one owner at a time.**
   - Ownership can be transferred (moved) between variables.

3. **When the owner goes out of scope, the value is dropped.**
   - The memory used by the value is automatically cleaned up.

---

## **Example of Ownership**

```rust
fn main() {
    let s = String::from("hello"); // `s` owns the string
    println!("{}", s);             // `s` can be used here
} // `s` goes out of scope and the string is dropped
```

When `s` goes out of scope, Rust automatically deallocates the memory used by the string.

---

## **Transferring Ownership (Move)**

When ownership is transferred, the previous owner can no longer access the value.

#### Example:
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // Ownership moves to `s2`

    // println!("{}", s1); // Error: `s1` is no longer valid
    println!("{}", s2); // `s2` now owns the value
}
```

- **Why?**: Rust ensures only one owner exists, preventing data races and dangling references.

---

## **Borrowing (`&`)**

Instead of transferring ownership, you can **borrow** a value using references. Borrowing allows you to access the value without taking ownership.

#### Example: Immutable Borrow
```rust
fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1); // Borrow `s1` without ownership
    println!("Length: {}", len);
    println!("s1: {}", s1); // `s1` is still accessible
}

fn calculate_length(s: &String) -> usize {
    s.len() // Use the borrowed reference
}
```

---

### **Mutable Borrowing (`&mut`)**

You can borrow a value mutably to modify it, but there are restrictions:

1. Only one mutable reference to a value is allowed at a time.
2. Mutable and immutable references cannot coexist.

#### Example:
```rust
fn main() {
    let mut s = String::from("hello");

    change(&mut s); // Mutable borrow
    println!("{}", s); // `s` is updated
}

fn change(s: &mut String) {
    s.push_str(", world");
}
```

---

### **Borrowing Rules**

1. **Multiple Immutable References**:
   - Allowed, as long as no mutable reference exists.
2. **Only One Mutable Reference**:
   - Ensures safe concurrent access.

#### Example:
```rust
fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // Immutable borrow
    let r2 = &s; // Immutable borrow
    println!("{}, {}", r1, r2);

    // let r3 = &mut s; // Error: Cannot borrow `s` as mutable
}
```

---

## **Slices and Ownership**

Slices borrow a part of a collection without taking ownership.

#### Example: String Slices
```rust
fn main() {
    let s = String::from("hello world");
    let word = first_word(&s);
    println!("First word: {}", word);
}

fn first_word(s: &String) -> &str {
    &s[..5] // Borrow a slice of the string
}
```

---

## **Copy Types vs. Move Types**

- **Copy Types**: Simple types like integers, floats, and booleans implement the `Copy` trait. Their values are copied rather than moved.
- **Move Types**: Complex types like `String` and `Vec<T>` transfer ownership.

#### Example:
```rust
fn main() {
    let x = 5; // `i32` is a Copy type
    let y = x; // `x` is still valid
    println!("x: {}, y: {}", x, y);
}
```

---

## **Ownership and Functions**

Passing a value to a function transfers ownership unless it is borrowed.

#### Example:
```rust
fn main() {
    let s = String::from("hello");

    takes_ownership(s); // Ownership moves to the function
    // println!("{}", s); // Error: `s` is no longer valid
}

fn takes_ownership(s: String) {
    println!("{}", s);
}
```

---

### **Returning Ownership**

Ownership can be returned from a function.

#### Example:
```rust
fn main() {
    let s1 = gives_ownership();
    let s2 = String::from("hello");
    let s3 = takes_and_gives_back(s2);

    println!("s1: {}", s1);
    // println!("s2: {}", s2); // Error: Ownership moved
    println!("s3: {}", s3);
}

fn gives_ownership() -> String {
    String::from("hello")
}

fn takes_and_gives_back(s: String) -> String {
    s
}
```

---

## **Key Points**

1. **Ownership Rules**:
   - One owner per value at a time.
   - Ownership is transferred on assignment or when passed to a function.
   - A value is dropped when its owner goes out of scope.

2. **Borrowing**:
   - Use references to borrow values without transferring ownership.
   - Follow Rust's rules for mutable and immutable references.

3. **Memory Safety**:
   - Rust’s ownership system eliminates memory leaks and data races at compile time.

## **Memory** 
 - **Ownership** is a set of rules that the
 compiler checks for to ensure the
 program will be free of memory errors.
 - Memory refers to the area of your
 computer that is responsible for storing
 the information your programs use.
 - It’s ideal to free memory when it is no
 longer in use.
 - Programming languages implement
 different strategies for memory
 management

 