"use strict";
const electron = require("electron");
const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadURL(`${process.env["VITE_DEV_SERVER_URL"]}`);
};
electron.app.whenReady().then(createWindow);
