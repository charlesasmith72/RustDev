# **Open Data Types Project**
>Every Rust Value has **data type**. Rust is a **statically typed** language, which means the compiler must know the types of all variables at compile time. The compiler can *infer* the types of variables based on their initial assignments.


## **Scalar Types**

- **Definition**: Represents a single value (as opposed to compound types like arrays or tuples).  
- **Categories**:  
  1. **Integers**: Whole numbers.  
     - Example: `i32`, `u8` (refer to **Integers** section for details).  
  2. **Floating-Point Numbers**: Numbers with decimal points.  
     - Types: `f32` (32-bit, single precision) and `f64` (64-bit, double precision).  
     - Default: `f64` (higher precision).  
     - Example: `let pi = 3.14;`.  
  3. **Booleans**: Represents `true` or `false`.  
     - Type: `bool`.  
     - Size: 1 byte.  
     - Example: `let is_ready = true;`.  
  4. **Characters**: Represents a single Unicode scalar value.  
     - Type: `char`.  
     - Size: 4 bytes.  
     - Can store more than ASCII (e.g., emojis, `汉`).  
     - Example: `let letter = 'A'; let emoji = '😊';`.  

- **Usage**: Scalar types are fundamental for simple values and are building blocks for more complex data structures.

 

## **Integers**

- **Definition**: Whole numbers, positive or negative, without fractions.  
- **Types**: Based on size and signedness:  
  - Signed (`i`): `i8`, `i16`, `i32`, `i64`, `i128`, `isize`  
  - Unsigned (`u`): `u8`, `u16`, `u32`, `u64`, `u128`, `usize`  
- **Signed vs Unsigned**:  
  - Signed: Can store both negative and positive values (`i32`: -2,147,483,648 to 2,147,483,647).  
  - Unsigned: Stores only positive values (`u32`: 0 to 4,294,967,295).  
- **Default Type**: `i32` (good balance of performance and range).  
- **Size Matters**:  
  - Use `usize` and `isize` for indexing or architecture-dependent sizes.  
- **Literal Syntax**:  
  - Decimal: `42`  
  - Hexadecimal: `0x2A`  
  - Octal: `0o52`  
  - Binary: `0b101010`  
  - With separator: `1_000_000` (for readability).  

- **Intger Lower and Upper Bounds** 
  
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
 

 

## **Floating-point values**
 
- **Definition**: Represents numbers with decimal points (fractional values).  
- **Types**:  
  - `f32`: 32-bit, single precision.  
  - `f64`: 64-bit, double precision (default in Rust).  
- **Precision**:  
  - `f32` is less precise but uses less memory.  
  - `f64` is more precise and is the default due to modern processor optimization.  
- **Range**:  
  - Extremely large and small values, including support for scientific notation.  
  - Example: `let big_number = 1.2e10; // 1.2 × 10¹⁰`.  
- **Usage**: Ideal for representing real numbers, such as measurements or scientific calculations.  
- **Example**:  
  ```rust
  let x = 3.14;       // f64
  let y: f32 = 2.718; // f32
  ```
- **Special Values**:  
  - Positive and negative infinity (`std::f32::INFINITY`).  
  - NaN (Not a Number): Occurs in undefined operations (e.g., `0.0 / 0.0`).  

 

## **Booleans**

- **Definition**:  
  Booleans are a simple data type in Rust that can have one of two values: `true` or `false`.

---

### **Key Features**:
1. **Type**:  
   - The type for booleans in Rust is `bool`.
   - It is a **scalar type**, meaning it represents a single value.

2. **Size**:  
   - Booleans occupy **1 byte** in memory.

3. **Common Use Cases**:  
   - Conditional expressions (e.g., `if`, `match`).
   - Logic operations (e.g., `&&`, `||`, `!`).

---

### **Boolean Operations**:

| Operator | Description          | Example                   | Result |
|----------|----------------------|---------------------------|--------|
| `&&`     | Logical AND          | `true && false`           | `false` |
| `||`     | Logical OR           | `true || false`           | `true`  |
| `!`      | Logical NOT (Inversion) | `!true`                | `false` |

---

