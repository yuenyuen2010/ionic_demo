/**
 * Unit tests for SRS (Spaced Repetition System) utility functions
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage before importing srs module
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
        clear: vi.fn(() => { store = {}; }),
        removeItem: vi.fn((key: string) => { delete store[key]; }),
    };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

// Import after mocking
import { loadSRS, saveSRS, updateCardSRS, SRSData } from '../srs';

describe('SRS Utility Functions', () => {
    beforeEach(() => {
        localStorageMock.clear();
        vi.clearAllMocks();
    });

    describe('loadSRS', () => {
        it('should return empty object when no data exists', () => {
            const result = loadSRS();
            expect(result).toEqual({});
        });

        it('should return parsed data from localStorage', () => {
            const mockData: SRSData = {
                'card-1': { nextReview: 1000, level: 2 },
            };
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));

            const result = loadSRS();
            expect(result).toEqual(mockData);
        });

        it('should return empty object on parse error', () => {
            localStorageMock.getItem.mockReturnValueOnce('invalid json{');

            const result = loadSRS();
            expect(result).toEqual({});
        });
    });

    describe('saveSRS', () => {
        it('should save data to localStorage', () => {
            const data: SRSData = {
                'card-1': { nextReview: 1000, level: 1 },
            };

            saveSRS(data);

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                'srs-data',
                JSON.stringify(data)
            );
        });
    });

    describe('updateCardSRS', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should set level to 1 and schedule 3 days later on first correct answer', () => {
            const result = updateCardSRS('test-card-1', true);

            expect(result.level).toBe(1);
            // 3 * 1 = 3 days
            const expectedTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
            expect(result.nextReview).toBe(expectedTime);
        });

        it('should reset level and schedule 10 mins later on wrong answer', () => {
            // First, simulate a card at level 2
            const mockData: SRSData = {
                'test-card-2': { nextReview: Date.now() - 1000, level: 2 },
            };
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));

            const result = updateCardSRS('test-card-2', false);

            expect(result.level).toBe(0);
            // 10 minutes
            const expectedTime = Date.now() + 10 * 60 * 1000;
            expect(result.nextReview).toBe(expectedTime);
        });

        it('should increase interval with higher levels', () => {
            // Card at level 2
            const mockData: SRSData = {
                'test-card-3': { nextReview: Date.now() - 1000, level: 2 },
            };
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockData));

            const result = updateCardSRS('test-card-3', true);

            expect(result.level).toBe(3);
            // 3 * 3 = 9 days
            const expectedTime = Date.now() + 9 * 24 * 60 * 60 * 1000;
            expect(result.nextReview).toBe(expectedTime);
        });
    });
});
