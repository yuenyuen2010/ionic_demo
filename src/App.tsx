import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Review from './pages/Review';
import Intro from './pages/Intro';
import Game from './pages/Game';
import MemoryMatch from './pages/MemoryMatch';
import SpellChallenge from './pages/SpellChallenge';
import ReloadPrompt from './components/ReloadPrompt';
import { TimerProvider } from './context/TimerContext';

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
        <TimerProvider>
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
            <Route exact path="/">
              {/* @ts-ignore */}
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </TimerProvider>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
