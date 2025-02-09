# Shortcuts
- **Cntrl + /** is comment shortcut in Rust
- **windows + .** opens emoji keyboard



# Data Types
## Intergers
| Type  | Smallest Value                                | Largest Value                                 |
|-------|-----------------------------------------------|-----------------------------------------------|
| i8    | -128                                          | 127                                           |
| u8    | 0                                             | 255                                           |
| i16   | -32,768                                       | 32,767                                        |
| u16   | 0                                             | 65,535                                        |
| i32   | -2,147,483,648                                | 2,147,483,647                                 |
| u32   | 0                                             | 4,294,967,295                                 |
| i64   | -9,223,372,036,854,775,808                   | 9,223,372,036,854,775,807                     |
| u64   | 0                                             | 18,446,744,073,709,551,616                    |
| i128  | -170,141,183,460,469,231,731,687,303,715,884 | 170,141,183,460,469,231,731,687,303,715,884  |
| u128  | 0                                             | 340,282,366,920,938,463,463,374,607,431,768,211,455 |

## Floats
| Type | Precision       | Smallest Value                          | Largest Value                          |
|------|-----------------|------------------------------------------|----------------------------------------|
| f32  | Single Precision | ~1.4 × 10⁻⁴⁵ (±1.4E-45)                | ~3.4 × 10³⁸ (±3.4E38)                 |
| f64  | Double Precision | ~4.9 × 10⁻³²⁴ (±4.9E-324)              | ~1.8 × 10³⁰⁸ (±1.8E308)               |

## Special Characters
Here’s a table of **Rust special characters** (escape sequences) and their meanings:

| Escape Sequence | Description                     | Example Output           |
|------------------|---------------------------------|--------------------------|
| `\n`            | Newline                        | Moves text to the next line |
| `\r`            | Carriage return                | Resets cursor to the beginning of the line |
| `\t`            | Horizontal tab                 | Adds a tab space         |
| `\\`            | Backslash                      | Outputs a backslash (`\`) |
| `\'`            | Single quote                   | Outputs a single quote (`'`) |
| `\"`            | Double quote                   | Outputs a double quote (`"`) |
| `\0`            | Null character                 | Represents a null byte (`0x00`) |
| `\xNN`          | Hexadecimal byte (1-byte)      | `\x41` → `A`             |
| `\u{NNNN}`      | Unicode scalar value (variable-length) | `\u{1F600}` → 😀 (grinning face) |
| `\n`            | Newline                        | Moves text to the next line |
 
## **Format Specifiers**:
| Specifier     | Description                                  | Example                | Output   |
|---------------|----------------------------------------------|------------------------|----------|
| `:.N`         | Limits to `N` decimal places                | `{:.2}`                | `3.14`   |
| `:e`          | Scientific notation (lowercase)             | `{:.2e}`               | `3.14e0` |
| `:E`          | Scientific notation (uppercase)             | `{:.2E}`               | `3.14E0` |
| `:0N`         | Pads with zeros up to `N` characters         | `{:08.2}`              | `00003.14` |
| `:N$`         | Dynamically specifies precision with variable | `{:.prec$}`            | `3.142` (if `prec = 3`) |
| `:+`          | Forces a sign (`+` for positive, `-` for negative) | `{:+.2}`           | `+3.14`  |
| `:<N`         | Left-align within `N` spaces                | `{:<10.2}`             | `3.14      ` |
| `:>N`         | Right-align within `N` spaces               | `{:>10.2}`             | `      3.14` |



## **Arithmetic Operators**

| Operator | Description          | Example          | Result        |
|----------|----------------------|------------------|---------------|
| `+`      | Addition             | `5 + 3`          | `8`           |
| `-`      | Subtraction          | `5 - 3`          | `2`           |
| `*`      | Multiplication       | `5 * 3`          | `15`          |
| `/`      | Division             | `5 / 2`          | `2` (integer) or `2.5` (float) |
| `%`      | Modulus (remainder)  | `5 % 2`          | `1`           |

---

## **Compound Assignment Operators**

| Operator | Description                      | Example          | Result |
|----------|----------------------------------|------------------|--------|
| `+=`     | Add and assign                   | `x += 3`         | `x = x + 3` |
| `-=`     | Subtract and assign              | `x -= 2`         | `x = x - 2` |
| `*=`     | Multiply and assign              | `x *= 4`         | `x = x * 4` |
| `/=`     | Divide and assign                | `x /= 2`         | `x = x / 2` |
| `%=`     | Modulus and assign               | `x %= 2`         | `x = x % 2` |

---

## **Comparison Operators**

| Operator | Description          | Example          | Result        |
|----------|----------------------|------------------|---------------|
| `==`     | Equal to             | `5 == 5`         | `true`        |
| `!=`     | Not equal to         | `5 != 3`         | `true`        |
| `<`      | Less than            | `3 < 5`          | `true`        |
| `>`      | Greater than         | `5 > 3`          | `true`        |
| `<=`     | Less than or equal to| `5 <= 5`         | `true`        |
| `>=`     | Greater than or equal to | `5 >= 3`     | `true`        |

---

## **Math Functions (Standard Library)**

Rust provides many mathematical functions in the `std::f64` and `std::f32` modules.

| Function          | Description                       | Example                       | Result        |
|-------------------|-----------------------------------|-------------------------------|---------------|
| `abs()`           | Absolute value                   | `(-5).abs()`                  | `5`           |
| `powi(n)`         | Raise to an integer power         | `2.0.powi(3)`                 | `8.0`         |
| `powf(f)`         | Raise to a floating-point power   | `2.0.powf(1.5)`               | `2.828`       |
| `sqrt()`          | Square root                      | `9.0.sqrt()`                  | `3.0`         |
| `sin()`/`cos()`/`tan()` | Trigonometric functions     | `f64::sin(3.14)`              | `0.00159`     |
| `round()`         | Round to nearest integer         | `3.7.round()`                 | `4.0`         |
| `floor()`         | Round down                      | `3.7.floor()`                 | `3.0`         |
| `ceil()`          | Round up                        | `3.1.ceil()`                  | `4.0`         |

---

## **Bitwise Operators**

| Operator | Description         | Example          | Result       |
|----------|---------------------|------------------|--------------|
| `&`      | Bitwise AND         | `0b1010 & 0b1100` | `0b1000`    |
| `|`      | Bitwise OR          | `0b1010 | 0b1100` | `0b1110`    |
| `^`      | Bitwise XOR         | `0b1010 ^ 0b1100` | `0b0110`    |
| `!`      | Bitwise NOT         | `!0b1010`         | Flips bits  |
| `<<`     | Left shift          | `2 << 1`          | `4`         |
| `>>`     | Right shift         | `4 >> 1`          | `2`         |

---
## **Augmented Assignment Operators**

| Operator | Description                | Example             | Expanded Form   | Example Result |
|----------|----------------------------|---------------------|------------------|----------------|
| `+=`     | Add and assign             | `x += 5`           | `x = x + 5`     | If `x = 3`, then `x = 8` |
| `-=`     | Subtract and assign        | `x -= 3`           | `x = x - 3`     | If `x = 5`, then `x = 2` |
| `*=`     | Multiply and assign        | `x *= 4`           | `x = x * 4`     | If `x = 2`, then `x = 8` |
| `/=`     | Divide and assign          | `x /= 2`           | `x = x / 2`     | If `x = 8`, then `x = 4` |
| `%=`     | Modulus and assign         | `x %= 3`           | `x = x % 3`     | If `x = 10`, then `x = 1` |
| `&=`     | Bitwise AND and assign     | `x &= 0b1100`      | `x = x & 0b1100`| If `x = 0b1010`, then `x = 0b1000` |
| `|=`     | Bitwise OR and assign      | `x |= 0b1100`      | `x = x | 0b1100`| If `x = 0b1010`, then `x = 0b1110` |
| `^=`     | Bitwise XOR and assign     | `x ^= 0b1100`      | `x = x ^ 0b1100`| If `x = 0b1010`, then `x = 0b0110` |
| `<<=`    | Left shift and assign      | `x <<= 1`          | `x = x << 1`    | If `x = 2`, then `x = 4` |
| `>>=`    | Right shift and assign     | `x >>= 1`          | `x = x >> 1`    | If `x = 4`, then `x = 2` |

### **Boolean Operations**:

| Operator | Description          | Example                   | Result |
|----------|----------------------|---------------------------|--------|
| `&&`     | Logical AND          | `true && false`           | `false` |
| `||`     | Logical OR           | `true || false`           | `true`  |
| `!`      | Logical NOT          | `!true`                   | `false` |

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
## **4 Variations on `self`**

| **Variation**    | **Example**           | **Meaning**                     |
|-----------------|-----------------------|---------------------------------|
| `self`          | `fn take_ownership(self)` | Takes ownership of the struct   |
| `&self`         | `fn borrow(&self)`        | Immutable borrow                |
| `&mut self`     | `fn modify(&mut self)`    | Mutable borrow                   |
| `Self` (uppercase) | `fn new() -> Self`      | Refers to the struct type        |

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
## **Rust's case-sensitive naming conventions** 

| **Use Case**                | **Naming Convention**   | **Example**                 |
|-----------------------------|-------------------------|-----------------------------|
| **Variables**               | `lower_snake_case`      | `let my_variable = 10;`    |
| **Function Names**          | `lower_snake_case`      | `fn my_function() {}`      |
| **Struct Field Names**      | `lower_snake_case`      | `struct Point { x: i32, y: i32 }` |
| **Constants**               | `UPPER_SNAKE_CASE`      | `const MAX_LIMIT: u32 = 100;` |
| **Static Variables**        | `UPPER_SNAKE_CASE`      | `static GLOBAL_VALUE: i32 = 42;` |
| **Struct Names**            | `UpperCamelCase`        | `struct MyStruct {}`       |
| **Enum Names**              | `UpperCamelCase`        | `enum TrafficLight {}`     |
| **Enum Variants**           | `UpperCamelCase`        | `enum Status { Success, Error }` |
| **Trait Names**             | `UpperCamelCase`        | `trait Display {}`         |
| **Modules (Files/Folders)** | `lower_snake_case`      | `mod my_module;`           |
| **Crate Names**             | `lower_snake_case`      | `cargo new my_project`     |
| **Generic Type Parameters** | `UpperCamelCase`        | `struct Wrapper<T> {}`     |
| **Lifetimes**               | `lowercase with apostrophe ('a, 'b)` | `fn example<'a>(x: &'a str) {}` |
| **Type Aliases**            | `UpperCamelCase`        | `type Kilometers = i32;`   |
| **Rust Keywords**           | `lowercase`             | `fn`, `let`, `match`, `loop` |

---

 ## OOTB frequently used enum variants and macros

| **Shortcut/Macro/Variant** | **Type / Usage**                    | **Description**                                                                                   |
| -------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| `Some`                     | Enum variant (`Option<T>`)          | Wraps a value to indicate its presence (e.g. `Some(42)` means “there is a value 42”).            |
| `None`                     | Enum variant (`Option<T>`)          | Represents the absence of a value in an `Option` (i.e. “no value”).                                |
| `Ok`                       | Enum variant (`Result<T, E>`)       | Signifies success in a computation returning a `Result` (e.g. `Ok("all good")`).                  |
| `Err`                      | Enum variant (`Result<T, E>`)       | Indicates an error or failure in a computation returning a `Result` (e.g. `Err("oops")`).          |
| `vec!`                     | Macro                               | Creates a `Vec` from a list of elements (e.g. `vec![1, 2, 3]` produces a vector of integers).       |
| `println!`                 | Macro                               | Prints formatted text to standard output, appending a newline at the end.                         |
| `format!`                  | Macro                               | Returns a formatted `String` (similar to `printf` in C, but without printing it).                |
| `dbg!`                     | Macro                               | Prints a value (with file and line number) for debugging purposes and returns the value unmodified. |
| `panic!`                   | Macro                               | Causes the current thread to panic (i.e. terminate with an error message).                       |
| `assert!`                  | Macro                               | Checks that a condition is true at runtime, panicking if it is not.                               |
| `assert_eq!`               | Macro                               | Asserts that two values are equal, panicking if they differ.                                      |
| `assert_ne!`               | Macro                               | Asserts that two values are not equal, panicking if they are equal.                               |
| `unreachable!`             | Macro                               | Marks code that should never be executed (panics if it is reached).                                |
| `todo!`                    | Macro                               | Serves as a placeholder for unfinished code; it panics when executed.                            |

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

## **Documentation Comments**
- Rust supports doc comments (`///`) that generate documentation via `cargo doc`.

Example:
```rust
/// Adds two numbers.
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

