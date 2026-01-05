
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Lesson from '../Lesson';

// Mock dependencies
vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  useHistory: () => ({ push: vi.fn() }),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      if (key === 'lesson.cardProgress') return `Card ${options?.current} of ${options?.total}`;
      return key;
    }
  })
}));

// Mock Ionic components
vi.mock('@ionic/react', async () => {
    const actual = await vi.importActual('@ionic/react');
    return {
        ...actual,
        IonPage: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-page">{children}</div>,
        IonContent: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-content">{children}</div>,
        IonFooter: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-footer">{children}</div>,
        IonToolbar: ({ children }: { children: React.ReactNode }) => <div data-testid="ion-toolbar">{children}</div>,
        IonButton: ({ children, onClick, disabled }: any) => (
            <button onClick={onClick} disabled={disabled} data-testid="ion-button">
                {children}
            </button>
        ),
        IonIcon: ({ icon }: any) => <span data-testid="ion-icon" />,
        IonText: ({ children }: any) => <span>{children}</span>,
    };
});

// Mock CommonHeader since it uses Ionic components and routing
vi.mock('../../components/CommonHeader', () => ({
    default: ({ title }: any) => <div data-testid="common-header">{title}</div>
}));

// Mock Flashcard component
vi.mock('../../components/Flashcard', () => ({
    default: ({ tagalog, english }: any) => (
        <div data-testid="flashcard">
            <div>{tagalog}</div>
            <div>{english}</div>
        </div>
    )
}));

// Mock lessons data
vi.mock('../../data/lessons', () => ({
    lessons: [
        {
            id: 'basic-1',
            titleKey: 'lessons.basic1',
            group: 'basics',
            groupKey: 'basics',
            cards: [
                { id: '1', tagalog: 'Ako', english: 'Me', zhTW: '', zhCN: '' },
                { id: '2', tagalog: 'Ikaw', english: 'You', zhTW: '', zhCN: '' },
                { id: '3', tagalog: 'Siya', english: 'He/She', zhTW: '', zhCN: '' }
            ]
        }
    ]
}));

// Mock bookmark utils
vi.mock('../../utils/bookmarks', () => ({
    getBookmarks: vi.fn(() => ['1'])
}));

import { useParams } from 'react-router-dom';
import { getBookmarks } from '../../utils/bookmarks';

describe('Lesson Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render lesson content when valid category id provided', () => {
        (useParams as any).mockReturnValue({ id: 'basic-1' });

        render(<Lesson />);

        expect(screen.getByTestId('common-header')).toHaveTextContent('lessons.basic1');
        expect(screen.getByText('Card 1 of 3')).toBeInTheDocument();
        expect(screen.getByText('Ako')).toBeInTheDocument();
        expect(screen.getByText('Me')).toBeInTheDocument();
    });

    it('should show error when category not found', () => {
        (useParams as any).mockReturnValue({ id: 'invalid-id' });

        render(<Lesson />);

        expect(screen.getByText('lesson.categoryNotFound')).toBeInTheDocument();
    });

    it('should navigate to next and previous cards', () => {
        (useParams as any).mockReturnValue({ id: 'basic-1' });

        render(<Lesson />);

        // Initial state
        expect(screen.getByText('Card 1 of 3')).toBeInTheDocument();
        expect(screen.getByText('Ako')).toBeInTheDocument();

        // Click Next
        const nextBtn = screen.getByText('lesson.next');
        fireEvent.click(nextBtn);

        expect(screen.getByText('Card 2 of 3')).toBeInTheDocument();
        expect(screen.getByText('Ikaw')).toBeInTheDocument();

        // Click Next again
        fireEvent.click(nextBtn);
        expect(screen.getByText('Card 3 of 3')).toBeInTheDocument();
        expect(screen.getByText('Siya')).toBeInTheDocument();

        // Next should be replaced by Restart
        expect(screen.queryByText('lesson.next')).not.toBeInTheDocument();
        expect(screen.getByText('lesson.restart')).toBeInTheDocument();

        // Click Previous
        const prevBtn = screen.getByText('lesson.prev');
        fireEvent.click(prevBtn);
        expect(screen.getByText('Card 2 of 3')).toBeInTheDocument();
    });

    it('should handle bookmarks category', () => {
        (useParams as any).mockReturnValue({ id: 'bookmarks' });
        (getBookmarks as any).mockReturnValue(['1']); // Only card '1' (Ako) is bookmarked

        render(<Lesson />);

        expect(screen.getByTestId('common-header')).toHaveTextContent('bookmarks.title');
        expect(screen.getByText('Card 1 of 1')).toBeInTheDocument();
        expect(screen.getByText('Ako')).toBeInTheDocument();
    });

    it('should show empty bookmarks message', () => {
        (useParams as any).mockReturnValue({ id: 'bookmarks' });
        (getBookmarks as any).mockReturnValue([]);

        render(<Lesson />);

        expect(screen.getByText('bookmarks.empty')).toBeInTheDocument();
    });
});
