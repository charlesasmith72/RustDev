You can write a simple Rust program that reads a WASM file, converts its contents to a Base64 string, and prints it out. Here's an example:

1. **Create a new Cargo project:**

   ```bash
   cargo new wasm_to_base64
   cd wasm_to_base64
   ```

2. **Add the Base64 dependency:**

   In your `Cargo.toml`, add the following under `[dependencies]`:

   ```toml
   [dependencies]
   base64 = "0.21"
   ```

3. **Write the conversion code:**

   Replace the contents of `src/main.rs` with the following:

   ```rust
   use std::env;
   use std::fs;
   use base64::Engine;

   fn main() -> std::io::Result<()> {
       // Expect the WASM file path as the first argument.
       let args: Vec<String> = env::args().collect();
       if args.len() != 2 {
           eprintln!("Usage: {} <wasm-file>", args[0]);
           std::process::exit(1);
       }

       let wasm_path = &args[1];
       // Read the WASM file into a byte vector.
       let wasm_bytes = fs::read(wasm_path)?;
       
       // Encode the bytes as a Base64 string.
       let encoded = base64::engine::general_purpose::STANDARD.encode(wasm_bytes);
       
       // Print the Base64 string.
       println!("{}", encoded);
       Ok(())
   }
   ```

4. **Run the program:**

   Build and run your program with the path to your WASM file as an argument:

   ```bash
   cargo run -- path/to/hello_wasm_bg.wasm
   ```

This will output the Base64 representation of your WASM binary to the terminal. You can redirect the output to a file if needed:

```bash
cargo run -- path/to/hello_wasm_bg.wasm > hello_wasm_bg.wasm.base64.txt
```

This approach uses Rust's standard library to read files and the [base64 crate](https://crates.io/crates/base64) to handle the encoding.
