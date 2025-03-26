Here’s a categorized list of **WGSL attributes** with notes on which ones require **parent attributes or specific contexts** to work.

---

## 🔷 Entry Point Attributes
Used for shader entry points (`fn`) — no parent required.

| Attribute | Purpose | Requires Parent? |
|----------|---------|------------------|
| `@vertex` | Marks a function as a **vertex shader entry point** | No |
| `@fragment` | Marks a function as a **fragment shader entry point** | No |
| `@compute` | Marks a function as a **compute shader entry point** | No |
| `@workgroup_size(x[, y[, z]])` | Sets the **workgroup size** for compute shaders | Yes → must be **on a function also marked with `@compute`** |

---

## 🔶 Resource Binding Attributes
Used on **global variables** for binding to GPU resources.

| Attribute | Purpose | Requires Parent? |
|----------|---------|------------------|
| `@group(n)` | Specifies the **bind group index** | Yes → must be paired with `@binding` |
| `@binding(m)` | Specifies the **binding number within the group** | Yes → must be paired with `@group` |

✅ These two are **always used together** like:
```wgsl
@group(0) @binding(1)
var<uniform> myData: SomeType;
```

---

## 🟢 Variable Attributes

| Attribute | Purpose | Used On | Requires Parent? |
|----------|---------|---------|------------------|
| `@location(n)` | Specifies the **input/output location** for vertex/fragment shaders | Function parameters/return values | No, but must be on `@vertex` or `@fragment` entry |
| `@builtin(name)` | Marks a variable as a **built-in** like `position`, `frag_depth`, etc. | Function parameters/return values | No, but must be on entry functions |
| `@interpolate(...)` | Controls **interpolation** for fragment inputs | Return values of vertex shaders | Yes → must be used **with `@location`** |
| `@invariant` | Prevents optimization that would cause **small precision changes** | Return values (usually position) | No, but only meaningful in **vertex shaders** |

---

## 🟣 Struct Field Attributes

| Attribute | Purpose | Used On | Requires Parent? |
|----------|---------|---------|------------------|
| `@align(n)` | Aligns a struct field to **n bytes** | Struct fields | No |
| `@size(n)` | Forces a field to take up **n bytes** | Struct fields | No |
| `@offset(n)` | Manually sets the **byte offset** of a struct field | Struct fields | Yes → Must be inside a `@block`-decorated struct used in buffers |
| `@stride(n)` | Used for array types to set a custom **stride** | Array type in a buffer | No |

---

## 🟡 Block/Override Attributes

| Attribute | Purpose | Used On | Requires Parent? |
|----------|---------|---------|------------------|
| `@block` | Marks a struct as suitable for **uniform/storage buffer use** | Structs | No |
| `@id(n)` | Sets a constant’s **override ID** | `override` constants | No |
| `@diagnostic(...)` | Enables/disables **specific compiler diagnostics** | Module-level | No |

---

## Summary: Attributes that Require Context or Parent Attributes

| Attribute | Requires Context? | Why? |
|----------|--------------------|------|
| `@workgroup_size` | ✅ Yes | Only valid on `@compute` functions |
| `@group` | ✅ Yes | Must be paired with `@binding` |
| `@binding` | ✅ Yes | Must be paired with `@group` |
| `@interpolate` | ✅ Yes | Only valid with `@location`, in vertex return or fragment input |
| `@offset` | ✅ Yes | Only used inside `@block` struct types |

---

Great question! The list I gave you includes **all official WGSL attributes as of the WebGPU 1.0 specification (April 2023)** — which is the most stable and widely supported version.

Here's a double-check **complete list** to confirm we didn’t miss any:

---

### ✅ **WGSL Attributes (Complete List)**

#### 🔷 Shader Stage Entry Point
- `@vertex`
- `@fragment`
- `@compute`
- `@workgroup_size(x[, y[, z]])`

#### 🔶 Resource Binding
- `@group(n)`
- `@binding(n)`

#### 🟢 Input/Output (Function Parameters or Returns)
- `@location(n)`
- `@builtin("name")` (e.g., `"position"`, `"frag_depth"`, `"vertex_index"`, etc.)
- `@interpolate("type", ["sampling"])`
- `@invariant`

#### 🟣 Struct and Field Layout
- `@block` (for uniform/storage buffer structs)
- `@align(n)`
- `@size(n)`
- `@offset(n)` (for fields in `@block` structs)
- `@stride(n)` (for arrays in buffers)

#### 🟡 Constants and Diagnostics
- `@id(n)` (for `override` constants)
- `@diagnostic(level, rule)` (to suppress/enable compiler warnings/errors)

---

### ⚠️ Not WGSL Attributes (but often confused)
Just to clarify — the following **are not WGSL attributes**, even though they look similar or are used with types:
- `var<uniform>`, `var<storage, read_write>` → **storage class + access mode**
- `override` → **keyword**, not an attribute
- `fn` → **function declaration**
- `struct` → type definition, not an attribute

---

### ✅ So Yes — This is the Full List

Unless you're using an experimental WGSL extension or a forked toolchain, the list above **covers every valid attribute** in standard WGSL 1.0.

Let me know if you want:
- An organized visual cheatsheet
- A JSON/YAML list for codegen or docs
- Version-specific deltas (e.g. what changed since 2022 drafts)
