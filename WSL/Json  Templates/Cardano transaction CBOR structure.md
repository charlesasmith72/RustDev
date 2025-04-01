
## 🧾 Cardano Transaction CBOR Structure (Simplified)

Cardano transaction CBOR follows a **fixed map format**, defined by the [Cardano CDDL](https://github.com/IntersectMBO/cardano-ledger/blob/master/eras/conway/test-suite/cddl-files/conway.cddl) spec.

Each transaction is composed of three main parts:

```cbor
[
  tx_body,         ; index 0
  tx_witness_set,  ; index 1
  optional_metadata ; index 2 (optional)
]
```

---

### 🔹 `tx_body` (index `0`)

The **transaction body** is the core. It contains:

| Key | Field | Description |
|-----|-------|-------------|
| 0 | `inputs` | List of UTXOs being spent |
| 1 | `outputs` | List of outputs (recipient address + value) |
| 2 | `fee` | Min fee in lovelace |
| 3 | `ttl` | Time to live (absolute slot) |
| 4 | `certs` | Stake, DRep, or pool certificates |
| 5 | `withdrawals` | Reward account withdrawals |
| 6 | `update` | Protocol param updates |
| 7 | `auxiliary_data_hash` | Hash of metadata (if present) |
| 8 | `validity_interval_start` | Optional slot start |
| 9 | `mint` | Map of native tokens to mint/burn |
| 11 | `script_data_hash` | Hash of datum + redeemer |
| 13 | `collateral_return` | Return ADA if script fails |
| 14 | `total_collateral` | Total ADA used as collateral |
| 15 | `reference_inputs` | Inputs used as read-only |
| 16 | `proposal_procedure` | Conway governance proposals |
| 17 | `voting_procedure` | Vote casting field |
| 18 | `voting_procedure_hash` | Hash of voting procedure |
| 19 | `tx_deposit` | Proposal or committee deposits |

---

### 🔹 `tx_witness_set` (index `1`)

This section provides **signatures, scripts, and execution data**:

| Key | Field | Description |
|-----|-------|-------------|
| 0 | `vkey_witnesses` | Array of key signatures |
| 1 | `native_scripts` | Minting policies or native scripts |
| 2 | `plutus_v1_scripts` | Plutus V1 contracts |
| 3 | `plutus_data` | Data used in scripts (`datum`) |
| 4 | `redeemers` | Script execution arguments |
| 5 | `plutus_v2_scripts` | Plutus V2 / Aiken scripts |
| 6 | `bootstrap_witnesses` | Byron-era signatures |
| 7 | `drep_vkey_witnesses` | DRep-level signatures (CIP-95) |

---

### 🔹 `auxiliary_data` (index `2`, optional)

Used for:
- CIP-25 NFT metadata (`label 721`)
- Utility token metadata (`label 20`)
- Off-chain info

```cbor
{
  721: { ... }, ; NFT metadata
  20: { ... }   ; Fungible token metadata
}
```

---

## 🧠 How This Maps to TX Types

Each transaction **includes only the fields it needs**:

| TX Type | Key Fields |
|---------|------------|
| Payment | `inputs`, `outputs`, `fee` |
| Minting | `mint`, `native_scripts`, optional `metadata` |
| Stake delegation | `certs`, `stake keys`, `witnesses` |
| Smart contract | `scripts`, `redeemers`, `datums`, `collateral` |
| Governance | `proposal_procedure`, `voting_procedure`, `certs`, DRep signatures |

Refer to the included diagram for visual relationships between TX types and their required fields.

---

Would you like:
- A downloadable printable PDF version of this full outline?
- A JSON-to-CBOR converter for Cardano TXs?
- Sample CBOR bytes for each transaction type?

Let me know what you'd like to build next.
