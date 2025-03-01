# Rust WGPU Beginner Tutorial - Compute Shaders and Bitwise Operators

## Introduction

WGPU is a Rust library that allows you to leverage GPU power for both graphics and compute workloads. This tutorial will focus on using WGPU to run **compute shaders**, with an emphasis on **bitwise operators** inside the shaders.

## Prerequisites

Before we start, ensure you have the following installed:
- Rust (via [rustup](https://rustup.rs/))
- Cargo (comes with Rust)
- `wgpu` and `winit` crates

You can create a new Rust project and add the dependencies by running:

```sh
cargo new wgpu-compute-tutorial
cd wgpu-compute-tutorial
cargo add wgpu pollster
```

## Project Setup

Create a `main.rs` file in the `src` directory with the following code to set up the basic device and queue needed for compute work:

```rust
use wgpu::*;

async fn run() {
    // Instance and adapter setup
    let instance = Instance::new(Backends::all());
    let adapter = instance.request_adapter(&RequestAdapterOptions {
        power_preference: PowerPreference::HighPerformance,
        compatible_surface: None,
        force_fallback_adapter: false,
    }).await.unwrap();

    // Device and queue
    let (device, queue) = adapter.request_device(&DeviceDescriptor {
        label: None,
        features: Features::empty(),
        limits: Limits::default(),
    }, None).await.unwrap();

    // Prepare compute shader
    let shader_source = include_str!("compute_shader.wgsl");
    let shader_module = device.create_shader_module(ShaderModuleDescriptor {
        label: Some("Bitwise Compute Shader"),
        source: ShaderSource::Wgsl(shader_source.into()),
    });

    // Set up storage buffer for input and output data
    let data = vec![0u32, 1, 2, 3, 4];
    let buffer_size = (data.len() * std::mem::size_of::<u32>()) as BufferAddress;

    let storage_buffer = device.create_buffer_init(&util::BufferInitDescriptor {
        label: Some("Storage Buffer"),
        contents: bytemuck::cast_slice(&data),
        usage: BufferUsages::STORAGE | BufferUsages::COPY_SRC | BufferUsages::COPY_DST,
    });

    // Bind group and layout
    let bind_group_layout = device.create_bind_group_layout(&BindGroupLayoutDescriptor {
        label: Some("Bind Group Layout"),
        entries: &[BindGroupLayoutEntry {
            binding: 0,
            visibility: ShaderStages::COMPUTE,
            ty: BindingType::Buffer {
                ty: BufferBindingType::Storage { read_only: false },
                has_dynamic_offset: false,
                min_binding_size: None,
            },
            count: None,
        }],
    });

    let bind_group = device.create_bind_group(&BindGroupDescriptor {
        label: Some("Bind Group"),
        layout: &bind_group_layout,
        entries: &[BindGroupEntry {
            binding: 0,
            resource: storage_buffer.as_entire_binding(),
        }],
    });

    // Compute pipeline
    let pipeline_layout = device.create_pipeline_layout(&PipelineLayoutDescriptor {
        label: Some("Pipeline Layout"),
        bind_group_layouts: &[&bind_group_layout],
        push_constant_ranges: &[],
    });

    let compute_pipeline = device.create_compute_pipeline(&ComputePipelineDescriptor {
        label: Some("Compute Pipeline"),
        layout: Some(&pipeline_layout),
        module: &shader_module,
        entry_point: "main",
    });

    // Command encoder and compute pass
    let mut encoder = device.create_command_encoder(&CommandEncoderDescriptor {
        label: Some("Compute Encoder"),
    });

    {
        let mut pass = encoder.begin_compute_pass(&ComputePassDescriptor { label: Some("Compute Pass") });
        pass.set_pipeline(&compute_pipeline);
        pass.set_bind_group(0, &bind_group, &[]);
        pass.dispatch_workgroups(data.len() as u32, 1, 1);
    }

    queue.submit(Some(encoder.finish()));

    // Normally, you'd copy the buffer to a mappable buffer to read it back on the CPU.
    println!("Compute shader dispatched!");
}

fn main() {
    pollster::block_on(run());
}
```

## Compute Shader (compute_shader.wgsl)

Create a file `compute_shader.wgsl` in the `src` directory with the following bitwise logic:

```wgsl
@group(0) @binding(0)
var<storage, read_write> data: array<u32>;

@compute @workgroup_size(1)
fn main(@builtin(global_invocation_id) id : vec3<u32>) {
    let idx = id.x;
    data[idx] = data[idx] ^ 0xFFu; // Example: XOR each element with 255
}
```

### Explanation
- `data` is a storage buffer.
- Each invocation operates on one element of the array.
- `^` is the XOR bitwise operator.
- Other operators you can use: `&`, `|`, `<<`, `>>`

## Running the Program

Compile and run:

```sh
cargo run
```

This will run the compute shader on the data buffer, modifying each element using XOR.

## Next Steps
- Expand to use different bitwise operations (AND, OR, shifts).
- Copy the buffer back to CPU to check results.
- Use `map_async` to read back data to the host.

This covers a basic compute shader example using bitwise operations in Rust + WGPU!

