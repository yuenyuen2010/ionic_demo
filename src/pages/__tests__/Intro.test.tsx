import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Intro from '../Intro';

// Mock dependencies
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock('@ionic/react', async (importOriginal) => {
  const actual = await importOriginal<any>();
  return {
    ...actual,
    IonIcon: ({ icon, ...props }: any) => <span data-testid="ion-icon" {...props} />,
    IonPage: ({ children }: any) => <div>{children}</div>,
    IonHeader: ({ children }: any) => <header>{children}</header>,
    IonToolbar: ({ children }: any) => <div>{children}</div>,
    IonTitle: ({ children }: any) => <h1>{children}</h1>,
    IonContent: ({ children }: any) => <main>{children}</main>,
    IonButtons: ({ children }: any) => <div>{children}</div>,
    IonBackButton: () => <button>Back</button>,
    IonCard: ({ children, className }: any) => <div className={className}>{children}</div>,
    IonCardHeader: ({ children }: any) => <div className="card-header">{children}</div>,
    IonCardTitle: ({ children }: any) => <h3>{children}</h3>,
    IonCardContent: ({ children }: any) => <div>{children}</div>,
  };
});

describe('Intro Page', () => {
  it('renders correctly', () => {
    render(<Intro />);

    // Check main headers
    expect(screen.getAllByText('intro.title').length).toBeGreaterThan(0);
    expect(screen.getByText('intro.subtitle')).toBeInTheDocument();

    // Check sections
    expect(screen.getByText('intro.whatIsTitle')).toBeInTheDocument();
    expect(screen.getByText('intro.historyTitle')).toBeInTheDocument();
    expect(screen.getByText('intro.featuresTitle')).toBeInTheDocument();
    expect(screen.getByText('intro.funFactsTitle')).toBeInTheDocument();

    // Check features content
    expect(screen.getByText('intro.feature1Title')).toBeInTheDocument();
    expect(screen.getByText('intro.feature2Title')).toBeInTheDocument();
    expect(screen.getByText('intro.feature3Title')).toBeInTheDocument();

    // Check fun facts
    expect(screen.getByText('intro.fact1')).toBeInTheDocument();
    expect(screen.getByText('intro.fact2')).toBeInTheDocument();
    expect(screen.getByText('intro.fact3')).toBeInTheDocument();
  });
});
