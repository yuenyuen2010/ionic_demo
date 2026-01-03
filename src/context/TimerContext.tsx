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

  // Load from local storage on mount
  useEffect(() => {
    const savedSeconds = localStorage.getItem('app-timer-seconds');
    if (savedSeconds) {
      setSeconds(parseInt(savedSeconds, 10));
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
