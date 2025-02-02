# **Option and Result Enums in Rust**

Rust provides the **`Option<T>`** and **`Result<T, E>`** enums for handling **optional values** and **error handling** safely, eliminating the need for `null` values and exceptions.

---

## **1. The `Option<T>` Enum**
The `Option<T>` enum represents a value that **might be present (`Some(T)`) or absent (`None`)**.

### **Definition in Rust's standard library:**
```rust
enum Option<T> {
    Some(T),
    None,
}
```

### **Example: Using `Option<T>`**
```rust
fn find_square_root(num: f64) -> Option<f64> {
    if num >= 0.0 {
        Some(num.sqrt())
    } else {
        None
    }
}

fn main() {
    let result = find_square_root(9.0);

    match result {
        Some(value) => println!("Square root: {}", value),
        None => println!("No real square root exists"),
    }
}
```

- ✅ **`Some(value)`** → Contains a valid value.
- ❌ **`None`** → Represents the absence of a value.

---

## **2. The `Result<T, E>` Enum**
The `Result<T, E>` enum is used for **error handling**, indicating either **success (`Ok(T)`)** or **failure (`Err(E)`)**.

### **Definition in Rust's standard library:**
```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

### **Example: Using `Result<T, E>`**
```rust
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Cannot divide by zero"))
    } else {
        Ok(a / b)
    }
}

fn main() {
    let result = divide(10.0, 2.0);

    match result {
        Ok(value) => println!("Result: {}", value),
        Err(error) => println!("Error: {}", error),
    }
}
```

- ✅ **`Ok(value)`** → The operation succeeded.
- ❌ **`Err(error)`** → An error occurred.

---

## **3. `unwrap` and `expect` Methods**
These methods **extract the inner value** of `Option<T>` or `Result<T, E>` but **panic** if the value is `None` or `Err`.

### **Using `unwrap` (Risky)**
```rust
fn main() {
    let number: Option<i32> = Some(42);
    println!("Number: {}", number.unwrap()); // ✅ Works

    let none_value: Option<i32> = None;
    // println!("{}", none_value.unwrap()); // ❌ Panics!
}
```

### **Using `expect` (With Custom Panic Message)**
```rust
fn main() {
    let result: Result<i32, &str> = Err("Something went wrong");
    
    println!("{}", result.expect("Failed to get value")); // ❌ Panics with custom message
}
```
- `unwrap()` → Panics with a default error message.
- `expect("Message")` → Panics with a **custom message** (more helpful for debugging).

---

## **4. The `unwrap_or` Method**
The `unwrap_or(default_value)` method **returns a default value** if `None` or `Err` occurs.

### **Example: Using `unwrap_or`**
```rust
fn main() {
    let some_number: Option<i32> = Some(42);
    let none_number: Option<i32> = None;

    println!("{}", some_number.unwrap_or(0));  // ✅ Output: 42
    println!("{}", none_number.unwrap_or(0));  // ✅ Output: 0
}
```

**Use case:** Prevent panics by **providing a fallback value**.

---

## **5. The `get` Method**
The `.get()` method is available on collections like `Vec<T>` and `HashMap<K, V>` to **safely retrieve an element**.

### **Example: Using `get()` on a Vector**
```rust
fn main() {
    let numbers = vec![10, 20, 30];

    match numbers.get(1) {
        Some(value) => println!("Found: {}", value),
        None => println!("Index out of bounds"),
    }
}
```

**Use case:** Avoids panics caused by **out-of-bounds indexing**.

---

## **6. `match` with Enums**
Both `Option<T>` and `Result<T, E>` work well with `match`, allowing safe handling of different cases.

### **Example: `Option<T>` with `match`**
```rust
fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}

fn main() {
    match divide(10.0, 0.0) {
        Some(result) => println!("Result: {}", result),
        None => println!("Cannot divide by zero"),
    }
}
```

### **Example: `Result<T, E>` with `match`**
```rust
fn open_file(filename: &str) -> Result<String, String> {
    if filename == "config.txt" {
        Ok(String::from("File content here"))
    } else {
        Err(String::from("File not found"))
    }
}