### **Boolean Inversion**:
- **Definition**:  
  The **NOT** operator (`!`) inverts a boolean's value:  
  - `true` becomes `false`.  
  - `false` becomes `true`.

- **Examples**:  
  ```rust
  let a = true;
  let b = !a; // b is false

  println!("a: {}", a); // Output: a: true
  println!("!a: {}", b); // Output: !a: false
  ```

- **Common Use Cases**:  
  - Toggle states:
    ```rust
    let mut is_active = true;
    is_active = !is_active; // Toggles to false
    println!("is_active: {}", is_active); // Output: is_active: false
    ```
  - Negate conditions in `if` statements:
    ```rust
    if !is_active {
        println!("The system is inactive.");
    }
    ```

---

### **Example Code**:

```rust
fn main() {
    let a = true;
    let b = false;

    // Logical operations
    println!("a && b: {}", a && b); // Output: false
    println!("a || b: {}", a || b); // Output: true
    println!("!a: {}", !a);         // Output: false

    // Boolean inversion
    let mut flag = false;
    flag = !flag; // Toggles flag to true
    println!("Flag after inversion: {}", flag); // Output: true

    // Conditional expression
    if !flag {
        println!("Flag is false");
    } else {
        println!("Flag is true");
    }
}
```

---

### **Best Practices**:
1. Use **boolean inversion** sparingly to avoid overly complex logic.
2. When toggling booleans, make sure the intent is clear from context (e.g., `is_active = !is_active` is self-explanatory).
3. Use negation (`!`) to simplify conditions in `if` statements or loops.

 
 

## **Characters**

- **Definition**:  
  A `char` in Rust is a **single Unicode scalar value**, representing a character. It includes a wide range of characters, from ASCII to emojis, and even non-printable symbols.

---

### **Key Features**:

1. **Type**:  
   - The `char` type in Rust is 4 bytes (32 bits) wide, allowing it to store any valid Unicode scalar value.  

2. **Examples of Characters**:
   - Letters: `'a'`, `'Z'`  
   - Digits: `'1'`, `'9'`  
   - Symbols: `'$'`, `'@'`  
   - Emojis: `'😊'`, `'🚀'`  
   - Non-printable: `'\n'` (newline), `'\t'` (tab).  

3. **Literals**:  
   - Characters are written with single quotes: `'A'`, `'😊'`.  
   - Contrast with string literals, which use double quotes: `"A"`.  

4. **Usage**:
   - Typically used for working with single characters, such as parsing or validating inputs.

---

### **Common Methods**:

| Method                 | Description                              | Example                         | Output     |
|-------------------------|------------------------------------------|---------------------------------|------------|
| `.is_alphabetic()`      | Checks if the character is alphabetic.  | `'a'.is_alphabetic()`           | `true`     |
| `.is_numeric()`         | Checks if the character is numeric.     | `'5'.is_numeric()`              | `true`     |
| `.is_whitespace()`      | Checks if the character is whitespace.  | `'\n'.is_whitespace()`          | `true`     |
| `.to_uppercase()`       | Converts to uppercase.                  | `'a'.to_uppercase()`            | `'A'`      |
| `.to_lowercase()`       | Converts to lowercase.                  | `'A'.to_lowercase()`            | `'a'`      |
| `.len_utf8()`           | Returns the number of bytes in UTF-8.   | `'😊'.len_utf8()`               | `4`        |
| `.len_utf16()`          | Returns the number of bytes in UTF-16.  | `'😊'.len_utf16()`              | `2`        |

---

### **Examples**:

#### **Basic Character Declaration**:
```rust
fn main() {
    let letter: char = 'A';
    let emoji: char = '😊';

    println!("Letter: {}", letter); // Output: Letter: A
    println!("Emoji: {}", emoji);   // Output: Emoji: 😊
}
```

#### **Using Methods**:
```rust
fn main() {
    let c = '9';

    if c.is_numeric() {
        println!("It's a digit!");
    }

    println!("Uppercase: {}", 'a'.to_uppercase()); // Output: Uppercase: A
    println!("Is alphabetic: {}", c.is_alphabetic()); // Output: Is alphabetic: false
}
```

---

