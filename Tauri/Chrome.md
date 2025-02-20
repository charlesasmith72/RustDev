Modifying the "chrome" (i.e. the native window frame and controls) can be done in two main ways using JavaScript with Tauri:

---

### 1. Using Tauri’s Window API to Adjust Window Properties

Tauri provides a JavaScript API to interact with the native window. For example, you can change the window title, toggle fullscreen, or even minimize/maximize the window. Here’s how you might do that:

```javascript
import { appWindow } from '@tauri-apps/api/window';

// Change the window title
appWindow.setTitle("My Custom Title");

// Toggle fullscreen mode
appWindow.setFullscreen(true);

// Minimize the window
appWindow.minimize();

// Restore the window
appWindow.unminimize();
```

These calls let you modify various window properties dynamically.

---

### 2. Creating a Custom (Frameless) Window Chrome

If you want complete control over the appearance of your window’s chrome—such as building your own title bar and buttons—you can create a frameless window. This is done by disabling the native window decorations in your configuration:

**Step 1: Disable Native Decorations**

In your `tauri.conf.json`, set the window’s decorations to `false`:

```json
{
  "tauri": {
    "windows": [
      {
        "title": "My Custom App",
        "width": 800,
        "height": 600,
        "decorations": false
      }
    ]
  }
}
```

**Step 2: Build Your Custom UI Controls**

With the native chrome hidden, you can create your own title bar using HTML, CSS, and JavaScript. For example:

```html
<div id="custom-titlebar">
  <span>My Custom App</span>
  <button id="minimize-btn">—</button>
  <button id="maximize-btn">▢</button>
  <button id="close-btn">×</button>
</div>
```

And wire these controls to Tauri’s API:

```javascript
import { appWindow } from '@tauri-apps/api/window';

document.getElementById('minimize-btn').addEventListener('click', () => {
  appWindow.minimize();
});

document.getElementById('maximize-btn').addEventListener('click', async () => {
  const isMaximized = await appWindow.isMaximized();
  if (isMaximized) {
    appWindow.unmaximize();
  } else {
    appWindow.maximize();
  }
});

document.getElementById('close-btn').addEventListener('click', () => {
  appWindow.close();
});
```

This approach gives you full control over the window appearance and behavior while still using JavaScript for interactivity.

---

### Summary

- **Using the Window API:** Adjust properties like title, fullscreen state, and window state directly with Tauri’s JavaScript API.
- **Frameless Windows:** Disable native decorations and build your own custom chrome with HTML/CSS/JS, then hook up functionality using Tauri’s API.

Both methods allow you to tailor the desktop window’s chrome to suit your application's design and functionality requirements.
