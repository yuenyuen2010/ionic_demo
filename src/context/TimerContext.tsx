import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordActivity } from '../utils/streak';

/**
 * Interface defining the shape of the TimerContext.
 */
interface TimerContextType {
  /** Total study seconds accumulated today. */
  seconds: number;
  /** Formatted time string (e.g., "15m 30s"). */
  formattedTime: string;
}

// Create the context with default values
const TimerContext = createContext<TimerContextType>({
  seconds: 0,
  formattedTime: '0m 00s',
});

/**
 * Hook to access the timer context.
 * @returns {TimerContextType} The current timer state.
 */
export const useTimer = () => useContext(TimerContext);

/**
 * Provider component for the Study Timer.
 * Tracks study time across specific routes and persists it to localStorage per day.
 */
export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const location = useLocation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastDateRef = useRef<string>(new Date().toDateString());

  /**
   * Effect to initialize the timer from local storage.
   * Resets the timer if the stored date doesn't match the current date.
   */
  useEffect(() => {
    const savedSeconds = localStorage.getItem('app-timer-seconds');
    const savedDate = localStorage.getItem('app-timer-date');
    const today = new Date().toDateString();

    // Update ref to today
    lastDateRef.current = today;

    if (savedDate === today && savedSeconds) {
      // Restore today's progress
      setSeconds(parseInt(savedSeconds, 10));
    } else {
      // Reset if date is different or no date saved (New Day)
      setSeconds(0);
      localStorage.setItem('app-timer-seconds', '0');
      localStorage.setItem('app-timer-date', today);
    }
  }, []);

  /**
   * Effect to manage the timer interval based on the current route.
   * Only counts time on active learning routes.
   */
  useEffect(() => {
    // Determine if the current route counts towards study time
    const shouldCount = () => {
      const path = location.pathname;
      // Count on lessons, games, review routes
      // Routes: /lesson/:id, /game, /memory, /spell, /scramble, /emoji, /review
      // Ignore: /home, /intro, or root

      if (path.startsWith('/lesson') ||
        path === '/game' ||
        path === '/memory' ||
        path === '/spell' ||
        path === '/scramble' ||
        path === '/emoji' ||
        path === '/review') {
        return true;
      }
      return false;
    };

    if (shouldCount()) {
      // Record activity for daily streak
      recordActivity();

      // Start the timer if not already running
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setSeconds(prev => {
            const currentToday = new Date().toDateString();

            // Check if day has changed while the app was running
            if (currentToday !== lastDateRef.current) {
              lastDateRef.current = currentToday;
              localStorage.setItem('app-timer-date', currentToday);
              // Reset timer for the new day, start at 1s
              const newValue = 1;
              localStorage.setItem('app-timer-seconds', newValue.toString());
              return newValue;
            }

            // Increment time
            const newValue = prev + 1;
            localStorage.setItem('app-timer-seconds', newValue.toString());
            return newValue;
          });
        }, 1000);
      }
    } else {
      // Stop the timer if on a non-learning route
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [location.pathname]);

  // Format the time for display
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}m ${remainingSeconds.toString().padStart(2, '0')}s`;

  return (
    <TimerContext.Provider value={{ seconds, formattedTime }}>
      {children}
    </TimerContext.Provider>
  );
};
