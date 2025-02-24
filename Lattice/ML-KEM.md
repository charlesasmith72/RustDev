The `ml-kem` crate is a pure Rust implementation of the Module-Lattice-based Key Encapsulation Mechanism (ML-KEM), as standardized by NIST in FIPS 203. ML-KEM, formerly known as CRYSTALS-Kyber, is a post-quantum secure key encapsulation mechanism designed to facilitate secure key exchange between parties over insecure channels, ensuring confidentiality even against adversaries equipped with quantum computers. citeturn0search0

This crate provides implementations for all three ML-KEM parameter sets:

- **ML-KEM-512**: Offers security comparable to AES-128.
- **ML-KEM-768**: Corresponds to AES-192 security.
- **ML-KEM-1024**: Aligns with AES-256 security.

Each parameter set balances security strength with performance considerations, allowing developers to choose the most appropriate level for their applications. citeturn0search0

The `ml-kem` crate is part of the RustCrypto organization's suite of cryptographic tools and is implemented entirely in Rust, ensuring memory safety and compatibility with other Rust projects. However, it's important to note that this implementation has not undergone an independent security audit. Users are advised to assess its suitability for their security requirements and consider conducting their own reviews before deploying it in production environments. citeturn0search0

For developers seeking a formally verified implementation, the `libcrux-ml-kem` crate offers all three ML-KEM variants (512, 768, and 1024). This crate has been formally verified using hax and F*, providing an additional layer of assurance regarding its correctness and security properties. citeturn0search1

In summary, the `ml-kem` crate enables Rust developers to integrate post-quantum secure key encapsulation mechanisms into their applications, preparing them for a future where quantum computing could pose a threat to classical cryptographic algorithms. 
