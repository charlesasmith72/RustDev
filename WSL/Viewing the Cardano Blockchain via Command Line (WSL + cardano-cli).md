# Viewing the Cardano Blockchain via Command Line (WSL + cardano-cli)

This tutorial shows how to view your **local Cardano blockchain running in WSL** using `cardano-cli` and `jq`. It also explains how to extract human-readable data about blocks, UTXOs, stake pools, transactions, and smart contract state.

---

## Prerequisites
- `cardano-node` is running in WSL.
- You have `cardano-cli` and `jq` installed.
- You are working in `~/cardano/preprod` or similar.
- You have your `db` folder and `node.socket` file.

---

## Set environment variables
```bash
export CARDANO_NODE_SOCKET_PATH=~/cardano/preprod/db/node.socket
```

---

## View Blockchain Info

### 1. Query Tip (Current Block Info)
```bash
cardano-cli query tip --testnet-magic 1 | jq
```
Returns:
- `slot`: Current slot number
- `hash`: Hash of the most recent block
- `block`: Block number
- `era`: Protocol era

---

## Additional Query Options

### 2. Query Protocol Parameters
```bash
cardano-cli query protocol-parameters --testnet-magic 1 --out-file protocol.json
cat protocol.json | jq
```
Useful for checking:
- Plutus script costs
- Transaction limits
- Min fee formulas

### 3. Query Stake Distribution
```bash
cardano-cli query stake-snapshot --stake-pool-id <POOL_ID> --testnet-magic 1
```
Returns stake snapshots for a pool:
- `stakeMark`, `stakeSet`, and `stakeGo` (used in different parts of the epoch)

### 4. Query UTXOs at an Address
```bash
cardano-cli query utxo --address <YOUR_WALLET_ADDRESS> --testnet-magic 1 | jq
```
Shows:
- TxHash and TxIx (transaction ID and index)
- Amount of ADA and assets
- Datum hash (if script output)

### 5. Query Block by Hash (advanced)
```bash
cardano-cli query block --testnet-magic 1 --block-hash <BLOCK_HASH>
```
Returns the raw block content.

### 6. Query Ledger State (Large JSON Output)
```bash
cardano-cli query ledger-state --testnet-magic 1 --out-file ledger.json
cat ledger.json | jq
```
Use `jq` to extract specific sections:
```bash
jq '.delegationState._delegations' ledger.json | head -n 30
```

### 7. Query Genesis Parameters
```bash
cardano-cli query genesis --testnet-magic 1 --out-file genesis.json
cat genesis.json | jq
```
Shows blockchain genesis configuration such as initial funds and settings.

### 8. Query Specific Block by Slot Number
```bash
cardano-cli query block --testnet-magic 1 --slot <SLOT_NUMBER>
```
Use this to view the block at a specific point in time.

### 9. Query Ledger UTXO State
```bash
jq '.utxo' ledger.json | jq length
```
Gives total number of UTXOs.

### 10. Query Delegation and Rewards Info
```bash
jq '.delegationState._rewards' ledger.json | jq length
jq '.delegationState._rewards | keys' ledger.json
```
Shows total reward entries and stake addresses.

### 11. Filter for a Specific Stake Address
```bash
jq '.delegationState._rewards["stake1u..."]' ledger.json
```
Returns reward balance for the specified stake address.

---

## Expanded Topics

### 🔎 Query UTXO Details
```bash
cardano-cli query utxo --address <ADDR> --testnet-magic 1 | jq
```
Use to locate script UTXOs, locked assets, or outputs awaiting spending.

### 🔄 Query Transaction Info
```bash
cardano-cli query tx --tx-id <TX_HASH> --testnet-magic 1
```
(Typically used in conjunction with a running node DB; limited support)

### ⛏️ Query Stake Pool Info
Stake pool IDs can be found using:
```bash
jq '.delegationState._pstate._pParams' ledger.json | jq keys
```
Then filter info:
```bash
jq '.delegationState._pstate._pParams["<POOL_ID>"]' ledger.json
```

### 🧠 Query Smart Contract State
Look for datum hashes and redeemers:
```bash
jq '.utxo | to_entries[] | select(.value.datumHash != null)' ledger.json
```
You can trace usage of smart contract UTXOs this way.

---

## Tips
- Use `jq` filters like `.field.subfield` to drill into deeply nested structures.
- Combine `jq` with `less`, `grep`, or `head` for better control.
- Always use `--out-file` with large queries.
- Explore `jq 'keys'` to discover available keys in maps.

---

## What's Next?
- View blocks and transactions in a local GUI explorer
- Use `cardano-wallet` for API access
- Build smart contracts with Aiken and view results here
- Automate block parsing with scripts

Let me know if you'd like help automating any of these queries.

