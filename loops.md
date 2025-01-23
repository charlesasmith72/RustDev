 
## `loop` and `break`  

The **`loop`** keyword creates an infinite loop, which is a block of code that repeats indefinitely until explicitly exited using the **`break`** keyword. It’s a powerful tool for scenarios where the number of iterations isn’t predetermined or depends on runtime conditions.

---

### **1. Basic Syntax of `loop`**

The `loop` keyword repeatedly executes the code block within it.

#### Example: Infinite Loop
```rust
fn main() {
    loop {
        println!("This will run forever!");
    }
}
```

⚠️ **Note**: Without a `break`, the above loop will run indefinitely.

---

### **2. Exiting a Loop with `break`**

The `break` keyword is used to exit a loop early, regardless of its condition.

#### Example: Loop with `break`
```rust
fn main() {
    let mut count = 0;

    loop {
        count += 1;

        if count > 5 {
            break; // Exit the loop when count is greater than 5
        }

        println!("Count: {}", count);
    }

    println!("Loop exited at count: {}", count);
}
```

#### Output:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Loop exited at count: 6
```

---

### **3. Returning a Value with `break`**

In Rust, `break` can return a value from a loop.

#### Example: Returning a Value
```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2; // Return a value from the loop
        }
    };

    println!("Result: {}", result); // Output: Result: 20
}
```

---

### **4. Nested Loops and `break` with Labels**

In nested loops, you can use **labels** to specify which loop to exit.

#### Example: Using Labels with `break`
```rust
fn main() {
    let mut outer_count = 0;

    'outer: loop {
        println!("Outer loop: {}", outer_count);

        let mut inner_count = 0;

        loop {
            println!("  Inner loop: {}", inner_count);

            if inner_count == 2 {
                break 'outer; // Exit the outer loop
            }

            inner_count += 1;
        }

        outer_count += 1;
    }

    println!("Exited the loops");
}
```

#### Output:
```
Outer loop: 0
  Inner loop: 0
  Inner loop: 1
  Inner loop: 2
Exited the loops
```

---

### **5. Combining `loop` with `continue`**

The **`continue`** keyword skips the rest of the loop body and moves to the next iteration.

#### Example:
```rust
fn main() {
    let mut count = 0;

    loop {
        count += 1;

        if count % 2 == 0 {
            continue; // Skip even numbers
        }

        println!("Odd number: {}", count);

        if count >= 5 {
            break; // Exit the loop after 5
        }
    }
}
```

#### Output:
```
Odd number: 1
Odd number: 3
Odd number: 5
```

---

### **6. Common Use Cases**

1. **Infinite Loops**:
   - Useful for servers, event listeners, or other scenarios where the program should run continuously.
   ```rust
   loop {
       // Handle server requests
   }
   ```

2. **Retry Logic**:
   - Retry operations until a condition is met or an error occurs.
   ```rust
   let mut attempts = 0;
   loop {
       attempts += 1;

       if perform_operation() {
           break; // Exit the loop if the operation is successful
       }

       if attempts >= 3 {
           println!("Failed after 3 attempts");
           break;
       }
   }
   ```

---

### **Key Points**
1. **`loop`**:
   - Creates an infinite loop.
   - Must be explicitly exited with `break`.

2. **`break`**:
   - Stops the loop execution.
   - Can optionally return a value.

3. **Labels**:
   - Use labels (`'label_name`) to specify which loop to exit in nested loops.

4. **Efficiency**:
   - Rust optimizes `loop` usage, and the compiler ensures memory safety during iteration.
 

## The `while` Loop in Rust

The **`while`** loop in Rust repeatedly executes a block of code as long as a given condition evaluates to `true`. It’s useful when the number of iterations is not known beforehand.

---

### **Syntax**

```rust
while condition {
    // Code to execute while the condition is true
}
```

- The **condition** is evaluated before each iteration.
- If the condition is `false`, the loop exits.

---

### **Example: Basic `while` Loop**

```rust
fn main() {
    let mut count = 0;

    while count < 5 {
        println!("Count: {}", count);
        count += 1;
    }

    println!("Loop finished. Final count: {}", count);
}
```

