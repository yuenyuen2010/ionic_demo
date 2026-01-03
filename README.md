# Tagalog Learning App

A mobile-friendly application for learning Tagalog, built with Ionic, React, and Capacitor. This app helps users learn Tagalog vocabulary and phrases through structured lessons, flashcard reviews, and interactive games.

## Features

- **Categorized Lessons**: Learn Tagalog words and phrases categorized by topics (Greetings, Numbers, Food, etc.).
- **Flashcards**: Interactive flashcards with English, Traditional Chinese, and Simplified Chinese translations.
- **Interactive Games**:
  - **Memory Match**: Match Tagalog words with their translations.
  - **Spell Challenge**: Practice spelling Tagalog words.
  - **Word Scramble**: Unscramble letters to form the correct Tagalog word.
- **Review Mode**: Practice what you've learned using a Spaced Repetition System (SRS) to optimize retention.
- **Bookmark System**: Save specific cards to your personal list for focused study.
- **Study Timer**: Track your daily learning progress with a built-in study timer.
- **Customization**:
  - **Themes**: Choose from various color themes (Teal, Blue, etc.).
  - **Text Size**: Adjust the font size for better readability.
  - **Dark Mode**: Automatically adapts to system theme or user preference.
- **PWA Support**: Installable as a Progressive Web App (PWA) for offline access and native-like experience.
- **Multilingual Support**: Interface available in English, Traditional Chinese, and Simplified Chinese.
- **Cross-Platform**: Works on Web, Android, and iOS.

## Tech Stack

- **Framework**: [Ionic Framework](https://ionicframework.com/) with [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) with [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
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
- `src/pages`: Application pages (Home, Lesson, Review, Games, Intro).
- `src/utils`: Utility functions (SRS logic, Bookmarks management, etc.).
- `src/theme`: Global styles and theming variables.
- `src/i18n`: Internationalization configuration.
