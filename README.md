# Tagalog Learning App

A mobile-friendly application for learning Tagalog, built with Ionic, React, and Capacitor. This app helps users learn Tagalog vocabulary and phrases through structured lessons and flashcard reviews.

## Features

- **Categorized Lessons**: Learn Tagalog words and phrases categorized by topics (Greetings, Numbers, Food, etc.).
- **Flashcards**: Interactive flashcards with English, Traditional Chinese, and Simplified Chinese translations.
- **Review Mode**: Practice what you've learned.
- **Dark Mode Support**: Automatically adapts to system theme or user preference.
- **Multilingual Support**: Interface available in English, Traditional Chinese, and Simplified Chinese.
- **Cross-Platform**: Works on Web, Android, and iOS.

## Tech Stack

- **Framework**: [Ionic Framework](https://ionicframework.com/) with [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Mobile Runtime**: [Capacitor](https://capacitorjs.com/)
- **State Management**: React Hooks & Context
- **Routing**: React Router
- **Internationalization**: i18next
- **Testing**: Cypress (E2E), Vitest (Unit)

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tagalog-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

#### Development Server
To start the development server with hot reload:
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.

#### Build
To build the project for production:
```bash
npm run build
```

#### Preview
To preview the production build locally:
```bash
npm run preview
```

## Testing

### Unit Tests
Run unit tests using Vitest:
```bash
npm run test.unit
```

### End-to-End Tests
Run E2E tests using Cypress:
```bash
npm run test.e2e
```

## Project Structure

- `src/components`: Reusable UI components (Flashcards, Headers, etc.)
- `src/data`: Static data for lessons and vocabulary.
- `src/pages`: Application pages (Home, Lesson, Review).
- `src/theme`: Global styles and theming variables.
- `src/i18n`: Internationalization configuration.
