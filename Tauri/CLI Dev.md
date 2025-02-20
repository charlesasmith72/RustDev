Below is a step‐by‐step beginner tutorial for using the Tauri CLI with Cargo. This guide assumes you’re working purely with Rust (and a minimal web asset setup) without relying on Node-based tools.

---

## 1. Introduction

Tauri lets you build native desktop applications using web technologies for the frontend and Rust for the backend. Since Tauri’s CLI is written in Rust, you can install and manage it using Cargo. In this tutorial, you’ll learn how to install the Tauri CLI via Cargo, set up a new project, run it in development mode, and finally build it for production.

---

## 2. Prerequisites

Ensure you have the following installed:
- **Rust and Cargo:** Install Rust via [rustup](https://rustup.rs/), which includes Cargo.
- **Basic HTML/CSS/JavaScript:** You don’t need a full framework if you prefer a simple static site. A minimal setup is enough to learn the Tauri workflow.

---

## 3. Installing the Tauri CLI with Cargo

Open your terminal and run the following command:
```bash
cargo install tauri-cli
```
This installs the Tauri CLI as a Cargo binary so you can access its commands directly from the terminal.

---

## 4. Creating a New Tauri Project

Tauri is designed to integrate with your existing project. Here’s how you can set up a basic project using Cargo:

### 4.1: Create a New Rust Project
Start by creating a new Rust project:
```bash
cargo new my-tauri-app
cd my-tauri-app
```

### 4.2: Set Up Your Frontend Assets
Inside your project folder, create a directory (for example, `frontend`) to hold your HTML, CSS, and JavaScript files. For a minimal example:

- Create a file called `frontend/index.html` with this content:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Tauri App</title>
    </head>
    <body>
      <h1>Hello from Tauri!</h1>
      <p>This is a simple Tauri desktop application.</p>
    </body>
  </html>
  ```

### 4.3: Initialize Tauri in Your Project
Run the following command to add Tauri support:
```bash
cargo tauri init
```
During the interactive setup, you’ll be prompted for a few configuration details:
- **App Name:** (default is your project name, e.g., `my-tauri-app`)
- **Frontend Build Directory:** Enter the folder that contains your static files (for this example, `frontend`).
- **Other Options:** Configure window titles, icons, etc.

This command creates a new directory (`src-tauri`) with all the Rust code and configuration needed to power your Tauri application.

---

## 5. Running Your Tauri App in Development

With your project configured, you can now launch your Tauri app in development mode:
```bash
cargo tauri dev
```
This command does the following:
- **Builds the Rust backend:** Cargo compiles the Rust code in `src-tauri`.
- **Serves your frontend:** Tauri loads the static files from the directory you specified (in this case, `frontend`).

As you modify your Rust code or your web assets, you can re-run this command to see your changes in action.

---

## 6. Building Your Tauri App for Production

When you’re ready to distribute your application, use:
```bash
cargo tauri build
```
This command packages your app into a native installer or executable (depending on your operating system). The build output can be found in the `src-tauri/target/release` directory.

---

## 7. Additional Tips and Resources

- **Inspect App Info:**
  To view configuration and system details:
  ```bash
  cargo tauri info
  ```
- **Tweak Configuration:**
  The configuration file (`src-tauri/tauri.conf.json` or `tauri.conf.toml`) lets you adjust settings such as window properties and security policies.
- **Documentation:**
  For further details, explore the [official Tauri documentation](https://tauri.studio/docs).

---

## 8. Conclusion

You’ve now learned how to install the Tauri CLI via Cargo, set up a new project with minimal web assets, run your application in development mode, and build it for production. This tutorial provides a foundation to explore more advanced Tauri features as you develop your desktop apps using Rust.

Happy coding with Tauri!
