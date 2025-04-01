Let’s build a **Utility Token JSON Template** — a clean, reusable schema that helps you generate utility tokens using your browser-native Rust + WASM wallet app.

This template will work with Cardano’s **native token** system (no smart contract required), and is designed to plug into your **minting policy + metadata + transaction builder**.

---

## 🧾 JSON Template: Utility Token

```json
{
  "type": "utility_token",
  "policy": {
    "script_type": "time_locking", 
    "slot_expiry": 12345678
  },
  "token": {
    "asset_name": "MYTOKEN",
    "amount": 1000000,
    "decimals": 6,
    "symbol": "MYT",
    "description": "A utility token for governance and rewards.",
    "logo": "ipfs://Qm...logo.png"
  },
  "metadata": {
    "name": "My Utility Token",
    "ticker": "MYT",
    "url": "https://myproject.xyz",
    "description": "Used in the MyProject ecosystem for access and rewards.",
    "decimals": 6
  },
  "mint_address": "addr_test1qz..."
}
```

---

## 🧩 Field-by-Field Explanation

### 🔹 `"type": "utility_token"`
- Marks this as a utility token minting task

---

### 🔹 `"policy"`

| Field        | Description |
|--------------|-------------|
| `script_type` | `"time_locking"` or `"sig_only"` |
| `slot_expiry` | Future slot after which minting is no longer allowed |
- You can use Rust to generate a native script based on this

---

### 🔹 `"token"`

| Field       | Description |
|-------------|-------------|
| `asset_name` | Token name (≤ 32 bytes, ASCII or UTF-8 hex) |
| `amount`     | Quantity to mint |
| `decimals`   | Number of decimal places (display only) |
| `symbol`     | Optional short symbol |
| `description`| Human-readable purpose of the token |
| `logo`       | IPFS URL of a token logo (optional) |

---

### 🔹 `"metadata"`

- This conforms to **CIP-25 for native tokens** (non-NFT usage)
- Attached to transaction under metadata label **"721" or "20"** depending on format
- Helps explorers and dApps display your token

---

### 🔹 `"mint_address"`
- The **address that receives the minted token**
- Must control the **signing key used for the policy**

---

## ✅ Rust Flow in Your App

1. **Parse this JSON** into a `UtilityToken` Rust struct
2. **Build a native script** based on `slot_expiry` and/or required signature
3. **Compute the policy ID** from the script
4. Construct a minting transaction:
   - Add `mint` field with token + policy ID + amount
   - Add metadata label (20 or 721) with `metadata`
5. Sign with `signTx()` (CIP-95)
6. Submit with `submitTx()`

---

## 🚀 Optional Enhancements

- [ ] UI Form to build this JSON
- [ ] Automatic slot expiry calculation (e.g. “expires in 6 months”)
- [ ] Symbol validator (ASCII only)
- [ ] Metadata auto-hasher

---

Would you like help:
- Generating native scripts in Rust for this?
- Auto-hashing and inserting IPFS logos?
- Writing the matching `UtilityToken` struct?

Let’s wire this into your builder module!
