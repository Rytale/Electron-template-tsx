export class EventManager {
    private registeredEvents: Map<string, Function>;

    constructor() {
        this.registeredEvents = new Map();
    }

    public registerGlobalEvents(): void {
        // Register global event listeners
        this.registerWindowEvents();
        this.registerCustomEvents();
    }

    private registerWindowEvents(): void {
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());

        // Handle keyboard shortcuts
        window.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    private registerCustomEvents(): void {
        // Register custom event handlers here
    }

    private handleResize(): void {
        // Handle window resize events
        console.log('Window resized');
    }

    private handleKeydown(event: KeyboardEvent): void {
        // Handle keyboard shortcuts
        // Example: Ctrl/Cmd + R to refresh
        if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
            event.preventDefault();
            this.refreshApplication();
        }
    }

    private refreshApplication(): void {
        // Implement refresh logic here
        console.log('Refreshing application...');
    }

    public on(eventName: string, callback: Function): void {
        this.registeredEvents.set(eventName, callback);
    }

    public off(eventName: string): void {
        this.registeredEvents.delete(eventName);
    }

    public emit(eventName: string, data?: any): void {
        const callback = this.registeredEvents.get(eventName);
        if (callback) {
            callback(data);
        }
    }
}
