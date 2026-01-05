/**
 * Unit tests for Bookmark utility functions
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage before importing bookmarks module
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

import {
    BOOKMARKS_KEY,
    getBookmarks,
    isBookmarked,
    addBookmark,
    removeBookmark,
    toggleBookmark
} from '../bookmarks';

describe('Bookmark Utility Functions', () => {
    beforeEach(() => {
        localStorageMock.clear();
        vi.clearAllMocks();
    });

    describe('getBookmarks', () => {
        it('should return empty array when no bookmarks exist', () => {
            const result = getBookmarks();
            expect(result).toEqual([]);
        });

        it('should return parsed bookmarks from localStorage', () => {
            const mockBookmarks = ['card-1', 'card-2', 'card-3'];
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockBookmarks));

            const result = getBookmarks();
            expect(result).toEqual(mockBookmarks);
        });

        it('should return empty array on parse error', () => {
            localStorageMock.getItem.mockReturnValueOnce('not valid json');

            const result = getBookmarks();
            expect(result).toEqual([]);
        });
    });

    describe('isBookmarked', () => {
        it('should return false for non-bookmarked card', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            const result = isBookmarked('card-2');
            expect(result).toBe(false);
        });

        it('should return true for bookmarked card', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            const result = isBookmarked('card-2');
            expect(result).toBe(true);
        });
    });

    describe('addBookmark', () => {
        it('should add new bookmark to empty list', () => {
            addBookmark('card-1');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1'])
            );
        });

        it('should add new bookmark to existing list', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            addBookmark('card-2');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-1', 'card-2'])
            );
        });

        it('should not add duplicate bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            addBookmark('card-1');

            // setItem should not be called since card already exists
            expect(localStorageMock.setItem).not.toHaveBeenCalled();
        });
    });

    describe('removeBookmark', () => {
        it('should remove existing bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1', 'card-2']));

            removeBookmark('card-1');

            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                BOOKMARKS_KEY,
                JSON.stringify(['card-2'])
            );
        });

        it('should do nothing when removing non-existent bookmark', () => {
            localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(['card-1']));

            removeBookmark('card-2');

            expect(localStorageMock.setItem).not.toHaveBeenCalled();
        });
    });

    describe('toggleBookmark', () => {
        it('should add bookmark and return true when not bookmarked', () => {
            localStorageMock.getItem
                .mockReturnValueOnce(JSON.stringify([])) // for isBookmarked
                .mockReturnValueOnce(JSON.stringify([])); // for addBookmark

            const result = toggleBookmark('card-1');

            expect(result).toBe(true);
        });

        it('should remove bookmark and return false when already bookmarked', () => {
            localStorageMock.getItem
                .mockReturnValueOnce(JSON.stringify(['card-1'])) // for isBookmarked
                .mockReturnValueOnce(JSON.stringify(['card-1'])); // for removeBookmark

            const result = toggleBookmark('card-1');

            expect(result).toBe(false);
        });
    });
});
