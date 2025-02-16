Below is an example of a self-contained Rust module (e.g. named “web_server.rs”) that explains each part of a simple HTTP server with routing, request handling, and even simulated session/cookie management. In addition, we show how you could compile the module as WebAssembly (WASM) for the browser (although note that a “real” server in the browser isn’t possible—you’d instead run client code that mimics server functionality). Comments on each line explain what each part of the code does. You can use this tutorial as a starting point and then build out features (like proper TLS/HTTPS via external crates) as needed.

---

```rust
// web_server.rs
//
// This module demonstrates a very basic HTTP server built using only Rust’s standard library,
// along with simulated routing, request handling, and cookie/session management using pre-canned (static) data.
// It also shows how to compile the module as WebAssembly (WASM) to run in a browser environment.
// Note: For real HTTPS support, you would need an external crate (like `rustls` or `native-tls`)
// because the standard library does not provide TLS functionality out of the box.

use std::io::{Read, Write}; // Import traits to read from and write to streams.
use std::net::{TcpListener, TcpStream}; // Import TCP listener and stream for networking.
use std::thread; // Import thread for handling connections concurrently.

// A simple struct representing an HTTP request. For brevity, we use only a few fields.
struct Request {
    method: String,   // HTTP method (e.g. GET, POST)
    path: String,     // Requested URL path (e.g. "/about")
    cookie: Option<String>, // Simulated cookie header (if present)
}

// A simple function to parse the incoming HTTP request.
// In a real application, you’d need a more robust parser.
fn parse_request(buffer: &[u8]) -> Request {
    // Convert the buffer into a string (assuming UTF-8).
    let request_str = String::from_utf8_lossy(buffer);
    // Split the request into lines.
    let mut lines = request_str.lines();
    
    // The first line should be the request line, e.g., "GET / HTTP/1.1".
    let request_line = lines.next().unwrap_or("");
    let mut parts = request_line.split_whitespace();
    let method = parts.next().unwrap_or("").to_string(); // Extract HTTP method.
    let path = parts.next().unwrap_or("").to_string();     // Extract requested path.

    // Search for a "Cookie:" header in subsequent lines.
    let mut cookie = None;
    for line in lines {
        if line.starts_with("Cookie:") {
            // Capture the cookie value (everything after "Cookie: ").
            cookie = Some(line["Cookie:".len()..].trim().to_string());
            break;
        }
    }

    // Return a Request struct with the extracted data.
    Request { method, path, cookie }
}

// A function that handles an individual TCP stream (i.e. one client connection).
fn handle_client(mut stream: TcpStream) {
    // Create a buffer to hold incoming data.
    let mut buffer = [0; 512]; // Pre-canned buffer size for simplicity.
    // Read data from the stream into the buffer.
    match stream.read(&mut buffer) {
        Ok(_) => {
            // Parse the HTTP request from the buffer.
            let req = parse_request(&buffer);

            // For debugging: print the request method and path.
            println!("Received {} request for {}", req.method, req.path);

            // Routing: Decide response based on the requested URL path.
            let (status_line, contents, cookie_header) = match req.path.as_str() {
                "/" => {
                    // Home page response with static data.
                    let body = "<h1>Welcome to the Home Page</h1>";
                    // Set a cookie for session management (simulated).
                    let cookie = "Set-Cookie: sessionId=abc123; HttpOnly\r\n";
                    ("HTTP/1.1 200 OK", body, cookie)
                }
                "/about" => {
                    // About page response with static data.
                    let body = "<h1>About Us</h1><p>This is a demo web server.</p>";
                    // No cookie set on this route.
                    ("HTTP/1.1 200 OK", body, "")
                }
                _ => {
                    // 404 Not Found response for unknown routes.
                    let body = "<h1>404 Not Found</h1>";
                    ("HTTP/1.1 404 NOT FOUND", body, "")
                }
            };

            // Build the HTTP response.
            let response = format!(
                "{}\r\nContent-Length: {}\r\n{}\
                \r\n\r\n{}",
                status_line,
                contents.len(),
                // Include cookie header if one is set.
                cookie_header,
                contents
            );

            // Write the response back to the client.
            stream.write(response.as_bytes()).unwrap();
            // Flush to ensure all data is sent.
            stream.flush().unwrap();
        }
        Err(e) => {
            // Print any error that occurred during reading.
            eprintln!("Failed to read from connection: {}", e);
        }
    }
}

// The main function for running the server in a non-WASM environment.
// This code will only compile when NOT targeting wasm32.
#[cfg(not(target_arch = "wasm32"))]
pub fn run_server() {
    // Bind the TCP listener to a specific address and port.
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    println!("Server running on http://127.0.0.1:7878");

    // Loop indefinitely to accept incoming connections.
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                // Spawn a new thread for each connection.
                thread::spawn(|| {
                    handle_client(stream);
                });
            }
            Err(e) => {
                // Print any error that occurs when accepting a connection.
                eprintln!("Connection failed: {}", e);
            }
        }
    }
}

// The following section demonstrates how to compile this module as WebAssembly (WASM)
// to run in the browser. In this case, we use `wasm_bindgen` to expose functions
// that can be called from JavaScript.
// Note: In a browser, you cannot listen on a TCP port. Instead, this example
// shows how you might simulate a request handler in a WASM context.

#[cfg(target_arch = "wasm32")]
mod wasm {
    use wasm_bindgen::prelude::*;

    // Expose our function to JavaScript.
    #[wasm_bindgen]
    pub fn handle_request(request: &str) -> String {
        // Split the incoming request string by newlines.
        let mut lines = request.lines();
        let request_line = lines.next().unwrap_or("");
        let mut parts = request_line.split_whitespace();
        let _method = parts.next().unwrap_or(""); // We ignore the method for this demo.
        let path = parts.next().unwrap_or("");

        // Routing logic similar to the server version.
        let response = match path {
            "/" => {
                // Simulated response for the home page.
                "<h1>Welcome to the WASM Home Page</h1><p>This runs in your browser.</p>"
            }
            "/about" => {
                // Simulated response for the about page.
                "<h1>About WASM Server</h1><p>This is a WASM demo.</p>"
            }
            _ => {
                // Default 404 response.
                "<h1>404 Not Found</h1>"
            }
        };

        // Return the response string.
        response.to_string()
    }
}
```

