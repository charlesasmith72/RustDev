Great! Here’s a step-by-step tutorial to set up **Aiken** in your **pre-production Cardano blockchain environment on WSL**.

---

## ✅ Aiken Setup in WSL for Smart Contract Development

### 📦 Prerequisites
Ensure you’ve already:
- Installed `cardano-node` and `cardano-cli`
- Set up the pre-production chain (as you did in `~/cardano/preprod`)
- Installed `git` and `curl`
- Installed `rust` and `cargo` (recommended for better WASM tooling)

---

### 1. 🚀 Install Aiken

```bash
curl -sSf https://raw.githubusercontent.com/aiken-lang/aiken/main/install.sh | bash
```

This will:
- Download the latest release
- Install it under `~/.aiken/bin`
- Add it to your `PATH`

#### Add to PATH (permanently):
If it’s not already available in your shell:

```bash
echo 'export PATH="$HOME/.aiken/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

---

### 2. 🛠️ Create an Aiken Project

Navigate to where you want to build smart contracts:

```bash
cd ~/cardano/preprod
aiken new my_contracts
cd my_contracts
```

This scaffolds:
- `aiken.toml`: your config
- `contracts/`: for Plutus scripts
- `tests/`: for writing unit tests

---

### 3. ✍️ Write a Sample Contract

Edit `contracts/hello_world.ak`:
```aiken
contract HelloWorld {
  pub fn say_hello(name: String) -> String {
    "Hello, ".append(name)
  }
}
```

Compile:
```bash
aiken build
```

---

### 4. 🧪 Test the Contract

Inside `tests/hello_test.ak`:
```aiken
use HelloWorld

test "say hello returns expected greeting" {
  assert HelloWorld.say_hello("Alice") == "Hello, Alice"
}
```

Run tests:
```bash
aiken test
```

---

### 5. 🔐 Compile to Plutus Script

```bash
aiken build --output-format plutus
```

It will generate `.plutus.json` files you can use with `cardano-cli` for deploying.

---

### 6. ⚙️ Deploy with cardano-cli

Use standard UTXO-based transaction building:
```bash
cardano-cli transaction build \
  --tx-in <UTXO_IN> \
  --tx-out <ADDRESS>+<LOVELACE>+"1 <POLICY_ID>.<TOKEN_NAME>" \
  --change-address <ADDRESS> \
  --testnet-magic 1 \
  --out-file tx.raw \
  --protocol-params-file protocol.json
```

You’ll include the compiled `.plutus.json` script in a similar way.

---

### 🧭 Next Steps
- Use Aiken to build validator scripts for NFTs or tokens
- Combine it with native minting policy scripts
- Create automation to deploy contracts and mint tokens

---

Let me know if you'd like to scaffold a real NFT minting contract or deploy one live on your local testnet!
