Here’s your updated **Aiken installation tutorial** tailored for your **2025 WSL Ubuntu environment** using the official `cargo` method.

---

# 🔧 Aiken Installation Tutorial (WSL Ubuntu 2025 + Cargo)

Aiken is a lightweight smart contract language for Cardano, built for performance and developer productivity. This tutorial shows how to install Aiken from source using Cargo in your current WSL environment.

---

## ✅ Prerequisites

Before installing Aiken, make sure you have the following installed in your WSL Ubuntu terminal:

### 1. **Rust (via rustup)**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then restart your shell or run:
```bash
source $HOME/.cargo/env
```

### 2. **Update PATH**
Ensure Cargo's bin directory is on your PATH:
```bash
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

---

## 🚀 Install Aiken using Cargo

Run this command to install Aiken from crates.io:

```bash
cargo install aiken
```

This will:
- Download the Aiken crate
- Compile it in your environment
- Install the `aiken` binary to `~/.cargo/bin`

---

## 🧪 Verify the Installation

Check the version to confirm it worked:
```bash
aiken --version
```

You should see something like:
```
aiken 1.x.x
```

---

## 🗂️ Create a New Aiken Project

Navigate to your working Cardano directory:
```bash
cd ~/cardano/preprod
```

Create a new Aiken project:
```bash
aiken new my-first-contract
cd my-first-contract
```

This creates:
- `aiken.toml`: project config
- `contracts/`: where you write smart contracts
- `test/`: for unit testing

---

## 🧠 Compile Your Smart Contract

Inside the Aiken project folder:
```bash
aiken build
```

This compiles your `.ak` files into Plutus scripts.

---

## ✅ Next Steps

You can now:
- Write and test Plutus smart contracts using Aiken
- Integrate them with Lucid or `cardano-cli`
- Deploy them on your preprod chain running in WSL

Would you like a walkthrough for building and deploying your first Aiken contract?
