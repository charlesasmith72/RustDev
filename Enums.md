# **Enums**

Enums in Rust are powerful and flexible constructs that allow you to define types with multiple possible values. Unlike other languages where enums are just named values, Rust enums can contain **associated data**, support **methods**, and work seamlessly with pattern matching.

---

## **1. Associated Data on Enums**

Enums in Rust can carry data within their variants, similar to struct fields.

### **Example: Associating Data with Enums**
```rust
enum Message {
    Text(String),
    Quit,
    Move { x: i32, y: i32 },
    ChangeColor(i32, i32, i32),
}

fn main() {
    let msg1 = Message::Text(String::from("Hello, Rust!"));
    let msg2 = Message::Move { x: 10, y: 20 };
    let msg3 = Message::ChangeColor(255, 255, 0);

    match msg1 {
        Message::Text(content) => println!("Text message: {}", content),
        _ => println!("Other message type"),
    }
}
```

**Key points:**
- `Text(String)` → Contains a single `String` value.
- `Quit` → Variant with no data.
- `Move { x, y }` → Struct-like variant with named fields.
- `ChangeColor(i32, i32, i32)` → Tuple variant.

---

## **2. Tuple Variants**

Tuple variants allow you to store values without naming the fields, providing concise structuring.

### **Example: Using Tuple Variants**
```rust
enum Shape {
    Circle(f64),          // Tuple variant with a radius
    Rectangle(f64, f64),  // Tuple variant with width and height
}

fn main() {
    let circle = Shape::Circle(10.5);
    let rectangle = Shape::Rectangle(10.0, 20.0);

    match rectangle {
        Shape::Circle(radius) => println!("Circle radius: {}", radius),
        Shape::Rectangle(w, h) => println!("Rectangle: {}x{}", w, h),
    }
}
```

**Advantages of tuple variants:**
- Compact syntax when field names are not required.
- Useful for variants where positional meaning is clear.

---

## **3. Struct Variants**

Struct variants allow defining named fields inside an enum, making the code more readable and self-documenting.

### **Example: Using Struct Variants**
```rust
enum Employee {
    Manager { name: String, team_size: u32 },
    Developer { name: String, language: String },
}

fn main() {
    let manager = Employee::Manager {
        name: String::from("Alice"),
        team_size: 5,
    };

    match manager {
        Employee::Manager { name, team_size } => {
            println!("Manager: {}, Team Size: {}", name, team_size);
        }
        Employee::Developer { .. } => println!("Developer"),
    }
}
```

**Benefits of struct variants:**
- Provides better clarity by using named fields.
- Easier to work with complex data structures.

---

## **4. Nested Enums**

Enums can contain other enums inside them, allowing for complex data structures.

### **Example: Nested Enums**
```rust
enum Status {
    Active,
    Inactive,
}

enum User {
    Admin { name: String, status: Status },
    Guest,
}

fn main() {
    let admin = User::Admin {
        name: String::from("Bob"),
        status: Status::Active,
    };

    match admin {
        User::Admin { name, status: Status::Active } => println!("{} is active", name),
        User::Admin { name, status: Status::Inactive } => println!("{} is inactive", name),
        User::Guest => println!("Guest user"),
    }
}
```

**Use cases:**
- Representing states that have sub-states.
- Structuring data hierarchically.

---

## **5. The `match` Keyword with Enums**

The `match` keyword is a powerful feature in Rust that allows you to handle all possible cases of an enum in a structured manner.

### **Example: Pattern Matching with `match`**
```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

fn check_light(light: TrafficLight) {
    match light {
        TrafficLight::Red => println!("Stop"),
        TrafficLight::Yellow => println!("Caution"),
        TrafficLight::Green => println!("Go"),
    }
}

fn main() {
    check_light(TrafficLight::Red);
}
```

**Advantages of `match`:**
- Ensures exhaustive handling of all variants.
- Helps with clear and safe pattern matching.

---

## **6. Defining Methods on Enums**

You can define methods for enums using `impl` blocks, allowing you to encapsulate behavior.

### **Example: Adding Methods to an Enum**
```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

impl Direction {
    fn as_str(&self) -> &str {
        match self {
            Direction::Up => "Going Up",
            Direction::Down => "Going Down",
            Direction::Left => "Going Left",
            Direction::Right => "Going Right",
        }
    }
}

fn main() {
    let direction = Direction::Left;
    println!("{}", direction.as_str());
}
```

**Key points:**
- Methods allow encapsulation of enum-specific logic.
- `&self` provides a way to work with an instance of the enum.

---

## **7. The `self` Keyword with Enums**

The `self` keyword in an `impl` block refers to the current instance of the enum.

**Common uses of `self`:**
- `&self` for read access to the enum.
- `&mut self` for mutable access.
- `self` for ownership of the instance.

---

## **8. Four Variations on `self` in Enum Methods**

| Signature              | Meaning                                | Example Usage                           |
|-----------------------|----------------------------------------|-----------------------------------------|
| `fn method(self)`      | Takes ownership of the enum           | Transforming enum values                |
| `fn method(&self)`     | Borrows the enum immutably             | Read-only operations                    |
| `fn method(&mut self)` | Borrows the enum mutably               | Modifying the enum in place             |
| `fn method() -> Self`  | Returns an enum instance               | Constructor-like methods                |

---

## **9. Methods with Multiple Parameters**

Methods on enums can take additional parameters alongside `self`.

### **Example: Enum Methods with Parameters**
```rust
enum Account {
    Savings(f64),
    Checking(f64),
}

impl Account {
    fn deposit(&mut self, amount: f64) {
        match self {
            Account::Savings(balance) | Account::Checking(balance) => {
                *balance += amount;
            }
        }
    }
}

fn main() {
    let mut my_account = Account::Savings(1000.0);
    my_account.deposit(500.0);
    if let Account::Savings(balance) = my_account {
        println!("New balance: {}", balance);
    }
}
```

---

## **10. Associated Functions**

Associated functions in enums allow functionality related to the enum without needing an instance.

### **Example: Creating Instances with Associated Functions**
```rust
enum Color {
    Red,
    Green,
    Blue,
}

impl Color {
    fn default() -> Self {
        Color::Red
    }
}

fn main() {
    let default_color = Color::default();
}
```

---

## **11. The `new` Constructor Function**

It is common to define a `new` function to create instances of an enum.

```rust
enum Logger {
    Info(String),
    Warning(String),
    Error(String),
}

impl Logger {
    fn new_error(msg: &str) -> Self {
        Logger::Error(msg.to_string())
    }
}

fn main() {
    let log = Logger::new_error("Something went wrong!");
}
```

---

## **12. Tuple Struct Enums**

Tuple structs inside enums provide a compact way to store data.

```rust
enum Status {
    Success(u32),
    Error(String),
}
```

---

## **13. The Builder Pattern**

Enums can be used to implement the builder pattern for configuring complex objects step by step.

 
