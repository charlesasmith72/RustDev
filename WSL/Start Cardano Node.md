Absolutely — here’s a clean and direct set of **startup instructions from WSL** all the way to **viewing the Cardano testnet blockchain state** from your terminal.

---

## ✅ Step-by-Step: Start Cardano Node from WSL

### 1. **Open WSL Terminal**
If you're using VS Code, open a terminal inside your Ubuntu WSL environment.

---

### 2. **Navigate to Your Node Config Directory**
```bash
cd ~/cardano-preview
```

> This should contain `config.json`, `topology.json`, the `db/` folder, and all the genesis files.

---

### 3. **Start the Node**
```bash
cardano-node run \
  --config ./config.json \
  --topology ./topology.json \
  --database-path ./db \
  --socket-path ./db/node.socket \
  --host-addr 127.0.0.1 \
  --port 3001
```

Leave this running in a terminal tab.

---

## 🧪 View the Blockchain State (from another WSL terminal tab)

Open a **new terminal tab** so you don’t interrupt the node.

---

### 4. **Check Your Node’s Sync Status**
```bash
cardano-cli query tip --testnet-magic 2 --socket-path ~/cardano-preview/db/node.socket
```

You should see output like:
```json
{
  "epoch": 328,
  "hash": "abc123...",
  "slot": 12345678,
  "block": 987654,
  "era": "Babbage",
  "syncProgress": "72.34"
}
```

> When `"syncProgress"` reaches `"100.00"`, your node is fully synced.

---

### 5. **Explore Blockchain Data**
You can run commands like:

- **Query current protocol parameters:**
```bash
cardano-cli query protocol-parameters \
  --testnet-magic 2 \
  --out-file protocol.json \
  --socket-path ~/cardano-preview/db/node.socket
```

- **View your local UTXOs (after creating an address):**
```bash
cardano-cli query utxo \
  --address $(cat payment.addr) \
  --testnet-magic 2 \
  --socket-path ~/cardano-preview/db/node.socket
```

---

Would you like to walk through:
- Creating a wallet and requesting test ADA?
- Minting a token or contract preview?
Let me know — we can go step-by-step.
