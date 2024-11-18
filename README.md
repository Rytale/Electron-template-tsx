# Modular Electron Application

A well-structured Electron application built with TypeScript, featuring a modular architecture and best practices.

## Project Structure

```
├── src/
│   ├── main/           # Main process source
│   ├── renderer/       # Renderer process source
│   │   ├── scripts/    # TypeScript files
│   │   ├── styles/     # CSS styles
│   │   └── index.html  # Main HTML file
│   ├── preload/        # Preload scripts
│   └── shared/         # Shared code
│       ├── config/     # Configuration files
│       ├── types/      # TypeScript types
│       └── utils/      # Utility functions
├── build/              # Build resources
├── dist/              # Compiled output
└── tests/             # Test files
```

## Features

- 🚀 TypeScript support
- 📦 Modular architecture
- 🎨 Clean folder structure
- 🔒 Secure IPC communication
- 🛠 Development tools integration
- 📝 Comprehensive logging
- 🧪 Testing setup
- 🔄 Hot reload in development
- 📦 Production build configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd electron-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the app in development mode:
```bash
npm run dev
```

### Building

Build the app for production:
```bash
npm run build
```

Build for specific platforms:
```bash
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

Lint the code:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Scripts

- `npm start` - Start the app in production mode
- `npm run dev` - Start the app in development mode
- `npm run build` - Build the app for the current platform
- `npm run clean` - Clean the build output
- `npm test` - Run tests
- `npm run lint` - Run linting
- `npm run lint:fix` - Fix linting issues

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
