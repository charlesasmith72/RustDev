# **User Input in Rust**

Rust provides various ways to **accept user input** from the command line, mainly using the **`std::io`** module. Since Rust is a **systems programming language**, user input handling is explicit, requiring proper error handling.

---

## **1. Reading User Input with `stdin()`**
The most common way to read user input is by using **`std::io::stdin()`** along with **`read_line()`**.

### **Example: Basic User Input**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter your name:");

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    println!("Hello, {}!", input.trim());
}
```
### **Explanation:**
1. **`let mut input = String::new();`** → Creates an empty string to store user input.
2. **`io::stdin().read_line(&mut input)`** → Reads a full line from standard input.
3. **`.expect("Failed to read line")`** → Handles potential input errors.
4. **`.trim()`** → Removes newline characters from user input.

---

## **2. Reading Integers and Floating-Point Numbers**
Since **`read_line()`** stores input as a `String`, we must **parse** it into a number type.

### **Example: Reading an Integer**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter a number:");

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let number: i32 = input.trim().parse().expect("Invalid number!");

    println!("You entered: {}", number);
}
```
### **Explanation:**
- **`.parse::<i32>()`** → Converts the trimmed string into an integer.
- **`.expect("Invalid number!")`** → Handles invalid input (e.g., non-numeric values).

### **Example: Reading a Floating-Point Number**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter a floating-point number:");

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let number: f64 = input.trim().parse().expect("Invalid number!");

    println!("You entered: {}", number);
}
```
- **Works the same as integers** but uses `f64` instead.

---

## **3. Handling Errors with `match`**
Using `.expect()` is fine for simple programs, but in real-world applications, **graceful error handling** is preferred.

### **Example: Safe Input Handling**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter a number:");

    io::stdin().read_line(&mut input).expect("Failed to read input");

    match input.trim().parse::<i32>() {
        Ok(number) => println!("You entered: {}", number),
        Err(_) => println!("Invalid input! Please enter a valid number."),
    }
}
```
- **`match` handles both valid and invalid inputs** without panicking.

---

## **4. Reading Multiple Values**
To read multiple values from a **single line**, we **split** the input.

### **Example: Reading Two Numbers**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter two numbers separated by space:");

    io::stdin().read_line(&mut input).expect("Failed to read input");

    let numbers: Vec<i32> = input
        .trim()
        .split_whitespace()
        .map(|num| num.parse().expect("Invalid number"))
        .collect();

    if numbers.len() >= 2 {
        println!("First number: {}, Second number: {}", numbers[0], numbers[1]);
    } else {
        println!("Please enter at least two numbers.");
    }
}
```
### **Explanation:**
1. **`.split_whitespace()`** → Splits input into words based on spaces.
2. **`.map(|num| num.parse().expect("Invalid number"))`** → Converts each part to an integer.
3. **`.collect::<Vec<i32>>()`** → Collects parsed numbers into a vector.

---

## **5. Looping Until Valid Input**
If user input is invalid, we can **loop until valid data is entered**.

### **Example: Keep Asking for a Valid Number**
```rust
use std::io;

fn main() {
    loop {
        let mut input = String::new();
        println!("Enter a valid number:");

        io::stdin().read_line(&mut input).expect("Failed to read input");

        match input.trim().parse::<i32>() {
            Ok(number) => {
                println!("You entered: {}", number);
                break;
            }
            Err(_) => println!("Invalid input! Try again."),
        }
    }
}
```
- **The loop continues** until a valid number is provided.

---

## **6. Reading Characters**
To read a **single character**, extract the first character from a string.

### **Example: Reading a Character**
```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter a single character:");

    io::stdin().read_line(&mut input).expect("Failed to read input");

    if let Some(first_char) = input.trim().chars().next() {
        println!("You entered: {}", first_char);
    } else {
        println!("No character entered!");
    }
}
```
- **`.chars().next()`** extracts the first character.
- **Handles cases where the user enters nothing**.

---

## **7. Reading a Line Without Trimming**
If you need to read the **full input, including leading/trailing spaces**, avoid `.trim()`.

```rust
use std::io;

fn main() {
    let mut input = String::new();

    println!("Enter a sentence:");

    io::stdin().read_line(&mut input).expect("Failed to read input");

    println!("You entered: {}", input);
}
```
- Useful when **whitespace is significant**.

---

## **8. Reading User Input in Functions**
Encapsulating input logic in a function improves reusability.

### **Example: Reusable Input Function**
```rust
use std::io;

fn get_input(prompt: &str) -> String {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().to_string()
}

fn main() {
    let name = get_input("Enter your name:");
    println!("Hello, {}!", name);
}
```
- **Encapsulates user input logic**, making `main()` cleaner.

---

## **9. Using `scan!` for Formatted Input (Experimental)**
Rust **does not** have built-in formatted input like `scanf()` in C, but **third-party crates** like `text_io` can help.

### **Example: Using `text_io`**
```toml
[dependencies]
text_io = "0.1"
```
```rust
use text_io::scan;

fn main() {
    let number: i32;
    println!("Enter a number:");
    scan!("{}", number);
    println!("You entered: {}", number);
}
```
- `text_io` allows formatted input parsing **like C's `scanf()`**.

---

# **📝 Summary Table**
| **Use Case**                     | **Method**                           | **Example** |
|----------------------------------|-------------------------------------|------------|
| **Basic Input (String)**         | `io::stdin().read_line()`           | `let mut input = String::new();` |
| **Integer Input**                | `.trim().parse::<i32>()`            | `let num: i32 = input.trim().parse().unwrap();` |
| **Error Handling**               | `match`                             | `match input.parse::<i32>() { ... }` |
| **Reading Multiple Values**      | `.split_whitespace()`               | `let nums: Vec<i32> = input.split_whitespace().map(|x| x.parse().unwrap()).collect();` |
| **Loop Until Valid Input**       | `loop { ... }`                      | `loop { match input.parse() { ... } }` |
| **Read Single Character**        | `.chars().next()`                   | `let ch = input.trim().chars().next();` |
| **Read Line Without Trim**       | `read_line()`                        | `println!("{}", input);` |
| **Reusable Input Function**      | Custom function                     | `fn get_input() -> String { ... }` |

---

# **🚀 Conclusion**
- **Rust uses explicit input handling via `std::io::stdin()`**.
- **`trim().parse()` converts strings into numbers safely**.
- **Use `.get()` and `match` for safe error handling**.
- **Encapsulate input handling in functions for cleaner code**.

🚀 **Rust's explicit input-handling ensures safety and reliability!** 🚀

Let me know if you need further explanations! 😊
