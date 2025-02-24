### **Metadata in an ADA Transaction Block**
In **Cardano**, transaction metadata allows users to embed arbitrary data (such as JSON, text, or encoded data) into the blockchain. The metadata is structured as a **key-value pair** where:
- The **key** is a numerical identifier (e.g., `674`).
- The **value** can be a **string, number, bytes, or structured JSON object**.

---

### **Example of Transaction Metadata in an ADA Block**
A typical **Cardano transaction metadata** entry looks like this in JSON format:

```json
{
  "674": {
    "message": "Hello, Cardano!",
    "author": "User123",
    "timestamp": "2025-02-23T20:46:52Z",
    "encodedData": "48656c6c6f2c20576f726c6421"
  }
}
```

🔹 **Explanation of Attributes:**
- **`674`** → A unique numerical **metadata key** (users can choose any key).
- **`message`** → A simple text message stored on-chain.
- **`author`** → Additional identifier or metadata.
- **`timestamp`** → Timestamp when the metadata was created.
- **`encodedData`** → A **hex-encoded** string (for storing binary data).

---

### **How Metadata Appears in a Cardano Block**
When a transaction with metadata is included in a **Cardano block**, it will have attributes like:

#### **Example Block Attributes with Metadata**
```json
{
  "block": 11523940,
  "epoch": 542,
  "slot": 14521,
  "timestamp": "2025-02-23T20:46:52Z",
  "transactions": [
    {
      "txHash": "a1b2c3d4e5f6...",
      "totalOutput": "491,009.865363 ADA",
      "fees": "1.436986 ADA",
      "metadata": {
        "674": {
          "message": "Hello, Cardano!",
          "author": "User123",
          "timestamp": "2025-02-23T20:46:52Z",
          "encodedData": "48656c6c6f2c20576f726c6421"
        }
      }
    }
  ],
  "stakePool": "Moonstake 7 [MS7]",
  "blockHash": "7e052e7f146900a0d5fc0716508e9f7718d2f678e8bd2389935d0a1129b6cb0"
}
```

---

### **How to Use Metadata in a Real Transaction**
1. **Using `cardano-cli` (Command Line Tool)**:
   - You can attach metadata using:
   ```sh
   cardano-cli transaction build-raw \
     --tx-in <txInput> \
     --tx-out <txOutput> \
     --metadata-json-file metadata.json \
     --out-file tx.raw
   ```
   - Where `metadata.json` contains the JSON metadata.

2. **Using Cardano Wallet API**:
   - Wallets like **Daedalus** or **Yoroi** do **not** allow direct metadata entry, but APIs like **Blockfrost** or smart contracts can be used.

3. **Using a DApp / Smart Contract**:
   - **Plutus scripts** can read transaction metadata and use it for **on-chain logic**.

---

### **Why Use Metadata?**
✅ **Immutable On-Chain Storage** → Data is permanently recorded.  
✅ **Use Cases**:
   - Certificates, academic records.
   - Supply chain tracking.
   - NFT metadata (e.g., ownership records).
   - Decentralized identity (DID).

---

### **Final Thoughts**
📌 **Cardano Transaction Metadata** is a powerful way to store **custom data** inside a **block** without modifying the blockchain structure. You can store text, JSON, or encoded binary data, making it useful for various decentralized applications.

Would you like help generating or encoding a metadata entry for an actual transaction? 🚀
