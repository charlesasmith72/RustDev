# Key Encapsulation Mechanism (KEM)

A **Key Encapsulation Mechanism (KEM)** is a cryptographic construct used to securely establish a shared secret key between two parties, typically over an insecure channel. It is widely used in **public-key encryption** scenarios, especially in modern (including post-quantum) cryptography.

---

## Core Idea

1. **Key Pair Generation**: One party (often called the “receiver”) generates a public key (PK) and a secret key (SK).
2. **Encapsulation**: Another party (the “sender”) uses the public key to generate:
   - A **ciphertext** (sometimes called a “capsule” or “encapsulated key”).
   - A **shared secret** (symmetric key).
3. **Decapsulation**: The receiver uses their corresponding secret key to recover (i.e., “decapsulate”) the exact same **shared secret** from the ciphertext.

Once both parties hold the same shared secret, they can switch to a symmetric cipher (e.g., AES-GCM or ChaCha20-Poly1305) to encrypt and decrypt data efficiently and securely.

---

## Why Use KEM?

1. **Efficiency**: Instead of using public-key operations (which can be expensive) to encrypt each message, you perform one public-key operation (the KEM) to derive a shared secret. You then use fast **symmetric encryption** for the actual data transfer.
2. **Modularity**: KEMs abstract away the details of how the public-key encryption is performed. You can easily swap out one KEM for another (for example, to upgrade to a post-quantum algorithm) without changing the symmetric encryption layer.
3. **Security**: 
   - KEMs can provide forward secrecy if used in combination with ephemeral key pairs (i.e., new key pairs for each session).
   - Post-quantum KEMs are designed to withstand attacks from quantum computers.

---

## Typical Steps in a KEM Workflow

1. **Key Generation**:  
   - Receiver calls something like `keypair()` to obtain `(public_key, secret_key)`.
2. **Encapsulation** (Encryption):  
   - Sender calls `encapsulate(public_key)` → gets `(ciphertext, shared_secret)`.
3. **Decapsulation** (Decryption):  
   - Receiver calls `decapsulate(ciphertext, secret_key)` → gets `shared_secret`.
4. **Symmetric Encryption/Decryption**:  
   - Both parties now share the same `shared_secret` and can use it for efficient symmetric encryption.

---

## Example Scenario

Imagine Alice wants to send a secure message to Bob over the internet:

1. **Bob** generates a KEM key pair: `(PK, SK)`. He sends `PK` (public) to Alice; he keeps `SK` (secret) private.
2. **Alice** uses Bob’s `PK` to **encapsulate** a random secret key: `(Ciphertext, SharedKeyAlice)`.
3. **Alice** sends the **Ciphertext** to Bob, and **encrypts her message** with `SharedKeyAlice` via an AEAD cipher.
4. **Bob**, upon receiving the Ciphertext, performs **decapsulation** with `SK` to obtain the same `SharedKeyBob`.
5. **Bob** now has the **same** shared secret. He decrypts Alice’s message (encrypted under `SharedKeyAlice`) using `SharedKeyBob`.

This ensures that only Bob, who holds the correct secret key, can recover the session key—and thus decrypt Alice’s messages.

---

## Where You’ll See KEM in Practice

1. **TLS 1.3 and Beyond**:  
   - The standard TLS handshake is somewhat KEM-like. NIST and IETF are exploring hybrid and PQC-based handshakes that incorporate post-quantum KEMs alongside classical ECDH.
2. **Post-Quantum Crypto Libraries**:  
   - Many post-quantum algorithms (e.g., **Kyber**, **SABER**, **FrodoKEM**, **NTRU**) are implemented as KEMs.  
   - Rust crates like `pqcrypto` or `ml-kem` expose a KEM interface.
3. **Hybrid Approaches**:  
   - Combining a classical KEM (like ECDH) with a post-quantum KEM for added future-proof security.

---

## Summary

A **Key Encapsulation Mechanism** is a crucial building block in modern cryptosystems. It lets you use **public-key** techniques to agree on a **shared secret**—then leverage that secret with **symmetric encryption** to encrypt messages efficiently. KEMs simplify protocol design, improve performance, and make it easier to upgrade to **post-quantum** algorithms without having to change your overall encryption logic.
