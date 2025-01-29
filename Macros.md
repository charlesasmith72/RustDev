Here’s a table of commonly used **Rust macros** along with their descriptions:

### **📌 Built-in Macros**
| **Macro**           | **Description** |
|---------------------|----------------|
| `println!`         | Prints text to the console with a newline (`\n`). Supports formatting. |
| `print!`           | Prints text to the console without a newline. |
| `eprintln!`        | Prints an error message to `stderr` with a newline. |
| `dbg!`             | Debugging macro that prints an expression and its value to `stderr`. |
| `format!`         | Formats text into a `String`, similar to `printf`. |
| `concat!`         | Combines multiple string literals at compile time. |
| `concat_idents!`  | Concatenates identifiers into a single identifier. (Nightly only) |
| `assert!`         | Panics if a condition is false. Useful for tests. |
| `assert_eq!`      | Panics if two expressions are not equal. |
| `assert_ne!`      | Panics if two expressions are equal. |
| `todo!`           | Placeholder macro that panics when called, indicating unfinished code. |
| `unimplemented!`  | Similar to `todo!`, but explicitly marks a function as unimplemented. |
| `panic!`          | Causes the program to terminate immediately with a panic message. |
| `matches!`        | Checks if an expression matches a pattern and returns `true` or `false`. |
| `cfg!`            | Used for conditional compilation, checks if a feature is enabled. |
| `cfg_attr!`       | Allows applying an attribute based on a `cfg` condition. |

---

### **📌 Memory & Data Structure Macros**
| **Macro**            | **Description** |
|----------------------|----------------|
| `vec!`              | Creates a `Vec<T>` (dynamic array) with elements. |
| `vec_deque!`        | Creates a `VecDeque<T>` (double-ended queue). |
| `hash_map!`         | Creates a `HashMap<K, V>` (requires `maplit` crate). |
| `hash_set!`         | Creates a `HashSet<T>` (requires `maplit` crate). |
| `btree_map!`        | Creates a `BTreeMap<K, V>` (requires `maplit` crate). |
| `btree_set!`        | Creates a `BTreeSet<T>` (requires `maplit` crate). |
| `array!`            | Initializes an array with repeated values (requires `array-macro` crate). |
| `option_env!`       | Retrieves an environment variable as an `Option<&'static str>`. |

---

### **📌 Macro System Macros**
| **Macro**           | **Description** |
|---------------------|----------------|
| `macro_rules!`     | Defines a declarative macro. Used for writing reusable patterns in code. |
| `include!`        | Includes Rust source code from another file. |
| `include_str!`    | Includes a file as a `&'static str` (read-only text). |
| `include_bytes!`  | Includes a file as `&'static [u8]` (raw bytes). |
| `module_path!`    | Expands to the current module's path as a string. |
| `line!`          | Expands to the current line number in the source code. |
| `column!`        | Expands to the current column number in the source code. |
| `file!`          | Expands to the current file name as a string. |

---

### **📌 Concurrency & Parallelism Macros**
| **Macro**         | **Description** |
|------------------|----------------|
| `thread::spawn` | Spawns a new thread to execute a function. |
| `std::sync::Mutex` | Provides mutual exclusion for concurrent access. |
| `std::sync::Arc` | Enables shared ownership of a value between threads. |

---

### **📌 Procedural Macros (Requires `proc_macro` Crate)**
| **Macro**           | **Description** |
|---------------------|----------------|
| `#[derive(Trait)]` | Automatically implements traits like `Debug`, `Clone`, etc. |
| `#[proc_macro]`    | Defines a procedural macro that generates Rust code. |
| `#[proc_macro_derive]` | Allows deriving custom traits for structs/enums. |
| `#[proc_macro_attribute]` | Defines an attribute-like procedural macro. |
| `#[macro_export]`  | Makes a macro available outside the defining crate. |

---

### **📌 Strum Macros (For Enums)**
| **Macro**             | **Description** |
|----------------------|----------------|
| `#[derive(EnumString)]` | Enables conversion from `&str` to enum variants. |
| `#[derive(Display)]` | Implements `Display` for enums, allowing formatted output. |
| `#[derive(EnumIter)]` | Allows iterating over all enum variants. |

---

### **📌 Custom Macros (User-Defined)**
Rust allows users to define **custom macros** using `macro_rules!`:

#### **Example: Creating a Custom Debugging Macro**
```rust
macro_rules! log_message {
    ($msg:expr) => {
        println!("[LOG]: {}", $msg);
    };
}

fn main() {
    log_message!("Application started");
}
```

---

### **Conclusion**
Rust's macro system is powerful, providing:
✅ **Convenience** (e.g., `vec!`, `assert_eq!`)  
✅ **Metaprogramming** (e.g., `macro_rules!`)  
✅ **Code generation** (e.g., `proc_macro`, `derive`)  

Would you like examples for any specific macros? 🚀
