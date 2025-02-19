Below is a comprehensive, Cargo-only tutorial that shows you how to build your first Tauri desktop application—and it now includes a step to use the official Tauri project generator via Cargo. This guide will help you scaffold a new project without any Node.js or npm tooling, while also highlighting Tauri’s broad range of features.

---

# Tauri for Beginners: A Cargo-Only, All-Features Tutorial

Tauri enables you to build fast, secure, and lightweight desktop apps by combining a native Rust backend with a webview for your UI. In this tutorial, you’ll create a Tauri app entirely with Rust’s Cargo. We’ll start by using the Tauri project generator to quickly set up the basic structure, then walk through the main concepts and features.

---

## 1. Prerequisites

Ensure you have the following installed:

- **Rust and Cargo:** Install from [rustup.rs](https://rustup.rs/)
- A code editor (e.g., VS Code)
- A basic web browser (for previewing your static HTML, if needed)

---

## 2. Scaffolding Your Project Using the Tauri Project Generator

Instead of manually creating directories and configuration files, Tauri now offers an official project generator distributed via Cargo. This tool sets up the standard Tauri project structure for you.

### Step 2.1 – Install the Generator

Run the following command to install the project generator:

```bash
cargo install create-tauri-app --locked
```

The `--locked` flag ensures that Cargo uses the exact versions specified in the lockfile.

### Step 2.2 – Create a New Tauri Project

After installation, simply run:

```bash
cargo create-tauri-app

```

Follow the interactive prompts. The generator will create a new project directory (for example, `my-tauri-app`) with a structure similar to:

```
my-tauri-app/
├── dist/          // (or another folder for frontend assets)
├── src-tauri/     // Rust backend and Tauri configuration
│   ├── Cargo.toml
│   ├── src/
│   │   └── main.rs
│   └── tauri.conf.json
```

This scaffolding saves you from manually setting up the project and ensures that the recommended configuration is in place.

---

## 3. Project Structure Overview

Whether you use the generator or set up the files manually, a typical Cargo-only Tauri project consists of two parts:

- **Frontend Assets (e.g., dist folder):** Contains your HTML, CSS, and JavaScript files.
- **Backend (src-tauri folder):**
  - **Cargo.toml:** Declares your project dependencies (including Tauri).
  - **main.rs:** The Rust entry point where the Tauri application is bootstrapped.
  - **tauri.conf.json:** Configuration file for Tauri (defines window settings, asset locations, etc.).

---

## 4. A Closer Look at the Code

Let’s explore the key files in your new project.

### 4.1 – The Rust Entry Point

Open `src-tauri/src/main.rs`. You’ll see code similar to the following:

```rust
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Define a simple command that can be invoked from the frontend.
#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

Here, a `greet` command is defined to demonstrate communication between the frontend and the Rust backend.

### 4.2 – Tauri Configuration

In the `src-tauri/tauri.conf.json` file, you’ll find the settings that tell Tauri where to locate your frontend assets and how to configure your application window:

```json
{
  "build": {
    "distDir": "../dist",
    "devPath": "../dist"
  },
  "tauri": {
    "windows": [
      {
        "title": "My Tauri App",
        "width": 800,
        "height": 600
      }
    ]
  }
}
```

This configuration ensures that your static files (in the `dist` folder) are loaded correctly.

### 4.3 – The Static Frontend

Inside the `dist` folder, the `index.html` might look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Tauri App</title>
</head>
<body>
  <h1>Welcome to My Tauri App</h1>
  <button id="greet-btn">Greet Me</button>

  <script>
    // Tauri injects a global object for invoking Rust commands.
    async function greet() {
      const greeting = await window.__TAURI__.invoke('greet', { name: 'Tauri Developer' });
      alert(greeting);
    }
    document.getElementById('greet-btn').addEventListener('click', greet);
  </script>
</body>
</html>
```

Clicking the “Greet Me” button calls the Rust `greet` command, which returns a greeting message.

---

## 5. Running Your Tauri Application

Once your project is scaffolded and configured, navigate to the project’s root directory (or the `src-tauri` directory) and run:

```bash
cargo run
```

Cargo will compile the Rust code, bundle your static assets, and launch a native window displaying your app. Click the button to see the interaction between the frontend and backend.

---

## 6. Exploring Tauri’s Features

Beyond the basics, Tauri offers an array of features that make it a powerful choice for building desktop applications:

### Lightweight and Performant
- **Small Bundle Size:** Tauri apps are much smaller than alternatives like Electron.
- **Rust-Powered Efficiency:** Enjoy the performance and safety of Rust.

### Security
- **Secure by Design:** Tauri isolates the webview from system APIs and enforces strict security policies.
- **Sandboxing:** Minimizes exposure to system-level vulnerabilities.

### Native API Access
- **File System Operations:** Read from and write to the file system securely.
- **Notifications:** Trigger native notifications across platforms.
- **Custom Protocols:** Define custom protocols for specialized data handling.

### UI and Window Customization
- **Multi-Window Support:** Easily create and manage multiple windows.
- **Menus and System Tray:** Customize menus and tray icons for a native feel.
- **Theming and Styling:** Fine-tune window appearance and behavior.

### Communication Between Frontend and Backend
- **Commands and Events:** Seamlessly invoke Rust functions from your frontend and vice versa.
- **Bidirectional Messaging:** Real-time communication between the webview and Rust backend.

### Cross-Platform Compatibility
- **Multi-OS Deployment:** Build applications that run natively on Windows, macOS, and Linux.
- **Platform-Specific Options:** Configure settings that cater to each operating system.

### Auto-Updating and Distribution
- **Auto-Updater:** Automatically update your application.
- **Native Installers:** Generate installers tailored for each platform.

### Plugin Ecosystem
- **Extensibility:** Enhance your app’s capabilities with community and official plugins.

For more details, check the [official Tauri documentation](https://tauri.app/v1/guides).

---

## 7. Conclusion

You’ve now built a Tauri desktop application entirely with Rust’s Cargo—without needing Node.js or npm—and learned how to use the `create-tauri-app` generator to quickly scaffold your project. This tutorial also highlighted Tauri’s powerful features, from secure communication between the frontend and Rust backend to native window customization and cross-platform support.

Happy coding, and enjoy building with Tauri!
