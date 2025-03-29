# Viewing the Cardano Blockchain via Command Line (WSL + cardano-cli)

This guide explains how to view your **locally running Cardano blockchain** via the command line using `cardano-cli`. It is intended for developers running a **preprod node** inside WSL with `jq` installed for JSON formatting.

---

## Prerequisites

- `cardano-node` is running inside WSL
- Node is syncing with the preprod testnet
- You have:
  ```bash
  mkdir -p ~/cardano/preprod
  cd ~/cardano/preprod
  ```
- Your config files and `cardano-node` are running with:
  ```bash
  cardano-node run \
    --config ./config.json \
    --topology ./topology.json \
    --database-path ./db \
    --socket-path ./db/node.socket \
    --host-addr 0.0.0.0 \
    --port 3001
  ```
- `jq` is installed: `sudo apt install jq`

---

## Step 1: View the Current Chain Tip

This shows the latest block the node knows about:

```bash
cardano-cli query tip \
  --testnet-magic 1 \
  --socket-path ~/cardano/preprod/db/node.socket | jq
```

You should see output like:
```json
{
  "epoch": 123,
  "hash": "abc123...",
  "slot": 456789,
  "block": 7890,
  "era": "Babbage",
  "syncProgress": "98.76"
}
```

---

## Step 2: Get a Block by Hash

First, get the block hash from the tip result:

```bash
HASH=$(cardano-cli query tip \
  --testnet-magic 1 \
  --socket-path ~/cardano/preprod/db/node.socket | jq -r '.hash')
```

Now get the full block contents:

```bash
cardano-cli query block \
  --testnet-magic 1 \
  --block-hash "$HASH" \
  --out-file block.json \
  --socket-path ~/cardano/preprod/db/node.socket
```

View the block contents:

```bash
jq . block.json
```

---

## Step 3: View UTXOs at an Address

If you have a wallet address, check its UTXOs like this:

```bash
cardano-cli query utxo \
  --address <your_testnet_address> \
  --testnet-magic 1 \
  --socket-path ~/cardano/preprod/db/node.socket
```

---

## Extra: View Protocol Parameters

```bash
cardano-cli query protocol-parameters \
  --testnet-magic 1 \
  --out-file protocol.json \
  --socket-path ~/cardano/preprod/db/node.socket

jq . protocol.json
```

---

## Tip: Use Aliases to Save Time

Add this to your `~/.bashrc` or `~/.zshrc`:

```bash
alias ccli='cardano-cli --socket-path ~/cardano/preprod/db/node.socket --testnet-magic 1'
```

Then you can just run:
```bash
ccli query tip | jq
```

---

You are now ready to explore your local Cardano testnet blockchain from the terminal using `cardano-cli` and `jq`!

