
# Tuple Type in Rust

A **tuple** is a fixed-size, ordered collection of elements of potentially different types. Tuples group related data together and are particularly useful when you need to return multiple values from a function.

---

## Syntax to Define a Tuple

```rust
let tuple_name: (Type1, Type2, ...) = (value1, value2, ...);
```

### Example:
```rust
let person: (&str, i32, f64) = ("Alice", 30, 68.5);
```

---

## Accessing Tuple Elements

You can access tuple elements using dot (`.`) notation followed by the index (zero-based).

### Example:
```rust
fn main() {
    let person = ("Alice", 30, 68.5);

    println!("Name: {}", person.0); // Access first element
    println!("Age: {}", person.1); // Access second element
    println!("Height: {}", person.2); // Access third element
}
```

### Output:
```
Name: Alice
Age: 30
Height: 68.5
```

---

## Returning Tuples from Functions

Tuples are often used to return multiple values from a function.

### Example:
```rust
fn calculate(a: i32, b: i32) -> (i32, i32) {
    (a + b, a * b)
}

fn main() {
    let (sum, product) = calculate(5, 3);
    println!("Sum: {}, Product: {}", sum, product);
}
```

### Output:
```
Sum: 8, Product: 15
```

---

## Destructuring Tuples

You can destructure a tuple into individual variables.

### Example:
```rust
fn main() {
    let person = ("Alice", 30, 68.5);

    let (name, age, height) = person;
    println!("Name: {}, Age: {}, Height: {}", name, age, height);
}
```

---

## Nested Tuples

Tuples can be nested, meaning you can have tuples inside tuples.

### Example:
```rust
fn main() {
    let nested_tuple = ((1, 2), (3, 4));

    println!("First tuple: {:?}", nested_tuple.0); // Output: (1, 2)
    println!("Second element of first tuple: {}", nested_tuple.0 .1); // Output: 2
}
```

---

## Tuple Size and Type
The size and types of a tuple are fixed and must be known at compile time.

### Example:
```rust
fn main() {
    let tuple = (10, "Rust", 3.14);

    println!("Tuple: {:?}", tuple);
}
```

### Output:
```
Tuple: (10, "Rust", 3.14)
```

---

## Unit Tuple
A tuple with zero elements is called a **unit tuple** (`()`), which represents the absence of a value.

### Example:
```rust
fn main() {
    let unit: () = ();
    println!("Unit value: {:?}", unit);
}
```

---

## Key Points About Tuples
1. **Fixed Size**: Tuple size cannot change after initialization.
2. **Multiple Types**: Elements can be of different types.
3. **Destructuring**: Easily break a tuple into individual variables.
4. **Useful for Returns**: Ideal for returning multiple values from a function.

 