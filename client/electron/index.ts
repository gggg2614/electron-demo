import { app, BrowserWindow,Menu, MenuItem } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.maximize()
win.show()
    // console.log(process.env)
    win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
}
Menu.setApplicationMenu(null)

app.whenReady().then(createWindow)