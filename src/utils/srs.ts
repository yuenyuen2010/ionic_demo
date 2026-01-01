import { lessons, Flashcard } from '../data/lessons';

export interface SRSState {
  nextReview: number; // timestamp
  level: number;
}

export type SRSData = Record<string, SRSState>;

const STORAGE_KEY = 'srs-data';

export const loadSRS = (): SRSData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load SRS data', e);
    return {};
  }
};

export const saveSRS = (data: SRSData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save SRS data', e);
  }
};

// Simple SRS Algorithm based on user request:
// Right -> 3 days (growing?)
// Wrong -> 10 mins
export const updateCardSRS = (cardId: string, isCorrect: boolean): SRSState => {
  const data = loadSRS();
  const current = data[cardId] || { nextReview: 0, level: 0 };
  
  let nextReview: number;
  let level: number;

  if (isCorrect) {
    // Correct
    level = current.level + 1;
    // Interval grows: 3 days, then maybe more? 
    // Prompt said: "If you get it right, show it again in 3 days."
    // Let's implement a simple multiplier: 3 * level days
    // Level 1: 3 days
    // Level 2: 6 days
    // Level 3: 9 days...
    // Or strictly 3 days as requested? 
    // "If right, show again in 3 days." -> simpler is better for now.
    // But standard SRS usually exponentially increases. Let's do 3 * 2^(level-1) days?
    // Let's stick to the prompt's implied simple rule but make it useful: 3 days * level.
    const daysToAdd = 3 * level;
    nextReview = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;
  } else {
    // Wrong
    level = 0; // Reset
    // 10 minutes
    nextReview = Date.now() + 10 * 60 * 1000;
  }

  const newState = { nextReview, level };
  data[cardId] = newState;
  saveSRS(data);
  return newState;
};

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
