Here’s your updated **Aiken Setup Tutorial for 2025 using WSL Ubuntu**, with your actual project and error feedback included:

---

# 🧠 Aiken Setup on WSL (2025 Updated Tutorial)

This guide helps you install [Aiken](https://aiken-lang.org) on **WSL2 Ubuntu**, configure your Cardano development environment, and create your first smart contract project inside your **preprod testnet**.

---

## ✅ Prerequisites

Make sure you have:

- A working WSL2 Ubuntu environment
- `cardano-node` and `cardano-cli` installed and synced (preprod)
- `cargo` (Rust) installed
- `curl` and `git` installed
- `libssl-dev`, `pkg-config`, `build-essential`, and other dev tools installed

---

## 1. 🧱 Install Build Tools (one-time)
Run the following in WSL:

```bash
sudo apt update
sudo apt install curl git build-essential pkg-config libssl-dev libclang-dev -y
```

---

## 2. 🦀 Install Rust (with `cargo`)
If you don’t already have Rust installed:

```bash
curl https://sh.rustup.rs -sSf | sh
```

Close and reopen your WSL terminal, or run:

```bash
source $HOME/.cargo/env
```

Test:

```bash
cargo --version
```

---

## 3. 🔧 Install Aiken (via Cargo)

```bash
cargo install aiken
```

> If you see an error like `linker 'cc' not found`, make sure you installed `build-essential` as shown in step 1.

You should see something like:

```bash
aiken --version
# aiken v1.1.15+unknown
```

---

## 4. 📁 Create Your First Smart Contract Project

Navigate to your Cardano dev directory:

```bash
cd ~/cardano/preprod
```

Then run this **correctly formatted** command (based on Aiken’s naming rules):

```bash
aiken new charl/my_first_contract
```

> ✅ **Naming Rule Tip**: Aiken requires projects to be named in the format:  
> `{owner}/{project}`  
> All lowercase, and only letters, numbers, hyphens or underscores.

⚠️ If you run something like this:

```bash
aiken new my-first-contract
```

You’ll see this error:

```
Error: ✗ my-first-contract is not a valid project name: It is malformed.
Projects must be named as:
    {owner}/{project}
```

---

## 5. 🚀 Explore Your Project

```bash
cd my_first_contract
```

Your new Aiken project includes:

- `aiken.toml`: project metadata
- `plutus/`: directory for your `.ak` smart contract files
- `test/`: folder for inline tests

---

## ✅ You’re Ready to Build!

From here, you can:

- Write Plutus V2 contracts in Aiken
- Compile to `.plutus` and `.plutus.json`
- Integrate with off-chain tooling or Aiken CLI
- Deploy to your running local testnet

## Start up:
Yes, you’ve got the right idea! Here's your full step-by-step guide to start working on your **first smart contract** in your current **pre-production Cardano + WSL + Aiken** environment:

---

## 🧠 TL;DR – The Workflow

1. ✅ Start **WSL**
2. ✅ Open the **project folder** in VS Code
3. ✅ Start the **Cardano node**
4. ✅ Compile your **Aiken smart contract**
5. ✅ Interact with the blockchain using `cardano-cli`

---

## 🪟 1. Start WSL

Open your terminal and enter WSL (Ubuntu):

```bash
wsl
```

> You should land in your Linux shell (e.g., `charl@STXRLABML1:~`)

---

## 🧭 2. Navigate to Your Project and Open VS Code

```bash
cd ~/cardano/preprod
code .
```

This opens the pre-production testnet folder in **VS Code** (inside WSL). You’ll edit your Aiken smart contract here.

---

## 🌀 3. Start the Cardano Node

Make sure you're in the same `~/cardano/preprod` directory and run:

```bash
cardano-node run \
  --config ./config.json \
  --topology ./topology.json \
  --database-path ./db \
  --socket-path ./db/node.socket \
  --host-addr 0.0.0.0 \
  --port 3001
```

> ✅ You’ll need this running **before** querying the blockchain or submitting transactions.

---

## 📄 4. Write Your Smart Contract

Navigate to your Aiken project:

```bash
cd ~/cardano/preprod/my_first_contract
```

Edit the `src/main.ak` file or create a new `.ak` module in VS Code.

---

## 🧪 5. Compile the Smart Contract

Once you’ve written the `.ak` file:

```bash
aiken check
aiken build
```

This compiles your contract to **Plutus Core** and outputs `.plutus` files inside the `plutus.json` directory.

---

## 🧰 6. Use `cardano-cli` to Deploy or Interact

You now have access to the full CLI toolset. From here, you can:

- 🔎 Query blockchain state (`cardano-cli query ...`)
- 🪙 Create transactions that **spend UTXOs** with your smart contract
- 📦 Submit transactions to your running node

 
