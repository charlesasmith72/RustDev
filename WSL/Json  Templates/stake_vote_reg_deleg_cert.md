Great choice — the `stake_vote_reg_deleg_cert` is a **combo certificate** used to register a stake key and delegate that key’s **voting power to a DRep** in one go. It simplifies UX by combining two actions into one transaction.

Let’s break it all down.

---

## 🧠 What is `stake_vote_reg_deleg_cert`?

This certificate type does all three of the following:
1. **Registers** a stake key (so it can earn rewards and vote)
2. **Delegates stake voting rights** to a DRep
3. All in a **single certificate**, saving transaction space and fees

---

## 🧾 `stake_vote_reg_deleg_cert` – JSON Template

```json
{
  "type": "stake_vote_reg_deleg_cert",
  "stake_key": "aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899",
  "drep_id": "b0d4312e8fba7c998dffef61f57b7a88e6579a97d9c42dfb0a9d4a42"
}
```

---

## 🧩 Explanation of Each Field

### 🔹 `"type": "stake_vote_reg_deleg_cert"`
- Declares this as a **stake key registration + vote delegation** certificate
- In the Conway ledger CDDL spec, this corresponds to **certificate index `11`**

---

### 🔹 `"stake_key"`
- The **32-byte Ed25519 stake key** (hex-encoded)
- This is being registered **for the first time** as part of this cert
- If the stake key is already registered, this cert will **fail** during validation

Use `getUnregisteredPubStakeKeys()` from CIP-95 to find available keys.

---

### 🔹 `"drep_id"`
- The **DRep ID** (Blake2b-224 hash of their public DRep key)
- Target of your delegation

This is identical to the one used in `vote_deleg_cert` and `reg_drep_cert`.

---

## 🧠 When to Use This Certificate?

Use `stake_vote_reg_deleg_cert` when:
- A user **has a stake key but hasn't registered it yet**
- They want to **register and delegate voting power** at the same time
- Saves cost and complexity (1 cert instead of 2)

---

## 🦀 Rust Struct Example

```rust
#[derive(Serialize, Deserialize, Debug)]
pub struct StakeVoteRegDelegCert {
    #[serde(rename = "type")]
    pub cert_type: String, // stake_vote_reg_deleg_cert
    pub stake_key: String, // 32-byte hex
    pub drep_id: String    // 28-byte hex
}
```

---

## 🧪 Suggested Flow in Your App

1. Call `api.cip95.getUnregisteredPubStakeKeys()`
2. User selects a DRep
3. You build the JSON template above
4. Serialize ➝ Convert to CBOR ➝ Add to Tx body
5. Sign with `api.signTx()` (must support Conway certs)
6. Submit

---

Would you like me to:
- Generate a Rust → CBOR example from this cert?
- Show how to include multiple certs in one transaction (combo flows)?
- Build a validator or check for unregistered keys in Rust?

Just say the word — we can plug this into your stack.
