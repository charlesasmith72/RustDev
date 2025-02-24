// windowControls.js
const currentWindow = window.__TAURI__.window.getCurrentWindow();


/**
 * Minimizes the window if it's not already minimized.
 */
export const minimizeWindow = async () => {
  const isMinimized = await currentWindow.isMinimized();
  if (!isMinimized) {
    await currentWindow.minimize();
  } else {
    console.log("Window is already minimized.");
  }
};

/**
 * Toggles window maximize: maximizes if not maximized, otherwise unmaximizes.
 */
export const maximizeWindow = async () => {
  const isMaximized = await currentWindow.isMaximized();
  if (!isMaximized) {
    await currentWindow.maximize();
  } else {
    await currentWindow.unmaximize();
  }
};

/**
 * Closes the window after confirming with the user.
 */
export const closeWindow = async () => {
  if (confirm("Are you sure you want to close the window?")) {
    await currentWindow.close();
  } else {
    console.log("Close canceled.");
  }
};

/**
 * Navigates back in history.
 */
export const goBack = () => window.history.back();

/**
 * Navigates forward in history.
 */
export const goForward = () => window.history.forward();

/**
 * Refreshes the page.
 */
export const refreshPage = () => location.reload();

/**
 * Opens the options dialog.
 */
export const openOptions = () => alert("Options clicked!");
