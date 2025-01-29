# **Rust Modules**

Rust’s **module system** allows you to organize code into separate **modules**, improving readability, reusability, and maintainability. Modules help encapsulate functionality and define public or private APIs.

---

## **1. Defining a Module**

Modules are defined using the `mod` keyword. You can declare modules inside a file or separate them into different files.

### **Example: Inline Module Definition**
```rust
mod greetings {
    pub fn hello() {
        println!("Hello, Rust!");
    }
}

fn main() {
    greetings::hello();
}
```
- `mod greetings {}` → Defines a module named `greetings`.
- `pub fn hello()` → The function is **public** (`pub`), so it can be accessed outside the module.

---

## **2. Nested Modules**
Modules can be nested to create a hierarchical structure.

### **Example: Nested Modules**
```rust
mod outer {
    pub mod inner {
        pub fn greet() {
            println!("Greetings from inner module!");
        }
    }
}

fn main() {
    outer::inner::greet();
}
```
- `outer::inner::greet()` accesses the function within a nested module.

---

## **3. Using Modules from Separate Files**
Instead of defining modules inline, you can create separate files.

### **File Structure Example:**
```
src/
│── main.rs
│── greetings.rs
```

### **`main.rs`**
```rust
mod greetings; // Import module from greetings.rs

fn main() {
    greetings::hello();
}
```

### **`greetings.rs`**
```rust
pub fn hello() {
    println!("Hello from another file!");
}
```
- `mod greetings;` in `main.rs` tells Rust to look for `greetings.rs`.
- The function must be `pub` to be accessible outside the module.

---

## **4. Module Visibility (`pub` Keyword)**
By default, **module contents are private**. Use `pub` to expose them.

### **Example: Public and Private Functions**
```rust
mod my_module {
    pub fn public_function() {
        println!("This is public!");
    }

    fn private_function() {
        println!("This is private!");
    }
}

fn main() {
    my_module::public_function();
    // my_module::private_function(); // Error: Function is private
}
```
- `pub` makes `public_function` accessible from outside the module.
- `private_function` is inaccessible from `main`.

---

## **5. Structs and Enums in Modules**
Struct fields and enum variants are **private by default** unless explicitly marked `pub`.

### **Example: Making Struct Fields Public**
```rust
mod user {
    pub struct User {
        pub name: String,
        age: u32, // Private field
    }

    impl User {
        pub fn new(name: String, age: u32) -> User {
            User { name, age }
        }
    }
}

fn main() {
    let u = user::User::new(String::from("Alice"), 30);
    println!("{}", u.name);
    // println!("{}", u.age); // Error: `age` field is private
}
```
- `pub struct User` → Struct is public.
- `pub name: String` → Field is public, but `age` is private.

### **Example: Making Enum Variants Public**
```rust
mod status {
    pub enum Status {
        Active,
        Inactive,
    }
}

fn main() {
    let state = status::Status::Active; // Works because all enum variants are public by default
}
```
- Unlike structs, **enum variants are always public if the enum is public**.

---

## **6. Using `use` to Simplify Paths**
Instead of writing long paths, `use` can bring items into scope.

### **Example: Simplifying Paths with `use`**
```rust
mod utilities {
    pub mod math {
        pub fn add(a: i32, b: i32) -> i32 {
            a + b
        }
    }
}

use utilities::math::add; // Importing the function

fn main() {
    println!("Sum: {}", add(2, 3)); // No need for full path
}
```

### **Using `use` for Modules**
```rust
use utilities::math; // Import module

fn main() {
    println!("Sum: {}", math::add(5, 10));
}
```

---

## **7. `super` and `self` in Modules**
- `super` refers to the **parent module**.
- `self` refers to the **current module**.

### **Example: Using `super` to Access Parent Modules**
```rust
mod parent {
    pub fn parent_function() {
        println!("In parent module");
    }

    pub mod child {
        pub fn call_parent() {
            super::parent_function(); // Calling parent function
        }
    }
}

fn main() {
    parent::child::call_parent();
}
```

---

## **8. The `crate` Keyword**
- `crate::` refers to the **root of the crate**.
- Useful for **library crates** where modules are shared.

### **Example: Using `crate` in Library Crates**
```rust
mod lib_module {
    pub fn library_function() {
        println!("Library function called!");
    }
}

fn main() {
    crate::lib_module::library_function();
}
```

---

## **9. Modules in Library Crates (`lib.rs`)**
For **library crates**, the root file is `lib.rs`, and modules are structured similarly to binary crates.

### **Example Library Structure**
```
src/
│── lib.rs
│── utils/
│   │── mod.rs
│   │── math.rs
│   │── strings.rs
```

### **`lib.rs`**
```rust
pub mod utils;
```

### **`utils/mod.rs`**
```rust
pub mod math;
pub mod strings;
```

### **`utils/math.rs`**
```rust
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Now, this function can be accessed as:
```rust
use crate::utils::math::add;
```

---

## **10. Module Privacy (`pub(crate)`, `pub(super)`, `pub(in path)`)**
Rust provides additional privacy controls beyond `pub`.

| Keyword           | Scope                                  |
|------------------|--------------------------------------|
| `pub`            | Public to everyone                  |
| `pub(crate)`     | Public only within the crate        |
| `pub(super)`     | Public only within the parent module |
| `pub(in path)`   | Public within a specific module path |

### **Example: Restricting Visibility**
```rust
mod parent {
    pub(crate) fn crate_level() {
        println!("Accessible anywhere in the crate");
    }

    mod child {
        pub(super) fn parent_level() {
            println!("Accessible only in parent module");
        }
    }
}
```

---

## **11. Best Practices for Modules**
1. **Use separate files for large modules.**
2. **Minimize long module paths** using `use`.
3. **Keep private implementation details hidden** while exposing a clean API.
4. **Use `pub(crate)` or `pub(super)` for better encapsulation.**
5. **Use `mod.rs` for submodules inside directories**.

---

## **12. Summary Table**
| Feature                     | Syntax Example |
|-----------------------------|------------------------------------------------------|
| **Basic Module**            | `mod my_module { fn my_func() {} }`                 |
| **Separate File Module**    | `mod utils;` (in `main.rs` and `utils.rs` exists)   |
| **Nested Module**           | `mod outer { pub mod inner { pub fn greet() {} } }` |
| **Use Statement**           | `use my_module::my_func;`                          |
| **Parent Module Access**    | `super::parent_function();`                        |
| **Crate Root Access**       | `crate::lib_module::function();`                   |
| **Public Visibility**       | `pub fn my_function() {}`                          |
| **Restricted Visibility**   | `pub(crate) fn internal_func() {}`                 |

---

## **Conclusion**
Rust's **module system** enables clear code organization, encapsulation, and API design. By using modules efficiently, you can maintain structured and scalable Rust projects.

---

Let me know if you need more details! 😊
