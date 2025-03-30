Absolutely! Here's a rewritten guide that **teaches you how to *read and understand ADA tokens and smart contracts*** just by analyzing the **JSON attributes** from UTXOs, transactions, and smart contract queries.

---

# 🧠 How to Read ADA Tokens and Smart Contracts from JSON (Cardano)

This tutorial will teach you how to **understand ADA and smart contracts on Cardano** by reading JSON output from the blockchain using `cardano-cli` and `jq`. You’ll learn how to recognize key fields, what they mean, and how to spot smart contracts in action.

---

## 🗂️ Step 1: UTXO JSON Structure

When you run this:

```bash
cardano-cli query utxo --address <YOUR_ADDRESS> --testnet-magic 1 --out-file utxos.json
cat utxos.json | jq
```

You’ll see something like this:

```json
{
  "abcdef123...#0": {
    "address": "addr_test1...",
    "amount": [
      { "unit": "lovelace", "quantity": "5000000" },
      { "unit": "policyid.assetname", "quantity": "10" }
    ],
    "datumHash": "123abc..."
  }
}
```

### 🔍 How to Read This:

| Attribute            | Meaning                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `"abcdef123...#0"`   | Unique identifier of the UTXO. Format is `txHash#index`.                |
| `"address"`          | The receiving address (wallet or smart contract).                       |
| `"lovelace"`         | The native ADA token. `5000000` means **5 ADA** (1 ADA = 1,000,000 lovelace). |
| `"policyid.assetname"` | A **custom token or NFT**. Shows a policy ID and token name.           |
| `"datumHash"`        | Indicates this UTXO is locked by a **smart contract**. It links to data. |

➡️ **If `datumHash` is present**, it’s usually a smart contract UTXO.

---

## 🧾 Step 2: Reading a Transaction (TX) JSON

After submitting or querying a transaction, the JSON may look like this:

```json
{
  "txHash": "abcdef123...",
  "inputs": [
    {
      "txHash": "aaaaa...",
      "txIx": 0
    }
  ],
  "outputs": [
    {
      "address": "addr_test1...",
      "amount": [
        { "unit": "lovelace", "quantity": "2000000" }
      ],
      "datumHash": "456def..."
    }
  ],
  "fee": "168293",
  "validity": {
    "notBefore": null,
    "notAfter": 80000000
  }
}
```

### 🔍 Key Fields:

| Attribute           | Meaning                                                                 |
|---------------------|-------------------------------------------------------------------------|
| `"txHash"`          | Hash of the whole transaction                                           |
| `"inputs"`          | UTXOs being consumed                                                    |
| `"outputs"`         | New UTXOs being created                                                 |
| `"amount"`          | What’s being sent (ADA or tokens)                                       |
| `"datumHash"`       | Used for smart contracts (points to script data)                        |
| `"fee"`             | Paid to the network in ADA (in lovelace)                                |
| `"validity"`        | Defines time (slot range) when the transaction is valid                 |

✅ If an output includes a `datumHash`, it's likely part of a **Plutus smart contract**.

---

## 📦 Step 3: Tokens, NFTs, and Metadata

### ADA

ADA is always shown as:

```json
{ "unit": "lovelace", "quantity": "1000000" }  // = 1 ADA
```

### Native Tokens or NFTs

Custom tokens show up like:

```json
{ "unit": "b0c5...f11.MyToken", "quantity": "42" }
```

| Part            | Meaning                                |
|------------------|----------------------------------------|
| `b0c5...f11`     | The **policy ID** (like a minting authority) |
| `MyToken`        | The **asset name** (token or NFT name) |
| `quantity`       | Number of tokens or NFTs               |

---

## 🧠 Step 4: How to Know It’s a Smart Contract?

Look for these signs:

✅ **datumHash** – present in UTXO or transaction output  
✅ **Plutus scripts** – referenced in validator info (not shown in simple UTXO)  
✅ **Not directly spendable by wallets** — must include `datum` and `redeemer`

To view actual Plutus smart contract state:
```bash
cardano-cli query ledger-state --testnet-magic 1 --out-file ledger.json
cat ledger.json | jq '.utxo | to_entries[] | select(.value.datumHash != null)'
```

This shows all smart contract UTXOs.

---

## 🛠 Pro Tip: Filter Smart Contract Attributes with jq

```bash
jq '.["abcdef123...#0"] | {amount, datumHash}' utxos.json
```

Filters and shows ADA/token balance + datum (if present) for a UTXO.

---

## Summary: What to Look For

| You Want To See...         | Look for...                                        |
|----------------------------|----------------------------------------------------|
| ADA Balance                | `"lovelace"`                                       |
| Custom Tokens              | `"unit": "<policyid>.<assetname>"`                |
| Smart Contracts            | `datumHash`, `redeemer`, `script`                 |
| NFTs                       | `"quantity": "1"` and a unique asset name         |
| Fee Information            | `"fee"` field in transaction JSON                 |

---

Want a sample JSON with smart contract, NFT, and ADA? Or a visual breakdown? Let me know!