### **Unicode Support**:
- Rust fully supports **Unicode** characters, making it suitable for multilingual text and symbols.
- Example with Unicode:
  ```rust
  fn main() {
      let smiley = '😊';
      println!("Smiley length in UTF-8: {}", smiley.len_utf8()); // Output: 4
  }
  ```

---

### **Best Practices**:
1. Use `char` for single characters, not for text (use `String` or `&str` for strings).
2. Leverage character methods for validation and parsing.
3. Be aware of the difference in size between ASCII characters (1 byte) and other Unicode characters (up to 4 bytes).

 

## **Arrays**

## **Tuples**

## **Ranges**

## **The ``isize`` and ``usize`` Data Types**
- **Definition**:  
  - Types used for indexing and addressing memory.  
  - Size depends on the computer's architecture (platform-dependent).  

- **Characteristics**:  
  - `isize`: Signed integer type.  
  - `usize`: Unsigned integer type.  

- **Bit Size**:  
  - On a 32-bit system: 32 bits.  
  - On a 64-bit system: 64 bits.  

- **Common Use Cases**:  
  - `usize`: Typically used for indexing collections like arrays or vectors.  
  - `isize`: Useful when signed values are required for memory-related calculations.  

- **Example**:  
  ```rust
  let index: usize = 10; // Unsigned index for array
  let offset: isize = -5; // Signed offset
  ```

- **Limits (on a 64-bit system)**:  
  - `isize`: `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`.  
  - `usize`: `0` to `18,446,744,073,709,551,615`.  

- **Important Notes**:  
  - Always prefer `usize` for indices to avoid runtime errors.  
  - Platform dependence means you should avoid hardcoding limits if your code is meant to be cross-platform.


## **Strings and Raw Strings**

**Definition**: Strings are collections of text (sequences of characters).

### **String Types in Rust**:
1. **`String` (Heap-Allocated String)**:  
   - A mutable, growable, UTF-8 encoded string stored on the heap.  
   - Example:  
     ```rust
     let mut greeting = String::from("Hello");
     greeting.push_str(", world!");
     println!("{}", greeting); // Output: Hello, world!
     ```

2. **String Slices (`&str`)**:  
   - Immutable, fixed-size references to a string slice (stored in binary or heap).  
   - Example:  
     ```rust
     let slice: &str = "Hello, world!";
     println!("{}", slice); // Output: Hello, world!
     ```

### **Raw Strings**:
- **Definition**: Allow strings to contain special characters without escaping them.  
- Syntax: `r"Your raw string here"` or `r#"..."#` (for nested quotes).  
- Use Cases:  
  - Embedding file paths, regex patterns, or JSON without escaping.  
- Examples:  
  ```rust
  let raw = r"Line1\nLine2";  // Output: Line1\nLine2 (no escape processing)
  let nested_raw = r#"This is a "quoted" string"#; // Works with quotes
  println!("{}", raw);
  println!("{}", nested_raw);
  ```

### **Key Differences**:
| Feature          | `String`                 | `&str`             | Raw Strings         |
|-------------------|--------------------------|---------------------|---------------------|
| Mutability        | Mutable                 | Immutable           | Immutable           |
| Memory Allocation | Heap                    | Slice (borrowed)    | Slice (borrowed)    |
| Special Syntax    | Standard escape sequences | N/A                | Avoids escape sequences |

 


## **Methods**

- **Definition**:  
  Functions that are associated with a specific type and can operate on instances of that type.  

### **Key Features**:
1. **Called on Instances**:  
   - Methods are invoked using the dot syntax (`instance.method()`).
   - Example:  
     ```rust
     struct Circle {
         radius: f64,
     }
     
     impl Circle {
         fn area(&self) -> f64 {
             3.14 * self.radius * self.radius
         }
     }
     
     let c = Circle { radius: 5.0 };
     println!("Area: {}", c.area()); // Output: Area: 78.5
     ```

2. **Defined Using `impl` Blocks**:  
   - Methods are implemented within an `impl` (implementation) block for a specific type.

3. **Receiver (`self`)**:  
   - The first parameter of a method is always `self`, which refers to the instance:
     - `&self`: Borrowed reference (read-only).
     - `&mut self`: Mutable reference (allows modification).
     - `self`: Takes ownership of the instance.

