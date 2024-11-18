export class AppUI {
    private versionElement: HTMLElement | null;

    constructor() {
        this.versionElement = document.getElementById('version');
        this.initializeUI();
    }

    private initializeUI(): void {
        // Initialize any UI elements that need setup
    }

    public setVersion(version: string): void {
        if (this.versionElement) {
            this.versionElement.textContent = `Version: ${version}`;
        }
    }

    public updateContent(content: string): void {
        const contentElement = document.querySelector('.content');
        if (contentElement) {
            contentElement.innerHTML = content;
        }
    }

    public showError(message: string): void {
        console.error(message);
        // Implement error UI handling here
    }
}
