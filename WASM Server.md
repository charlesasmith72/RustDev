Here's a step-by-step beginner's tutorial on creating a Rust web server with the required features using the Rust `std` module, along with `hyper` for HTTP handling. The tutorial covers:

1. **Basic Web Server with HTTP/HTTPS Support**
2. **Handling Requests and Responses**
3. **Routing and URL Mapping**
4. **Session and Cookie Management**
5. **Running as an External `.rs` Module**
6. **Compiling to WebAssembly (WASM) for Running in the Browser**

---

## **Step 1: Setting Up the Rust Project**
First, create a new Rust project:
```sh
cargo new rust_webserver
cd rust_webserver
```

Add dependencies to `Cargo.toml`:
```toml
[dependencies]
hyper = { version = "1.5.2", features = ["full"] }
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
cookie = "0.18.0"

```
### **Summary of Dependencies**
| Dependency    | Purpose |
|--------------|---------|
| `hyper` | HTTP server and client library |
| `tokio` | Asynchronous runtime for handling concurrent requests |
| `serde` | Serialization and deserialization of data |
| `serde_json` | JSON handling library |
| `cookie` | Session and cookie management |

If you want HTTPS support, add:
```toml
rustls = "0.21"
hyper-rustls = "0.24"
```

---

## **Step 2: Creating a Basic HTTP Server**
Create `src/main.rs`:

Here is your Rust code with detailed comments explaining each line:

```rust
// Import necessary modules from the `hyper` crate for handling HTTP requests and responses
use hyper::{Body, Request, Response, Server};
// Import utilities for defining services (routes) dynamically
use hyper::service::{make_service_fn, service_fn};
// Import `Infallible` to indicate functions that never return an error
use std::convert::Infallible;
// Import `SocketAddr` to define the server's IP address and port
use std::net::SocketAddr;
// Import `tokio::task` for handling asynchronous tasks (not used directly in this example)
use tokio::task;

// Asynchronous function to handle incoming HTTP requests
async fn handle_request(_req: Request<Body>) -> Result<Response<Body>, Infallible> {
    // Respond with a simple text message
    Ok(Response::new(Body::from("Hello, Rust Web Server!")))
}

// Main entry point for the application using the Tokio async runtime
#[tokio::main]
async fn main() {
    // Define the server's IP address and port (127.0.0.1:8080)
    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    // Create a service that wraps the request handler function
    let make_svc = make_service_fn(|_conn| async {
        // `Ok::<_, Infallible>` ensures that this closure always returns a valid service
        Ok::<_, Infallible>(service_fn(handle_request))
    });

    // Bind the server to the specified address and attach the service handler
    let server = Server::bind(&addr).serve(make_svc);

    // Print a message indicating where the server is running
    println!("Running on http://{}", addr);

    // Run the server and handle any errors that may occur
    if let Err(e) = server.await {
        // Print an error message if the server fails
        eprintln!("Server error: {}", e);
    }
}
```

### **Key Takeaways**
1. **`hyper::{Body, Request, Response, Server}`**: Provides HTTP handling functionalities.
2. **`make_service_fn` and `service_fn`**: Create dynamic services for handling requests.
3. **`SocketAddr::from(([127, 0, 0, 1], 8080))`**: Defines the server's IP (`127.0.0.1`) and port (`8080`).
4. **Async/Await with `tokio`**: Handles non-blocking operations efficiently.
5. **Error Handling**: The server runs asynchronously and handles errors gracefully.

This provides a minimal but well-structured Rust web server using `hyper` and `tokio`. 🚀
Run it:
```sh
cargo run
```
Visit `http://127.0.0.1:8080/` in your browser.

---

## **Step 3: Adding HTTPS Support**
Create a self-signed certificate and key:
```sh
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

Modify `src/main.rs`:

```rust
use hyper::server::conn::AddrStream;
use hyper_rustls::TlsAcceptor;
use std::fs::File;
use std::io::BufReader;
use rustls::ServerConfig;
use rustls::internal::pemfile::{certs, rsa_private_keys};