#### Output:
```
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
Loop finished. Final count: 5
```

---

### **Key Characteristics**

1. **Condition-Driven**: The loop runs only as long as the condition evaluates to `true`.
2. **Condition Checked First**: If the condition is initially `false`, the loop body is never executed.

---

### **Exiting a `while` Loop with `break`**

You can use the `break` keyword to exit a `while` loop early.

#### Example:
```rust
fn main() {
    let mut number = 0;

    while number < 10 {
        if number == 5 {
            println!("Exiting early at number: {}", number);
            break;
        }
        println!("Number: {}", number);
        number += 1;
    }
}
```

#### Output:
```
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4
Exiting early at number: 5
```

---

### **Skipping Iterations with `continue`**

The `continue` keyword skips the current iteration and proceeds to the next.

#### Example:
```rust
fn main() {
    let mut number = 0;

    while number < 10 {
        number += 1;

        if number % 2 == 0 {
            continue; // Skip even numbers
        }

        println!("Odd number: {}", number);
    }
}
```

#### Output:
```
Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7
Odd number: 9
```

---

### **Infinite `while` Loop**

To create an infinite loop with `while`, use `while true`.

#### Example:
```rust
fn main() {
    let mut counter = 0;

    while true {
        println!("Counter: {}", counter);
        counter += 1;

        if counter == 5 {
            break; // Exit the infinite loop
        }
    }
}
```

---

### **Using a `while` Loop with a Collection**

You can iterate over a collection using a `while` loop by manually controlling the index or iterator.

#### Example: Iterating with an Index
```rust
fn main() {
    let numbers = [10, 20, 30, 40];
    let mut index = 0;

    while index < numbers.len() {
        println!("Number at index {}: {}", index, numbers[index]);
        index += 1;
    }
}
```

---

### **Comparison with Other Loops**

| Feature         | `while`                           | `loop`                                  | `for`                                     |
|------------------|-----------------------------------|-----------------------------------------|-------------------------------------------|
| **Condition-Driven** | Yes                              | No (runs indefinitely unless `break`)  | Iterates over collections or ranges        |
| **Explicit Iteration** | Must manually update variables   | Not required                            | Automatically handles iteration            |
| **Use Case**    | Unknown number of iterations       | Infinite loops or complex conditions    | Known ranges or collections               |

---

### **Pitfalls to Avoid**

1. **Infinite Loop Due to Incorrect Condition**:
   - Ensure the condition eventually evaluates to `false`.
   ```rust
   let mut x = 0;
   while x > 0 { // This will never run as `x` starts at 0
       println!("{}", x);
   }
   ```

2. **Manual State Update**:
   - Forgetting to update variables inside the loop can lead to infinite loops.

---

### **Use Cases**

- Waiting for a condition to become `true`:
  ```rust
  fn main() {
      let mut condition = false;

      while !condition {
          println!("Still waiting...");
          condition = true; // Simulate the condition being met
      }
      println!("Condition met!");
  }
  ```

- Iterating with manual control:
  ```rust
  let mut counter = 0;
  while counter < 10 {
      println!("Counter: {}", counter);
      counter += 1;
  }
  ```

---

### **Key Points**

1. **Condition-Driven**:
   - The loop runs while the condition is `true`.
2. **Manual Control**:
   - You need to manage state changes (e.g., updating variables).
3. **`break` and `continue`**:
   - Use `break` to exit and `continue` to skip to the next iteration.


## The `for` Loop in Rust

The **`for` loop** in Rust is used to iterate over collections, ranges, or other iterables in a concise and efficient manner. It’s a safer and more convenient alternative to manually iterating with a `while` loop.

---

### **Basic Syntax**

```rust
for variable in iterable {
    // Code to execute for each item
}
```

- **`variable`**: A variable that takes the value of each element during the iteration.
- **`iterable`**: A collection, range, or any type implementing the `Iterator` trait.

---

### **Iterating Over a Range**

#### Example:
```rust
fn main() {
    for number in 1..5 {
        println!("Number: {}", number);
    }
}
```

#### Output:
```
Number: 1
Number: 2
Number: 3
Number: 4
```

