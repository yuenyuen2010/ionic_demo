import { lessons, Flashcard } from '../data/lessons';

/**
 * Interface representing the state of a single card in the SRS system.
 */
export interface SRSState {
  /** Timestamp (in milliseconds) when the card is next due for review. */
  nextReview: number;
  /** The current proficiency level of the card. Higher means known better. */
  level: number;
}

/**
 * Dictionary mapping card IDs to their SRS state.
 */
export type SRSData = Record<string, SRSState>;

const STORAGE_KEY = 'srs-data';

/**
 * Loads the SRS data from local storage.
 * @returns {SRSData} The loaded SRS data or an empty object if not found or error.
 */
export const loadSRS = (): SRSData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load SRS data', e);
    return {};
  }
};

/**
 * Saves the SRS data to local storage.
 * @param {SRSData} data - The SRS data to save.
 */
export const saveSRS = (data: SRSData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save SRS data', e);
  }
};

/**
 * Updates the SRS state for a specific card based on the user's result.
 *
 * Algorithm:
 * - If Correct:
 *   - Level increases by 1.
 *   - Next review is scheduled for (3 * Level) days from now.
 * - If Incorrect:
 *   - Level resets to 0.
 *   - Next review is scheduled for 10 minutes from now.
 *
 * @param {string} cardId - The unique identifier of the flashcard.
 * @param {boolean} isCorrect - Whether the user answered correctly.
 * @returns {SRSState} The updated state of the card.
 */
export const updateCardSRS = (cardId: string, isCorrect: boolean): SRSState => {
  const data = loadSRS();
  const current = data[cardId] || { nextReview: 0, level: 0 };
  
  let nextReview: number;
  let level: number;

  if (isCorrect) {
    // Increment level
    level = current.level + 1;

    // Calculate review interval: 3 days * level
    // Example: Level 1 = 3 days, Level 2 = 6 days, etc.
    const daysToAdd = 3 * level;
    nextReview = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;
  } else {
    // Reset level on failure
    level = 0;

    // Show again shortly (10 minutes)
    nextReview = Date.now() + 10 * 60 * 1000;
  }

  const newState = { nextReview, level };
  data[cardId] = newState;
  saveSRS(data);
  return newState;
};

/**
 * Retrieves all flashcards that are currently due for review or are new.
 *
 * A card is considered due if:
 * 1. It has no SRS state (New card).
 * 2. Its `nextReview` timestamp is in the past.
 *
 * @returns {Flashcard[]} An array of flashcards due for review.
 */
export const getDueCards = (): Flashcard[] => {
  const srsData = loadSRS();
  const now = Date.now();
  const dueCards: Flashcard[] = [];

  lessons.forEach(category => {
    category.cards.forEach(card => {
      const state = srsData[card.id];
      // If no state (New) OR nextReview <= now (Due)
      if (!state || state.nextReview <= now) {
        dueCards.push(card);
      }
    });
  });

  return dueCards;
};

/**
 * Calculates statistics for the SRS system.
 *
 * @returns {Object} An object containing:
 * - `totalCards`: Total number of cards in the system.
 * - `reviewedCount`: Number of cards that have been reviewed at least once.
 * - `dueCount`: Number of cards currently due for review.
 */
export const getSRSStats = () => {
  const srsData = loadSRS();
  const totalCards = lessons.reduce((acc, cat) => acc + cat.cards.length, 0);
  const reviewedCount = Object.keys(srsData).length;
  const now = Date.now();
  const dueCount = lessons.reduce((acc, cat) => {
    return acc + cat.cards.filter(c => {
      const state = srsData[c.id];
      return !state || state.nextReview <= now;
    }).length;
  }, 0);

  return { totalCards, reviewedCount, dueCount };
};
