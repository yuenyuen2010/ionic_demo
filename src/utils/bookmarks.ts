export const BOOKMARKS_KEY = 'tagalog_bookmarks';

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

export const isBookmarked = (cardId: string): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.includes(cardId);
};

export const addBookmark = (cardId: string): void => {
  const bookmarks = getBookmarks();
  if (!bookmarks.includes(cardId)) {
    bookmarks.push(cardId);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (cardId: string): void => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(cardId);
  if (index !== -1) {
    bookmarks.splice(index, 1);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
};

export const toggleBookmark = (cardId: string): boolean => {
  if (isBookmarked(cardId)) {
    removeBookmark(cardId);
    return false;
  } else {
    addBookmark(cardId);
    return true;
  }
};
