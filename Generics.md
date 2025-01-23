
# Generics in Rust

Generics in Rust allow you to write flexible and reusable code for multiple data types. They enable you to parameterize types in functions, structs, enums, and traits, ensuring type safety without duplication.

---

## Syntax of Generics

### Generic Parameter Declaration
- Generic type parameters are declared using angle brackets `<T>`.

### Example: Generic Function
```rust
fn print_item<T>(item: T) {
    println!("{:?}", item);
}

fn main() {
    print_item(42);          // Works with integers
    print_item("Hello!");    // Works with strings
}
```

---

## Using Generics with Structs

### Example: Generic Struct
```rust
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let int_point = Point { x: 5, y: 10 };
    let float_point = Point { x: 1.5, y: 2.3 };

    println!("int_point: ({}, {})", int_point.x, int_point.y);
    println!("float_point: ({}, {})", float_point.x, float_point.y);
}
```

---

## Using Generics with Enums

Generics are commonly used with enums like `Option` and `Result`.

### Example: Generic Enum
```rust
enum Option<T> {
    Some(T),
    None,
}

fn main() {
    let some_number = Option::Some(42);
    let no_number: Option<i32> = Option::None;

    println!("{:?}", some_number);
    println!("{:?}", no_number);
}
```

---

## Traits and Bounds with Generics

Generics can be constrained using **trait bounds** to restrict the types they can accept.

### Example: Trait Bound with `PartialOrd`
```rust
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![10, 20, 5, 40];
    println!("The largest number is {}", largest(&numbers));
}
```

---

## Default Trait Bounds

- Some traits are automatically available to all types.
- Example: Debug can be added with `T: Debug` to ensure the type supports `{:?}` formatting.

### Example: Debug Trait Bound
```rust
use std::fmt::Debug;

fn print_debug<T: Debug>(item: T) {
    println!("{:?}", item);
}

fn main() {
    print_debug("Generics in Rust");
}
```

---

## Generic Implementations

You can implement methods for structs or enums with generics.

### Example: Implementing Methods on Generic Structs
```rust
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let point = Point { x: 5, y: 10 };
    println!("x: {}", point.x());
}
```

---

## Lifetimes and Generics

Generics can also include lifetimes to ensure references are valid.

### Example: Combining Generics and Lifetimes
```rust
fn longest<'a, T>(x: &'a T, y: &'a T) -> &'a T
where
    T: PartialOrd,
{
    if x > y {
        x
    } else {
        y
    }
}

fn main() {
    let a = 5;
    let b = 10;
    println!("The largest value is {}", longest(&a, &b));
}
```

---

## Key Points

1. **Type Safety**: Generics ensure that code remains type-safe at compile time.
2. **Flexibility**: Avoid duplicating code for multiple types.
3. **Constraints with Traits**: Use bounds like `T: Trait` to restrict types.
4. **Performance**: Generics are monomorphized, meaning the compiler generates specific code for each concrete type, ensuring no runtime cost.

 