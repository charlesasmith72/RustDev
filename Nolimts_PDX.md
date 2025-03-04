

# 🚀 Notes: **#NoLimits**

---

## 🧮 Determine Available Memory

*(Leave this empty — you can fill it in later)*

---

## ⚡ GPU Speed Capabilities and Naming Conventions (Standard Speeds & Info)

*(Leave this empty — you can fill it in later)*

---

## 🔎 Find Current CPU (Processor)

### On Windows
#### Method 1 - Settings
1. Press **Windows Key + I** to open **Settings**.
2. Go to **System > About**.
3. Look under **Device Specifications** for **Processor**.

#### Method 2 - Task Manager
1. Press **Ctrl + Shift + Esc** to open **Task Manager**.
2. Go to the **Performance** tab.
3. Click **CPU** on the left — your **CPU model** will be at the top-right.

---

### On Mac (macOS)
1. Click the **Apple Logo** in the top-left corner.
2. Select **About This Mac**.
3. Your **CPU (Processor)** will be listed.

---

### On Linux (Including Tails OS)
1. Open Terminal.
2. Run:
    ```bash
    lscpu
    ```
3. Find **Model name** — this is your CPU.

---

### On Android
1. Install **CPU-Z** from the Play Store.
2. Open the app to see the **CPU name and core count**.

---

### On iPhone / iPad
1. Go to **Settings > General > About**.
2. Find the **Model Name** (e.g., iPhone 15 Pro Max).
3. Google "iPhone 15 Pro Max CPU" to find out the chip (A17 Pro, etc.).

---

### 🔥 Example CPU Results

| Device Type | Example CPU |
|---|---|
| Gaming PC | AMD Ryzen 9 7950X |
| Laptop | Intel Core i7-1360P |
| MacBook | Apple M3 Pro |
| Linux Laptop | AMD Ryzen 5 5600U |
| Android Phone | Snapdragon 8 Gen 3 |
| iPhone | Apple A17 Pro |

---

## 🎮 Find Current GPU (Graphics Card)

### On Windows
#### Method 1 - Task Manager
1. Press **Ctrl + Shift + Esc**.
2. Go to **Performance** tab.
3. Select **GPU 0** (or GPU 1 if you have more than one).
4. See your **GPU name** in the top-right.

#### Method 2 - Device Manager
1. Right-click **Start Menu**, select **Device Manager**.
2. Expand **Display Adapters**.
3. See your **GPU name**.

---

### On Mac (macOS)
1. Click the **Apple logo** in the top-left corner.
2. Select **About This Mac**.
3. Click **More Info...** and scroll down to **Graphics**.

---

### On Linux (Including Tails OS)
1. Open Terminal.
2. Run:
    ```bash
    lspci | grep VGA
    ```
3. This will show something like:
    ```
    NVIDIA Corporation GA104 [GeForce RTX 3070]
    ```

---

### On Android
1. Install **CPU-Z** from the Play Store.
2. Go to the **Devices** tab.
3. Find **GPU Renderer** — this is your GPU.

---

### On iPhone / iPad
- Apple doesn’t directly show GPU info.
- Find your **model name** in **Settings > General > About**, then:
- Google "iPhone 15 Pro GPU" to find out:
    ```
    Apple A17 Pro GPU (6-core)
    ```

---

### 🔥 Example GPU Results

| Device | Example GPU |
|---|---|
| Gaming PC | NVIDIA GeForce RTX 4070 Ti |
| Laptop | AMD Radeon 780M (integrated) |
| MacBook | Apple M3 GPU |
| Steam Deck | AMD RDNA 2 Custom APU |
| Android Phone | Adreno 740 |
| iPhone | Apple A17 Pro GPU |

---

## 💬 Final Note

Once you know your CPU and GPU, you can:
- Check **performance benchmarks**.
- See if your **hardware supports modern tech** like WebGPU, Vulkan, or CUDA.
- Compare your hardware to others to see if it’s time for an **upgrade**.

---

Let me know if you want this in **Markdown format, a Google Doc, or a PDF!**

