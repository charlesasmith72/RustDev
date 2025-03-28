# Rust Generics Tutorial

Generics in Rust allow you to write flexible and reusable code by parameterizing types. This tutorial covers:

- Understanding Generics
- The Turbofish Operator (`::<>`)
- Generics in Structs
- Generics in Enums
- Generics in Methods
- Multiple Generics

---

## 1. Understanding Generics

Generics allow you to write code that is more flexible and reusable by abstracting over specific data types. Instead of writing separate implementations for different types, you can use generics to create a single implementation that works for multiple types.

For example, instead of defining multiple functions for different types:

```rust
fn add_i32(a: i32, b: i32) -> i32 {
    a + b
}

fn add_f64(a: f64, b: f64) -> f64 {
    a + b
}
```

You can write a single generic function:

```rust
fn add<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {
    a + b
}
```

Now, `add` can work with both integers and floating-point numbers.

---

## 2. The Turbofish Operator (`::<>`)

Rust uses **type inference**, but sometimes it needs help determining the type. The **Turbofish** operator (`::<>`) explicitly provides type parameters.

### Example:
```rust
fn identity<T>(x: T) -> T {
    x
}

fn main() {
    let num = identity::<i32>(42); // Explicitly specifying `i32`
    let text = identity::<&str>("Hello");
    
    println!("{}", num); // 42
    println!("{}", text); // Hello
}
```

If omitted, Rust will infer the type based on usage.

---

## 3. Generics in Structs

Structs can hold generic types, allowing them to store values of any type.

### Example:
```rust
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let int_point = Point { x: 5, y: 10 };
    let float_point = Point { x: 1.2, y: 3.4 };
}
```

Each instance must use **a single type** for `T` unless otherwise specified.

---

## 4. Generics in Enums

Enums can also use generics, commonly seen in Rust’s `Option<T>` and `Result<T, E>` types.

### Example:
```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

fn divide(a: f64, b: f64) -> Result<f64, &'static str> {
    if b == 0.0 {
        Result::Err("Cannot divide by zero")
    } else {
        Result::Ok(a / b)
    }
}

fn main() {
    match divide(10.0, 2.0) {
        Result::Ok(val) => println!("Result: {}", val),
        Result::Err(err) => println!("Error: {}", err),
    }
}
```

---

## 5. Generics in Methods

Methods within structs can use generics. They can either:
- Use the struct's existing generics.
- Introduce new generics.

### Example (Using struct’s generic type):
```rust
struct Container<T> {
    value: T,
}

impl<T> Container<T> {
    fn get_value(&self) -> &T {
        &self.value
    }
}

fn main() {
    let c = Container { value: 100 };
    println!("Value: {}", c.get_value());
}
```

### Example (New generic type in a method):
```rust
impl<T> Container<T> {
    fn mix<U>(self, other: U) -> (T, U) {
        (self.value, other)
    }
}

fn main() {
    let c = Container { value: "Hello" };
    let result = c.mix(42);
    println!("({}, {})", result.0, result.1);
}
```

---

## 6. Multiple Generics

Rust allows multiple generic parameters, each potentially with different types.

### Example:
```rust
struct Pair<T, U> {
    first: T,
    second: U,
}

fn main() {
    let pair = Pair { first: 5, second: "Rust" };
}
```

Multiple generics are also useful in functions and methods.

### Example:
```rust
fn mix<T, U>(a: T, b: U) -> (T, U) {
    (a, b)
}

fn main() {
    let result = mix(100, "Generics");
