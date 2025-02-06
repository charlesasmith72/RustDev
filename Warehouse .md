# **Warehouse: Organizing Code in Rust**

Rust provides a powerful module system that helps in organizing code efficiently. The module system revolves around **packages, crates, and modules**, which determine how Rust code is structured, shared, and accessed. Below is a detailed breakdown of each topic.

---

## **Packages, Crates, and Modules**
### **Packages**
- A **package** is a collection of Rust code that includes a `Cargo.toml` file specifying dependencies and metadata.
- A package can contain multiple **crates** (both binary and library).
- Example:
  ```toml
  # Cargo.toml
  [package]
  name = "warehouse"
  version = "0.1.0"
  edition = "2021"

  [dependencies]
  ```

### **Crates**
- A **crate** is the smallest compilation unit in Rust. Each crate produces either an executable or a library.
- Two types of crates:
  - **Binary Crate**: Produces an executable file (`.exe` on Windows, no extension on Linux/macOS).
  - **Library Crate**: Produces a reusable `.rlib` file.
- Example:
  - A package containing a library crate:
    ```
    warehouse/
    ├── Cargo.toml
    ├── src/
        ├── lib.rs  # Defines the library crate
    ```

  - A package containing a binary crate:
    ```
    warehouse/
    ├── Cargo.toml
    ├── src/
        ├── main.rs  # Defines the binary crate
    ```

---

## **Binary Crates vs. Library Crates**
| Feature         | Binary Crate                           | Library Crate                          |
|----------------|--------------------------------------|----------------------------------------|
| Output         | Executable file                      | Reusable library file (`.rlib`)       |
| Entry Point    | `fn main()` in `main.rs`            | No main function, contains functions  |
| Usage         | Runs as a program                    | Used as a dependency by other crates  |
| Example       | Command-line tools, applications     | Utility functions, APIs, shared logic |

- **Binary Crate Example (`src/main.rs`)**:
  ```rust
  fn main() {
      println!("Hello, world!");
  }
  ```
- **Library Crate Example (`src/lib.rs`)**:
  ```rust
  pub fn greet() -> String {
      "Hello from the library!".to_string()
  }
  ```

---

## **Submodules**
- Rust allows breaking down large modules into **submodules** for better organization.
- Submodules are defined using the `mod` keyword inside a parent module.

Example (`src/lib.rs`):
```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let sum = math::add(5, 3);
    println!("Sum: {}", sum);
}
```

---

## **The `pub` Keyword**
- By default, Rust modules and their items (functions, structs, enums) are **private**.
- The `pub` keyword makes items accessible outside their defining module.

Example:
```rust
mod utilities {
    pub fn print_message() {
        println!("This is a public function!");
    }
}

fn main() {
    utilities::print_message(); // Accessible because of `pub`
}
```

---

## **Inline Modules**
- Modules can be defined **inline** within the same file using the `mod` keyword.

Example:
```rust
mod greetings {
    pub fn hello() {
        println!("Hello, world!");
    }
}

fn main() {
    greetings::hello();
}
```

---

## **File-Based Modules**
- Instead of defining modules inline, Rust allows creating separate files for modules.

Example:
```
src/
├── main.rs
├── greetings.rs
```

`main.rs`:
```rust
mod greetings;

fn main() {
    greetings::hello();
}
```

`greetings.rs`:
```rust
pub fn hello() {
    println!("Hello from a separate file!");
}
```

---

## **Folder-Based Modules**
- Modules can also be organized into **folders**.

Example:
```
src/
├── main.rs
├── utils/
│   ├── mod.rs
│   ├── math.rs
```

`main.rs`:
```rust
mod utils;

fn main() {
    let sum = utils::math::add(5, 2);
    println!("Sum: {}", sum);
}
```

`utils/mod.rs`:
```rust
pub mod math;
```

`utils/math.rs`:
```rust
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

---

## **Public Enums, Public Structs, and Public Fields**
- **Enums** and **structs** need to be explicitly marked `pub` to be accessible.
- Struct fields are **private by default**, even if the struct itself is `pub`.

Example:
```rust
pub struct Person {
    pub name: String,  // Public field
    age: u8,           // Private field
}

impl Person {
    pub fn new(name: String, age: u8) -> Self {
        Self { name, age }
    }
}
```

---

## **The `crate` Prefix**
- The `crate` keyword refers to the root of the current crate.
- Example (`src/lib.rs`):
  ```rust
  pub mod greetings {
      pub fn hello() {
          println!("Hello, world!");
      }
  }

  pub use crate::greetings::hello;
  ```

---

## **The `use` Keyword**
- The `use` keyword imports modules for easier access.

Example:
```rust
mod utilities {
    pub fn helper() {
        println!("Helper function!");
    }
}

use utilities::helper;

fn main() {
    helper();
}
```

---

## **The `self` Keyword**
- Refers to the current module.

Example:
```rust
mod team {
    pub fn lead() {
        println!("Team lead!");
    }

    pub fn assist() {
        self::lead();
    }
}
```

---

## **The `super` Keyword**
- Refers to the parent module.

Example:
```rust
mod parent {
    pub fn parent_function() {
        println!("This is a parent function.");
    }

    pub mod child {
        pub fn call_parent() {
            super::parent_function();
        }
    }
}
```

---

## **The `as` Keyword**
- Used for aliasing imports.

Example:
```rust
use std::collections::HashMap as Map;

fn main() {
    let mut data: Map<String, i32> = Map::new();
    data.insert("Key".to_string(), 42);
}
```

---

## **The Standard Library**
- The Rust **standard library (`std`)** provides essential utilities.

Example:
```rust
use std::fs;

fn main() {
    let content = fs::read_to_string("file.txt").expect("Failed to read file");
    println!("{}", content);
}
```

---

## **The Glob Operator (`*`)**
- The `*` operator imports **everything** from a module.

Example:
```rust
mod tools {
    pub fn hammer() {}
    pub fn screwdriver() {}
}

use tools::*;

fn main() {
    hammer();
    screwdriver();
}
```

---

## **Multiple Binary Crates**
- A package can contain multiple binary crates inside `src/bin/`.

Example:
```
src/
├── main.rs
├── bin/
│   ├── tool1.rs
│   ├── tool2.rs
```

---

## **Documentation Comments**
- Rust supports doc comments (`///`) that generate documentation via `cargo doc`.

Example:
```rust
/// Adds two numbers.
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