4. **Associated Functions**:  
   - Functions defined in an `impl` block but without `self`.  
   - Called using `Type::function_name()`.  
   - Often used as constructors.  
   - Example:  
     ```rust
     impl Circle {
         fn new(radius: f64) -> Circle {
             Circle { radius }
         }
     }

     let c = Circle::new(10.0);
     ```

### **Method Chaining**:
- Allows multiple methods to be called in a sequence if they return `self` or a reference.
- Example:  
  ```rust
  struct Builder {
      value: i32,
  }

  impl Builder {
      fn new() -> Self {
          Builder { value: 0 }
      }

      fn add(&mut self, num: i32) -> &mut Self {
          self.value += num;
          self
      }

      fn multiply(&mut self, num: i32) -> &mut Self {
          self.value *= num;
          self
      }
  }

  let result = Builder::new().add(5).multiply(2).value;
  println!("Result: {}", result); // Output: Result: 10
  ```

 

## **Formatting Floats**

- **Definition**: Formatting floating-point numbers for better readability, precision, or specific display requirements.

### **Key Methods for Formatting**:
1. **`format!` Macro**:
   - Used to create a formatted `String` without printing.
   - Example:  
     ```rust
     let x = 3.14159;
     let formatted = format!("{:.2}", x);
     println!("{}", formatted); // Output: 3.14
     ```

2. **`println!` Macro**:
   - Prints formatted output directly.
   - Example:  
     ```rust
     let x = 3.14159;
     println!("{:.3}", x); // Output: 3.142
     ```

### **Format Specifiers**:
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

### **Examples**:
1. **Basic Formatting**:
   ```rust
   let x = 3.14159;
   println!("{:.2}", x); // Output: 3.14
   println!("{:>10.3}", x); // Output: "     3.142"
   ```

2. **Scientific Notation**:
   ```rust
   let x = 3.14159;
   println!("{:.2e}", x); // Output: 3.14e0
   println!("{:.2E}", x); // Output: 3.14E0
   ```

3. **Dynamic Precision**:
   ```rust
   let x = 3.14159;
   let prec = 4;
   println!("{:.prec$}", x, prec = prec); // Output: 3.1416
   ```

### **Best Practices**:
- Use the `:.N` specifier for precision-based formatting.
- For scientific applications, prefer `:e` or `:E`.
- Use padding and alignment for better tabular display.

 

## **Casting/Converting Types to Others**

- **Definition**: Rust provides mechanisms to convert or cast between types, ensuring type safety while allowing flexibility.

### **Methods for Casting/Converting**:

#### 1. **Using `as` for Primitive Type Casting**:
   - Converts between primitive types like integers, floats, or char types.
   - Example:
     ```rust
     let x = 42; // i32 by default
     let y = x as f64; // Convert i32 to f64
     println!("{}", y); // Output: 42.0
     ```

#### 2. **`From` and `Into` Traits**:
   - Preferred for safe and explicit conversions.
   - Example with `From`:
     ```rust
     let num = i32::from(42u8); // Convert u8 to i32
     println!("{}", num); // Output: 42
     ```
   - Example with `Into`:
     ```rust
     let num: i32 = 42u8.into(); // Convert u8 to i32
     println!("{}", num); // Output: 42
     ```

#### 3. **String Conversions**:
   - To String:
     - Use `.to_string()` or `format!`.
       ```rust
       let num = 42;
       let s = num.to_string();
       println!("{}", s); // Output: "42"
       ```
   - From String:
     - Use `.parse()` (requires specifying the type and handling potential errors).
       ```rust
       let s = "42";
       let num: i32 = s.parse().unwrap();
       println!("{}", num); // Output: 42
       ```

#### 4. **Floating-Point and Integer Conversions**:
   - Explicit casting using `as`:
     ```rust
     let x = 3.14_f64;
     let y = x as i32; // Truncates to 3
     println!("{}", y); // Output: 3
     ```
   - Use rounding methods (`ceil`, `floor`, `round`):
     ```rust
     let x = 3.14_f64;
     println!("{}", x.floor() as i32); // Output: 3
     ```

