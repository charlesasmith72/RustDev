Great! Here's an overview of the **types of smart contracts you can write in Aiken**, along with **real-world examples** to help ground each concept:

---

## 🧠 Types of Smart Contracts in Aiken (with Real-World Examples)

Aiken supports several types of on-chain logic. These typically fall into **validators** and **minting policies**, which are both just specialized Plutus scripts.

---

### 1. **Spending Validators**
These are scripts attached to UTXOs (Unspent Transaction Outputs). They control whether the UTXO can be spent.

**Real-world Example:**  
A **vesting contract** that only allows an employee to claim tokens after a specific date.

**Example Aiken Skeleton:**
```aiken
validator {
  fn main(datum: Unit, redeemer: Unit, ctx: ScriptContext) -> Bool {
    let info = ctx.transaction
    info.valid_range.contains_after(slot(50000))
  }
}
```

📝 This ensures the UTXO can only be spent after slot 50000.

---

### 2. **Minting Policies**
These govern whether new tokens (like NFTs or utility tokens) can be created (or burned).

**Real-world Example:**  
An **NFT policy** that only lets a specific wallet mint one token ever.

**Example Aiken Skeleton:**
```aiken
minting_policy {
  fn main(redeemer: Unit, ctx: ScriptContext) -> Bool {
    let info = ctx.transaction
    info.signers.any((s) => s == pub_key_hash("your_pubkey_hash"))
  }
}
```

✅ This allows minting only if the transaction is signed by a specific wallet.

---

### 3. **Multi-sig Contracts**
Require multiple users to sign off before spending is allowed.

**Real-world Example:**  
A **DAO treasury** where 2 of 3 board members must approve a withdrawal.

---

### 4. **Time-Locked Contracts**
Only execute actions before or after a given time.

**Real-world Example:**  
A **sealed-bid auction** where bids are only accepted until a deadline.

---

### 5. **Escrow Contracts**
Hold funds until a condition is met (e.g., buyer confirms receipt).

**Real-world Example:**  
An **escrow for freelance work** that releases ADA once both parties agree.

---

### 6. **State Machines**
Used for more complex workflows like games or auctions with multiple steps.

**Real-world Example:**  
A **rock-paper-scissors game** between two users.

---

### 7. **Reference Scripts + Inline Datums**
Scripts that are stored on-chain and reused for multiple transactions, reducing costs.

**Real-world Example:**  
A **donation platform** where donors send funds to reusable validator scripts.

---

Would you like to dive into one of these contract types with a full working example next? Or would you like the next section of the tutorial on **basic Aiken syntax**?
