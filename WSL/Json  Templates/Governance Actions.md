Excellent — you're now entering the **core of CIP-1694 governance participation**: **custom governance actions** (also known as *governance proposals*). These actions are submitted to the blockchain for review, voting, and potential enactment via DReps and other actors.

Let’s build this from scratch: **JSON ➝ Rust ➝ CBOR ➝ CIP-95** ready.

---

## 🧠 What Are Governance Actions?

Governance actions are proposals for on-chain governance decisions. These include:

- **New protocol parameters**
- **Treasury withdrawals**
- **Hard fork updates**
- **No-confidence votes**
- **Info actions (no-op, used for signaling)**

They are embedded in transactions via the `proposal_procedure` field (index `20`) in **Conway ledger** transactions.

They are not certificates — they are **special transaction fields**.

---

## 🧾 JSON Template for a Governance Action (Info Proposal)

```json
{
  "type": "info_action",
  "anchor": {
    "url": "https://gov.example.com/proposal.json",
    "hash": "6bff3e34d63fbd379c61f8c97d7282213563a3f9f511a2f8b6bcd345f1a09dbe"
  },
  "deposit": 500000000,
  "return_address": "addr_test1qz..."
}
```

---

## 🧩 Field-by-Field Breakdown

### 🔹 `"type": "info_action"`
- This is a governance **action type**
- `info_action` is a "no-op" proposal for informational purposes (like a signal vote)
- Other types include:
  - `update_parameters`
  - `hard_fork_initiation`
  - `treasury_withdrawal`
  - `no_confidence`
  - `new_committee`

---

### 🔹 `"anchor"`
A metadata pointer used to describe the proposal off-chain.

#### `"url"`
- URL of a metadata file describing the proposal (e.g. what is being proposed, why, who submitted it)

#### `"hash"`
- **Blake2b-256 hash** of the proposal metadata file contents

---

### 🔹 `"deposit"`
- ADA deposit required to submit a proposal (typically 500 ADA = `500_000_000`)
- Prevents spam

---

### 🔹 `"return_address"`
- An address to which the deposit is refunded if the proposal is not enacted or is withdrawn
- Usually a base address controlled by the submitter

---

## 🦀 Rust Struct for Governance Action

```rust
#[derive(Serialize, Deserialize, Debug)]
pub struct ProposalAnchor {
    pub url: String,
    pub hash: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct GovernanceAction {
    #[serde(rename = "type")]
    pub action_type: String, // e.g. info_action
    pub anchor: ProposalAnchor,
    pub deposit: u64, // in lovelace
    pub return_address: String
}
```

---

## 🔁 Conversion Flow

1. User fills out a form or selects a pre-defined template
2. You serialize the form to this JSON structure
3. Convert to Rust struct with `serde_json`
4. Convert to CBOR using `ciborium` or `serde_cbor`
5. Inject into transaction at **field index 20 (proposal_procedure)** per Conway spec
6. Sign with `api.signTx()` (CIP-95 aware wallet)
7. Submit with `api.submitTx()`

---

## ✅ Notes for Building

- Your wallet app must **recognize governance action fields** in transaction construction
- This is NOT a cert — it is a top-level field in the **Conway transaction body**
- You'll likely want a **transaction builder module** in Rust to compose these pieces
- Use **CIP-95 `.signTx()`** to ensure Conway artifacts are properly inspected and signed

---

Would you like:
- A real metadata `.json` file sample for the anchor?
- Full CBOR example for `info_action`?
- A combined transaction example that includes a governance action + cert?

Let me know what piece you want to wire in next!
