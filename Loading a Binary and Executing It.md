### **Rust: Loading a Binary and Executing It**
In Rust, you can load and execute a compiled binary (such as an executable file) at runtime using the `std::process::Command` module. This is useful when you need to:
- Execute an external program.
- Run another compiled binary dynamically.
- Chain multiple processes together.

---

### **Basic Example: Running an External Binary**
The `Command` struct allows us to run an executable file from within a Rust program.

#### **Example: Running an External Executable**
Assume you have a compiled binary file (`my_binary`) that takes arguments and prints output.

```rust
use std::process::Command;

fn main() {
    // Define the path to the binary
    let output = Command::new("./my_binary")
        .arg("hello")  // Passing an argument
        .output()      // Run the binary and capture output
        .expect("Failed to execute binary");

    // Convert output to a string
    let stdout = String::from_utf8_lossy(&output.stdout);
    let stderr = String::from_utf8_lossy(&output.stderr);

    println!("Standard Output: {}", stdout);
    println!("Error Output: {}", stderr);
}
```
#### **Explanation:**
1. **`Command::new("./my_binary")`** - Specifies the binary to execute.
2. **`.arg("hello")`** - Passes an argument to the binary.
3. **`.output()`** - Runs the binary and captures its output.
4. **`String::from_utf8_lossy(&output.stdout)`** - Converts the binary’s output into a readable string.

---

### **Executing a Shell Command**
You can also use `sh -c` (Linux/macOS) or `cmd /C` (Windows) to execute shell commands.

```rust
use std::process::Command;

fn main() {
    let output = Command::new("sh")
        .arg("-c")
        .arg("ls -l") // Example command
        .output()
        .expect("Failed to execute command");

    println!("Output: {}", String::from_utf8_lossy(&output.stdout));
}
```

---

### **Spawning a Process Without Waiting**
If you want to **run the process without blocking** the Rust program:

```rust
use std::process::Command;

fn main() {
    let child = Command::new("./my_binary")
        .spawn()
        .expect("Failed to start process");

    println!("Process started with PID: {:?}", child.id());
}
```
- **`.spawn()`** runs the process in the background without waiting for it to finish.
- Use `child.wait()` to wait for the process.

---

### **Advanced: Interacting with the Process (Pipes)**
You can read/write to a process using **stdin, stdout, and stderr**.

```rust
use std::process::{Command, Stdio};
use std::io::Write;

fn main() {
    let mut child = Command::new("bc") // Run `bc` (calculator) in Linux
        .stdin(Stdio::piped()) // Open stdin
        .stdout(Stdio::piped()) // Open stdout
        .spawn()
        .expect("Failed to start bc");

    let stdin = child.stdin.as_mut().unwrap();
    stdin.write_all(b"2+2\n").unwrap(); // Send input

    let output = child.wait_with_output().unwrap();
    println!("Output: {}", String::from_utf8_lossy(&output.stdout));
}
```
- **This allows interacting with the process like a terminal.**

---

### **Dynamic Loading of a Shared Library (Linux/macOS)**
Instead of an executable, you might want to **load a shared library (`.so` or `.dll`)** at runtime. Use `libloading` crate for this:

```rust
use libloading::{Library, Symbol};

fn main() {
    let lib = Library::new("libmylibrary.so").expect("Failed to load library");

    unsafe {
        let func: Symbol<fn()> = lib.get(b"my_function").unwrap();
        func(); // Call function from the shared library
    }
}
```

---

### **Conclusion**
- `std::process::Command` is the standard way to **run an external binary**.
- `spawn()` allows non-blocking execution.
- You can pipe stdin/stdout for **interactive processes**.
- `libloading` enables **dynamic loading of shared libraries**.

Do you want an example specific to **Windows**, **Linux**, or **WASM execution**?
