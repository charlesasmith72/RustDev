Here’s a clean and complete **NFT JSON Template** tailored for your Rust + WASM CIP-95 wallet, with support for CBOR conversion and minting.

This template follows **Cardano NFT metadata standards** (CIP-25 v2), and is suitable for minting **native tokens** representing NFTs.

---

## 🧾 JSON Template: NFT Metadata (CIP-25 v2)

```json
{
  "721": {
    "policy_id": {
      "nft_name": {
        "name": "PixelAmari #1",
        "image": "ipfs://Qm123abc...xyz",
        "mediaType": "image/png",
        "description": "A limited edition generative pixel avatar.",
        "artist": "King Amari",
        "collection": "PixelAmari",
        "rarity": "Legendary",
        "attributes": {
          "background": "Sunset",
          "eyes": "Laser",
          "accessory": "Crown"
        },
        "files": [
          {
            "src": "ipfs://Qm123abc...xyz",
            "mediaType": "image/png"
          }
        ],
        "version": "1.0"
      }
    }
  }
}
```

---

## 🧩 Field Explanations

### 🔹 `"721"`
- Root key defined by [CIP-25 v2](https://cips.cardano.org/cips/cip25/)
- Must be `"721"` exactly

---

### 🔹 `"policy_id"`
- The **hex-encoded policy ID** (from your minting policy script)
- Replace this with your real policy ID when building metadata

---

### 🔹 `"nft_name"`
- The name of the NFT **as it appears on-chain**
- Also serves as the key to group metadata for this unique token

---

### 🔹 Metadata Fields Inside `"nft_name"`

| Field         | Description |
|---------------|-------------|
| `name`        | Human-readable display name |
| `image`       | IPFS or web URL to image/media |
| `mediaType`   | MIME type (e.g. `"image/png"`, `"audio/mp3"`) |
| `description` | Description of the NFT |
| `artist`      | Optional custom field (artist name) |
| `collection`  | Optional — groups NFTs into sets |
| `rarity`      | Optional — for gaming or collectible use |
| `attributes`  | Optional — key/value pairs for traits |
| `files`       | Optional — array of media files with `src` and `mediaType` |
| `version`     | Recommended — mark as `1.0` or higher |

---

## ✅ Rust Struct Compatibility

You can use `serde` + `serde_json` or `ciborium` to convert this structure into CBOR.

Use a dynamic map structure or define structs with `HashMap<String, Value>` for flexible NFTs.

---

## 🧠 Minting Steps in Your App

1. Generate a minting policy (Plutus or native script)
2. Create NFT metadata using this JSON template
3. Serialize to CBOR and attach as **metadata label 721** in the transaction
4. Build + sign transaction using `.signTx()` (CIP-95)
5. Submit using `.submitTx()`

---

## 🧪 Optional: JSON UI Generator

Would you like:
- A JSON form generator for NFT fields?
- Rust code to convert this to CBOR?
- IPFS upload integration for images?

Let me know what you'd like to wire in next!
