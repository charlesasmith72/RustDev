# Traits 

A **trait** in Rust is a way to define shared behavior that types can implement. Traits are similar to interfaces in other programming languages, enabling polymorphism and code reuse.

---

## Defining a Trait

A trait is defined using the `trait` keyword:

```rust
trait Greet {
    fn greet(&self); // Define a required method
}
```

---

## Implementing a Trait

To make a type implement a trait, use the `impl` keyword:

```rust
struct Person {
    name: String,
}

impl Greet for Person {
    fn greet(&self) {
        println!("Hello, my name is {}!", self.name);
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
    };
    person.greet(); // Output: Hello, my name is Alice!
}
```

---

## Trait Bound Syntax

Traits can be used to restrict the types that functions accept, allowing polymorphism.

### Example: Using Trait Bounds
```rust
fn print_greeting<T: Greet>(item: T) {
    item.greet();
}
```

This function works with any type that implements the `Greet` trait.

---

## Default Implementations

Traits can include default method implementations, which can be overridden by specific types:

```rust
trait Greet {
    fn greet(&self) {
        println!("Hello from a default implementation!");
    }
}

struct Robot;

impl Greet for Robot {} // Uses the default implementation

fn main() {
    let robot = Robot;
    robot.greet(); // Output: Hello from a default implementation!
}
```

---

## Deriving Traits

Rust provides built-in traits like `Debug`, `Clone`, and `PartialEq` that can be automatically derived:

```rust
#[derive(Debug, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p1 = Point { x: 5, y: 10 };
    println!("{:?}", p1); // Output: Point { x: 5, y: 10 }
}
```

---

## Trait Objects (Dynamic Dispatch)

Trait objects allow for dynamic dispatch, where the exact method implementation is determined at runtime:

### Example: Using `Box<dyn Trait>`
```rust
trait Speak {
    fn speak(&self);
}

struct Dog;
impl Speak for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

struct Cat;
impl Speak for Cat {
    fn speak(&self) {
        println!("Meow!");
    }
}

fn main() {
    let animals: Vec<Box<dyn Speak>> = vec![Box::new(Dog), Box::new(Cat)];
    for animal in animals {
        animal.speak(); // Output: Woof! Meow!
    }
}
```

---

## Key Use Cases

- **Polymorphism**: Write generic code that works across multiple types.
- **Code Reuse**: Share behavior across unrelated types.
- **Dynamic Dispatch**: Enable runtime flexibility with trait objects.

 