fn main() {
    let file = open_file("data.txt");

    match file {
        Ok(content) => println!("File content: {}", content),
        Err(error) => println!("Error: {}", error),
    }
}
```

---

# **📝 Summary Table**
| **Feature** | **Enum Type** | **Variants** | **Common Methods** |
|------------|-------------|-------------|--------------------|
| **Optional Values** | `Option<T>` | `Some(T)`, `None` | `.unwrap()`, `.expect()`, `.unwrap_or(default)`, `match` |
| **Error Handling** | `Result<T, E>` | `Ok(T)`, `Err(E)` | `.unwrap()`, `.expect()`, `.unwrap_or(default)`, `match` |
| **Safe Indexing** | `Vec<T>::get()` | Returns `Option<&T>` | `match vec.get(index) { Some(val) => ... }` |

---

# **✅ Best Practices**
✔ **Use `match` for safe handling** of `Option<T>` and `Result<T, E>`.  
✔ **Use `unwrap_or(default_value)`** to provide default fallbacks.  
✔ **Use `expect("message")`** when you are confident about the value but want better debugging messages.  
✔ **Avoid `unwrap()`** unless you're absolutely sure it won't panic.  
✔ **Use `.get()` for safe indexing** instead of direct indexing (`arr[i]`).

---

# **🚀 Conclusion**
- **`Option<T>`** eliminates `null` values and forces explicit handling of missing values.
- **`Result<T, E>`** provides a **safe** and **idiomatic** way to handle errors in Rust.
- **Methods like `unwrap_or`, `get`, and `match`** ensure robust and crash-free programs.

🔹 **Rust encourages explicit handling of missing or failing cases**, making programs more predictable and reliable. 🚀

---
## Methods commonly used with Rust's `Option<T>` and `Result<T, E>` enums:

### **Methods for `Option<T>` and `Result<T, E>` Enums in Rust**

#### **1. `Option<T>` Methods**
| Method | Description |
|---------|------------|
| `.is_some()` | Returns `true` if the `Option` contains a value (`Some`). |
| `.is_none()` | Returns `true` if the `Option` is `None`. |
| `.unwrap()` | Returns the value inside `Some`, panics if `None`. |
| `.expect(msg)` | Returns the value inside `Some`, panics with a custom message if `None`. |
| `.unwrap_or(default)` | Returns the value inside `Some`, otherwise returns `default`. |
| `.unwrap_or_else(func)` | Returns the value inside `Some`, otherwise calls `func` to generate a value. |
| `.map(func)` | Applies a function to the `Some` value, returning `Some(new_value)`, or `None` if it was `None`. |
| `.map_or(default, func)` | If `Some`, applies `func` to the value; otherwise, returns `default`. |
| `.map_or_else(default_func, func)` | If `Some`, applies `func`; otherwise, calls `default_func` to generate a value. |
| `.and(option_b)` | Returns `option_b` if `self` is `Some`, otherwise returns `None`. |
| `.and_then(func)` | Applies `func` to the `Some` value, returning the new `Option`. If `None`, returns `None`. |
| `.or(option_b)` | Returns `self` if it is `Some`, otherwise returns `option_b`. |
| `.or_else(func)` | Returns `self` if it is `Some`, otherwise calls `func` and returns its result. |
| `.filter(predicate)` | If `Some`, returns `Some` only if the value satisfies `predicate`, otherwise `None`. |
| `.zip(other)` | Combines two `Option`s into a tuple if both are `Some`, otherwise returns `None`. |
| `.transpose()` | Converts `Option<Result<T, E>>` into `Result<Option<T>, E>`. |

#### **2. `Result<T, E>` Methods**
| Method | Description |
|---------|------------|
| `.is_ok()` | Returns `true` if the `Result` is `Ok`. |
| `.is_err()` | Returns `true` if the `Result` is `Err`. |
| `.unwrap()` | Returns the value inside `Ok`, panics if `Err`. |
| `.expect(msg)` | Returns the value inside `Ok`, panics with a custom message if `Err`. |
| `.unwrap_err()` | Returns the error inside `Err`, panics if `Ok`. |
| `.expect_err(msg)` | Returns the error inside `Err`, panics with a custom message if `Ok`. |
| `.unwrap_or(default)` | Returns the value inside `Ok`, otherwise returns `default`. |
| `.unwrap_or_else(func)` | Returns the value inside `Ok`, otherwise calls `func` with the error. |
| `.map(func)` | Applies a function to the `Ok` value, returning `Ok(new_value)`, or propagating `Err`. |
| `.map_err(func)` | Applies a function to the `Err` value, transforming the error type. |
| `.map_or(default, func)` | If `Ok`, applies `func` to the value; otherwise, returns `default`. |
| `.map_or_else(err_func, ok_func)` | If `Ok`, applies `ok_func`; otherwise, applies `err_func` to the error. |
| `.and(result_b)` | Returns `result_b` if `self` is `Ok`, otherwise returns `Err`. |
| `.and_then(func)` | If `Ok`, applies `func`, returning a new `Result`. If `Err`, returns `Err`. |
| `.or(result_b)` | Returns `self` if it is `Ok`, otherwise returns `result_b`. |
| `.or_else(func)` | Returns `self` if it is `Ok`, otherwise calls `func` and returns its result. |
| `.transpose()` | Converts `Result<Option<T>, E>` into `Option<Result<T, E>>`. |

