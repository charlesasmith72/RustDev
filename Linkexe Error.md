When you set the environment variable, you're directly instructing Cargo to use a specific linker. Here's why this works:

- **Cargo's Linker Configuration:**  
  Cargo checks for the `CARGO_TARGET_X86_64_PC_WINDOWS_MSVC_LINKER` environment variable to determine which linker to use for MSVC targets. If it's not set, Cargo might default to trying `lld-link.exe` (or use a configuration from a `.cargo/config` file).

- **Forcing the Use of `link.exe`:**  
  By running:
  ```powershell
  $env:CARGO_TARGET_X86_64_PC_WINDOWS_MSVC_LINKER = "link.exe"
  ```
  in the VS Code integrated terminal, you are explicitly telling Cargo, “Use `link.exe` as the linker for this build.” Since `link.exe` is installed (via Visual Studio Build Tools or Visual Studio Community with the C++ workload) and is on your PATH, Cargo can find it and complete the linking step.

- **Result:**  
  This override bypasses any default or configured behavior that was causing Cargo to look for `lld-link.exe`, which wasn't available, and thus resolves the error.

In summary, setting the environment variable forces Cargo to use the correct, available linker (`link.exe`), allowing the build to proceed successfully.
