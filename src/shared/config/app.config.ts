import { AppConfig } from '../types';

export const appConfig: AppConfig = {
    environment: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    debug: process.env.NODE_ENV === 'development'
};

export const constants = {
    APP_NAME: 'Electron App',
    MIN_WINDOW_WIDTH: 800,
    MIN_WINDOW_HEIGHT: 600,
    DEFAULT_WINDOW_WIDTH: 1200,
    DEFAULT_WINDOW_HEIGHT: 800
} as const;

export const paths = {
    // Add application-specific paths here
    userData: '',  // Will be set at runtime
    logs: '',      // Will be set at runtime
    temp: ''       // Will be set at runtime
} as const;

// Feature flags for enabling/disabling features
export const features = {
    enableDevTools: appConfig.environment === 'development',
    enableAutoUpdates: appConfig.environment === 'production',
    enableCrashReporting: appConfig.environment === 'production',
    enableAnalytics: appConfig.environment === 'production'
} as const;
