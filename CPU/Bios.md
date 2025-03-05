Absolutely! Below is a **Step-by-Step BIOS Update Guide** tailored specifically for your **ASRock B650M-C motherboard** to safely update your BIOS before upgrading from Ryzen 7 7700 to Ryzen 9 7950X.

I’ll also include special instructions to **avoid the RTX 4070 Ti display issue** during the update process, since ASRock specifically warns about this in your BIOS list.

---

# 🖥️ **ASRock B650M-C BIOS Update Guide (with RTX 4070 Ti Compatibility Notes)**

---

## 🔧 **What You’ll Need**

✅ A **USB Flash Drive** (formatted to FAT32)  
✅ A **working keyboard and monitor (use HDMI or DisplayPort to the motherboard if needed)**  
✅ **The latest BIOS file from ASRock’s website**  
✅ Stable **power connection (don’t update during a storm)**

---

# 🔗 **Step 1 - Download the Correct BIOS File**

1. Go to: [ASRock B650M-C BIOS Page](https://www.asrock.com/MB/AMD/B650M-C/index.asp#BIOS)
2. Download **BIOS Version 3.10** (recommended for stability) or the latest stable version (like 3.18 if you want future CPU support).
3. Unzip the file. You should see a file like:  
   ```
   B65MC_3.10
   ```
4. Copy the **BIOS file directly to the USB drive** — do NOT put it in a folder.

---

# ⚙️ **Step 2 - Prepare BIOS Settings (Important for RTX 4070 Ti Owners)**

### ASRock warns: RTX 40 GPUs can lose signal during BIOS updates.

To prevent this, change a setting before updating.

1. **Restart your PC and press `Del` to enter BIOS.**
2. In BIOS, go to:
   ```
   Advanced > Onboard Devices Configuration
   ```
3. Find:
   ```
   Display Priority
   ```
4. Set **Display Priority to Internal Graphics (IGPU)** instead of PCIe.

This ensures the **CPU’s built-in GPU (on Ryzen 7 7700)** will handle the display during the update.

---

# 🚀 **Step 3 - Enter BIOS Flash Mode (Instant Flash)**

1. Plug the **USB drive into a rear USB port** (directly into the motherboard).
2. Restart your PC and press **Del** to enter BIOS again.
3. Go to:
   ```
   Tool > Instant Flash
   ```
4. The BIOS will detect the file on your USB drive.
5. Select the **BIOS file (B65MC_3.10 or whichever version you downloaded)**.

---

# ⚠️ **Step 4 - Start BIOS Update**

1. Confirm you want to update.
2. The system will begin updating the BIOS.
3. **DO NOT power off or unplug your system during this process.**
4. The PC will restart automatically after the update.

---

# 🔄 **Step 5 - Reset Display Priority (Optional)**

Once the BIOS update is complete, if your RTX 4070 Ti isn’t displaying video after the update, do this:

1. Plug your monitor into the **motherboard’s HDMI port** (this will use the Ryzen 7 7700's integrated graphics).
2. Enter BIOS again (press **Del**).
3. Go back to:
   ```
   Advanced > Onboard Devices Configuration
   ```
4. Change **Display Priority back to PCIe**.

---

# 🔎 **Step 6 - Confirm BIOS Version**

1. Once booted into Windows, press **Windows + R**, then type:
    ```
    msinfo32
    ```
2. Under **BIOS Version/Date**, confirm it shows the new BIOS version (e.g., 3.10).

---

# ⚡ **Step 7 - Proceed with CPU Swap**

✅ Now that your BIOS is updated, you can confidently:

- Power down.
- Swap from **Ryzen 7 7700** to **Ryzen 9 7950X**.
- Reinstall your cooler (with fresh thermal paste).
- Power back on.

---

# 📸 **Reference Screenshots (Guide)**

### 1️⃣ **BIOS Download Page (AsRock Site)**
You already provided a screenshot, so you’re familiar with this. ✅

---

### 2️⃣ **Instant Flash in BIOS (ASRock Example)**

In BIOS, under **Tools**, you’ll see this screen:

![Example Instant Flash Screen](https://www.asrock.com/support/images/InstantFlash.jpg)

---

### 3️⃣ **Onboard Devices Configuration - Display Priority Setting**

You’ll find the **Display Priority** setting here:

```
Advanced Tab > Onboard Devices Configuration > Display Priority
```

Example (your screen might look slightly different):

![Example Display Priority Option](https://www.asrock.com/support/images/igpu_setting.jpg)

---

# ✅ **Summary Checklist**

| Step | Action |
|---|---|
| **Download & Copy BIOS to USB** | ✅ |
| **Set Display Priority to Internal Graphics** | ✅ |
| **Run Instant Flash from BIOS** | ✅ |
| **Confirm BIOS Version after reboot** | ✅ |
| **Reset Display Priority to PCIe if needed** | ✅ |
| **Swap to Ryzen 9 7950X** | ✅ |

---

# 💬 **Want me to also create a guide for physically swapping the CPU and mounting your new cooler (Corsair AIO)?** Let me know!
