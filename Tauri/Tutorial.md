Below is a step‐by‐step beginner’s tutorial for building your first Tauri desktop application.

---

# Tauri for Beginners Tutorial

Tauri is a modern framework for building lightweight, secure, and fast desktop applications using your favorite web technologies combined with Rust’s performance and safety. This tutorial will guide you through setting up a basic Tauri project from scratch.

---

## 1. Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js and npm** (or your preferred package manager such as Yarn or pnpm)
- **Rust and Cargo**  
  Download and install via [rustup](https://rustup.rs/)
- A code editor (e.g., VS Code)

---

## 2. Setting Up Your Project

Tauri works best when you integrate it into an existing web project. For this tutorial, we’ll use Vite with a simple vanilla JavaScript template.

### Create a New Vite Project

Open your terminal and run the following commands:

```bash
# Create a new project named "my-tauri-app" using Vite’s vanilla template
npm create vite@latest my-tauri-app -- --template vanilla

# Change into the project directory
cd my-tauri-app

# Install dependencies
npm install
```

### Initialize Tauri

Next, install the Tauri CLI (if you haven’t already):

```bash
npm install -g @tauri-apps/cli
```

Now, initialize Tauri in your project:

```bash
tauri init
```

Follow the interactive prompts. This command creates a new `src-tauri` directory in your project, which contains the Rust backend and Tauri configuration files.

---

## 3. Understanding the Project Structure

After initialization, your project has two main parts:

- **Frontend (Vite project):** Contains your web assets (HTML, CSS, and JavaScript).
- **Backend (src-tauri folder):**
  - `main.rs`: The Rust entry point where the Tauri application is launched.
  - `tauri.conf.json`: Configuration file to customize your application (name, icons, window settings, etc.).

---

## 4. Running Your Application in Development

You’ll run two processes: one for the frontend and one for the Tauri backend.

### Start the Frontend

In your project directory, run:

```bash
npm run dev
```

This command starts the Vite development server.

### Launch Tauri

Open another terminal in the same project directory and run:

```bash
tauri dev
```

This launches your Tauri application, which loads your web content in a native desktop window. Now you’re ready to see your work in action!

---

## 5. Communicating Between Frontend and Backend

One of Tauri’s powerful features is the ability to call Rust functions (commands) directly from your JavaScript code. Let’s add a simple command.

### Create a Rust Command

Open `src-tauri/src/main.rs` and modify it as follows:

```rust
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

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

Here, we define a `greet` function that takes a name as input and returns a greeting message.

### Call the Command from JavaScript

In your frontend HTML (e.g., inside `index.html`), add a button and a script:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Tauri App</title>
  </head>
  <body>
    <h1>Welcome to Tauri!</h1>
    <button id="greet-btn">Greet Me</button>

    <script type="module">
      import { invoke } from '@tauri-apps/api/tauri';

      document.getElementById('greet-btn').addEventListener('click', async () => {
        // Call the Rust command "greet" with a parameter
        const greeting = await invoke('greet', { name: 'Tauri Developer' });
        alert(greeting);
      });
    </script>
  </body>
</html>
```

Clicking the button calls the `greet` command, and you should see an alert with the message "Hello, Tauri Developer!".

---

## 6. Building Your Application for Production

Once you’ve finished development and are ready to distribute your app, build it with:

```bash
tauri build
```

This command will compile the Rust backend and package your web assets into a native executable tailored to your operating system.

---

## 7. Further Learning and Resources

- **Official Tauri Documentation:** Learn more about advanced features, configuration, and deployment strategies by visiting [Tauri’s official guides](https://tauri.app/v1/guides).  
- **Rust Programming:** For those new to Rust, the [official Rust book](https://doc.rust-lang.org/book/) is an excellent resource.

---

## Conclusion

You now have a basic Tauri application up and running! This tutorial covered the essentials—from setting up a Vite project and initializing Tauri to creating Rust commands and building your final app. Experiment further by integrating your favorite frontend frameworks or exploring Tauri’s advanced capabilities to create powerful, cross-platform desktop applications.

Happy coding!

---

This tutorial provides a clear starting point for beginners. As you grow more comfortable, explore the official documentation and community examples for more complex use cases and best practices.
