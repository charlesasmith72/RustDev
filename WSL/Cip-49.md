# WASM-Based CIP-49 Cardano Wallet App — Requirements & Analysis

## Overview

This application is a secure, browser-based Cardano wallet built in **Rust + WebAssembly**, which:

- Implements the **CIP-49 wallet standard**
- Allows users to **generate native tokens, NFTs, and smart contracts**
- Converts **JSON to CBOR** using native Rust structs
- Builds and submits **transactions to Cardano mainnet**

---

## 1. Functional Requirements

### 1.1 Wallet Capabilities

- [ ] Generate and manage Cardano key pairs (payment, stake)
- [ ] Sign transactions securely in-browser
- [ ] Support multiple wallet accounts (CIP-49)
- [ ] Export/import keys with encryption

### 1.2 CIP-49 Wallet Support

- [ ] Inject into `window.cardano.mywallet.experimental`
- [ ] Implement:
  - `connect()`
  - `getNetworkId()`
  - `getUtxos()`
  - `getBalance()`
  - `signTx()`
  - `submitTx()`
  - `getChangeAddress()`

### 1.3 Token/NFT Generator

- [ ] Form-based UI for token metadata (name, supply, royalty, etc.)
- [ ] Generate Flat-encoded minting policies (Plutus V2)
- [ ] Wrap scripts in CBOR using Rust (`ciborium`, `serde_cbor`)
- [ ] Output `.plutus` and `.metadata.json`

### 1.4 Smart Contract Deployment

- [ ] Accept Aiken/Plutus Flat scripts
- [ ] Build validator + redeemer transactions
- [ ] Attach `.plutus` scripts with CBOR formatting
- [ ] Submit contracts to mainnet or testnet

### 1.5 Transaction Pipeline

- [ ] Build CBOR-encoded transactions in browser
- [ ] Sign using internal key or connected wallet
- [ ] Submit via wallet or REST (Blockfrost / direct node)

---

## 2. Technical Requirements

- Rust with `wasm-bindgen`
- Use `ciborium`, `serde_cbor`, `blake2` for encoding + hashing
- Native or WASM-compatible key and transaction libraries
- IndexedDB or WebCrypto for secure key storage

---

## 3. Non-Functional Requirements

- Cross-browser support (Chrome, Firefox, Brave)
- Lightweight + performant WASM
- Testnet & mainnet compatibility
- PWA/offline-ready mode

---

## 4. Optional UI Features

- [ ] JSON contract/token builder form
- [ ] Drag/drop for Plutus Flat files
- [ ] CBOR preview panel
- [ ] Visual UTXO + TX builder

---

## 5. Improvements & Enhancements

- Modular wallet engine (hot/custodial/hardware)
- Smart contract template library (minting, locking, sales)
- Offline mode with bundle export/import
- Secure multi-account vaults (wallet profiles)

---

## 6. Projects to Compare

| Project         | Description                                | Relevance                  |
|------------------|--------------------------------------------|----------------------------|
| Lucid            | JS SDK for TXs & smart contracts           | Can inspire dApp integration |
| Eternl Wallet    | CIP-30 wallet                              | Compare UX, injection model |
| Aiken            | Compile smart contracts to Flat            | Used for `.plutus` scripts |
| MeshJS           | dApp building tools                        | JS-focused, no WASM or wallet engine |
| Nami / Flint     | CIP-30/49 wallets                          | Use as CIP-49 reference implementations |

---

## 7. Challenges & Hurdles

| Challenge            | Risk Factor | Suggested Solution                  |
|----------------------|-------------|-------------------------------------|
| CIP-49 implementation| High        | Follow spec + model after Nami/Flint |
| Secure key handling  | Medium      | Use WebCrypto + encrypted IndexedDB |
| Plutus integration   | Medium      | Use Aiken + Rust CBOR properly      |
| Transaction building | High        | Leverage `cardano-serialization-lib` |
| Trust & adoption     | Medium      | Open-source, transparency, audits   |

---

## 8. Summary

This project combines:

- **CLI-free smart contract and token creation**
- **Rust + WASM safety and performance**
- **Next-gen CIP-49 wallet standard**
- **Self-contained web app experience**

A fully browser-native Cardano experience — with powerful dev tools included.

---

## Optional Next Steps

- [ ] Create GitHub repo scaffold (wallet, scripts, wasm, UI)
- [ ] Draft 30/60/90 day development plan
- [ ] Define JSON + CBOR struct schema
- [ ] Begin testnet MVP with token + script support
