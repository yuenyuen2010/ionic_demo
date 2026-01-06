/**
 * Daily Streak Utility
 * Tracks consecutive days of learning activity
 */

export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string; // ISO date string (YYYY-MM-DD)
    totalDaysLearned: number;
}

const STREAK_KEY = 'daily-streak-data';

/**
 * Get today's date in YYYY-MM-DD format
 */
const getToday = (): string => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Get yesterday's date in YYYY-MM-DD format
 */
const getYesterday = (): string => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
};

/**
 * Load streak data from localStorage
 */
export const loadStreakData = (): StreakData => {
    try {
        const data = localStorage.getItem(STREAK_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Failed to load streak data', e);
    }

    // Return default data
    return {
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: '',
        totalDaysLearned: 0
    };
};

/**
 * Save streak data to localStorage
 */
export const saveStreakData = (data: StreakData): void => {
    try {
        localStorage.setItem(STREAK_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save streak data', e);
    }
};

/**
 * Record activity for today - call this when user does any learning activity
 * Returns updated streak data
 */
export const recordActivity = (): StreakData => {
    const data = loadStreakData();
    const today = getToday();
    const yesterday = getYesterday();

    // Already recorded today
    if (data.lastActiveDate === today) {
        return data;
    }

    // Streak continues (was active yesterday)
    if (data.lastActiveDate === yesterday) {
        data.currentStreak += 1;
        data.totalDaysLearned += 1;
    }
    // First day ever or streak broken
    else if (data.lastActiveDate !== today) {
        // If this is the first day, start streak at 1
        // If streak was broken, reset to 1
        data.currentStreak = 1;
        data.totalDaysLearned += 1;
    }

    // Update longest streak
    if (data.currentStreak > data.longestStreak) {
        data.longestStreak = data.currentStreak;
    }

    data.lastActiveDate = today;
    saveStreakData(data);

    return data;
};

/**
 * Check if the streak is still active (was active today or yesterday)
 * If not active yesterday, streak is broken
 */
export const checkStreak = (): StreakData => {
    const data = loadStreakData();
    const today = getToday();
    const yesterday = getYesterday();

    // Active today - streak is valid
    if (data.lastActiveDate === today) {
        return data;
    }

    // Was active yesterday - streak not broken yet, but needs activity today
    if (data.lastActiveDate === yesterday) {
        return data;
    }

    // Streak is broken (more than 1 day has passed)
    if (data.lastActiveDate && data.lastActiveDate !== today && data.lastActiveDate !== yesterday) {
        data.currentStreak = 0;
        saveStreakData(data);
    }

    return data;
};

/**
 * Get streak display info
 */
export const getStreakInfo = (): {
    streak: number;
    longestStreak: number;
    isActiveToday: boolean;
    totalDays: number;
} => {
    const data = checkStreak();
    const today = getToday();

    return {
        streak: data.currentStreak,
        longestStreak: data.longestStreak,
        isActiveToday: data.lastActiveDate === today,
        totalDays: data.totalDaysLearned
    };
};
