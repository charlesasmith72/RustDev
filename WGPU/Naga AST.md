Sure! Here's how to refactor your current `main.rs` code into a separate file called `naga_ast.rs` with a reusable function that accepts a **WGSL `&str`**, parses it, validates it, and then prints the global variables.

---

### 📁 New File: `naga_ast.rs`

```rust
use naga::front::wgsl;
use naga::valid::{Validator, ValidationFlags, Capabilities};

/// Parses WGSL code and prints the global variables using Naga's IR.
/// Returns a Result for proper error handling.
pub fn inspect_globals_from_wgsl(wgsl_code: &str) -> Result<(), String> {
    // Parse WGSL into a Naga IR module
    let module = wgsl::parse_str(wgsl_code).map_err(|e| format!("Parse error: {e}"))?;

    // Validate the module (resolves types and bindings)
    let mut validator = Validator::new(ValidationFlags::all(), Capabilities::all());
    validator
        .validate(&module)
        .map_err(|e| format!("Validation error: {e:?}"))?;

    // Print global variables (e.g., storage buffers, uniforms)
    for (handle, global) in module.global_variables.iter() {
        println!("{:?}", global);
    }

    Ok(())
}
```

---

### 📁 In Your `main.rs` File

Make sure you call the new function like this:

```rust
mod naga_ast;

fn main() {
    let wgsl_code = r#"
        @group(0) @binding(0)
        var<storage, read> storage_buffer: array<u32>;

        @group(0) @binding(1)
        var<storage, read> storage_buffe2: array<u32>;
    "#;

    if let Err(e) = naga_ast::inspect_globals_from_wgsl(wgsl_code) {
        eprintln!("Error: {}", e);
    }
}
```

---

### ✅ Notes

- The function returns a `Result` so you can use it in other tools or testing environments.
- You can later extend this to return the parsed AST instead of just printing, e.g., `Result<Module, String>`.
- If this is going in a library, you can `pub use` parts of `naga` to make external usage easier.

---

Want me to refactor it so it returns the JSON AST instead of just printing globals?
