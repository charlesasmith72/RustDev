Here’s a **complete and modern VS Code-based setup** that allows you to **develop on your desktop** and **view/debug live results on your Surface X** via LAN — with a touch-friendly, themed, and terminal-equipped interface.

---

## ⚙️ **🔧 Complete VS Code + LAN + Debug + Style Setup**

### 🧩 **Components Overview**

| Component      | Tool                                    |
| -------------- | --------------------------------------- |
| Editor         | **VS Code** (desktop)                   |
| Debugger       | Built-in (JavaScript / Node / etc.)     |
| Terminal       | Integrated PowerShell / WSL / zsh       |
| Server         | `live-server` or `vite`                 |
| Client View    | Surface X browser (Firefox recommended) |
| LAN Connection | Ethernet or Wi-Fi on same subnet        |
| Styling        | Theme + Font + Terminal tweaks          |

---

## 🧱 **Step-by-Step Setup**

---

### ✅ **1. VS Code Setup (on Desktop)**

#### 📥 Install VS Code + Extensions:

* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug) *(Optional)*
* [One Dark Pro Theme](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
* [Terminal Themes (optional)](https://marketplace.visualstudio.com/items?itemName=Tyriar.shell-launcher)

---

#### 🎨 `settings.json` (theme, terminal, zoom)

```json
{
  "workbench.colorTheme": "One Dark Pro",
  "window.zoomLevel": 1.5,
  "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.fontFamily": "Cascadia Code",
  "files.autoSave": "onFocusChange"
}
```

---

### 🌐 **2. Enable LAN Dev Server**

From your project folder, install `live-server`:

```bash
npm install -g live-server
```

Then run:

```bash
live-server --host=0.0.0.0
```

> It will expose your project at `http://<Your-Desktop-IP>:8080`.

---

### 🧭 **3. Find Your Desktop IP (LAN Address)**

Run this in PowerShell or CMD:

```bash
ipconfig
```

Look under your Ethernet or Wi-Fi adapter for:

```
IPv4 Address: 192.168.1.42
```

---

### 🛡️ **4. Allow Port Through Firewall**

Open **Windows Defender Firewall** > **Advanced Settings** > **Inbound Rules**:

* Create a new **TCP** rule for **port 8080**.
* Allow connection on **Private** networks.
* Name: `Live Server LAN`.

✅ This allows the Surface to access your desktop server.

---

### 📱 **5. On Surface X: View the Live Project**

In Firefox or Edge, visit:

```bash
http://192.168.1.42:8080
```

Touch-optimized browser preview, instant reload on save!

---

### 🖥️ **6. Optional: Split Screen with Console Debugging**

Use Surface as your **output console screen**:

* Open browser on left for preview
* Open browser DevTools console (F12) for logs

Or use **VS Code Live Share** to mirror logs/terminal directly if needed.

---

### 🧰 **7. Optional: VS Code `launch.json` for Debugging**

For Node or frontend JavaScript:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/app.js",
      "console": "integratedTerminal"
    }
  ]
}
```

For Firefox Dev Debugging:

```json
{
  "type": "firefox",
  "request": "launch",
  "name": "Debug in Firefox",
  "url": "http://localhost:8080",
  "webRoot": "${workspaceFolder}"
}
```

---

## 🎨 Final Touch: Windows Terminal Styling (Optional)

Edit `settings.json` in Windows Terminal:

```json
"profiles": {
  "defaults": {
    "useAcrylic": true,
    "colorScheme": "One Half Dark",
    "fontSize": 16,
    "fontFace": "Fira Code"
  }
}
```

---

## ✅ Result:

* 💻 Develop on desktop in a beautiful, touch-friendly editor
* 📱 View live updates and console logs on Surface X
* 🎯 Touch scroll, tap, and inspect in the browser
* 🔧 Debug locally or remotely — all over fast LAN

---

Would you like a downloadable VS Code starter project preconfigured with this setup and theme included?
