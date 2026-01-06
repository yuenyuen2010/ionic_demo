import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import * as streakUtils from '../streak';

describe('Streak Utils', () => {
  const STREAK_KEY = 'daily-streak-data';
  const mockDate = new Date('2023-10-15T12:00:00Z'); // Sunday

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
    localStorage.clear();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('loadStreakData', () => {
    it('should return default data when localStorage is empty', () => {
      const data = streakUtils.loadStreakData();
      expect(data).toEqual({
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: '',
        totalDaysLearned: 0
      });
    });

    it('should return parsed data from localStorage', () => {
      const savedData = {
        currentStreak: 5,
        longestStreak: 10,
        lastActiveDate: '2023-10-14',
        totalDaysLearned: 50
      };
      localStorage.setItem(STREAK_KEY, JSON.stringify(savedData));

      const data = streakUtils.loadStreakData();
      expect(data).toEqual(savedData);
    });

    it('should return default data and log error on JSON parse failure', () => {
      localStorage.setItem(STREAK_KEY, 'invalid json');
      const data = streakUtils.loadStreakData();
      expect(data).toEqual({
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: '',
        totalDaysLearned: 0
      });
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('recordActivity', () => {
    it('should start a new streak if no previous data', () => {
      const data = streakUtils.recordActivity();

      expect(data.currentStreak).toBe(1);
      expect(data.longestStreak).toBe(1);
      expect(data.totalDaysLearned).toBe(1);
      expect(data.lastActiveDate).toBe('2023-10-15');

      const stored = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
      expect(stored).toEqual(data);
    });

    it('should not update if already active today', () => {
      // First activity
      streakUtils.recordActivity();

      // Advance time but same day
      vi.setSystemTime(new Date('2023-10-15T14:00:00Z'));

      const data = streakUtils.recordActivity();
      expect(data.currentStreak).toBe(1);
      expect(data.totalDaysLearned).toBe(1); // Should not increase
    });

    it('should increment streak if active yesterday', () => {
      // Setup yesterday's data
      const yesterday = '2023-10-14';
      localStorage.setItem(STREAK_KEY, JSON.stringify({
        currentStreak: 5,
        longestStreak: 10,
        lastActiveDate: yesterday,
        totalDaysLearned: 50
      }));

      const data = streakUtils.recordActivity();

      expect(data.currentStreak).toBe(6);
      expect(data.totalDaysLearned).toBe(51);
      expect(data.lastActiveDate).toBe('2023-10-15');
    });

    it('should update longest streak if current streak exceeds it', () => {
      // Setup yesterday's data where longest streak is equal to current
      const yesterday = '2023-10-14';
      localStorage.setItem(STREAK_KEY, JSON.stringify({
        currentStreak: 10,
        longestStreak: 10,
        lastActiveDate: yesterday,
        totalDaysLearned: 100
      }));

      const data = streakUtils.recordActivity();

      expect(data.currentStreak).toBe(11);
      expect(data.longestStreak).toBe(11);
    });

    it('should reset streak if missed a day', () => {
      // Setup data from 2 days ago
      const twoDaysAgo = '2023-10-13';
      localStorage.setItem(STREAK_KEY, JSON.stringify({
        currentStreak: 5,
        longestStreak: 10,
        lastActiveDate: twoDaysAgo,
        totalDaysLearned: 50
      }));

      const data = streakUtils.recordActivity();

      expect(data.currentStreak).toBe(1);
      expect(data.longestStreak).toBe(10); // Keeps longest
      expect(data.totalDaysLearned).toBe(51); // Still increments total days
      expect(data.lastActiveDate).toBe('2023-10-15');
    });
  });

  describe('checkStreak', () => {
    it('should reset streak to 0 if last active was more than 1 day ago', () => {
       // Setup data from 2 days ago
       const twoDaysAgo = '2023-10-13';
       localStorage.setItem(STREAK_KEY, JSON.stringify({
         currentStreak: 5,
         longestStreak: 10,
         lastActiveDate: twoDaysAgo,
         totalDaysLearned: 50
       }));

       const data = streakUtils.checkStreak();

       expect(data.currentStreak).toBe(0);
       // Should update localStorage
       const stored = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
       expect(stored.currentStreak).toBe(0);
    });

    it('should keep streak if last active was yesterday', () => {
       const yesterday = '2023-10-14';
       const initialData = {
         currentStreak: 5,
         longestStreak: 10,
         lastActiveDate: yesterday,
         totalDaysLearned: 50
       };
       localStorage.setItem(STREAK_KEY, JSON.stringify(initialData));

       const data = streakUtils.checkStreak();

       expect(data.currentStreak).toBe(5);
    });

    it('should keep streak if last active is today', () => {
        const today = '2023-10-15';
        const initialData = {
          currentStreak: 5,
          longestStreak: 10,
          lastActiveDate: today,
          totalDaysLearned: 50
        };
        localStorage.setItem(STREAK_KEY, JSON.stringify(initialData));

        const data = streakUtils.checkStreak();

        expect(data.currentStreak).toBe(5);
     });
  });

  describe('getStreakInfo', () => {
    it('should return correct info structure', () => {
        const yesterday = '2023-10-14';
        localStorage.setItem(STREAK_KEY, JSON.stringify({
          currentStreak: 5,
          longestStreak: 10,
          lastActiveDate: yesterday,
          totalDaysLearned: 50
        }));

        const info = streakUtils.getStreakInfo();

        expect(info.streak).toBe(5);
        expect(info.longestStreak).toBe(10);
        expect(info.isActiveToday).toBe(false);
        expect(info.totalDays).toBe(50);
    });

    it('should indicate active today correctly', () => {
        const today = '2023-10-15';
        localStorage.setItem(STREAK_KEY, JSON.stringify({
          currentStreak: 6,
          longestStreak: 10,
          lastActiveDate: today,
          totalDaysLearned: 51
        }));

        const info = streakUtils.getStreakInfo();

        expect(info.isActiveToday).toBe(true);
    });
  });
});
