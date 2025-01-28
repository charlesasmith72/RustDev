# **Enums in Rust**

Rust enums are powerful and versatile. Unlike enums in many other languages, Rust enums can carry associated data and allow complex pattern matching, making them highly expressive.

---

## **1. Associated Data on Enums**

Enums in Rust can include additional data in their variants. This allows each variant to store relevant values, making enums flexible for a wide range of use cases.

### **Example:**
```rust
enum Message {
    Quit,
    Text(String),
    Move { x: i32, y: i32 },
}

fn main() {
    let msg = Message::Move { x: 10, y: 20 };

    match msg {
        Message::Quit => println!("Quit"),
        Message::Text(content) => println!("Message: {}", content),
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
    }
}
```

---

## **2. Tuple Variants**

Tuple variants allow enums to store data without naming the fields. This is useful when the positional meaning of the data is clear.

### **Example:**
```rust
enum Shape {
    Circle(f64),          // Radius
    Rectangle(f64, f64),  // Width and height
}

fn main() {
    let shape = Shape::Circle(10.0);

    match shape {
        Shape::Circle(radius) => println!("Circle with radius {}", radius),
        Shape::Rectangle(w, h) => println!("Rectangle: {}x{}", w, h),
    }
}
```

---

## **3. Struct Variants**

Struct variants allow you to use named fields, making the data more readable and self-documenting.

### **Example:**
```rust
enum Employee {
    Manager { name: String, team_size: u32 },
    Developer { name: String, language: String },
}

fn main() {
    let alice = Employee::Manager {
        name: String::from("Alice"),
        team_size: 5,
    };

    match alice {
        Employee::Manager { name, team_size } => println!("Manager: {}, Team Size: {}", name, team_size),
        Employee::Developer { name, language } => println!("Developer: {}, Language: {}", name, language),
    }
}
```

---

## **4. Nested Enums**

Enums can be nested within other enums, which is useful for hierarchical or state-dependent data.

### **Example:**
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

---

## **5. The `match` Keyword with Enums**

The `match` keyword allows exhaustive pattern matching for enums, ensuring all possible variants are handled.

### **Example:**
```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

fn main() {
    let light = TrafficLight::Red;

    match light {
        TrafficLight::Red => println!("Stop"),
        TrafficLight::Yellow => println!("Caution"),
        TrafficLight::Green => println!("Go"),
    }
}
```

---

## **6. Defining Methods on Enums**

Enums can have methods defined in `impl` blocks, just like structs. Methods allow encapsulating behavior related to the enum.

### **Example:**
```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

impl Direction {
    fn describe(&self) -> &str {
        match self {
            Direction::Up => "Going up",
            Direction::Down => "Going down",
            Direction::Left => "Going left",
            Direction::Right => "Going right",
        }
    }
}

fn main() {
    let dir = Direction::Left;
    println!("{}", dir.describe());
}
```

---

## **7. Catching Multiple Values in `match`**

You can match multiple values in a single `match` arm using the `|` operator.

### **Example:**
```rust
enum State {
    Start,
    InProgress,
    Complete,
}

fn main() {
    let state = State::Start;

    match state {
        State::Start | State::Complete => println!("Boundary state"),
        State::InProgress => println!("Work in progress"),
    }
}
```

---

## **8. `match` with Exact Values**

You can match exact values using constants or literals.

### **Example:**
```rust
enum Status {
    Success,
    Failure(i32),
}

fn main() {
    let result = Status::Failure(404);

    match result {
        Status::Success => println!("Operation succeeded"),
        Status::Failure(404) => println!("Not Found"),
        Status::Failure(_) => println!("Other failure"),
    }
}
```

---

## **9. The `if let` Construct**

`if let` is a shorthand for pattern matching when you only care about one variant.

### **Example:**
```rust
enum Option<T> {
    Some(T),
    None,
}

fn main() {
    let value = Option::Some(42);

    if let Option::Some(x) = value {
        println!("Found: {}", x);
    } else {
        println!("Nothing found");
    }
}
```

---

## **10. The `let else` Construct**

The `let else` construct, introduced in Rust 1.65, simplifies error handling when destructuring.

### **Example:**
```rust
fn process(value: Option<i32>) {
    let Some(x) = value else {
        println!("No value found!");
        return;
    };

    println!("Value: {}", x);
}

fn main() {
    process(Some(42)); // Output: Value: 42
    process(None);     // Output: No value found!
}
```

---

## **11. Enum with Associated Values**

Enums with associated values allow each variant to store data.

### **Example:**
```rust
enum Response {
    Success(u32),
    Error(String),
}

fn main() {
    let res = Response::Success(200);

    match res {
        Response::Success(code) => println!("Success with code: {}", code),
        Response::Error(msg) => println!("Error: {}", msg),
    }
}
```

---

## **12. A Brief Discussion on Enum Memory**

- Enums in Rust are stored efficiently.
- The memory required for an enum is the size of its largest variant plus a small amount of metadata.
- This efficiency makes enums practical for use cases like state machines and data models.

### **Example:**
```rust
enum Data {
    Small(i32),
    Large([i32; 100]),
}

fn main() {
    let small = Data::Small(42);
    let large = Data::Large([0; 100]);
}
```

- In this case, the enum will allocate enough memory to hold the `Large` variant, even if the instance is of the `Small` variant.

 
