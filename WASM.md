Below is a complete, beginner-friendly example that walks you through packaging a simple Rust app as WebAssembly (WASM) and loading it into an HTML page to run in the browser.

---

## Step 1: Install Required Tools

1. **Install Rust:**  
   Follow the instructions on [rust-lang.org](https://www.rust-lang.org/tools/install) to install Rust.

2. **Install wasm-pack:**  
   Open your terminal and run:  
   ```bash
   cargo install wasm-pack
   ```
   This tool simplifies building Rust code as WASM.

---

## Step 2: Create a New Rust Library

Since we want to compile to WASM, create a library project (not a binary):

```bash
cargo new --lib hello-wasm
cd hello-wasm
```

---

## Step 3: Configure Your Cargo.toml

Open the `Cargo.toml` file and modify it as follows:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

**Explanation:**  
- Setting `crate-type` to `cdylib` tells Cargo to produce a dynamic library suited for WASM.  
- The dependency `wasm-bindgen` helps connect Rust and JavaScript.

---

## Step 4: Write Your Rust Code

Edit the file `src/lib.rs` to add a simple function that returns a greeting:

```rust
use wasm_bindgen::prelude::*;

// This annotation makes the function available to JavaScript.
#[wasm_bindgen]
pub fn greet() -> String {
    "Hello from Rust!".into()
}
```

---

## Step 5: Build the Project as WASM

In your terminal, run:

```bash
wasm-pack build --target web
```

This command compiles your code and generates a `pkg/` directory containing the WASM binary and JavaScript glue code.

---

## Step 6: Create an HTML Page to Use Your WASM Module

Create a file named `index.html` in the project root (or another folder where you’ll serve your files) and add the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rust WASM Example</title>
</head>
<body>
  <h1>Rust WASM Example</h1>
  <button id="greet-btn">Greet</button>
  <p id="output"></p>

  <!-- Use a module script so you can import the WASM module -->
  <script type="module">
    // Import the initialization function and the greet function
    import init, { greet } from './pkg/hello_wasm.js';

    async function run() {
      // Initialize the WASM module
      await init();
      // Attach a click event to the button
      document.getElementById("greet-btn").addEventListener("click", () => {
        // Call the Rust function
        const message = greet();
        // Display the message in the page
        document.getElementById("output").textContent = message;
      });
    }

    run();
  </script>
</body>
</html>
```

**Explanation:**  
- The script imports the generated JavaScript module from the `pkg/` directory.  
- Once initialized, clicking the button will call the Rust `greet` function and display the returned string.

---

## Step 7: Serve Your Files

To test your application, you need to serve your files using a static file server. For example, you can use Python’s simple HTTP server:

```bash
python3 -m http.server 8080
```

Then open your browser and navigate to [http://localhost:8080/index.html](http://localhost:8080/index.html).

---

## Recap

1. **Install Rust and wasm-pack.**
2. **Create a new Rust library project.**
3. **Set up your Cargo.toml with `cdylib` and `wasm-bindgen`.**
4. **Write a simple Rust function in `src/lib.rs`.**
5. **Build the project with `wasm-pack build --target web`.**
6. **Create an HTML file to load and use the WASM module.**
7. **Serve the files using a static file server and test in your browser.**

This example should provide a clear, step-by-step guide for a junior developer to get started with Rust, WebAssembly, and integrating it with a simple HTML page.