#### 5. **Custom Conversions with `TryFrom` and `TryInto`**:
   - For conversions that might fail, use `TryFrom` or `TryInto`.
   - Example:
     ```rust
     use std::convert::TryFrom;

     let x = u8::try_from(256); // Out of range for u8
     match x {
         Ok(val) => println!("Converted: {}", val),
         Err(e) => println!("Error: {}", e),
     }
     ```

### **Casting vs Converting**:
| Feature              | Casting (`as`)            | Converting (`From`, `Into`, `TryFrom`, `TryInto`) |
|----------------------|---------------------------|---------------------------------------------------|
| Safety               | May lose data or precision | Safer, checks for validity before conversion      |
| Flexibility          | Limited to primitives     | Works with custom types and complex conversions   |
| Error Handling       | No error checking         | Error handling with `TryFrom`/`TryInto`           |

---

### **Best Practices**:
- Prefer `From`/`Into` for safety and readability.
- Use `TryFrom`/`TryInto` for conversions that might fail.
- Use `as` for quick and straightforward casting between primitives when loss of precision is acceptable.

 
## **Mathematical Operations**

- **Definition**: Rust provides built-in operators and functions for performing mathematical calculations on numeric types.

---

### **Arithmetic Operators**

| Operator | Description          | Example          | Result        |
|----------|----------------------|------------------|---------------|
| `+`      | Addition             | `5 + 3`          | `8`           |
| `-`      | Subtraction          | `5 - 3`          | `2`           |
| `*`      | Multiplication       | `5 * 3`          | `15`          |
| `/`      | Division             | `5 / 2`          | `2` (integer) or `2.5` (float) |
| `%`      | Modulus (remainder)  | `5 % 2`          | `1`           |

---

### **Compound Assignment Operators**

| Operator | Description                      | Example          | Result |
|----------|----------------------------------|------------------|--------|
| `+=`     | Add and assign                   | `x += 3`         | `x = x + 3` |
| `-=`     | Subtract and assign              | `x -= 2`         | `x = x - 2` |
| `*=`     | Multiply and assign              | `x *= 4`         | `x = x * 4` |
| `/=`     | Divide and assign                | `x /= 2`         | `x = x / 2` |
| `%=`     | Modulus and assign               | `x %= 2`         | `x = x % 2` |

---

### **Comparison Operators**

| Operator | Description          | Example          | Result        |
|----------|----------------------|------------------|---------------|
| `==`     | Equal to             | `5 == 5`         | `true`        |
| `!=`     | Not equal to         | `5 != 3`         | `true`        |
| `<`      | Less than            | `3 < 5`          | `true`        |
| `>`      | Greater than         | `5 > 3`          | `true`        |
| `<=`     | Less than or equal to| `5 <= 5`         | `true`        |
| `>=`     | Greater than or equal to | `5 >= 3`     | `true`        |

---

### **Math Functions (Standard Library)**

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

### **Bitwise Operators**

| Operator | Description         | Example          | Result       |
|----------|---------------------|------------------|--------------|
| `&`      | Bitwise AND         | `0b1010 & 0b1100` | `0b1000`    |
| `|`      | Bitwise OR          | `0b1010 | 0b1100` | `0b1110`    |
| `^`      | Bitwise XOR         | `0b1010 ^ 0b1100` | `0b0110`    |
| `!`      | Bitwise NOT         | `!0b1010`         | Flips bits  |
| `<<`     | Left shift          | `2 << 1`          | `4`         |
| `>>`     | Right shift         | `4 >> 1`          | `2`         |

---

### **Example Code**

```rust
fn main() {
    let x = 5;
    let y = 3;

    // Arithmetic operations
    println!("Addition: {}", x + y);
    println!("Division: {}", x / y);

    // Comparison
    println!("x > y: {}", x > y);

    // Math functions
    let num = -4.5;
    println!("Absolute value: {}", num.abs());

    // Bitwise operations
    println!("Bitwise AND: {}", 0b1010 & 0b1100);
}
```

 

Here’s a structured note for **Augmented Assignment Operators** in Rust:

---

## **Augmented Assignment Operators**

- **Definition**:  
  Operators that combine arithmetic or bitwise operations with assignment, reducing verbosity.

### **Supported Operators**

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

---

### **Example Code**

