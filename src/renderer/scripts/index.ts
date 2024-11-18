import { AppUI } from './ui/AppUI';
import { EventManager } from './utils/EventManager';

class App {
    private ui: AppUI;
    private eventManager: EventManager;

    constructor() {
        this.ui = new AppUI();
        this.eventManager = new EventManager();
        this.initialize();
    }

    private async initialize(): Promise<void> {
        try {
            // Initialize app version display
            const version = await window.api.getVersion();
            this.ui.setVersion(version);

            // Setup event listeners
            this.setupEventListeners();

        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    private setupEventListeners(): void {
        // Add event listeners here
        this.eventManager.registerGlobalEvents();
    }
}

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
