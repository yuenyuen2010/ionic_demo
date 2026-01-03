import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface TimerContextType {
  seconds: number;
  formattedTime: string;
}

const TimerContext = createContext<TimerContextType>({
  seconds: 0,
  formattedTime: '0m 00s',
});

export const useTimer = () => useContext(TimerContext);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const location = useLocation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastDateRef = useRef<string>(new Date().toDateString());

  // Load from local storage on mount
  useEffect(() => {
    const savedSeconds = localStorage.getItem('app-timer-seconds');
    const savedDate = localStorage.getItem('app-timer-date');
    const today = new Date().toDateString();

    // Update ref to today
    lastDateRef.current = today;

    if (savedDate === today && savedSeconds) {
      setSeconds(parseInt(savedSeconds, 10));
    } else {
      // Reset if date is different or no date saved
      setSeconds(0);
      localStorage.setItem('app-timer-seconds', '0');
      localStorage.setItem('app-timer-date', today);
    }
  }, []);

  useEffect(() => {
    const shouldCount = () => {
        const path = location.pathname;
        // Count on lessons, games, review
        // Routes: /lesson/:id, /game, /memory, /spell, /review
        // Ignore: /home, /intro

        if (path.startsWith('/lesson') ||
            path === '/game' ||
            path === '/memory' ||
            path === '/spell' ||
            path === '/review') {
            return true;
        }
        return false;
    };

    if (shouldCount()) {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    const currentToday = new Date().toDateString();

                    // Check if day has changed
                    if (currentToday !== lastDateRef.current) {
                        lastDateRef.current = currentToday;
                        localStorage.setItem('app-timer-date', currentToday);
                        // Reset timer for the new day, start at 1s
                        const newValue = 1;
                        localStorage.setItem('app-timer-seconds', newValue.toString());
                        return newValue;
                    }

                    const newValue = prev + 1;
                    localStorage.setItem('app-timer-seconds', newValue.toString());
                    return newValue;
                });
            }, 1000);
        }
    } else {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
  }, [location.pathname]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}m ${remainingSeconds.toString().padStart(2, '0')}s`;

  return (
    <TimerContext.Provider value={{ seconds, formattedTime }}>
      {children}
    </TimerContext.Provider>
  );
};