- **`1..5`**: A range that starts at 1 and ends before 5 (exclusive).
- **`1..=5`**: A range that includes 5 (inclusive).

---

### **Iterating Over a Collection**

You can use `for` to iterate over arrays, vectors, and other collections.

#### Example: Array Iteration
```rust
fn main() {
    let numbers = [10, 20, 30, 40];

    for num in numbers {
        println!("Number: {}", num);
    }
}
```

---

### **Accessing Indices with `enumerate`**

Use `.enumerate()` to access both the index and the value during iteration.

#### Example:
```rust
fn main() {
    let fruits = ["apple", "banana", "cherry"];

    for (index, fruit) in fruits.iter().enumerate() {
        println!("Index: {}, Fruit: {}", index, fruit);
    }
}
```

#### Output:
```
Index: 0, Fruit: apple
Index: 1, Fruit: banana
Index: 2, Fruit: cherry
```

---

### **Iterating with `iter()`**

By default, Rust uses **ownership** when iterating over a collection. Use `.iter()` to borrow elements without transferring ownership.

#### Example:
```rust
fn main() {
    let numbers = vec![1, 2, 3, 4];

    for num in numbers.iter() {
        println!("Number: {}", num);
    }

    println!("Original vector: {:?}", numbers); // Still accessible
}
```

---

### **Iterating with Mutable References**

Use `.iter_mut()` to mutate elements of a collection during iteration.

#### Example:
```rust
fn main() {
    let mut numbers = vec![1, 2, 3, 4];

    for num in numbers.iter_mut() {
        *num *= 2; // Double each element
    }

    println!("Updated vector: {:?}", numbers);
}
```

#### Output:
```
Updated vector: [2, 4, 6, 8]
```

---

### **Skipping Iterations with `continue`**

The `continue` keyword skips the current iteration and proceeds to the next.

#### Example:
```rust
fn main() {
    for num in 1..10 {
        if num % 2 == 0 {
            continue; // Skip even numbers
        }
        println!("Odd number: {}", num);
    }
}
```

---

### **Breaking Out of a Loop with `break`**

The `break` keyword exits the loop early.

#### Example:
```rust
fn main() {
    for num in 1.. {
        if num > 5 {
            break;
        }
        println!("Number: {}", num);
    }
}
```

---

### **Nested Loops with Labels**

In nested loops, use labels to specify which loop to break or continue.

#### Example:
```rust
fn main() {
    'outer: for i in 1..4 {
        for j in 1..4 {
            if i + j == 4 {
                break 'outer; // Exit the outer loop
            }
            println!("i: {}, j: {}", i, j);
        }
    }
    println!("Exited the loop");
}
```

---

### **Using Ranges in Reverse**

Use `.rev()` to iterate a range in reverse order.

#### Example:
```rust
fn main() {
    for num in (1..5).rev() {
        println!("Number: {}", num);
    }
}
```

#### Output:
```
Number: 4
Number: 3
Number: 2
Number: 1
```

---

### **Combining Iterators**

You can chain iterators with methods like `.chain()`.

#### Example:
```rust
fn main() {
    for num in (1..3).chain(5..7) {
        println!("Number: {}", num);
    }
}
```

#### Output:
```
Number: 1
Number: 2
Number: 5
Number: 6
```

---

### **Comparison with Other Loops**

| Feature             | `for` Loop                   | `while` Loop                | `loop` (Infinite Loop)          |
|----------------------|------------------------------|-----------------------------|----------------------------------|
| **Condition-Based**  | No                          | Yes                         | No                              |
| **Iteration-Based**  | Yes (over ranges/collections) | Manual                      | Manual or user-defined exit     |
| **Preferred For**    | Known ranges/collections     | Runtime-conditional loops   | Infinite or complex-condition loops |

---

### **Key Points**

1. **Iterates Automatically**:
   - Simplifies iteration over ranges, arrays, vectors, and other iterables.
2. **Ownership**:
   - Use `.iter()` to borrow and `.iter_mut()` to mutate elements during iteration.
3. **Control Flow**:
   - Use `break` to exit and `continue` to skip iterations.

 