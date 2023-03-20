const { app, BrowserWindow, session } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    // show: false,
    title: "Pixel Art Drawer",
    titleBarStyle: "customButtonsOnHover",
    frame: false,
    // resizable: false,
  });

  win.loadURL("http://127.0.0.1:5173");
  win.setWindowButtonVisibility(false);
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
  return win;
};

app.whenReady().then(() => {
  win = createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit(); // exit
  }
});

// when application is activated, open default window
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(); // open default window
  }
});
