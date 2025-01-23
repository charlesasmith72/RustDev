# **Structs**

A **struct** in Rust is a custom data type that allows you to group related values under one name. Structs are similar to objects in other programming languages but without methods by default.

---

## **1. Defining a Struct**

A struct is defined using the `struct` keyword, followed by the name and the fields inside curly braces.

### **Example: Defining a Struct**
```rust
struct Person {
    name: String,
    age: u32,
    is_active: bool,
}
```

---

## **2. Instantiating a Struct**

To create an instance of a struct, provide values for all fields.

### **Example: Instantiating a Struct**
```rust
fn main() {
    let user = Person {
        name: String::from("Alice"),
        age: 30,
        is_active: true,
    };

    println!("{} is {} years old.", user.name, user.age);
}
```

---

## **3. Reading and Writing Struct Fields**

You can access struct fields using dot notation (`.`) and modify them if the instance is mutable.

### **Example: Reading and Writing Fields**
```rust
fn main() {
    let mut user = Person {
        name: String::from("Bob"),
        age: 25,
        is_active: false,
    };

    // Read fields
    println!("Name: {}", user.name);

    // Modify field (struct must be mutable)
    user.age = 26;
    println!("Updated age: {}", user.age);
}
```

---

## **4. Struct Update Syntax**

You can create a new struct instance based on an existing instance using the **struct update syntax**.

### **Example: Struct Update Syntax**
```rust
fn main() {
    let user1 = Person {
        name: String::from("Charlie"),
        age: 40,
        is_active: true,
    };

    let user2 = Person {
        name: String::from("Diana"),
        ..user1
    };

    println!("{} is {} years old.", user2.name, user2.age);
}
```
- `..user1` copies remaining fields from `user1`.
- Ownership must be considered when using fields like `String`.

---

## **5. Passing Structs as Function Arguments**

Structs can be passed to functions either by reference or by value.

### **Example: Passing by Reference**
```rust
fn display_person(person: &Person) {
    println!("{} is {} years old.", person.name, person.age);
}

fn main() {
    let user = Person {
        name: String::from("Eve"),
        age: 22,
        is_active: true,
    };

    display_person(&user);
}
```

---

## **6. Deriving the Debug Trait for Structs**

Rust provides the `Debug` trait to allow struct instances to be printed using `{:?}`.

### **Example: Debug Trait**
```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 10, y: 20 };
    println!("{:?}", p);
}
```

For pretty printing, use `{:#?}`:
```rust
println!("{:#?}", p);
```

---

## **7. The impl Block**

The `impl` block allows defining methods and associated functions for a struct.

---

## **8. Defining Struct Methods**

Methods are functions associated with a struct, taking `self` as a parameter.

### **Example: Defining Methods**
```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect = Rectangle { width: 10, height: 5 };
    println!("Area: {}", rect.area());
}
```

---

## **9. The `self` Keyword**

In Rust, the `self` keyword represents an instance of the struct within methods.

---

## **10. 4 Variations on `self`**

| **Variation**    | **Example**           | **Meaning**                     |
|-----------------|-----------------------|---------------------------------|
| `self`          | `fn take_ownership(self)` | Takes ownership of the struct   |
| `&self`         | `fn borrow(&self)`        | Immutable borrow                |
| `&mut self`     | `fn modify(&mut self)`    | Mutable borrow                   |
| `Self` (uppercase) | `fn new() -> Self`      | Refers to the struct type        |

---

## **11. Methods with Multiple Parameters**

Methods can take multiple parameters alongside `self`.

### **Example:**
```rust
impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    let rect2 = Rectangle { width: 10, height: 20 };

    println!("Can hold: {}", rect1.can_hold(&rect2));
}
```

---

## **12. Associated Functions**

Associated functions do not take `self` as a parameter and are called on the struct itself.

### **Example:**
```rust
impl Rectangle {
    fn square(size: u32) -> Self {
        Self { width: size, height: size }
    }
}

fn main() {
    let sq = Rectangle::square(10);
    println!("Square area: {}", sq.area());
}
```

---

## **13. The `new` Constructor Function**

A common idiom is to provide a `new` function to create instances of a struct.

### **Example:**
```rust
impl Person {
    fn new(name: &str, age: u32) -> Self {
        Self {
            name: String::from(name),
            age,
            is_active: true,
        }
    }
}

fn main() {
    let user = Person::new("Alice", 30);
    println!("{} is {} years old.", user.name, user.age);
}
```

---

## **14. Multiple `impl` Blocks**

Rust allows multiple `impl` blocks for better organization.

### **Example:**
```rust
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

impl Rectangle {
    fn perimeter(&self) -> u32 {
        2 * (self.width + self.height)
    }
}
```

---

## **15. Tuple Structs**

Tuple structs are similar to regular structs but without named fields.

### **Example:**
```rust
struct Color(i32, i32, i32);

fn main() {
    let red = Color(255, 0, 0);
    println!("Red: {}, {}, {}", red.0, red.1, red.2);
}
```

---

## **16. The Builder Pattern**

The builder pattern is used to create complex structs step by step.

### **Example:**
```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn builder() -> PersonBuilder {
        PersonBuilder { name: String::new(), age: 0 }
    }
}

struct PersonBuilder {
    name: String,
    age: u32,
}

impl PersonBuilder {
    fn name(mut self, name: &str) -> Self {
        self.name = String::from(name);
        self
    }

    fn age(mut self, age: u32) -> Self {
        self.age = age;
        self
    }

    fn build(self) -> Person {
        Person { name: self.name, age: self.age }
    }
}

fn main() {
    let person = Person::builder().name("Bob").age(25).build();
    println!("{} is {} years old.", person.name, person.age);
}
```

