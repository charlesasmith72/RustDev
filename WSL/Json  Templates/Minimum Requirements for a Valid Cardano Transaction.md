 
## ✅ Minimum Requirements for a Valid Cardano Transaction

| Component | Required | Description |
|----------|----------|-------------|
| **Inputs (UTxOs)** | ✅ | At least one input that funds the transaction |
| **Outputs** | ✅ | At least one output (including change) |
| **Fee** | ✅ | Must be ≥ minimum fee (auto-computed from tx size) |
| **TTL (Time to Live)** | ✅ | Expiry slot number (optional in some modes) |
| **Witnesses (signatures)** | ✅ | Must include correct key witnesses |
| **Network ID** | ✅ | Must match chain (`Testnet = 0`, `Mainnet = 1`) |
| **CBOR Structure** | ✅ | Serialized according to Cardano transaction CDDL spec |

---

## 🔐 Additional Requirements (Based on TX Type)

| Feature | Extra Fields |
|--------|--------------|
| **Minting tokens** | `mint` field, `policy_id.asset_name`, script witness |
| **NFTs** | Metadata under label `721`, single mint per asset name |
| **Governance (Conway)** | `certs`, `proposal_procedure`, `voting_procedure` |
| **Smart Contracts** | `redeemers`, `datums`, `collateral`, `scripts`, `ex_units` |

---

## 🧪 Examples of Invalid Transactions (Rejected by Node)

| Problem | Error Reason |
|--------|--------------|
| Missing signature for input | `MissingWitness` |
| Fee too low | `FeeTooSmallUTxO` |
| Expired TTL | `ExpiredUTxO` |
| Minting w/o script | `MissingRequiredScripts` |
| Invalid CBOR structure | `TxDeserializationFailure` |
| Incorrect network ID | `NetworkMismatch` |
| Duplicate NFT name in mint | `AssetAlreadyExists` (if already on-chain) |

---

## 🧱 Tools That Help You Format Correctly

If you use:
- 🦀 `cardano-serialization-lib` (via WASM)
- 🧩 Your own CBOR + Rust structs (following [Cardano CDDL](https://github.com/IntersectMBO/cardano-ledger/blob/master/eras/conway/test-suite/cddl-files/conway.cddl))

Then you can format and validate everything client-side.

You just need to make sure:
- All parts (inputs, outputs, witnesses, fees, metadata) are present and valid
- The result is serialized to **valid CBOR hex**

---

## ✅ TL;DR

| Question | Answer |
|----------|--------|
| Does Cardano enforce structure and rules before submission? | ✅ Yes — strictly |
| Do I need a CIP or registry to submit tokens? | ❌ No |
| Will the node reject malformed TXs? | ✅ Always |
| Can I validate formatting in-browser? | ✅ Yes, using Rust + CBOR or `cardano-serialization-lib` |

---

Would you like:
- A checklist or Rust struct validation template?
- A test submission flow with a fake UTxO?
- A live CBOR validator for your browser app?

I can help you build a “pre-submit sanity check” step if needed!