---

### Step-by-Step Explanation

1. **Importing Standard Modules:**  
   The code begins by importing necessary traits and modules from Rust’s standard library such as `TcpListener` (for binding to a port) and `TcpStream` (for handling individual connections). This allows our server to handle raw TCP connections, which is the basis for HTTP.

2. **Request Struct and Parser:**  
   We define a simple `Request` struct that holds the HTTP method, path, and an optional cookie header. The `parse_request` function converts the raw byte data into a string, then splits it into lines to extract the method, URL path, and any cookie data provided by the client.

3. **Handling Client Connections:**  
   The `handle_client` function reads data from the TCP stream, parses the HTTP request, and uses simple routing logic. Depending on the requested URL (for example, `/` for the home page or `/about` for an about page), it selects a pre-canned response. It also simulates session/cookie management by including a `Set-Cookie` header when serving the home page.

4. **Running the Server:**  
   The `run_server` function binds the server to a local address (`127.0.0.1:7878`) and listens for incoming connections. For each connection, it spawns a new thread to handle the client independently. This simple concurrency model allows the server to handle multiple connections.

5. **HTTPS Note:**  
   While the code above implements HTTP support, HTTPS requires TLS. The Rust standard library does not include TLS support, so in a production system you would integrate an external crate such as `rustls` to add HTTPS capability.

6. **WASM Module:**  
   The code also includes a conditional compilation module for WebAssembly (enabled when compiling for the `wasm32` target). Instead of listening on a TCP port (which isn’t possible in a browser), it exports a function `handle_request` using `wasm_bindgen`. This function simulates handling a request string and returns a response. This could be integrated into a browser-based application to mimic server-side logic.

7. **Running as an External Module:**  
   Since all code is contained in an external `.rs` file, you can include it in a larger project by using Rust’s module system. For example, you might include it with `mod web_server;` in your main file and then call `web_server::run_server()` (for native execution) or bind the WASM functions as needed.

---

This tutorial provides a beginner-friendly, annotated example covering the requested features with static data. You can extend this example by integrating more robust libraries for routing, session management, and HTTPS support as your application grows.

Below is an example of a simple `main.rs` file that imports the external module (assumed to be in `web_server.rs`) and runs the server. Make sure that both files are in the same project directory (or adjust the module path accordingly).

```rust
// main.rs
//
// This is the entry point for our application. It imports the external module
// (web_server.rs) and calls the run_server function to start the HTTP server.

mod web_server; // Declare that the web_server module exists in web_server.rs

fn main() {
    // Run the server if not compiling for WASM (as defined in web_server.rs).
    // This starts the server on the specified address and port.
    web_server::run_server();
}
```

### How to Run

1. **Ensure File Structure:**  
   Place both `main.rs` and `web_server.rs` in the `src` directory of your Rust project (created via `cargo new your_project`).

2. **Compile and Run:**  
   Open your terminal, navigate to your project directory, and run:
   ```bash
   cargo run
   ```
   This will compile your project and start the server. You should see output similar to:
   ```
   Server running on http://127.0.0.1:7878
   ```
   Then, you can open your browser and navigate to `http://127.0.0.1:7878` (or `/about`) to see the responses.

This setup demonstrates how to integrate an external module (`web_server.rs`) from your main application and run the server.
