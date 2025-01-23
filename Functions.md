# Functions in Rust

Functions in Rust are blocks of reusable code that perform specific tasks. Rust functions are highly flexible, supporting features like arguments, return types, generics, and more.

---

## Defining a Function

Functions are defined using the `fn` keyword, followed by the function name, parameters, and body.

### Syntax:
```rust
fn function_name(parameters) -> ReturnType {
    // Function body
}
```

### Example:
```rust
fn greet() {
    println!("Hello, world!");
}

fn main() {
    greet(); // Call the function
}
```

---

## Parameters

Functions can accept parameters with explicit type annotations.

### Example:
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let sum = add(5, 3);
    println!("Sum: {}", sum); // Output: Sum: 8
}
```

---

## Return Values

Functions can return values using the `->` syntax. The last expression in a function determines the return value.

### Example:
```rust
fn square(num: i32) -> i32 {
    num * num
}

fn main() {
    let result = square(4);
    println!("Square: {}", result); // Output: Square: 16
}
```

---

## Early Return

Use the `return` keyword to exit a function early.

### Example:
```rust
fn check_even(num: i32) -> bool {
    if num % 2 == 0 {
        return true;
    }
    false
}

fn main() {
    println!("Is 4 even? {}", check_even(4)); // Output: Is 4 even? true
}
```

---

## Functions with No Return (Unit Type)

Functions that do not return a value have an implicit return type of `()` (unit).

### Example:
```rust
fn log_message(message: &str) {
    println!("Log: {}", message);
}

fn main() {
    log_message("This is a log.");
}
```

---

## Functions with Generics

Functions can use generics to handle multiple types.

### Example:
```rust
fn largest<T: PartialOrd>(a: T, b: T) -> T {
    if a > b {
        a
    } else {
        b
    }
}

fn main() {
    let max = largest(5, 8);
    println!("Largest: {}", max); // Output: Largest: 8
}
```

---

## Closures vs. Functions

Rust supports **closures**, which are anonymous functions. Closures capture their environment, while functions do not.

### Example:
```rust
fn add_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    let closure = |x: i32| x + 1;

    println!("Function: {}", add_one(5)); // Output: 6
    println!("Closure: {}", closure(5)); // Output: 6
}
```

---

## Nested Functions

Functions can be nested within other functions, providing scope-specific utilities.

### Example:
```rust
fn outer_function(x: i32) -> i32 {
    fn inner_function(y: i32) -> i32 {
        y * 2
    }
    inner_function(x) + 1
}

fn main() {
    println!("{}", outer_function(3)); // Output: 7
}
```

---

## Variadic Functions

Rust does not natively support variadic functions (e.g., `printf`-style), but you can achieve similar behavior using slices or iterators.

### Example:
```rust
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

fn main() {
    let numbers = [1, 2, 3, 4];
    println!("Sum: {}", sum(&numbers)); // Output: Sum: 10
}
```

---

## Key Points

1. **Explicit Types**: All parameters and return types must have explicit types.
2. **Ownership**: Functions interact with Rust’s ownership model, transferring or borrowing values.
3. **Modular Design**: Functions promote modular, reusable, and testable code.

 

## Function Parameters and Arguments 

In Rust, **parameters** are variables defined in a function's signature, while **arguments** are the actual values passed when the function is called. Rust enforces type safety, so all parameters must have explicit type annotations.

---

### **Defining and Using Parameters**

Parameters are specified in the parentheses after the `fn` keyword, followed by their type.

#### Syntax:
```rust
fn function_name(parameter1: Type1, parameter2: Type2, ...) -> ReturnType {
    // Function body
}
```

#### Example:
```rust
fn greet(name: &str) {
    println!("Hello, {}!", name);
}

fn main() {
    greet("Alice"); // Output: Hello, Alice!
}
```

---

### **Passing Arguments**

#### 1. **By Value**
By default, arguments are passed by value in Rust. This creates a copy of the argument, leaving the original unaffected.

```rust
fn square(num: i32) -> i32 {
    num * num
}

fn main() {
    let x = 5;
    let result = square(x);
    println!("x: {}, result: {}", x, result); // Output: x: 5, result: 25
}
```

#### 2. **By Reference**
To avoid copying or to modify the original value, pass arguments by reference using `&` or `&mut`.

##### Immutable Reference Example:
```rust
fn print_length(s: &String) {
    println!("Length: {}", s.len());
}

fn main() {
    let text = String::from("Hello");
    print_length(&text); // Borrow `text` without transferring ownership
    println!("Text: {}", text); // `text` remains accessible
}
```

##### Mutable Reference Example:
```rust
fn append_world(s: &mut String) {
    s.push_str(" World");
}

fn main() {
    let mut greeting = String::from("Hello");
    append_world(&mut greeting); // Pass a mutable reference
    println!("{}", greeting);    // Output: Hello World
}
```

---

### **Multiple Parameters**

You can define functions with multiple parameters separated by commas.

#### Example:
```rust
fn calculate_area(width: f64, height: f64) -> f64 {
    width * height
}

fn main() {
    let area = calculate_area(5.0, 10.0);
    println!("Area: {}", area); // Output: Area: 50.0
}
```

---

### **Default Parameters (Workarounds)**

Rust does not support default parameter values directly. Instead, you can use **`Option<T>`** or function overloading-like patterns.

#### Example: Using `Option<T>` for Defaults
```rust
fn greet(name: Option<&str>) {
    match name {
        Some(n) => println!("Hello, {}!", n),
        None => println!("Hello, World!"),
    }
}

