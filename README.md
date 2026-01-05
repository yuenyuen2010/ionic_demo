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

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server using Vite. |
| `npm run build` | Builds the app for production. Includes TypeScript validation (`tsc`). |
| `npm run preview` | Previews the production build locally. |
| `npm run test.unit` | Runs unit tests using Vitest. |
| `npm run test.e2e` | Runs end-to-end tests using Cypress. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── CommonHeader.tsx  # App header with settings
│   ├── Flashcard.tsx     # Card component for learning
│   └── ...
├── context/         # React Contexts
│   └── TimerContext.tsx  # Global study timer state
├── data/            # Static data
│   └── lessons.ts        # Vocabulary and lesson definitions
├── pages/           # Application pages
│   ├── Home.tsx          # Main dashboard
│   ├── Lesson.tsx        # Lesson view
│   ├── Review.tsx        # SRS review session
│   ├── Game.tsx          # Games hub
│   └── ...
├── utils/           # Utility functions
│   ├── srs.ts            # Spaced Repetition System logic
│   ├── bookmarks.ts      # Bookmark management
│   └── ...
├── theme/           # Global styles
│   └── variables.css     # CSS variables (colors, fonts)
└── i18n/            # Internationalization setup
```

## Key Concepts

### Spaced Repetition System (SRS)
The app uses a simplified SRS algorithm to help users retain vocabulary efficiently:
- **Correct Answer**: The card's level increases, and the review interval grows (Level * 3 days).
- **Incorrect Answer**: The card's level resets to 0, and it will appear again for review in 10 minutes.

### Data Management
- **Lessons**: All vocabulary data is stored statically in `src/data/lessons.ts`. This allows the app to work offline without a backend database.
- **Persistence**: User progress (SRS state, bookmarks, settings, timer) is stored in the browser's `localStorage`.

### Offline Support (PWA)
The app is configured as a PWA. Once loaded, it caches assets and data, allowing it to function completely offline. Updates are handled via a prompt that appears when a new version is available.
