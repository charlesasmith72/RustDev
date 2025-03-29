Great — I'll update the tutorial to include detailed explanations for what each of the `cardano-cli` queries is used for. Here's the updated version:

---

# Viewing the Cardano Blockchain via Command Line (WSL + cardano-cli)

This tutorial shows how to view your **local Cardano blockchain running in WSL** using `cardano-cli` and `jq`. It also explains how to extract **human-readable data** about blocks, UTXOs, stake pools, transactions, and smart contract state — and explains what each command is useful for.

---

## Prerequisites
- `cardano-node` is running in WSL.
- You have `cardano-cli` and `jq` installed.
- You're working in `~/cardano/preprod`.
- You have the `db` folder and `node.socket`.

---

## Set Environment Variable

```bash
export CARDANO_NODE_SOCKET_PATH=~/cardano/preprod/db/node.socket
```

This prevents the need to repeatedly provide `--socket-path` when running queries.

---

## View Blockchain Info

### 1. 🔹 Query Tip (Current Block Info)

```bash
cardano-cli query tip --testnet-magic 1 --socket-path $CARDANO_NODE_SOCKET_PATH | jq
```

**Purpose**: Displays the current state of your local node (sync progress, latest block, slot, and era). Useful for checking if your node is syncing.

---

## Additional Query Options

### 2. 📊 Query Protocol Parameters

```bash
cardano-cli query protocol-parameters --testnet-magic 1 --out-file protocol.json --socket-path $CARDANO_NODE_SOCKET_PATH
cat protocol.json | jq
```

**Purpose**: Retrieves settings like max transaction size, Plutus script cost models, fee calculations — helpful when building or simulating transactions.

---

### 3. 📈 Query Stake Snapshot for a Pool

```bash
cardano-cli query stake-snapshot --stake-pool-id <POOL_ID> --testnet-magic 1 --socket-path $CARDANO_NODE_SOCKET_PATH
```

**Purpose**: Shows the pool's stake values at different points in the epoch. Used to analyze staking power and upcoming rewards.

---

### 4. 💰 Query UTXOs at an Address

```bash
cardano-cli query utxo --address <YOUR_ADDRESS> --testnet-magic 1 --socket-path $CARDANO_NODE_SOCKET_PATH | jq
```

**Purpose**: Lists unspent outputs at an address — useful for building transactions or checking balances.

---

### 5. 🔍 Query Block by Hash

```bash
cardano-cli query block --testnet-magic 1 --block-hash <BLOCK_HASH> --socket-path $CARDANO_NODE_SOCKET_PATH
```

**Purpose**: Dumps full data for a specific block. Used for debugging or verifying block contents.

---

### 6. 🧾 Query Ledger State (Full Snapshot)

```bash
cardano-cli query ledger-state --testnet-magic 1 --out-file ledger.json --socket-path $CARDANO_NODE_SOCKET_PATH
cat ledger.json | jq
```

**Purpose**: Captures the entire ledger state, including UTXOs, rewards, delegations, stake pools. Good for deep data exploration.

---

### 7. 📜 Query Genesis Configuration

```bash
cardano-cli query genesis --testnet-magic 1 --out-file genesis.json --socket-path $CARDANO_NODE_SOCKET_PATH
cat genesis.json | jq
```

**Purpose**: Reveals original settings and initial distribution from when the chain was first launched.

---

### 8. 🕓 Query Block by Slot Number

```bash
cardano-cli query block --testnet-magic 1 --slot <SLOT_NUMBER> --socket-path $CARDANO_NODE_SOCKET_PATH
```

**Purpose**: Retrieves block content from a specific time (slot). Helps track down historical data.

---

### 9. 🔍 Count Ledger UTXOs

```bash
jq '.utxo' ledger.json | jq length
```

**Purpose**: Quick count of total UTXOs on-chain. Helps gauge ledger size or script activity.

---

### 10. 🎁 Query All Rewards Entries

```bash
jq '.delegationState._rewards' ledger.json | jq length
```

**Purpose**: Shows how many wallets currently have staking rewards. Useful for dashboards or staking stats.

---

### 11. 🎯 Query Rewards for One Stake Address

```bash
jq '.delegationState._rewards["stake1u..."]' ledger.json
```

**Purpose**: Displays how many ADA are earned by a specific stake key. You can also find when last rewards were paid.

---

## Advanced Views

### 🔄 View Detailed UTXOs

```bash
cardano-cli query utxo --address <ADDR> --testnet-magic 1 --socket-path $CARDANO_NODE_SOCKET_PATH | jq
```

**Use Case**: View datum hashes, multi-asset UTXOs, script addresses (important for DApps or validators).

---

### ⛓️ View Stake Pool Info from Ledger

```bash
jq '.delegationState._pstate._pParams' ledger.json | jq keys
```

Then:
```bash
jq '.delegationState._pstate._pParams["<POOL_ID>"]' ledger.json
```

**Use Case**: View metadata, pledge, margin, and other parameters for a specific stake pool.

---

### 🧠 Smart Contract UTXOs

```bash
jq '.utxo | to_entries[] | select(.value.datumHash != null)' ledger.json
```

**Use Case**: Finds UTXOs locked by Plutus scripts — helps locate smart contract state or pending scripts.

---

## Tips

- Use `jq` filters like `.field.subfield` to extract deep values.
- Pipe output through `less` or `grep` for long JSONs.
- Save large results (`--out-file`) and work offline.
- Explore structures with:
```bash
jq 'keys' ledger.json
```

---

Would you like a script that automates some of these queries daily, or logs changes to rewards, tips, and UTXOs?
