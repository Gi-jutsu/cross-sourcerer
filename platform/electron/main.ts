import { app, BrowserWindow } from 'electron'
import path from 'path'

let mainWindow: BrowserWindow = null

async function createWindow(): Promise<void> {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  })

  mainWindow.setTitle('My Sourcerer')

  if (process.env.NODE_ENV === 'production') {
    const indexPath = path.join(process.cwd(), '.next-dist/index.html')

    await mainWindow.loadFile(indexPath)
  } else {
    await mainWindow.loadURL('http://localhost:3000')
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', async () => {
  if (mainWindow === null) {
    await createWindow()
  }
})