async fn https_server() {
    let addr = ([127, 0, 0, 1], 8443).into();

    let cert_file = &mut BufReader::new(File::open("cert.pem").unwrap());
    let key_file = &mut BufReader::new(File::open("key.pem").unwrap());

    let cert_chain = certs(cert_file).unwrap();
    let mut keys = rsa_private_keys(key_file).unwrap();
    
    let config = ServerConfig::builder()
        .with_safe_defaults()
        .with_no_client_auth()
        .with_single_cert(cert_chain, keys.remove(0))
        .unwrap();

    let tls_acceptor = TlsAcceptor::from(std::sync::Arc::new(config));

    let make_svc = make_service_fn(|_conn: &AddrStream| async {
        Ok::<_, Infallible>(service_fn(handle_request))
    });

    let server = Server::bind(&addr)
        .serve(make_svc);

    println!("Running on https://{}", addr);
    server.await.unwrap();
}
```

Run it:
```sh
cargo run
```
Access `https://127.0.0.1:8443/`.

---

## **Step 4: Routing and URL Mapping**
Modify `handle_request`:
```rust
async fn handle_request(req: Request<Body>) -> Result<Response<Body>, Infallible> {
    let response = match req.uri().path() {
        "/" => Response::new(Body::from("Home Page")),
        "/about" => Response::new(Body::from("About Page")),
        "/contact" => Response::new(Body::from("Contact Page")),
        _ => Response::builder().status(404).body(Body::from("404 Not Found")).unwrap(),
    };
    Ok(response)
}
```
Now, visiting `/about` returns `"About Page"`.

---

## **Step 5: Session and Cookie Management**
Modify `handle_request` to set cookies:
```rust
use cookie::{Cookie, CookieJar};

async fn handle_request(req: Request<Body>) -> Result<Response<Body>, Infallible> {
    let mut jar = CookieJar::new();
    let cookie = Cookie::new("session_id", "12345");
    jar.add(cookie);

    let response = Response::builder()
        .header("Set-Cookie", jar.get("session_id").unwrap().to_string())
        .body(Body::from("Cookie Set"))
        .unwrap();

    Ok(response)
}
```
Accessing the server will set a session cookie.

---

## **Step 6: Running as an External `.rs` Module**
Create a module `src/server.rs`:
```rust
use hyper::{Body, Request, Response, Server};
use hyper::service::{make_service_fn, service_fn};
use std::convert::Infallible;
use std::net::SocketAddr;
use tokio::task;

pub async fn run_server() {
    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    let make_svc = make_service_fn(|_conn| async {
        Ok::<_, Infallible>(service_fn(handle_request))
    });

    let server = Server::bind(&addr).serve(make_svc);

    println!("Running on http://{}", addr);
    server.await.unwrap();
}

async fn handle_request(_req: Request<Body>) -> Result<Response<Body>, Infallible> {
    Ok(Response::new(Body::from("Hello, Modular Server!")))
}
```

Modify `main.rs`:
```rust
mod server;
#[tokio::main]
async fn main() {
    server::run_server().await;
}
```

Run it:
```sh
cargo run
```

---

## **Step 7: Compiling to WASM for Browser**
Add `wasm-pack`:
```sh
cargo install wasm-pack
```

Create a new WASM-compatible module `src/lib.rs`:
```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet() -> String {
    "Hello from WebAssembly!".to_string()
}
```
Build it for WebAssembly:
```sh
wasm-pack build --target web
```
Use it in an HTML file:
```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import init, { greet } from "./pkg/rust_webserver.js";

        async function run() {
            await init();
            document.body.innerText = greet();
        }
        run();
    </script>
</head>
<body>
</body>
</html>
```
Open it in a browser.

---

## **Conclusion**
You've built a Rust web server that:
✔ Supports HTTP and HTTPS  
✔ Handles requests and responses  
✔ Implements routing and URL mapping  
✔ Manages sessions and cookies  
✔ Runs as an external module  
✔ Compiles to WebAssembly  

Let me know if you need refinements! 🚀