fn main() {
    greet(Some("Alice")); // Output: Hello, Alice!
    greet(None);          // Output: Hello, World!
}
```

---

### **Variable Number of Arguments (Variadic-like Behavior)**

Rust does not natively support variadic parameters (e.g., `printf` style). However, you can achieve similar functionality with slices (`&[T]`).

#### Example: Sum Using a Slice
```rust
fn sum(numbers: &[i32]) -> i32 {
    numbers.iter().sum()
}

fn main() {
    let nums = [1, 2, 3, 4];
    println!("Sum: {}", sum(&nums)); // Output: Sum: 10
}
```

---

### **Generic Parameters**

Functions can use generics to work with multiple types, making them highly reusable.

#### Example: Generic Function
```rust
fn largest<T: PartialOrd>(a: T, b: T) -> T {
    if a > b {
        a
    } else {
        b
    }
}

fn main() {
    let max_int = largest(10, 20);
    let max_float = largest(1.5, 3.7);

    println!("Max int: {}, Max float: {}", max_int, max_float);
}
```

---

### **Lifetime Annotations in Parameters**

When functions accept references, lifetimes might need to be specified to ensure they remain valid.

#### Example: Function with Lifetimes
```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("Hello");
    let string2 = "World!";
    let result = longest(&string1, string2);
    println!("Longest string: {}", result);
}
```

---

## Key Points

1. **Explicit Typing**: All parameters must have explicit type annotations.
2. **Ownership and Borrowing**:
   - Pass by value for ownership.
   - Pass by reference (`&`) to borrow.
   - Use `&mut` to borrow mutably.
3. **No Default Parameters**: Use `Option<T>` or similar workarounds.
4. **Generics and Lifetimes**: Enhance flexibility while ensuring type and memory safety.

 

## Return Values 

Functions in Rust can return values using the `->` syntax followed by the return type. The return value is usually the last expression in the function body, and it does not require a `return` keyword unless you want to return early.

---

### **Syntax**

```rust
fn function_name(parameters) -> ReturnType {
    // Function body
}
```

---

### **Returning a Value**

The last expression in the function body determines the return value. No semicolon (`;`) should be placed at the end of the expression.

#### Example:
```rust
fn square(num: i32) -> i32 {
    num * num // Last expression determines the return value
}

fn main() {
    let result = square(4);
    println!("Square: {}", result); // Output: Square: 16
}
```

---

### **Using the `return` Keyword**

The `return` keyword can be used for early returns or to explicitly specify the return value.

#### Example:
```rust
fn is_even(num: i32) -> bool {
    if num % 2 == 0 {
        return true; // Early return
    }
    false // Last expression
}

fn main() {
    println!("Is 4 even? {}", is_even(4)); // Output: Is 4 even? true
}
```

---

### **Unit Return Type**

Functions that do not return a value implicitly return the unit type `()`.

#### Example:
```rust
fn greet(name: &str) {
    println!("Hello, {}!", name); // Implicitly returns `()`
}

fn main() {
    greet("Alice"); // Output: Hello, Alice!
}
```

---

### **Returning Multiple Values**

To return multiple values, use a **tuple**.

#### Example:
```rust
fn min_max(numbers: &[i32]) -> (i32, i32) {
    let min = *numbers.iter().min().unwrap();
    let max = *numbers.iter().max().unwrap();
    (min, max) // Return a tuple
}

fn main() {
    let numbers = [3, 1, 4, 1, 5, 9];
    let (min, max) = min_max(&numbers);
    println!("Min: {}, Max: {}", min, max); // Output: Min: 1, Max: 9
}
```

---

### **Returning References**

When returning a reference, lifetimes may need to be specified to ensure memory safety.

#### Example:
```rust
fn first_element<'a>(arr: &'a [i32]) -> &'a i32 {
    &arr[0]
}

fn main() {
    let numbers = [10, 20, 30];
    let first = first_element(&numbers);
    println!("First element: {}", first); // Output: First element: 10
}
```

---

### **Returning Generic Types**

Functions can return generic types to handle multiple types.

#### Example:
```rust
fn identity<T>(value: T) -> T {
    value
}

fn main() {
    let int_value = identity(42);
    let str_value = identity("Rust");

    println!("Integer: {}", int_value); // Output: Integer: 42
    println!("String: {}", str_value); // Output: String: Rust
}
```

---

### **Return Type: Result**

Rust uses the `Result` type for functions that may fail, ensuring errors are handled.

#### Example:
```rust
fn divide(a: i32, b: i32) -> Result<i32, &'static str> {
    if b == 0 {
        Err("Cannot divide by zero")
    } else {
        Ok(a / b)
    }
}

fn main() {
    match divide(10, 2) {
        Ok(result) => println!("Result: {}", result), // Output: Result: 5
        Err(e) => println!("Error: {}", e),
    }
}
```

---

### **Return Type: Option**

Use `Option` for functions that may or may not return a value.

#### Example:
```rust
fn find_item(items: &[i32], target: i32) -> Option<usize> {
    items.iter().position(|&x| x == target)
}

fn main() {
    let numbers = [1, 2, 3, 4];
    match find_item(&numbers, 3) {
        Some(index) => println!("Found at index: {}", index), // Output: Found at index: 2
        None => println!("Not found"),
    }
}
```

---

### **Key Points**

1. **Type Annotations**: The return type must always be specified after `->`.
2. **Implicit Return**: The last expression in the function is the return value unless explicitly overridden with `return`.
3. **Multiple Returns**: Use tuples for multiple values.
4. **Error Handling**: Use `Result` for functions that may fail and `Option` for optional values.
5. **Generics and Lifetimes**: Combine generics and lifetimes for flexible and safe returns.

 