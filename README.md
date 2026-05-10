# React State Management Checkpoint

A class-based React component demonstrating core React fundamentals including state management, lifecycle methods, conditional rendering, and event handling.

## Overview

This project serves as an educational checkpoint for learning React class-based components. It demonstrates best practices for managing component state, handling lifecycle events, and rendering UI elements conditionally. The application features a profile card that can be toggled on and off, with a timer that tracks the elapsed time since the component mounted.

## Features

- **Class-Based Component Architecture**: Implements React class components with proper state management
- **State Management**: Demonstrates `setState()` with both object and functional update patterns
- **Lifecycle Methods**: Implements `componentDidMount()` and `componentWillUnmount()` for setup and cleanup
- **Conditional Rendering**: Uses conditional logic to show/hide profile information
- **Event Handling**: Demonstrates onClick event handlers with bound methods
- **Interval Management**: Properly manages intervals to prevent memory leaks
- **Responsive UI**: Styled with inline CSS for clean, maintainable component design

## Technology Stack

- **React** (v19.2.6): UI library for building user interfaces
- **React DOM** (v19.2.6): Rendering React components in the browser
- **React Scripts** (v5.0.1): Build tooling and development server
- **Testing Library**: Testing utilities for React components
- **Create React App**: Project bootstrapping and configuration

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)

Verify installation by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd react-state
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages listed in `package.json`.

3. **Verify installation**:
   ```bash
   npm start
   ```

   If the app launches successfully in your browser, the installation is complete.

## Quick Start

1. **Start the development server**:
   ```bash
   npm start
   ```

2. **Open your browser**:
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - If not, navigate to this URL manually

3. **Interact with the application**:
   - Click the **"Show Profile"** button to display the profile card
   - Click **"Hide Profile"** to toggle visibility off
   - Observe the timer incrementing every second

4. **Make changes and see live updates**:
   - Edit files in the `src` directory
   - The browser will automatically reload with your changes
   - Check the console for any errors or warnings

## Project Structure

```
react-state/
├── public/
│   ├── index.html          # Main HTML file with root div
│   ├── favicon.ico         # Browser tab icon
│   └── manifest.json       # PWA manifest configuration
├── src/
│   ├── App.js              # Main class-based component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked dependency versions
└── README.md              # This file
```

### Key Files

- **`src/App.js`**: The main component containing all the application logic
- **`src/index.js`**: Entry point that renders the App component to the DOM
- **`public/index.html`**: HTML template with the root element for React

## Component Documentation

### App Component

A class-based React component that demonstrates state management and lifecycle methods.

#### State Properties

| Property | Type | Description |
|----------|------|-------------|
| `Person` | Object | Contains user profile information (name, bio, image, profession) |
| `shows` | Boolean | Controls visibility of the profile card |
| `timeSinceMount` | Number | Tracks seconds elapsed since component mount |

#### Methods

| Method | Description |
|--------|-------------|
| `componentDidMount()` | Sets up an interval to update `timeSinceMount` every second |
| `componentWillUnmount()` | Cleans up the interval to prevent memory leaks |
| `toggleProfile()` | Arrow function that toggles the `shows` state |
| `render()` | Returns the JSX for the UI |

#### Key Implementation Details

- **Interval Management**: The component properly cleans up the interval in `componentWillUnmount()` to prevent memory leaks
- **State Updates**: Uses both object and functional `setState()` patterns for clarity
- **Conditional Rendering**: Uses the `&&` operator to conditionally render the profile card
- **Styled Components**: Uses inline styles for component styling

## Conclusion
This project serves as a comprehensive checkpoint for learning React class-based components, covering essential concepts such as state management, lifecycle methods, and event handling. By following the installation and usage instructions, you can explore the functionality of the application and modify it to further enhance your understanding of React.
