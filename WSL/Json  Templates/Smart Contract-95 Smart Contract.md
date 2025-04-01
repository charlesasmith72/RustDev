Perfect — let’s build a **Smart Contract JSON Template** that works for your Rust + WASM CIP-95 wallet. This will help users upload or define smart contracts (Plutus or Aiken), attach redeemers, and deploy them directly in-browser.

This template focuses on **Plutus V2 (Aiken-compatible)** script deployment and transaction construction.

---

## 🧾 JSON Template: Smart Contract Deployment

```json
{
  "type": "validator_script",
  "script_format": "plutus_v2_flat",
  "script_name": "lock-tx",
  "script_hex": "4e4d01000033222220051200120011...", 
  "inputs": [
    {
      "utxo": {
        "tx_hash": "abcdef123456...",
        "index": 0
      },
      "redeemer": {
        "tag": "spend",
        "data": {
          "constructor": 0,
          "fields": []
        },
        "execution_units": {
          "mem": 500000,
          "steps": 700000
        }
      }
    }
  ],
  "collateral_utxos": [
    {
      "tx_hash": "deadbeef789...",
      "index": 1
    }
  ],
  "required_signers": [
    "aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899"
  ],
  "change_address": "addr_test1qz...",
  "spend_value": {
    "lovelace": 3000000,
    "assets": {}
  }
}
```

---

## 🧩 Field Explanations

| Field | Description |
|-------|-------------|
| `"type"` | Identifies the contract type (validator, minting, etc.) |
| `"script_format"` | `"plutus_v2_flat"` or `"aiken"` |
| `"script_name"` | A user-friendly name |
| `"script_hex"` | The **Flat-encoded hex** of the compiled script |
| `"inputs"` | UTxOs being spent by the contract (plus their redeemers) |
| `"collateral_utxos"` | Required for Plutus script execution |
| `"required_signers"` | List of public keys that must sign the tx |
| `"change_address"` | Where to send leftover ADA |
| `"spend_value"` | Amount of ADA/tokens to lock or use |

---

### 🔹 `"redeemer"`

Each `redeemer` object must contain:

| Field | Description |
|-------|-------------|
| `"tag"` | What the redeemer applies to (`spend`, `mint`, `certificate`) |
| `"data"` | JSON-encoded Plutus data, often using `constructor`/`fields` |
| `"execution_units"` | Max computation cost (mem + CPU steps) for this script |

---

## 🧠 Aiken-Compatible Deployment Flow

1. Compile your Aiken contract:
   ```sh
   aiken build
   aiken blueprint new
   ```
2. Get the Flat-encoded `.plutus` binary and hex-encode it
3. Insert the script hex into this template
4. Convert JSON ➝ Rust struct ➝ CBOR
5. Inject into a transaction via `.signTx()` using CIP-95
6. Submit via `.submitTx()`

---

## 🦀 Bonus: Rust Struct Option

Would you like a matching `struct ContractDeployment` for this JSON?

Or a function to convert an Aiken Flat binary to this JSON?

Let me know how you'd like to wire this into your app — UI builder, smart redeemer DSL, validator scanner, etc.
