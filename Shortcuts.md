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
