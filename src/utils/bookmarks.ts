/**
 * Key used for storing bookmarks in localStorage.
 */
export const BOOKMARKS_KEY = 'tagalog_bookmarks';

/**
 * Retrieves the list of bookmarked card IDs from local storage.
 *
 * @returns {string[]} An array of card IDs that are bookmarked.
 */
export const getBookmarks = (): string[] => {
  const stored = localStorage.getItem(BOOKMARKS_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.warn('Failed to parse bookmarks', e);
    return [];
  }
};

/**
 * Checks if a specific card is bookmarked.
 *
 * @param {string} cardId - The ID of the card to check.
 * @returns {boolean} True if the card is bookmarked, false otherwise.
 */
export const isBookmarked = (cardId: string): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.includes(cardId);
};

/**
 * Adds a card to the bookmarks list if it's not already present.
 * Persists the change to local storage.
 *
 * @param {string} cardId - The ID of the card to bookmark.
 */
export const addBookmark = (cardId: string): void => {
  const bookmarks = getBookmarks();
  if (!bookmarks.includes(cardId)) {
    bookmarks.push(cardId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

/**
 * Removes a card from the bookmarks list.
 * Persists the change to local storage.
 *
 * @param {string} cardId - The ID of the card to remove.
 */
export const removeBookmark = (cardId: string): void => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(cardId);
  if (index !== -1) {
    bookmarks.splice(index, 1);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

/**
 * Toggles the bookmark state of a card.
 * If bookmarked, it removes it. If not, it adds it.
 *
 * @param {string} cardId - The ID of the card to toggle.
 * @returns {boolean} True if the card is now bookmarked, false if it was removed.
 */
export const toggleBookmark = (cardId: string): boolean => {
  if (isBookmarked(cardId)) {
    removeBookmark(cardId);
    return false;
  } else {
    addBookmark(cardId);
    return true;
  }
};
