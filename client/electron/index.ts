import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    // console.log(process.env)
    win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
}

app.whenReady().then(createWindow)