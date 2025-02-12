# **Error Handling for Beginners**

Error handling is an important skill for writing safe and reliable programs in Rust. Unlike some languages where errors are ignored or caught at runtime, Rust makes you handle errors explicitly. 

In this guide, we'll cover different ways to handle errors in Rust and when to use them.

---

## **1. The `panic!` Macro**
The `panic!` macro is used when something goes terribly wrong, and the program should **stop immediately**.

### **Example**
```rust
fn main() {
    panic!("Something went wrong!");
}
```
**What happens?**  
- The program **stops running** immediately.
- Rust shows an error message.
- It’s best used for **serious problems** that should never happen.

#### **When to use?**
- Only when the error is **unrecoverable**.
- Avoid using `panic!` in normal situations.

---

## **2. The `process` Module and the `exit` Function**
Instead of using `panic!`, we can **exit** the program with a specific status code.

### **Example**
```rust
use std::process;

fn main() {
    println!("Something went wrong. Exiting...");
    process::exit(1);
}
```
- The number `1` means **the program failed**.
- `0` usually means **everything went fine**.

#### **When to use?**
- When you want to **exit gracefully** without a panic message.

---

## **3. Printing Errors with `eprintln!`**
Rust has `println!` to print normal messages, but for **errors**, we use `eprintln!`.

### **Example**
```rust
fn main() {
    eprintln!("This is an error message!");
}
```
This helps **separate error messages** from normal output.

#### **When to use?**
- When you want errors to be printed in **red** (in some terminals).
- When logging **warnings** or debugging issues.

---

## **4. Opening a File**
Rust prevents silent failures. If a file doesn’t exist, Rust **forces you to handle it**.

### **Example**
```rust
use std::fs::File;

fn main() {
    let file = File::open("file.txt");

    match file {
        Ok(f) => println!("File opened successfully!"),
        Err(e) => println!("Failed to open file: {}", e),
    }
}
```
- `Ok(f)`: File opened **successfully**.
- `Err(e)`: Something went **wrong**.

#### **When to use?**
- When working with files **that might not exist**.

---

## **5. Asking the User for Input**
Rust requires you to **handle input errors** properly.

### **Example**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter your name: ");
    let result = io::stdin().read_line(&mut input);

    match result {
        Ok(_) => println!("Hello, {}", input.trim()),
        Err(e) => println!("Failed to read input: {}", e),
    }
}
```
#### **When to use?**
- Any time you take **user input**.
- To handle cases where input fails (e.g., unexpected errors).

---

## **6. Reading a File's Contents**
Instead of just opening a file, we can **read everything inside**.

### **Example**
```rust
use std::fs;

fn main() {
    let content = fs::read_to_string("file.txt");

    match content {
        Ok(text) => println!("File content:\n{}", text),
        Err(e) => println!("Error reading file: {}", e),
    }
}
```
- `Ok(text)`: The file was read **successfully**.
- `Err(e)`: Something went **wrong**.

#### **When to use?**
- When you **need to read a whole file** into a string.

---

## **7. Propagating Errors (`Result` Type)**
Instead of handling errors **immediately**, we can **pass them up** for the caller to handle.

### **Example**
```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file_content(filename: &str) -> Result<String, io::Error> {
    let mut file = File::open(filename)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}

fn main() {
    match read_file_content("file.txt") {
        Ok(text) => println!("File Content:\n{}", text),
        Err(e) => println!("Error: {}", e),
    }
}
```
- The `?` operator **forwards errors** automatically.
- The caller (`main`) decides what to do with the error.

#### **When to use?**
- When writing **functions** that might fail.

---

## **8. Understanding Error Type Redeclaration**
We can define **custom error types** to make error handling more structured.

### **Example**
```rust
use std::fmt;

#[derive(Debug)]
enum MyError {
    Io(std::io::Error),
    Parse(std::num::ParseIntError),
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            MyError::Io(e) => write!(f, "IO Error: {}", e),
            MyError::Parse(e) => write!(f, "Parse Error: {}", e),
        }
    }
}
```
- This helps **group errors** together.

#### **When to use?**
- In larger projects where you want **organized** error types.

---

## **9. The `?` Operator (Try Operator)**
The `?` operator **simplifies** error handling.

### **Example**
```rust
use std::fs::File;

fn open_file() -> Result<File, std::io::Error> {
    let file = File::open("file.txt")?;
    Ok(file)
}
```
- Instead of `match`, `?` **automatically returns errors**.

#### **When to use?**
- When writing **functions** that return `Result<T, E>`.

---

## **10. Using `Option<T>` for Handling Missing Values**
The `Option<T>` type is used when a value **might not exist**.

### **Example**
```rust
fn get_first_char(word: &str) -> Option<char> {
    word.chars().next()
}

fn main() {
    let word = "hello";
    match get_first_char(word) {
        Some(c) => println!("First character: {}", c),
        None => println!("No character found"),
    }
}
```
- `Some(c)`: We **found a character**.
- `None`: The string was **empty**.

#### **When to use?**
- When something **may or may not exist** (e.g., searching for a user).

---

## **11. Using `?` with `Option<T>`**
Just like with `Result<T, E>`, we can use `?` with `Option<T>`.

### **Example**
```rust
fn first_letter(word: &str) -> Option<char> {
    Some(word.chars().next()?)
}

fn main() {
    let letter = first_letter("hello")?;
    println!("First letter: {}", letter);
}
```
- The `?` operator **short-circuits** if `None` is found.

#### **When to use?**
- When dealing with **optional values**.

---

## **Conclusion**
- Use `panic!` for **critical** errors.
- Use `Result<T, E>` for **expected errors**.
- Use `?` to **simplify error handling**.
- Use `Option<T>` when something **might not exist**.

By mastering these techniques, you’ll write **safer** and **more reliable** Rust programs! 🚀

Would you like a **downloadable PDF** version of this guide? 😊
