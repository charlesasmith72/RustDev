# **Attributes**

In Rust, **attributes** are special metadata applied to items like functions, structs, modules, or the entire crate. They provide instructions to the compiler or additional information used by tools.

Attributes are written using `#[attribute]` or `#![attribute]` (for crate-level attributes).

---

## **Common Uses of Attributes**

Rust attributes are used for purposes such as:

- **Code configuration** (e.g., conditional compilation with `#[cfg]`)
- **Deriving traits** (e.g., `#[derive(Debug)]`)
- **Documentation** (e.g., `///` or `#[doc]`)
- **Linking external libraries** (e.g., `#[link]`)
- **Testing and benchmarking** (e.g., `#[test]`)

---

## **1. Derive Attributes**

The `#[derive(...)]` attribute automatically implements standard traits for structs and enums.

### **Example: Deriving Traits**
```rust
#[derive(Debug, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p1 = Point { x: 10, y: 20 };
    let p2 = p1.clone();
    println!("{:?}", p2);  // Output: Point { x: 10, y: 20 }
}
```

- `Debug` → Enables printing with `{:?}`.
- `Clone` → Allows creating deep copies.
- `PartialEq` → Enables comparison (`==` and `!=`).

---

## **2. Conditional Compilation (`#[cfg]` and `#[cfg_attr]`)**

Conditional compilation allows compiling code based on features, target OS, or environment variables.

### **Example: Platform-Specific Code**
```rust
#[cfg(target_os = "windows")]
fn platform_specific() {
    println!("Running on Windows");
}

#[cfg(target_os = "linux")]
fn platform_specific() {
    println!("Running on Linux");
}

fn main() {
    platform_specific();
}
```

- The function will be compiled only if the condition is met.

**Example with feature flags:**
```rust
#[cfg(feature = "my_feature")]
fn feature_specific() {
    println!("Feature is enabled");
}
```

---

## **3. Lint Attributes (`#[allow]`, `#[warn]`, `#[deny]`)**

Lint attributes control compiler warnings and errors.

### **Example: Suppressing Warnings**
```rust
#[allow(unused_variables)]
fn main() {
    let unused = 42;  // No warning issued
}
```

### **Example: Forcing Compilation Errors**
```rust
#[deny(dead_code)]
fn unused_function() {
    println!("This function is never used");
}
```

---

## **4. Documentation Attributes (`///` and `#[doc]`)**

Rust provides attributes for documentation using `///` and `#[doc = "..."]`.

### **Example: Documentation Comments**
```rust
/// Adds two numbers together.
///
/// # Examples
/// ```
/// let result = add(2, 3);
/// assert_eq!(result, 5);
/// ```
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

- `cargo doc` generates HTML documentation.

**Inline documentation with `#[doc]`:**
```rust
#[doc = "This is a function that prints a message."]
fn greet() {
    println!("Hello!");
}
```

---

## **5. Testing Attributes (`#[test]`, `#[ignore]`)**

Attributes help define unit tests in Rust.

### **Example: Test Functions**
```rust
#[test]
fn it_works() {
    assert_eq!(2 + 2, 4);
}

#[test]
#[ignore]
fn slow_test() {
    assert_eq!(factorial(5), 120);
}
```

- `#[test]` → Marks a function as a test.
- `#[ignore]` → Skips the test unless explicitly run with `cargo test -- --ignored`.

---

## **6. Entry Point (`#[main]`, `#[start]`)**

Rust provides attributes to define entry points of execution.

### **Example: Custom Entry Point**
```rust
#![start]
fn start(_argc: isize, _argv: *const *const u8) -> isize {
    println!("Custom entry point");
    0
}
```

---

## **7. Inline and Optimization Control (`#[inline]`, `#[inline(always)]`)**

Attributes can suggest function inlining to the compiler for performance optimization.

### **Example: Inline Attributes**
```rust
#[inline]
fn fast_function() {
    println!("This function may be inlined");
}

#[inline(always)]
fn always_inline_function() {
    println!("This function will be inlined");
}
```

- `#[inline]` → Suggests inlining.
- `#[inline(always)]` → Forces inlining if possible.

---

## **8. Unsafe Code Attributes (`#[unsafe]`)**

Marking functions or blocks as unsafe allows bypassing Rust's safety checks.

### **Example: Using Unsafe Code**
```rust
unsafe fn risky_function() {
    println!("Executing unsafe operation");
}

fn main() {
    unsafe {
        risky_function();
    }
}
```

---

## **9. Crate-Level Attributes (`#![crate_name]`, `#![feature]`)**

Crate-level attributes apply to the entire package and must appear at the top of the file.

### **Example: Setting Crate Name**
```rust
#![crate_name = "my_crate"]
#![crate_type = "lib"]

pub fn hello() {
    println!("Hello from my_crate!");
}
```

---

## **10. Custom Attributes with Procedural Macros**

You can define custom attributes using procedural macros in Rust.

### **Example: Custom Attribute with Macro**
```rust
use my_macro::my_attribute;

#[my_attribute]
fn my_function() {
    println!("Custom attribute applied!");
}
```

---

## **Commonly Used Rust Attributes Overview**

| Attribute          | Purpose                                       | Example                            |
|-------------------|-----------------------------------------------|------------------------------------|
| `#[derive(...)]`   | Auto-implement traits                        | `#[derive(Debug, Clone)]`         |
| `#[cfg(...)]`      | Conditional compilation                      | `#[cfg(target_os = "linux")]`      |
| `#[allow(...)]`    | Suppress warnings                            | `#[allow(unused_variables)]`       |
| `#[warn(...)]`     | Turn on warnings                             | `#[warn(dead_code)]`               |
| `#[deny(...)]`     | Turn warnings into errors                    | `#[deny(missing_docs)]`            |
| `#[test]`          | Mark a function as a unit test               | `#[test]`                          |
| `#[ignore]`        | Skip a test unless explicitly called         | `#[ignore]`                        |
| `#[inline]`        | Suggest function inlining                    | `#[inline]`                        |
| `#[repr(...)]`     | Control memory layout of structs/enums       | `#[repr(C)]`                       |
| `#[doc(...)]`      | Add documentation metadata                   | `#[doc = "This is a function."]`   |
| `#![crate_name]`   | Define crate name                            | `#![crate_name = "my_crate"]`      |

---

## **Conclusion**

Rust attributes provide powerful metadata and directives to control:

- **Compilation behavior** (`#[cfg]`)
- **Trait derivation** (`#[derive]`)
- **Safety features** (`#[allow]`, `#[deny]`)
- **Testing and documentation** (`#[test]`, `#[doc]`)

They enhance code flexibility, safety, and performance while maintaining clarity and structure.

 
