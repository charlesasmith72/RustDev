To allow minimizing the window via Tauri's capabilities system, you need to ensure that the capability your window is using includes the appropriate permission. In Tauri v2 this permission is specified as:

- **`"core:window:allow-minimize"`**

### Steps to Enable Minimize Permission

1. **Edit Your Capability File (e.g. default.json):**

   Open the capability file in **src-tauri/capabilities/default.json** (or whichever capability file your app is using). Then, add or confirm the inclusion of the permission `"core:window:allow-minimize"` in the permissions array. For example, your file might look like this:

   ```json
   {
     "$schema": "../gen/schemas/desktop-schema.json",
     "identifier": "default",
     "description": "Default capability for all windows",
     "windows": ["*"],
     "permissions": [
       "core:path:default",
       "core:event:default",
       "core:window:default",
       "core:app:default",
       "core:resources:default",
       "core:menu:default",
       "core:tray:default",
       "core:window:allow-minimize"
     ]
   }
   ```

   If `"core:window:allow-minimize"` isn’t already present, add it to the list.

2. **Reference the Capability in tauri.conf.json:**

   Next, make sure your main **src-tauri/tauri.conf.json** references the capability that includes this permission. For instance, if you’re using the default capability, your config would include something like:

   ```json
   {
     "$schema": "https://tauri.app/schema/tauri-config.json",
     "package": {
       "productName": "paradox",
       "version": "0.1.0",
       "identifier": "com.paradox.app"
     },
     "build": {
       "devPath": "../src",
       "distDir": "../src"
     },
     "tauri": {
       "windows": [
         {
           "title": "paradox",
           "width": 800,
           "height": 600,
           "label": "main"
         }
       ],
       "security": {
         "csp": null,
         "capabilities": ["default"]
       },
       "app": {
         "withGlobalTauri": true
       }
     },
     "bundle": {
       "active": true,
       "targets": "all",
       "icon": [
         "icons/32x32.png",
         "icons/128x128.png",
         "icons/128x128@2x.png",
         "icons/icon.icns",
         "icons/icon.ico"
       ]
     }
   }
   ```

   In the above example, by listing `"default"` under `tauri.security.capabilities`, only the permissions defined in **default.json** are enabled. Since we added `"core:window:allow-minimize"`, your frontend code will be permitted to call window minimize methods.

3. **Rebuild Your Tauri App:**

   After updating the capability file and the configuration file, rebuild your app (for example, by running `cargo tauri dev`). This will apply the new permissions.

### Frontend Usage

With the permission enabled, you can call the minimize function in your JavaScript like this:

```js
window.__TAURI__.window.getCurrentWindow().minimize();
```

If everything is configured correctly, this call should now work without a permissions error.

### Recap

- **Capability File:** Ensure your capability file (e.g. **default.json**) includes `"core:window:allow-minimize"`.
- **Configuration File:** Reference that capability in your **tauri.conf.json** under `tauri.security.capabilities`.
- **Rebuild:** Rebuild your application to apply the changes.

This is the official approach as recommended by Tauri’s capabilities system. For more details, refer to the [Tauri Capabilities Documentation](https://tauri.app/v2/guides/configuration/capabilities/).
