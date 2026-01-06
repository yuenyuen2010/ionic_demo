import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Flashcard from '../Flashcard';
import * as bookmarkUtils from '../../utils/bookmarks';

// Mock dependencies
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
    },
  }),
}));

vi.mock('../../utils/bookmarks', () => ({
  isBookmarked: vi.fn(),
  toggleBookmark: vi.fn(),
}));

vi.mock('@ionic/react', async (importOriginal) => {
  const actual = await importOriginal<any>();
  return {
    ...actual,
    IonIcon: ({ icon, ...props }: any) => <span data-testid="ion-icon" {...props} />,
    IonButton: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props} type="button">{children}</button>
    ),
    IonSpinner: () => <div data-testid="ion-spinner" />,
  };
});

// Mock Audio
const mockPlay = vi.fn(() => Promise.resolve());
const mockLoad = vi.fn();
global.Audio = vi.fn().mockImplementation(() => ({
  play: mockPlay,
  load: mockLoad,
  onended: null,
  onerror: null,
  oncanplaythrough: null,
}));

describe('Flashcard Component', () => {
  const defaultProps = {
    id: 'test-1',
    tagalog: 'Magandang umaga',
    english: 'Good morning',
    example: {
      tagalog: 'Magandang umaga sa iyo.',
      english: 'Good morning to you.',
      zhTW: '祝你早安',
      zhCN: '祝你早安'
    }
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (bookmarkUtils.isBookmarked as any).mockReturnValue(false);
    (bookmarkUtils.toggleBookmark as any).mockReturnValue(true);
  });

  it('renders front content initially', () => {
    render(<Flashcard {...defaultProps} />);
    expect(screen.getByText('Magandang umaga')).toBeInTheDocument();
    expect(screen.getByText('flashcard.tapToSeeTranslation')).toBeInTheDocument();
  });

  it('flips to back content when clicked', () => {
    const { container } = render(<Flashcard {...defaultProps} />);
    const cardContainer = container.querySelector('.flashcard-container');

    expect(cardContainer).not.toHaveClass('flipped');

    fireEvent.click(cardContainer!);

    expect(cardContainer).toHaveClass('flipped');
    expect(screen.getByText('Good morning')).toBeInTheDocument();
    expect(screen.getByText('Magandang umaga sa iyo.')).toBeInTheDocument();
    expect(screen.getByText('Good morning to you.')).toBeInTheDocument();
  });

  it('toggles bookmark state when bookmark button is clicked', () => {
    render(<Flashcard {...defaultProps} />);

    const bookmarkBtns = screen.getAllByRole('button').filter(btn => btn.className.includes('bookmark-btn'));
    // Front and Back both have bookmark buttons
    const frontBookmarkBtn = bookmarkBtns[0];

    fireEvent.click(frontBookmarkBtn);

    expect(bookmarkUtils.toggleBookmark).toHaveBeenCalledWith('test-1');
  });

  it('plays audio when audio button is clicked', async () => {
    render(<Flashcard {...defaultProps} />);

    const audioBtns = screen.getAllByRole('button').filter(btn => btn.className.includes('audio-btn'));
    const frontAudioBtn = audioBtns[0];

    fireEvent.click(frontAudioBtn);

    // We expect new Audio() to be called
    expect(global.Audio).toHaveBeenCalled();
    // And play() to be called
    // Since play is async and we mocked it, we can verify it was called.
    // The implementation of playAudio in Flashcard creates a new Audio instance.
  });

  it('does not flip card when audio button is clicked', () => {
    const { container } = render(<Flashcard {...defaultProps} />);
    const cardContainer = container.querySelector('.flashcard-container');

    const audioBtns = screen.getAllByRole('button').filter(btn => btn.className.includes('audio-btn'));
    const frontAudioBtn = audioBtns[0];

    fireEvent.click(frontAudioBtn);

    expect(cardContainer).not.toHaveClass('flipped');
  });
});
