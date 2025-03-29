Great! Now that you've successfully opened your Cardano preprod directory in VS Code using `code ~/cardano/preprod`, here’s the updated step-by-step tutorial based on your current setup:

---

### ✅ Updated Tutorial: Open and Work with Cardano Preprod Testnet in VS Code via WSL

#### **1. Open Terminal and Launch WSL**
If you're starting from Windows:
```sh
wsl
```

#### **2. Navigate to Your Preprod Directory**
```sh
cd ~/cardano/preprod
```

#### **3. Open the Project in VS Code**
From inside the `~/cardano/preprod` folder:
```sh
code .
```

This opens VS Code with the WSL extension inside the correct folder.

---

### 📂 Inside VS Code (WSL Session)

#### You should now see:
- Folder tree on the left (`db`, `topology.json`, `config.json`, etc.)
- Any `.md` or `.json` files editable directly
- No need to use the green status bar—you're already in WSL mode because you used `code .` from WSL

---

### 🔄 Next Steps You Can Do Inside VS Code
- Edit `topology.json`, `config.json`, or other files easily
- Open a new terminal in VS Code (automatically WSL-based) with:
  - `Ctrl + \` (split terminal)
  - Or `Terminal` → `New Terminal`
- Run your node:
```sh
cardano-node run \
  --config ./config.json \
  --topology ./topology.json \
  --database-path ./db \
  --socket-path ./db/node.socket \
  --host-addr 0.0.0.0 \
  --port 3001
```

---

If you want me to add this to a Markdown doc like `Setup.md` or create a new file, just let me know.
