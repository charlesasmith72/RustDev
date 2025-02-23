Below is an overview of several encoding and hashing schemes commonly used in blockchain systems, along with examples of blockchains that use them:

---

### Common Encoders

- **Hexadecimal (Hex) Encoding**  
  - **Description:** A base‑16 representation that converts binary data into a string using the characters 0–9 and A–F (or a–f).  
  - **Usage:** Almost every blockchain uses hex to display raw hash outputs (for instance, Bitcoin block hashes or Ethereum transaction hashes).

- **Base58Check Encoding**  
  - **Description:** A variant of Base58 that adds a checksum to help detect errors. It avoids ambiguous characters (like 0/O and I/l).  
  - **Usage:**  
    - **Bitcoin:** Legacy addresses (P2PKH and P2SH) are encoded with Base58Check.  
    - **Other Bitcoin-derived coins:** Litecoin, Dogecoin, and Bitcoin Cash also use Base58Check for legacy addresses.

- **Bech32 Encoding**  
  - **Description:** An encoding scheme designed for improved human-readability and error detection. It uses a lowercase alphabet and a built‑in checksum.  
  - **Usage:**  
    - **Bitcoin:** SegWit (P2WPKH/P2WSH) addresses are represented in bech32.  
    - **Cardano:** Shelley-era addresses are often shown in a bech32-like format.

- **SS58 Encoding**  
  - **Description:** A format similar in spirit to Base58Check but designed for the Polkadot ecosystem. It includes a network-specific prefix and checksum.  
  - **Usage:**  
    - **Polkadot and Kusama:** Addresses on these networks are encoded using the SS58 format.

- **Base64 Encoding**  
  - **Description:** A method that encodes binary data into an ASCII string using 64 characters (typically A–Z, a–z, 0–9, +, and /).  
  - **Usage:**  
    - **Less common for addresses:** Base64 sometimes appears in off‑chain contexts or for encoding arbitrary data (for example, IPFS content identifiers).

---

### Common Hash Functions (One-Way Encoders)

While not “encoders” in the traditional sense, hash functions are one‑way algorithms that convert data into fixed‑size outputs. They’re often part of address derivation or transaction signing.

- **SHA‑256**  
  - **Description:** Produces a 256‑bit hash; known for its one‑way properties and collision resistance.  
  - **Usage:**  
    - **Bitcoin:** Used twice (double‑SHA‑256) in the proof‑of‑work algorithm and address generation.  
    - **Bitcoin Cash, Bitcoin SV, and other derivatives:** Also rely on SHA‑256.

- **Keccak‑256 (often referred to as “SHA‑3” in Ethereum contexts)**  
  - **Description:** A variant of the Keccak algorithm used as Ethereum’s primary hash function.  
  - **Usage:**  
    - **Ethereum:** Employed for address generation, transaction signing, and various protocol functions.

- **Blake2b**  
  - **Description:** A fast and secure hash function that comes in various output lengths.  
  - **Usage:**  
    - **Cardano:** Uses variants (like Blake2b‑224) during the process of address generation and other cryptographic operations.

- **RIPEMD‑160**  
  - **Description:** Often paired with SHA‑256 (for example, hashing the result of a SHA‑256) to produce shorter addresses.  
  - **Usage:**  
    - **Bitcoin:** The combination of SHA‑256 followed by RIPEMD‑160 is used to generate public key hashes for Bitcoin addresses.

---

### Summary Table

Here’s a recap of the encoding and hashing schemes from the earlier table:

---

### **Encoders (Reversible Transformations)**
Encoders are used to make binary data more readable and compatible with different systems.

| **Scheme**      | **Type**   | **Usage Examples** |
|---------------|-----------|------------------|
| **Hexadecimal (Hex)** | Encoder | Used to display raw hash outputs and public keys in Bitcoin, Ethereum, and nearly all blockchains |
| **Base58Check** | Encoder | Used for Bitcoin legacy addresses (P2PKH, P2SH), also in Litecoin, Dogecoin, and Bitcoin Cash |
| **Bech32** | Encoder | Used for Bitcoin SegWit addresses and Cardano Shelley addresses, with built-in error detection |
| **SS58** | Encoder | Used in Polkadot and Kusama address encoding to distinguish different networks |
| **Base64** | Encoder | Used for encoding transaction metadata, IPFS content, and various off-chain applications |

---

### **Hash Functions (One-Way Transformations)**
Hash functions convert data into a fixed-size string that cannot be reversed.

| **Scheme**      | **Type**  | **Usage Examples** |
|---------------|----------|------------------|
| **SHA-256** | Hash Function | Used in Bitcoin (block headers, mining proof-of-work), Bitcoin Cash, and Bitcoin SV |
| **Keccak-256** | Hash Function | Used in Ethereum (address generation, transaction signing) and Ethereum Classic |
| **Blake2b** | Hash Function | Used in Cardano (address hashing, cryptographic operations) |
| **RIPEMD-160** | Hash Function | Used in Bitcoin (after SHA-256) to generate shorter public key hashes for addresses |

---

### **Key Differences**
- **Encoders are reversible**, meaning the original binary data can be retrieved.
- **Hash functions are one-way**, meaning they are designed to be irreversible.
- **Most blockchains use both**:  
  - **Hashing** secures transaction data, block headers, and addresses.  
  - **Encoding** formats the hashed data into readable and shareable representations.

Would you like any additional details on specific schemes?
