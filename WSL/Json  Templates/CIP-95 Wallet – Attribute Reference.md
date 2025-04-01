Absolutely! Here's a **definitive, well-organized table** of all current and optional attributes you can include in your **CIP-95 wallet JSON manifest**, with explanations for each.

---

### 🧾 CIP-95 Wallet JSON Manifest – Attribute Reference

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `wallet_name` | `string` | Display name for your wallet (internal + UI) |
| `cip_version` | `number` | Specifies compliance version (e.g. `95` for CIP-95) |
| `injection_namespace` | `string` | JavaScript injection path (e.g. `window.cardano.mywallet`) |
| `extensions_supported` | `array<number>` | List of supported CIPs/extensions (e.g. `[95]`) |

---

### 🔧 `supported_features`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `enable` | `boolean` | Supports `wallet.enable()` handshake |
| `getPubDRepKey` | `boolean` | Exposes DRep public key |
| `getRegisteredPubStakeKeys` | `boolean` | Lists registered stake keys |
| `getUnregisteredPubStakeKeys` | `boolean` | Lists unregistered stake keys |
| `signData` | `boolean` | Supports signing messages (e.g. with DRep or stake key) |
| `signTx` | `boolean` | Signs Conway-era transactions |
| `submitTx` | `boolean` | Broadcasts transactions to the blockchain |

---

### 🔐 `key_management`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `payment_keys` | `string` | Cryptography for payment keys (e.g. `"ed25519"`) |
| `stake_keys` | `string` | Cryptography for stake keys |
| `drep_keys` | `string` | Cryptography for DRep keys |
| `hd_wallet_standard` | `string` | HD derivation path standard (e.g. `"cip-49"`) |

---

### 🗄️ `storage`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `encrypted` | `boolean` | Whether key storage is encrypted |
| `method` | `string` | Storage method (e.g. `indexeddb + webcrypto`) |

---

### 🌐 `network`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `default_network` | `string` | Default network used on load (`preprod`, `mainnet`, etc.) |
| `supported_networks` | `array<string>` | All Cardano networks the wallet supports |

---

### 🗳️ `governance`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `supports_certificates` | `array<string>` | List of supported governance certs (`reg_drep_cert`, etc.) |
| `supports_proposal_actions` | `boolean` | Whether wallet can sign/submit governance proposals (e.g. info actions) |

---

### ⚙️ Optional Extensions (Recommended)

#### `ui_capabilities`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `supports_drep_registration` | `boolean` | Shows if UI allows registering as a DRep |
| `supports_vote_delegation` | `boolean` | UI supports choosing and delegating to DReps |
| `supports_governance_proposals` | `boolean` | UI supports creating/submitting proposals |
| `supports_token_minting` | `boolean` | UI supports native token creation |
| `supports_nft_creation` | `boolean` | UI supports CIP-25 NFT creation |

---

#### `security_features`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `biometrics` | `boolean` | Biometric auth supported |
| `password_protection` | `boolean` | App requires password to unlock wallet |
| `hardware_wallet_support` | `boolean` | Can connect Ledger or Trezor |
| `session_timeout_minutes` | `number` | Auto-logout duration in minutes |

---

#### `version_info`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `api_version` | `string` | Wallet API version (e.g. `"1.0.0"`) |
| `build` | `string` | Build ID or date |
| `rust_target` | `string` | Rust target (e.g. `wasm32-unknown-unknown`) |

---

#### `developer_info`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `repository` | `string` | GitHub or GitLab link |
| `documentation` | `string` | Link to developer docs or API reference |
| `contact` | `string` | Dev support email or handle |

---

#### `cip_extensions`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `cip-30` | `boolean` | Implements dApp connector base spec |
| `cip-45` | `boolean` | Supports legacy governance cert flow |
| `cip-49` | `boolean` | HD derivation standard |
| `cip-95` | `boolean` | Web-wallet bridge for Conway governance |

---

#### `identity_features`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `supports_multistake_delegation` | `boolean` | Supports delegating multiple stake keys |
| `supports_dao_governance` | `boolean` | Wallet optimized for DAO-style credentials |

---

#### `testing`

| **Field** | **Type** | **Description** |
|-----------|----------|------------------|
| `mock_mode` | `boolean` | Enables mock/test data |
| `generate_dummy_utxos` | `boolean` | Spawns fake UTXOs for dev |
| `inject_test_dreps` | `boolean` | Pre-load fake DRep IDs for testing UI |

---

Would you like me to generate a **full JSON schema**, a **Rust struct**, or a **validation function** for this manifest?

Happy to go deeper — this is the perfect metadata layer for futureproofing your wallet.
