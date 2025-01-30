# **Types in Rust**

Rust is a **statically typed** language, meaning the compiler requires every variable to have a known type at compile time. Rust provides a variety of built-in and user-defined types to handle different data structures efficiently.

---

## **1. Scalar Types**
Scalar types represent a single value. Rust has four primary scalar types:

| **Type**     | **Description**                       | **Example**  |
|-------------|---------------------------------|------------|
| **Integer** (`i8`, `u8`, `i16`, `u16`, etc.) | Whole numbers (signed and unsigned) | `let x: i32 = 42;` |
| **Floating Point** (`f32`, `f64`) | Decimal numbers | `let pi: f64 = 3.14;` |
| **Boolean** (`bool`) | True or false values | `let is_valid: bool = true;` |
| **Character** (`char`) | Single Unicode character | `let letter: char = 'A';` |

### **Example: Scalar Types in Action**
```rust
fn main() {
    let age: i32 = 25;
    let temperature: f64 = 36.5;
    let is_raining: bool = false;
    let symbol: char = '🚀';

    println!("Age: {}", age);
    println!("Temperature: {}", temperature);
    println!("Is it raining? {}", is_raining);
    println!("Symbol: {}", symbol);
}
```

---

## **2. Compound Types**
Compound types allow grouping multiple values together.

### **2.1 Tuples**
Tuples can hold multiple values of different types. The elements have a **fixed** size.

```rust
fn main() {
    let person: (i32, f64, char) = (30, 1.75, 'M');

    let (age, height, gender) = person; // Destructuring

    println!("Age: {}, Height: {}, Gender: {}", age, height, gender);
}
```

- Access tuple elements using **indexing**: `person.0`, `person.1`, etc.

---

### **2.2 Arrays**
Arrays contain multiple values of the **same type** with a fixed size.

```rust
fn main() {
    let numbers: [i32; 3] = [10, 20, 30];

    println!("First number: {}", numbers[0]);
}
```

- Arrays are **stack-allocated** and cannot grow dynamically.  
- Use **vectors (`Vec<T>`)** for dynamic arrays.

---

## **3. Strings**
Rust has two main string types:

| **Type** | **Description** | **Example** |
|----------|---------------|-------------|
| `String` | **Heap-allocated, growable** | `let s = String::from("Hello");` |
| `&str` | **Immutable string slice** | `let s: &str = "Hello";` |

### **Example: Using Strings**
```rust
fn main() {
    let s1 = String::from("Rust");
    let s2 = "Programming"; // &str

    println!("{} {}", s1, s2);
}
```

---

## **4. Ownership and References**
Rust enforces **ownership rules** for memory safety. Instead of garbage collection, Rust ensures **only one owner** of data at a time.

### **Example: Ownership Rules**
```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = s1;  // Ownership moves to s2

    // println!("{}", s1);  // ERROR: s1 is no longer valid
    println!("{}", s2);
}
```

Use **borrowing** to reference values without transferring ownership:

```rust
fn greet(name: &String) {
    println!("Hello, {}", name);
}

fn main() {
    let user = String::from("Alice");
    greet(&user);
}
```

---

## **5. Custom Types: Structs and Enums**

### **5.1 Structs**
Structs allow defining custom data types.

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let user = Person {
        name: String::from("Alice"),
        age: 30,
    };

    println!("{} is {} years old", user.name, user.age);
}
```

---

### **5.2 Enums**
Enums represent values that can be one of several variants.

```rust
enum Status {
    Success,
    Error(String),
}

fn main() {
    let result = Status::Error(String::from("File not found"));

    match result {
        Status::Success => println!("Operation succeeded"),
        Status::Error(msg) => println!("Error: {}", msg),
    }
}
```

---

## **6. Option and Result Types**
Rust does **not** have `null` values. Instead, it uses **Option** and **Result** types.

### **6.1 The `Option<T>` Type**
Represents a value that **may or may not exist**.

```rust
fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}

fn main() {
    match divide(10, 2) {
        Some(result) => println!("Result: {}", result),
        None => println!("Cannot divide by zero"),
    }
}
```

---

### **6.2 The `Result<T, E>` Type**
Represents a function that **may fail**.

```rust
fn read_file() -> Result<String, String> {
    Err(String::from("File not found"))
}

fn main() {
    match read_file() {
        Ok(content) => println!("File content: {}", content),
        Err(error) => println!("Error: {}", error),
    }
}
```

---

## **7. Dynamic Types: Vectors and Traits**
Rust provides **dynamically sized types** like **vectors (`Vec<T>`)** and **trait objects (`dyn Trait`)**.

### **7.1 Vectors**
Vectors allow storing **dynamic lists**.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3];
    numbers.push(4);

    println!("Numbers: {:?}", numbers);
}
```

---

### **7.2 Traits (Polymorphism)**
Traits define shared behavior for multiple types.

```rust
trait Animal {
    fn make_sound(&self);
}

struct Dog;
struct Cat;

impl Animal for Dog {
    fn make_sound(&self) {
        println!("Woof!");
    }
}

impl Animal for Cat {
    fn make_sound(&self) {
        println!("Meow!");
    }
}

fn main() {
    let pets: Vec<Box<dyn Animal>> = vec![Box::new(Dog), Box::new(Cat)];

    for pet in pets {
        pet.make_sound();
    }
}
```

---

## **8. Type Aliases**
Type aliases improve readability.

```rust
type Kilometers = i32;

fn main() {
    let distance: Kilometers = 100;
    println!("Distance: {} km", distance);
}
```

---

## **9. Unit Type `()`**
Rust has a **unit type `()`**, similar to `void` in other languages.

```rust
fn do_nothing() {}
```
- **Functions that return nothing** implicitly return `()`.
- **Useful as a placeholder type** in certain scenarios.

---

## **10. The `Never` Type (`!`)**
The **never type (`!`)** represents a function that never returns.

```rust
fn forever() -> ! {
    loop {}
}
```
- Used in infinite loops or functions that always panic.

---

# **Summary Table**

| **Type**       | **Example**                     | **Notes** |
|---------------|---------------------------------|----------|
| **Integer**   | `let x: i32 = 42;`              | Signed and unsigned |
| **Float**     | `let pi: f64 = 3.14;`           | `f32` and `f64` |
| **Boolean**   | `let flag: bool = true;`        | `true` or `false` |
| **Character** | `let ch: char = 'R';`          | Unicode characters |
| **Tuple**     | `let t: (i32, f64, char) = ...` | Fixed-size collection |
| **Array**     | `let arr: [i32; 3] = [1,2,3];` | Fixed-size collection |
| **Struct**    | `struct Point { x: i32, y: i32 }` | Custom data structure |
| **Enum**      | `enum Status { Ok, Err }`      | One-of-many representation |
| **Vector**    | `let v = vec![1,2,3];`         | Growable array |
| **Option**    | `Option<T>`                    | Nullable replacement |
| **Result**    | `Result<T, E>`                 | Error handling |

---

Let me know if you need further explanations! 🚀
