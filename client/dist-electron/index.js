"use strict";
const electron = require("electron");
const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.maximize();
  win.show();
  win.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}`);
};
electron.Menu.setApplicationMenu(null);
electron.app.whenReady().then(createWindow);
