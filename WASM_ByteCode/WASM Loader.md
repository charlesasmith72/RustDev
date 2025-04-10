Perfect — using `lib.rs` is the *best practice* for WASM projects that are meant to be imported or controlled externally (like your splash loader).

---

## Correct Structure for WASM Splash Loader Crate using lib.rs

```
src/
├── lib.rs
```

Your `Cargo.toml` should have:
```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

---

## lib.rs Example

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// Exported function to be called from JS
#[wasm_bindgen]
pub fn run_loader() {
    log("WASM splash loader triggered from Rust!");
}
```

---

## Build for WASM
```bash
cargo build --release --target wasm32-unknown-unknown
```

Optional: wasm-bindgen to generate JS glue:
```bash
wasm-bindgen target/wasm32-unknown-unknown/release/your_crate_name.wasm --out-dir pkg --target web
```

---

## JS Usage:
```html
<script type="module">
import init, { run_loader } from './pkg/your_crate_name.js';

await init();
run_loader();

document.getElementById('brand').classList.remove('focus-in-contract-bck');
document.getElementById('brand').classList.add('text-blur-out');
</script>
```

---

## Why lib.rs is better here:
| Benefit | Why |
|---------|-----|
|Cleaner WASM API | Export exactly what you want |
|Re-usable | Any function, any number of exports |
|No Rust `main()` conflicts | Pure WASM library |
|Perfect for Inline or Modular | Flexible |

---

## Ready for Inline WASM too
Once your `lib.rs` is stable:
1. Build
2. Optimize `.wasm`
3. Convert to `\x` binary chunk
4. Inline directly in `<template>` or `<script>`

---

Want me to:
- Generate full lib.rs splash loader ready-to-inline?
- Auto-generate build + inline pipeline (Makefile or build.rs)?
- Generate JS loader to auto-fetch inline WASM chunks?
- Show Rspeedy config for WASM library projects?

Say:
> *"Generate full lib.rs splash loader ready for inline"*
