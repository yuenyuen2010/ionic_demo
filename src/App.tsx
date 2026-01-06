import React, { useEffect, Suspense, lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import ReloadPrompt from './components/ReloadPrompt';
import { TimerProvider } from './context/TimerContext';

/* Lazy-loaded page components for code splitting optimization.
 * This ensures that the initial bundle size is smaller and pages are loaded only when needed.
 */
const Home = lazy(() => import('./pages/Home'));
const Lesson = lazy(() => import('./pages/Lesson'));
const Review = lazy(() => import('./pages/Review'));
const Intro = lazy(() => import('./pages/Intro'));
const Game = lazy(() => import('./pages/Game'));
const MemoryMatch = lazy(() => import('./pages/MemoryMatch'));
const SpellChallenge = lazy(() => import('./pages/SpellChallenge'));
const WordScramble = lazy(() => import('./pages/WordScramble'));
const EmojiGuess = lazy(() => import('./pages/EmojiGuess'));
const FallingWords = lazy(() => import('./pages/FallingWords'));
const ListeningQuiz = lazy(() => import('./pages/ListeningQuiz'));

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

/**
 * Loading Component for Suspense fallback
 * Shows a centered spinner while lazy components are loading
 */
const PageLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--ion-background-color)'
  }}>
    <IonSpinner name="crescent" color="primary" style={{ width: '48px', height: '48px' }} />
  </div>
);

/**
 * Main Application Component.
 *
 * Sets up:
 * - Routing (HashRouter)
 * - Global Providers (TimerProvider)
 * - Theme Initialization
 * - PWA Reload Prompt
 * - Suspense for lazy loading
 */
const App: React.FC = () => {

  // Initialize theme from local storage on app start
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    document.body.className = savedTheme;
  }, []);

  return (
    <IonApp>
      {/* PWA Update Prompt */}
      <ReloadPrompt />

      <IonReactHashRouter>
        {/* Timer Provider tracks study time across routes */}
        {/* @ts-expect-error: TS mismatch with children prop */}
        <TimerProvider>
          <Suspense fallback={<PageLoader />}>
            {/* Router Outlet for handling navigation */}
            <IonRouterOutlet>
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/home" render={() => <Home />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/lesson/:id" render={() => <Lesson />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/review" render={() => <Review />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/intro" render={() => <Intro />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/game" render={() => <Game />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/memory" render={() => <MemoryMatch />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/spell" render={() => <SpellChallenge />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/scramble" render={() => <WordScramble />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/emoji" render={() => <EmojiGuess />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/falling" render={() => <FallingWords />} />
              {/* @ts-expect-error: Lazy component type mismatch */}
              <Route exact path="/listening" render={() => <ListeningQuiz />} />
              {/* @ts-expect-error: Redirect type mismatch */}
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </Suspense>
        </TimerProvider>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
