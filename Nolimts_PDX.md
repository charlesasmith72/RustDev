# Nolimts

## Determin Available memory

## GPU speed capabailities convention(standard speeds GHZs)?



## Find Current Dev CPU
No worries! If you want to find out **what kind of CPU** you are currently running — whether you're on **Windows, Mac, Linux (including Tails), or even a phone** — here’s how you can check:

---

## 🖥️ **On Windows**

### Method 1: Settings
1. Press **`Windows Key` + `I`** to open **Settings**.
2. Go to **System > About**.
3. Look under **Device Specifications** — your CPU name will be listed next to **Processor**.

### Method 2: Task Manager
1. Press **`Ctrl` + `Shift` + `Esc`** to open **Task Manager**.
2. Go to the **Performance** tab.
3. Click **CPU** on the left — your CPU model will be shown at the top-right.

---

## 🍎 **On Mac (macOS)**

1. Click the **Apple Logo** in the top-left corner.
2. Select **About This Mac**.
3. Your **CPU (Processor)** will be listed near the top.

---

## 🐧 **On Linux (Including Tails)**

### In Terminal
1. Open a terminal window.
2. Run this command:
    ```bash
    lscpu
    ```
3. Look for **"Model name"** — this will show your CPU name.

### Example Output
```
Model name: Intel(R) Core(TM) i7-11800H CPU @ 2.30GHz
```

---

## 📱 **On Android (Phone or Tablet)**

1. Install an app like **CPU-Z** from the Play Store.
2. Open the app — it will show your CPU name and core count.

---

## 📱 **On iPhone/iPad**

Apple doesn’t show detailed CPU info in the settings, but you can:
1. Go to **Settings > General > About**.
2. Find your **Model Name** (like iPhone 15 Pro Max).
3. Google that model name + "CPU" (e.g., "iPhone 15 Pro Max CPU") to find out the chip (A17 Pro, for example).

---

# 🔥 **What You’ll See (Example Results)**

| Device Type | Example CPU |
|---|---|
| Gaming PC | **AMD Ryzen 9 7950X** |
| Laptop | **Intel Core i7-1360P** |
| MacBook | **Apple M3 Pro** |
| Linux Laptop | **AMD Ryzen 5 5600U** |
| Android Phone | **Snapdragon 8 Gen 3** |
| iPhone | **Apple A17 Pro** |

---


## Find Current Dev GPU
Great question! Here’s a **step-by-step guide** on how to find out **what GPU (graphics card)** you have, whether you’re on **Windows, Mac, Linux (including Tails), or even a phone**. This works for both beginners (like a 6th grader) and web developers.

---

# 🖥️ **How to Find Your GPU (Graphics Card)**

---

## ✅ **On Windows (Most Common)**

### Method 1 - Using Task Manager
1. Press **Ctrl + Shift + Esc** to open **Task Manager**.
2. Go to the **Performance** tab.
3. On the left side, click **GPU 0** (and GPU 1 if you have more than one).
4. In the top-right corner, you’ll see the **GPU’s name**, like:
   ```
   NVIDIA GeForce RTX 4060
   AMD Radeon RX 6700 XT
   ```

### Method 2 - Using Device Manager
1. Right-click the **Start Menu** and select **Device Manager**.
2. Expand **Display Adapters**.
3. Your **GPU name** will be listed.

---

## 🍎 **On Mac (macOS)**

1. Click the **Apple logo** in the top-left corner.
2. Select **About This Mac**.
3. Click **More Info…**.
4. Scroll down to **Graphics** — it will show something like:
   ```
   Apple M3 Max (Integrated)
   AMD Radeon Pro 5700 XT
   ```

---

## 🐧 **On Linux (Including Tails OS)**

### Using Terminal
1. Open a **Terminal** window.
2. Run this command:
    ```bash
    lspci | grep VGA
    ```
3. You’ll see something like:
    ```
    01:00.0 VGA compatible controller: NVIDIA Corporation GA104 [GeForce RTX 3070] (rev a1)
    ```
4. That line tells you your GPU.

---

## 📱 **On Android (Phones and Tablets)**

1. Install an app like **CPU-Z** from the Play Store.
2. Open it and go to the **Devices** or **System** tab.
3. Look for **GPU Renderer** or **Graphics**.
   Example: Adreno 740 (Qualcomm GPUs).

---

## 📱 **On iPhone / iPad**

- Apple doesn’t directly show GPU details.
- Instead, you can:
    1. Go to **Settings > General > About**.
    2. Find the **model name** (like iPhone 15 Pro).
    3. Search online for "iPhone 15 Pro GPU" — it will tell you:
       ```
       iPhone 15 Pro GPU: Apple A17 Pro GPU (6-core)
       ```

---

# 📊 **What to Do with Your GPU Name**

Once you know your GPU, you can:
- **Google it** to find out how fast it is.
- Compare it to others (is it good for gaming, coding, AI?).
- Check if your GPU supports **WebGPU** or other tech you might need.

---

# 🔥 **Example GPUs You Might See**

| Device | Example GPU |
|---|---|
| Gaming PC | NVIDIA GeForce RTX 4070 Ti |
| Laptop | AMD Radeon 780M (integrated) |
| MacBook | Apple M3 GPU |
| Steam Deck | AMD RDNA 2 Custom APU |
| Android Phone | Adreno 740 |
| iPhone | Apple A17 Pro GPU |

---

 


