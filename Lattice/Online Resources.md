1. **NTRU Encryption and Decryption Tool**: This online tool allows you to generate keys and perform encryption and decryption using the NTRU algorithm, a lattice-based cryptosystem known for its efficiency and resistance to quantum attacks. citeturn0search0

2. **CrypTool-Online**: An interactive platform that offers a variety of cryptographic tools and tutorials, including modules on modern encryption techniques. While it covers a broad range of cryptographic methods, it provides a foundational understanding that can be beneficial before diving into specialized topics like lattice-based cryptography. citeturn0search2

3. **GitHub Repositories**: For hands-on learners, exploring open-source projects can be invaluable. The GitHub repository "lattice-based-cryptography" offers JavaScript implementations of several lattice-based cryptosystems, including Lizard, Kyber, Frodo, and NewHope. This resource is excellent for studying the practical aspects of these algorithms. citeturn0search3

Additionally, for a structured learning experience, you might consider online courses and lectures focusing on lattice-based cryptography. Platforms like Class Central aggregate free courses from various providers, covering topics from basic mathematical foundations to advanced cryptographic applications. citeturn0search1

These resources should provide a comprehensive starting point for testing and learning about lattice-based cryptography and its applications in mathematics and encoding. 

To delve into lattice-based cryptography and the Kyber algorithm using Rust, consider the following libraries:

1. **KyberLib**: A robust Rust library implementing the CRYSTALS-Kyber post-quantum cryptography algorithm. It's `no_std` compatible, making it suitable for embedded devices, and avoids memory allocations. The library includes reference implementations without unsafe code and offers an optimized AVX2 version for x86_64 platforms. citeturn0search5

2. **enc_rust**: A pure Rust implementation of module-lattice-based standards, specifically the ML-KEM (Kyber) and ML-DSA (Dilithium) schemes. This library emphasizes security and efficiency, ensuring no unsafe code and compatibility with `no_std` environments. citeturn0search13

3. **ml-kem**: Part of the RustCrypto project, this library provides an implementation of the ML-KEM key encapsulation mechanism, aligning with the CRYSTALS-Kyber specifications. It's designed for high assurance in security and correctness. citeturn0search14

These libraries are actively maintained and offer comprehensive implementations of lattice-based cryptographic schemes in Rust, making them excellent resources for learning and development. 
