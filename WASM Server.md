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
