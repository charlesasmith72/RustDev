# Control Flow
How a program will execute (The "flow" of code)


## `if` Statements in Rust

**`if` statements** in Rust allow conditional execution of code based on a boolean condition. They are versatile, supporting multiple branches and expressions.

---

### **Basic Syntax**

```rust
if condition {
    // Code to execute if condition is true
}
```

#### Example:
```rust
fn main() {
    let number = 10;

    if number > 5 {
        println!("The number is greater than 5");
    }
}
```

---

### **`else` Clause**

The `else` clause provides an alternative block of code to execute if the `if` condition is false.

#### Example:
```rust
fn main() {
    let number = 3;

    if number > 5 {
        println!("The number is greater than 5");
    } else {
        println!("The number is 5 or less");
    }
}
```

---

### **`else if` Clause**

The `else if` clause allows for checking multiple conditions sequentially.

#### Example:
```rust
fn main() {
    let number = 15;

    if number > 20 {
        println!("The number is greater than 20");
    } else if number > 10 {
        println!("The number is greater than 10 but less than or equal to 20");
    } else {
        println!("The number is 10 or less");
    }
}
```

---

### **Using `if` as an Expression**

In Rust, `if` can be used as an expression, meaning it can return a value. This is useful for initializing variables.

#### Example:
```rust
fn main() {
    let condition = true;
    let number = if condition { 10 } else { 20 };

    println!("The number is: {}", number); // Output: The number is: 10
}
```

#### Rules:
- Both branches (`if` and `else`) must return values of the same type.

---

### **Nested `if` Statements**

You can nest `if` statements, though it's recommended to keep nesting minimal for readability.

#### Example:
```rust
fn main() {
    let number = 10;

    if number > 5 {
        if number % 2 == 0 {
            println!("The number is greater than 5 and even");
        }
    }
}
```

---

### **Combining Conditions with Logical Operators**

Rust supports logical operators like `&&` (AND), `||` (OR), and `!` (NOT) to combine multiple conditions.

#### Example:
```rust
fn main() {
    let age = 25;
    let has_ticket = true;

    if age >= 18 && has_ticket {
        println!("You are allowed to enter");
    } else {
        println!("Access denied");
    }
}
```

---

### **Error Handling with `if`**

Rust enforces that the condition in an `if` statement must evaluate to a boolean (`bool`). Other types, like integers, are not allowed.

#### Example:
```rust
fn main() {
    let number = 5;

    // Error: Expected a `bool`, but found an integer
    // if number {
    //     println!("This will not compile");
    // }

    // Correct usage:
    if number > 0 {
        println!("Number is positive");
    }
}
```

---

### **`if let` Syntax**

The `if let` syntax is used to match patterns more concisely, often for `Option` or `Result` types.

#### Example: Using `if let`
```rust
fn main() {
    let some_value = Some(42);

    if let Some(value) = some_value {
        println!("The value is: {}", value);
    } else {
        println!("No value found");
    }
}
```

---

### **Key Points**

1. **Boolean Condition**: The condition in an `if` statement must evaluate to a `bool`.
2. **`else` and `else if`**: Provide alternatives for conditional branching.
3. **Expression Context**: Use `if` to assign values or initialize variables.
4. **Type Safety**: All branches must return the same type when used in expressions.

 

## The `match` Statement  

The **`match`** statement is a powerful control flow construct in Rust used to handle pattern matching. It enables you to compare a value against a series of patterns and execute code based on the first matching pattern. It is exhaustive, meaning all possible cases must be handled.

---

### **Basic Syntax**

```rust
match value {
    pattern1 => action1,
    pattern2 => action2,
    _ => default_action, // Default case (optional, but needed for exhaustiveness)
}
```

---

### **Example: Basic `match`**

```rust
fn main() {
    let number = 3;

    match number {
        1 => println!("One"),
        2 => println!("Two"),
        3 => println!("Three"),
        _ => println!("Other"), // Handles all other cases
    }
}
```

#### Output:
```
Three
```

---

### **Pattern Matching**

#### Matching Multiple Patterns:
You can match multiple values with a single arm using the `|` operator.

```rust
fn main() {
    let number = 1;

    match number {
        1 | 2 => println!("One or Two"),
        3 => println!("Three"),
        _ => println!("Other"),
    }
}
```

---

#### Matching Ranges:
Use `..=` for inclusive ranges in patterns.

```rust
fn main() {
    let number = 5;

    match number {
        1..=5 => println!("Between 1 and 5"),
        _ => println!("Outside range"),
    }
}
```

---

#### Matching Enums:
The `match` statement works seamlessly with enums.

```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

fn main() {
    let dir = Direction::Up;

    match dir {
        Direction::Up => println!("Moving up"),
        Direction::Down => println!("Moving down"),
        Direction::Left => println!("Moving left"),
        Direction::Right => println!("Moving right"),
    }
}
```

---

#### Matching with Guards:
Use a `match` guard (`if condition`) to add extra conditions to patterns.

```rust
fn main() {
    let number = 8;

    match number {
        n if n % 2 == 0 => println!("Even"),
        _ => println!("Odd"),
    }
}
```

---

#### Matching with Bindings:
Bind matched values to variables for use in the arm's action.

```rust
fn main() {
    let number = Some(42);

    match number {
        Some(value) => println!("Found: {}", value),
        None => println!("No value found"),
    }
}
```

---

### **Exhaustiveness**

The `match` statement must handle all possible cases. If a pattern is missing, the program will not compile.

#### Example: Adding a Fallback (`_`)
```rust
fn main() {
    let day = "Monday";

    match day {
        "Monday" => println!("Start of the week"),
        "Friday" => println!("Almost the weekend"),
        _ => println!("Another day"), // Fallback case
    }
}
```

---

### **Returning Values with `match`**

`match` can be used as an expression, returning a value directly.

#### Example:
```rust
fn main() {
    let number = 10;

    let result = match number {
        1 => "One",
        2..=10 => "Between Two and Ten",
        _ => "Other",
    };

    println!("Result: {}", result);
}
```

#### Output:
```
Result: Between Two and Ten
```

---

### **Using `match` with Structs**

You can destructure structs in a `match` statement.

#### Example:
```rust
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let point = Point { x: 10, y: 20 };

    match point {
        Point { x, y } if x == y => println!("Point lies on the line x = y"),
        Point { x, y } => println!("Point is at ({}, {})", x, y),
    }
}
```

---

### **Key Points**

1. **Exhaustiveness**: All possible cases must be handled.
2. **Versatility**: Match values, ranges, enums, structs, and more.
3. **Guards**: Add conditions to patterns with `if`.
4. **Default Case (`_`)**: Use `_` to handle unmatched patterns.
5. **Expressions**: Use `match` to return values directly.

 