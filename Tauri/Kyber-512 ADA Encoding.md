Yes, **Kyber-512** has a **fixed-length** output for both keys and ciphertexts. The lengths are as follows:

| **Kyber Variant** | **Public Key Size** | **Secret Key Size** | **Ciphertext Size** |
|------------------|------------------|------------------|------------------|
| **Kyber-512** | **800 bytes** | **1,632 bytes** | **768 bytes** |
| **Kyber-768** | **1,184 bytes** | **2,400 bytes** | **1,088 bytes** |
| **Kyber-1024** | **1,568 bytes** | **3,168 bytes** | **1,568 bytes** |

### **Key Points:**
- **Fixed-Length Outputs**: All Kyber variants, including **Kyber-512**, have predefined output sizes.
- **Deterministic Encoding**: The keys and ciphertexts are always the same size regardless of the plaintext input.
- **Fits in Cardano Metadata**: The **800-byte public key** and **768-byte ciphertext** fit within metadata limits.
 
Here's a **Rust example** using the [`pqcrypto-kyber`](https://crates.io/crates/pqcrypto-kyber) crate to demonstrate **Kyber-512** key generation, encryption, and decryption.

---

### **Install Dependencies**
First, add the `pqcrypto-kyber` crate to your Rust project:

```sh
cargo add pqcrypto-kyber
```

---

### **Rust Example: Key Generation, Encryption, and Decryption with Kyber-512**
```rust
use pqcrypto_kyber::kyber512::*;
use pqcrypto_traits::kem::{PublicKey, SecretKey, Ciphertext, SharedSecret};

fn main() {
    // Step 1: Generate a keypair (public & secret keys)
    let (pk, sk) = keypair();

    println!("Public Key ({} bytes): {:X?}", pk.as_bytes().len(), pk);
    println!("Secret Key ({} bytes): {:X?}", sk.as_bytes().len(), sk);

    // Step 2: Encrypt a message (encapsulation)
    let (ciphertext, shared_secret_enc) = encapsulate(&pk);
    
    println!("Ciphertext ({} bytes): {:X?}", ciphertext.as_bytes().len(), ciphertext);
    println!("Shared Secret (Encapsulated) ({} bytes): {:X?}", shared_secret_enc.as_bytes().len(), shared_secret_enc);

    // Step 3: Decrypt the ciphertext (decapsulation)
    let shared_secret_dec = decapsulate(&ciphertext, &sk);

    println!("Shared Secret (Decapsulated) ({} bytes): {:X?}", shared_secret_dec.as_bytes().len(), shared_secret_dec);

    // Step 4: Verify the shared secrets match
    assert_eq!(shared_secret_enc.as_bytes(), shared_secret_dec.as_bytes());
    println!("✅ Successfully decrypted the same shared secret!");
}
```

---

### **Explanation**
1. **Key Generation**: The function `keypair()` generates a **public key (800 bytes)** and **secret key (1,632 bytes)**.
2. **Encryption (Encapsulation)**: `encapsulate(&pk)` encrypts a **random shared secret** into a **ciphertext (768 bytes)**.
3. **Decryption (Decapsulation)**: `decapsulate(&ciphertext, &sk)` retrieves the shared secret.
4. **Verification**: The decrypted shared secret should match the original one.

---

### **Output Example**
```
Public Key (800 bytes): [...]
Secret Key (1632 bytes): [...]
Ciphertext (768 bytes): [...]
Shared Secret (Encapsulated) (32 bytes): [...]
Shared Secret (Decapsulated) (32 bytes): [...]
✅ Successfully decrypted the same shared secret!
```

---

### **Why This Matters**
- **Kyber-512** provides **post-quantum encryption** that is **fast** and **secure**.
- **Fixed-Length Outputs** make it predictable and efficient for blockchain storage.
- **Encapsulation/Decapsulation** allows secure key exchange without revealing the private key.

Would you like modifications for specific use cases, such as integrating this with Cardano transactions? 🚀
