import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

class MainProcess {
    private mainWindow: BrowserWindow | null = null;

    constructor() {
        this.initializeApp();
    }

    private initializeApp(): void {
        app.whenReady().then(() => {
            this.createWindow();
            this.setupAppListeners();
            this.setupIpcListeners();
        });
    }

    private createWindow(): void {
        this.mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, '../preload/preload.js')
            }
        });

        // Load the index.html file directly from src in development
        const indexPath = path.join(__dirname, '../../src/renderer/index.html');
        this.mainWindow.loadFile(indexPath);

        // Open DevTools in development
        if (process.env.NODE_ENV === 'development') {
            this.mainWindow.webContents.openDevTools();
        }
    }

    private setupAppListeners(): void {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow();
            }
        });
    }

    private setupIpcListeners(): void {
        // Example IPC listener
        ipcMain.handle('app:get-version', () => {
            return app.getVersion();
        });
    }
}

// Initialize the application
new MainProcess();
