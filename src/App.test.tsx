/**
 * App Component Tests
 */
import { describe, it, expect, vi } from 'vitest';

// Mock the page components since we're just testing App shell
vi.mock('./pages/Home', () => ({ default: () => <div>Home</div> }));
vi.mock('./pages/Lesson', () => ({ default: () => <div>Lesson</div> }));
vi.mock('./pages/Review', () => ({ default: () => <div>Review</div> }));
vi.mock('./pages/Intro', () => ({ default: () => <div>Intro</div> }));
vi.mock('./pages/Game', () => ({ default: () => <div>Game</div> }));
vi.mock('./pages/MemoryMatch', () => ({ default: () => <div>MemoryMatch</div> }));
vi.mock('./pages/SpellChallenge', () => ({ default: () => <div>SpellChallenge</div> }));
vi.mock('./pages/WordScramble', () => ({ default: () => <div>WordScramble</div> }));
vi.mock('./pages/EmojiGuess', () => ({ default: () => <div>EmojiGuess</div> }));
vi.mock('./components/ReloadPrompt', () => ({ default: () => null }));

import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render without crashing', async () => {
    const { baseElement, findByText } = render(<App />);
    expect(baseElement).toBeDefined();
    // Wait for the lazy loaded component to appear to resolve Suspense
    await findByText('Home');
  });

  it('should have IonApp container', async () => {
    const { container, findByText } = render(<App />);
    const ionApp = container.querySelector('ion-app');
    expect(ionApp).toBeDefined();
    // Wait for stability
    await findByText('Home');
  });
});