```rust
fn main() {
    let mut x = 10;

    // Augmented arithmetic operations
    x += 5; // x = x + 5
    println!("x after += 5: {}", x); // Output: 15

    x *= 2; // x = x * 2
    println!("x after *= 2: {}", x); // Output: 30

    // Augmented bitwise operations
    x &= 0b1110; // x = x & 0b1110
    println!("x after &= 0b1110: {}", x); // Output: 14

    x <<= 1; // x = x << 1
    println!("x after <<= 1: {}", x); // Output: 28
}
```

---

### **Best Practices**
1. Use augmented assignment operators for **concise and readable code**.
2. Ensure the operation is intuitive for the type of data being used (e.g., avoid using `<<=` on floating-point types).
3. Be mindful of **integer overflow** when using these operators on smaller integer types (e.g., `u8`, `i16`).
 

## **Equality and Inequality**

- **Definition**:  
  Equality and inequality operations in Rust are used to compare values of the same type and return a boolean (`true` or `false`).

---

### **Operators**:

| Operator | Description        | Example           | Result        |
|----------|--------------------|-------------------|---------------|
| `==`     | Equal to           | `5 == 5`          | `true`        |
| `!=`     | Not equal to       | `5 != 3`          | `true`        |

---

### **Rules**:
1. Both operands must be of the same type:
   - Example:
     ```rust
     let a = 5;
     let b = 5.0; // f64
     // Compile-time error: mismatched types
     // let result = a == b;
     ```
   - To compare, cast one value:
     ```rust
     let result = a as f64 == b;
     println!("{}", result); // Output: true
     ```

2. Comparison works for:
   - Numeric types (`i32`, `f64`, etc.).
   - Strings and string slices (`String`, `&str`).
   - Compound types (`Vec`, tuples, arrays) with elements that implement `PartialEq`.

---

### **Examples**:

#### **Basic Comparisons**:
```rust
fn main() {
    let a = 5;
    let b = 3;

    println!("a == b: {}", a == b); // Output: false
    println!("a != b: {}", a != b); // Output: true
}
```

#### **String Comparisons**:
```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = "hello";

    println!("s1 == s2: {}", s1 == s2); // Output: true
    println!("s1 != s2: {}", s1 != "world"); // Output: true
}
```

#### **Compound Type Comparisons**:
```rust
fn main() {
    let v1 = vec![1, 2, 3];
    let v2 = vec![1, 2, 3];
    let v3 = vec![4, 5, 6];

    println!("v1 == v2: {}", v1 == v2); // Output: true
    println!("v1 != v3: {}", v1 != v3); // Output: true
}
```

---

### **Advanced Notes**:
1. **Strict Equality**:  
   Rust’s type system enforces strict equality; you cannot compare values of different types directly.

2. **Custom Types**:  
   Implement the `PartialEq` or `Eq` traits for custom types to enable equality checks:
   ```rust
   #[derive(PartialEq)]
   struct Point {
       x: i32,
       y: i32,
   }

   fn main() {
       let p1 = Point { x: 1, y: 2 };
       let p2 = Point { x: 1, y: 2 };
       println!("p1 == p2: {}", p1 == p2); // Output: true
   }
   ```

---

### **Best Practices**:
1. Ensure type compatibility when comparing values. Use type casting only when necessary.
2. Prefer strict equality checks to avoid bugs caused by implicit type coercion.
3. Use derived traits like `PartialEq` for custom types to enable comparison.

 
 

## **AND Logic**

- **Definition**:  
  AND logic evaluates to `true` only if **both operands are true**. In Rust, the **logical AND operator** is represented by `&&`.

---

### **Truth Table**:

| Operand 1 | Operand 2 | Result (`Operand 1 && Operand 2`) |
|-----------|-----------|----------------------------------|
| `true`    | `true`    | `true`                           |
| `true`    | `false`   | `false`                          |
| `false`   | `true`    | `false`                          |
| `false`   | `false`   | `false`                          |

---

### **Usage**:

1. **Conditional Checks**:
   - Used in `if` statements or loops to combine multiple conditions.
   - Example:
     ```rust
     let a = true;
     let b = false;

     if a && b {
         println!("Both are true");
     } else {
         println!("At least one is false");
     }
     // Output: At least one is false
     ```

