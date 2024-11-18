import { appConfig } from '../config/app.config';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
    private static instance: Logger;
    private readonly isDebug: boolean;

    private constructor() {
        this.isDebug = appConfig.debug;
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
        const timestamp = new Date().toISOString();
        const formattedArgs = args.length > 0 ? ` ${JSON.stringify(args)}` : '';
        return `[${timestamp}] [${level.toUpperCase()}] ${message}${formattedArgs}`;
    }

    public info(message: string, ...args: any[]): void {
        console.log(this.formatMessage('info', message, ...args));
    }

    public warn(message: string, ...args: any[]): void {
        console.warn(this.formatMessage('warn', message, ...args));
    }

    public error(message: string, ...args: any[]): void {
        console.error(this.formatMessage('error', message, ...args));
    }

    public debug(message: string, ...args: any[]): void {
        if (this.isDebug) {
            console.debug(this.formatMessage('debug', message, ...args));
        }
    }

    public group(label: string): void {
        console.group(label);
    }

    public groupEnd(): void {
        console.groupEnd();
    }

    public table(data: any[]): void {
        console.table(data);
    }
}

export const logger = Logger.getInstance();
