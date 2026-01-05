import React, { useEffect, Suspense, lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import ReloadPrompt from './components/ReloadPrompt';
import { TimerProvider } from './context/TimerContext';

/* Lazy-loaded page components for code splitting */
const Home = lazy(() => import('./pages/Home'));
const Lesson = lazy(() => import('./pages/Lesson'));
const Review = lazy(() => import('./pages/Review'));
const Intro = lazy(() => import('./pages/Intro'));
const Game = lazy(() => import('./pages/Game'));
const MemoryMatch = lazy(() => import('./pages/MemoryMatch'));
const SpellChallenge = lazy(() => import('./pages/SpellChallenge'));
const WordScramble = lazy(() => import('./pages/WordScramble'));
const EmojiGuess = lazy(() => import('./pages/EmojiGuess'));

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

const App: React.FC = () => {
  useEffect(() => {
    // Initialize theme from local storage
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    document.body.className = savedTheme;
  }, []);

  return (
    <IonApp>
      <ReloadPrompt />
      {/* @ts-ignore */}
      <IonReactHashRouter>
        {/* @ts-ignore */}
        <TimerProvider>
          <Suspense fallback={<PageLoader />}>
            {/* @ts-ignore */}
            <IonRouterOutlet>
              {/* @ts-ignore */}
              <Route exact path="/home">
                {/* @ts-ignore */}
                <Home />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/lesson/:id">
                {/* @ts-ignore */}
                <Lesson />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/review">
                {/* @ts-ignore */}
                <Review />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/intro">
                {/* @ts-ignore */}
                <Intro />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/game">
                {/* @ts-ignore */}
                <Game />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/memory">
                {/* @ts-ignore */}
                <MemoryMatch />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/spell">
                {/* @ts-ignore */}
                <SpellChallenge />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/scramble">
                {/* @ts-ignore */}
                <WordScramble />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/emoji">
                {/* @ts-ignore */}
                <EmojiGuess />
              </Route>
              {/* @ts-ignore */}
              <Route exact path="/">
                {/* @ts-ignore */}
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
          </Suspense>
        </TimerProvider>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
