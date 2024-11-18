import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    'api', {
        // App info
        getVersion: () => ipcRenderer.invoke('app:get-version'),
        
        // System operations
        platform: process.platform,
        
        // Add more API methods here as needed
    }
);

// TypeScript interface for the exposed API
declare global {
    interface Window {
        api: {
            getVersion: () => Promise<string>;
            platform: string;
        }
    }
}
