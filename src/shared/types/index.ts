// Application State Interfaces
export interface AppState {
    version: string;
    isLoading: boolean;
    error: string | null;
}

// IPC Channel Types
export enum IpcChannels {
    GET_VERSION = 'app:get-version',
    // Add more IPC channels as needed
}

// Configuration Types
export interface AppConfig {
    environment: 'development' | 'production';
    debug: boolean;
}

// Event Types
export interface AppEvent {
    type: string;
    payload?: any;
    timestamp: number;
}

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

// UI Component Props
export interface BaseComponentProps {
    className?: string;
    id?: string;
    style?: Record<string, string | number>;
}

// Utility Types
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ValidationResult = {
    isValid: boolean;
    errors: string[];
};
