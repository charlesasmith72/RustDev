Yes — when it comes to **Plutus scripts** passed to the `cardano-cli` (and used in transactions), the schema for `.plutus` script files is **very strict** and **only accepts these three top-level fields**:

---

## ✅ Required JSON Schema (for Plutus Scripts)

```json
{
  "type": "PlutusScriptV1" | "PlutusScriptV2",
  "description": "any string (usually empty)",
  "cborHex": "<Flat-encoded Plutus Core as hex string>"
}
```

### 🔐 Field meanings:

| Field         | Required | Type   | Description |
|---------------|----------|--------|-------------|
| `type`        | ✅       | string | `"PlutusScriptV1"` or `"PlutusScriptV2"` |
| `description` | ✅       | string | A human-readable description (not used by the node) |
| `cborHex`     | ✅       | string | Hex-encoded Flat bytes of the compiled Plutus script |

---

## ⚠️ What Happens If You Add Extra Fields?

- The Cardano CLI (e.g., `cardano-cli transaction build`) will **reject the file** if there are extra fields like `"name"`, `"version"`, `"author"` etc.
- Only `type`, `description`, and `cborHex` are allowed.

---

## 🔍 Source of Truth

This format is enforced by:
- [`cardano-api`](https://github.com/input-output-hk/cardano-node/blob/master/cardano-api/src/Cardano/Api/Script.hs) Haskell codebase
- `PlutusScriptSerialised` type, which only supports:
  - CBOR tag of Flat-encoded Plutus
  - The version (V1 or V2)

---

## ✅ Example

Here’s a valid `.plutus` file:

```json
{
  "type": "PlutusScriptV2",
  "description": "",
  "cborHex": "4e4d01000033222220051200120011"
}
```

Saved as `myscript.plutus`, it can be used like this:

```bash
cardano-cli transaction build \
  --testnet-magic 1 \
  --script-file myscript.plutus \
  ...
```

---

## ✅ Summary

| ✅ Allowed Fields | ❌ Disallowed Fields |
|------------------|---------------------|
| `"type"`         | `"name"`            |
| `"description"`  | `"author"`          |
| `"cborHex"`      | `"inputs"`, `"version"` |

---

Want a code snippet that generates this exact structure as a CBOR `.plutus` file from Rust or WASM?
