# Debug Trait  

The **`Debug`** trait is a built-in Rust trait that enables you to format a value for debugging purposes. It is commonly used to print human-readable representations of types during development.

---

## Deriving the `Debug` Trait

Most custom types in Rust can automatically implement the `Debug` trait using `#[derive(Debug)]`.

### Example:
```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 10, y: 20 };
    println!("{:?}", point); // Output: Point { x: 10, y: 20 }
}
```

---

## Pretty Printing with `Debug`

For a more readable, multi-line format, use `{:#?}` instead of `{:?}`.

### Example:
```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 10, y: 20 };
    println!("{:#?}", point);
}
```

#### Output:
```
Point {
    x: 10,
    y: 20,
}
```

---

## Implementing the `Debug` Trait Manually

Sometimes, you might want to customize how the `Debug` output is formatted. In such cases, you can implement the `Debug` trait manually.

### Example:
```rust
use std::fmt;

struct Circle {
    radius: f64,
}

impl fmt::Debug for Circle {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Circle with radius: {:.2}", self.radius)
    }
}

fn main() {
    let circle = Circle { radius: 5.678 };
    println!("{:?}", circle); // Output: Circle with radius: 5.68
}
```

---

## Debugging Collections

The `Debug` trait is automatically implemented for common Rust collections like `Vec`, `HashMap`, and arrays.

### Example:
```rust
fn main() {
    let numbers = vec![1, 2, 3, 4];
    println!("{:?}", numbers); // Output: [1, 2, 3, 4]

    let nested = vec![vec![1, 2], vec![3, 4]];
    println!("{:#?}", nested);
}
```

#### Pretty Printed Output:
```
[
    [
        1,
        2,
    ],
    [
        3,
        4,
    ],
]
```

---

## Debug Trait and `Option`/`Result`

The `Debug` trait is implemented for `Option` and `Result`, making it easy to debug their values.

### Example:
```rust
fn main() {
    let some_value: Option<i32> = Some(42);
    let no_value: Option<i32> = None;
    let result: Result<i32, &str> = Err("An error occurred");

    println!("{:?}", some_value); // Output: Some(42)
    println!("{:?}", no_value);   // Output: None
    println!("{:?}", result);     // Output: Err("An error occurred")
}
```

---

## Key Points About the `Debug` Trait

1. **Human-Readable**: Used for development and debugging output.
2. **`#[derive(Debug)]`**: Simplifies the implementation for most types.
3. **`{:?}` vs `{:#?}`**: Use `{:?}` for compact formatting, `{:#?}` for pretty printing.
4. **Custom Implementation**: Allows you to control the debug output.

---

Let me know if you'd like further details or examples!