2. **Combining Boolean Expressions**:
   - Example:
     ```rust
     let age = 25;
     let is_employed = true;

     if age > 18 && is_employed {
         println!("Eligible for benefits");
     }
     // Output: Eligible for benefits
     ```

---

### **Short-Circuiting**:
- Rust evaluates the second operand only if the first operand is `true`.  
- Example:
  ```rust
  let x = false;
  let y = true;

  if x && (y || panic!("This won't execute")) {
      println!("This won't run");
  }
  // No panic occurs because `x` is `false`.
  ```

---

### **Example Code**:

#### **Basic AND Logic**:
```rust
fn main() {
    let x = 5;
    let y = 10;

    if x > 0 && y > 5 {
        println!("Both conditions are true");
    } else {
        println!("At least one condition is false");
    }
}
```

#### **Multiple AND Conditions**:
```rust
fn main() {
    let temperature = 25;
    let is_sunny = true;
    let is_weekend = true;

    if temperature > 20 && is_sunny && is_weekend {
        println!("Great day for a picnic!");
    } else {
        println!("Maybe stay indoors.");
    }
}
```

---

### **Best Practices**:
1. Use AND logic to ensure all conditions must be met before executing code.
2. Take advantage of **short-circuiting** for performance optimization.
3. Avoid overly complex expressions; break them into smaller logical components for readability.

 
 

## **OR Logic**

- **Definition**:  
  OR logic evaluates to `true` if **at least one operand is true**. In Rust, the **logical OR operator** is represented by `||`.

---

### **Truth Table**:

| Operand 1 | Operand 2 | Result (`Operand 1 || Operand 2`) |
|-----------|-----------|----------------------------------|
| `true`    | `true`    | `true`                           |
| `true`    | `false`   | `true`                           |
| `false`   | `true`    | `true`                           |
| `false`   | `false`   | `false`                          |

---

### **Usage**:

1. **Conditional Checks**:
   - Used in `if` statements or loops to evaluate multiple conditions where **at least one condition** must be `true`.
   - Example:
     ```rust
     let a = false;
     let b = true;

     if a || b {
         println!("At least one is true");
     } else {
         println!("Both are false");
     }
     // Output: At least one is true
     ```

2. **Combining Boolean Expressions**:
   - Example:
     ```rust
     let temperature = 35;
     let is_raining = false;

     if temperature > 30 || is_raining {
         println!("Stay indoors");
     }
     // Output: Stay indoors
     ```

---

### **Short-Circuiting**:
- Rust evaluates the second operand only if the first operand is `false`.  
- Example:
  ```rust
  let x = true;

  if x || panic!("This won't execute") {
      println!("No panic, x is true");
  }
  // Output: No panic, x is true
  ```

---

### **Example Code**:

#### **Basic OR Logic**:
```rust
fn main() {
    let x = 5;
    let y = -10;

    if x > 0 || y > 0 {
        println!("At least one number is positive");
    } else {
        println!("Both numbers are non-positive");
    }
}
```

#### **Multiple OR Conditions**:
```rust
fn main() {
    let has_key = false;
    let knows_password = true;
    let is_admin = false;

    if has_key || knows_password || is_admin {
        println!("Access granted");
    } else {
        println!("Access denied");
    }
}
```

---

### **Best Practices**:
1. Use OR logic when any one of multiple conditions should trigger the execution of code.
2. Take advantage of **short-circuiting** for efficiency (e.g., avoid unnecessary computations).
3. Keep expressions simple for readability; split complex OR conditions into smaller, logical statements if needed.

 


## **``Display`` Trait**

## **``Debug`` Trait**

## **``dbg!`` Macro**

## **Generics**


