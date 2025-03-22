Below is a concise overview of **all the constructs** that can legally appear at *module scope* in WGSL. The WGSL specification describes these in detail, but this list summarizes the top-level language elements you can declare outside of any function.

---

## 1. **Enable Directives**
Enables optional language features or extensions:

```wgsl
enable f16;
```

- Currently, `f16` (for half-precision floats) is one known example, but more may be added in future WGSL versions.

---

## 2. **Global Variable Declarations**

### 2a. **Resource-Binding Variables**
These have `@group(N) @binding(M)` attributes plus a qualifying storage class or resource type:

```wgsl
// ─────────────────────────────────────
// Storage Buffers (All access modes)
// ─────────────────────────────────────

@group(0) @binding(0)
var<storage, read> storage_read: array<u32>;

@group(0) @binding(1)
var<storage, read_write> storage_read_write: array<f32>;

@group(0) @binding(2)
var<storage, write> storage_write: array<vec4<f32>>;

// ─────────────────────────────────────
// Uniform Buffer
// ─────────────────────────────────────

struct SomeUniforms {
    a: f32,
    b: vec4<u32>,
};

@group(0) @binding(3)
var<uniform> my_uniforms: SomeUniforms;

// ─────────────────────────────────────
// Sampled Texture and Sampler
// ─────────────────────────────────────

@group(0) @binding(4)
var my_texture_2d: texture_2d<f32>;

@group(0) @binding(5)
var my_texture_cube: texture_cube<f32>;

@group(0) @binding(6)
var my_sampler: sampler;

@group(0) @binding(7)
var my_comparison_sampler: sampler_comparison;

// ─────────────────────────────────────
// Storage Texture
// ─────────────────────────────────────

@group(0) @binding(8)
var my_storage_texture: texture_storage_2d<rgba8unorm, write>;

// ─────────────────────────────────────
// Optional: Push Constants (non-binding)
// ─────────────────────────────────────

struct PushConstants {
    scale: f32,
    offset: vec2<f32>,
};

@push_constant
var<uniform> pc: PushConstants;

```

- These correspond to external GPU resources that you bind at runtime via a bind group.

### 2b. **Private Global Variables**
Global “plain” variables local to the module (do not get bound from outside). For example:

```wgsl
var<private> counter: i32 = 0;
```

- If you omit `<private>`, it defaults to `private`.

> **Important**: Any global variable (resource or private) **must** be declared *outside* of function bodies.

---

## 3. **Constants**

### 3a. **Immutable Constants (`const`)**
Compile-time constants that cannot be overridden at pipeline creation:

```wgsl
const PI: f32 = 3.14159;
```

### 3b. **Overridable Constants (`override`)**
Values that can be specialized by the host at pipeline creation time:

```wgsl
@id(0) override MY_FLAG: bool = true;
override MY_SCALE: f32 = 1.0;
```

- If the host does not provide an override, the default is used.

---

## 4. **Type Definitions**

### 4a. **Type Aliases**
Create a new name for an existing type:

```wgsl
type MyFloat4 = vec4<f32>;
```

### 4b. **Struct Declarations**
Define a custom structure:

```wgsl
struct MyData {
    position: vec3<f32>,
    id: u32,
};
```

- Often used to describe buffer layouts or group related fields.

---

## 5. **Functions**

### 5a. **Entry-Point Functions**
Marked with an attribute such as `@compute`, `@vertex`, or `@fragment`. For example:

```wgsl
@compute @workgroup_size(64)
fn main_cs() {
    // ...
}
```

or

```wgsl
@vertex
fn main_vs(...) -> @builtin(position) vec4<f32> {
    // ...
}
```

- These are the “roots” that the GPU dispatches (for compute) or calls (for render stages).

### 5b. **Helper / Normal Functions**
Any function declared in module scope, but *without* an entry point attribute:

```wgsl
fn helper_func(x: f32) -> f32 {
    return x * 2.0;
}
```

- Can be called by entry points or other functions, but not directly invoked by the GPU unless referenced by an entry point.

---

## Putting It All Together

A WGSL file can mix these constructs in any order at the module level. A typical file might look like:

```wgsl
enable f16;

@group(0) @binding(0)
var<storage, read> data_buffer: array<u32>;

@group(0) @binding(1)
var<storage, read_write> output_buffer: array<u32>;

const PI: f32 = 3.14159;
@id(1) override DEBUG_MODE: bool = false;

struct MyParams {
    factor: f32,
    offset: f32,
};

fn helper_func(x: f32) -> f32 {
    return x * 2.0;
}

@compute @workgroup_size(64)
fn compute_main() {
    if (DEBUG_MODE) {
        // ...
    }
    // ...
}
```

Everything above—**enable directives, global variables, constants, type definitions, and functions**—can appear at the module scope in WGSL. Anything that must be bound by the host (like buffers/textures/samplers) must be declared with `@group/@binding` at module scope. Local variables and ordinary logic go *inside* function bodies.
