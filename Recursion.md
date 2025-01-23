# Recursion 

**Recursion** is when a function calls itself to solve a smaller instance of the same problem. Rust supports recursion but enforces strict memory and type safety. Recursive functions must have a base case to prevent infinite recursion.

---

## **Syntax of a Recursive Function**

```rust
fn function_name(parameters) -> ReturnType {
    if base_condition {
        base_case_value
    } else {
        function_name(smaller_problem) // Recursive call
    }
}
```

---

### **Example: Factorial Using Recursion**

```rust
fn factorial(n: u32) -> u32 {
    if n == 0 {
        1 // Base case: 0! = 1
    } else {
        n * factorial(n - 1) // Recursive call
    }
}

fn main() {
    let result = factorial(5);
    println!("Factorial of 5 is: {}", result); // Output: Factorial of 5 is: 120
}
```

---

### **Key Components of Recursive Functions**

1. **Base Case**:
   - The condition under which the recursion stops.
   - Prevents infinite recursion.

2. **Recursive Case**:
   - The part of the function where it calls itself with modified arguments to approach the base case.

---

### **Example: Fibonacci Sequence**

The Fibonacci sequence is another classic example of recursion.

#### Example:
```rust
fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        n // Base case
    } else {
        fibonacci(n - 1) + fibonacci(n - 2) // Recursive case
    }
}

fn main() {
    let n = 10;
    println!("The {}th Fibonacci number is: {}", n, fibonacci(n)); // Output: The 10th Fibonacci number is: 55
}
```

---

## **Advantages of Recursion**

1. Simplifies problems that have a naturally recursive structure (e.g., trees, factorial, Fibonacci).
2. Reduces the need for explicit loops in some scenarios.

---

## **Disadvantages of Recursion**

1. **Performance Overhead**:
   - Each recursive call uses stack space.
   - For deeply recursive functions, this may lead to a **stack overflow**.
   
2. **Readability**:
   - Recursive functions can be harder to understand and debug compared to iterative solutions.

---

## **Tail Recursion**

In **tail recursion**, the recursive call is the last operation in the function. Rust does not optimize tail recursion, so deeply recursive functions may still result in a stack overflow.

#### Example of Tail Recursion:
```rust
fn factorial_tail_recursive(n: u32, acc: u32) -> u32 {
    if n == 0 {
        acc // Base case
    } else {
        factorial_tail_recursive(n - 1, acc * n) // Recursive call with updated accumulator
    }
}

fn main() {
    let result = factorial_tail_recursive(5, 1);
    println!("Factorial of 5 is: {}", result); // Output: Factorial of 5 is: 120
}
```

---

## **Preventing Stack Overflow**

To handle deeply recursive problems, use **iterative solutions** or structures like `Vec` or **explicit stacks** for manual recursion.

#### Example: Factorial Iterative
```rust
fn factorial_iterative(n: u32) -> u32 {
    (1..=n).product()
}

fn main() {
    let result = factorial_iterative(5);
    println!("Factorial of 5 is: {}", result); // Output: Factorial of 5 is: 120
}
```

---

## **Key Points**

1. **Base Case is Critical**:
   - Always define a base case to prevent infinite recursion.

2. **Stack Usage**:
   - Recursive functions use the stack for each call. For deeply nested problems, consider alternatives.

3. **Iterative vs. Recursive**:
   - Prefer iteration for problems with large input sizes to avoid stack overflow.

4. **Tail Recursion**:
   - Rust does not optimize tail-recursive functions, so use caution with deeply recursive algorithms.

 