- [**Open Data Types Project**](#open-data-types-project)
  - [**Scalar Types**](#scalar-types)
  - [**Integers**](#integers)
  - [**Floating-point values**](#floating-point-values)
  - [**Booleans**](#booleans)
    - [**Key Features**:](#key-features)
    - [**Boolean Operations**:](#boolean-operations)
    - [**Boolean Inversion**:](#boolean-inversion)
    - [**Example Code**:](#example-code)
    - [**Best Practices**:](#best-practices)
  - [**Characters**](#characters)
    - [**Key Features**:](#key-features-1)
    - [**Common Methods**:](#common-methods)
    - [**Examples**:](#examples)
      - [**Basic Character Declaration**:](#basic-character-declaration)
      - [**Using Methods**:](#using-methods)
    - [**Unicode Support**:](#unicode-support)
    - [**Best Practices**:](#best-practices-1)
  - [**Arrays**](#arrays)
  - [**Tuples**](#tuples)
  - [**Ranges**](#ranges)
  - [**The ``isize`` and ``usize`` Data Types**](#the-isize-and-usize-data-types)
  - [**Strings and Raw Strings**](#strings-and-raw-strings)
    - [**String Types in Rust**:](#string-types-in-rust)
    - [**Raw Strings**:](#raw-strings)
    - [**Key Differences**:](#key-differences)
  - [**Methods**](#methods)
    - [**Key Features**:](#key-features-2)
    - [**Method Chaining**:](#method-chaining)
  - [**Formatting Floats**](#formatting-floats)
    - [**Key Methods for Formatting**:](#key-methods-for-formatting)
    - [**Format Specifiers**:](#format-specifiers)
    - [**Examples**:](#examples-1)
    - [**Best Practices**:](#best-practices-2)
  - [**Casting/Converting Types to Others**](#castingconverting-types-to-others)
    - [**Methods for Casting/Converting**:](#methods-for-castingconverting)
      - [1. **Using `as` for Primitive Type Casting**:](#1-using-as-for-primitive-type-casting)
      - [2. **`From` and `Into` Traits**:](#2-from-and-into-traits)
      - [3. **String Conversions**:](#3-string-conversions)
      - [4. **Floating-Point and Integer Conversions**:](#4-floating-point-and-integer-conversions)
      - [5. **Custom Conversions with `TryFrom` and `TryInto`**:](#5-custom-conversions-with-tryfrom-and-tryinto)
    - [**Casting vs Converting**:](#casting-vs-converting)
    - [**Best Practices**:](#best-practices-3)
  - [**Mathematical Operations**](#mathematical-operations)
    - [**Arithmetic Operators**](#arithmetic-operators)
    - [**Compound Assignment Operators**](#compound-assignment-operators)
    - [**Comparison Operators**](#comparison-operators)
    - [**Math Functions (Standard Library)**](#math-functions-standard-library)
    - [**Bitwise Operators**](#bitwise-operators)
    - [**Example Code**](#example-code-1)
  - [**Augmented Assignment Operators**](#augmented-assignment-operators)
    - [**Supported Operators**](#supported-operators)
    - [**Example Code**](#example-code-2)
    - [**Best Practices**](#best-practices-4)
  - [**Equality and Inequality**](#equality-and-inequality)
    - [**Operators**:](#operators)
    - [**Rules**:](#rules)
    - [**Examples**:](#examples-2)
      - [**Basic Comparisons**:](#basic-comparisons)
      - [**String Comparisons**:](#string-comparisons)
      - [**Compound Type Comparisons**:](#compound-type-comparisons)
    - [**Advanced Notes**:](#advanced-notes)
    - [**Best Practices**:](#best-practices-5)
  - [**AND Logic**](#and-logic)
    - [**Truth Table**:](#truth-table)
    - [**Usage**:](#usage)
    - [**Short-Circuiting**:](#short-circuiting)
    - [**Example Code**:](#example-code-3)
      - [**Basic AND Logic**:](#basic-and-logic)
      - [**Multiple AND Conditions**:](#multiple-and-conditions)
    - [**Best Practices**:](#best-practices-6)
  - [**OR Logic**](#or-logic)
    - [**Truth Table**:](#truth-table-1)
    - [**Usage**:](#usage-1)
    - [**Short-Circuiting**:](#short-circuiting-1)
    - [**Example Code**:](#example-code-4)
      - [**Basic OR Logic**:](#basic-or-logic)
      - [**Multiple OR Conditions**:](#multiple-or-conditions)
    - [**Best Practices**:](#best-practices-7)
  - [**``Display`` Trait**](#display-trait)
  - [**``Debug`` Trait**](#debug-trait)
  - [**``dbg!`` Macro**](#dbg-macro)
  - [**Generics**](#generics)
