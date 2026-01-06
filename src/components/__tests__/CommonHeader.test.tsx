import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CommonHeader from '../CommonHeader';

// Mock dependencies
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock('../context/TimerContext', () => ({
  useTimer: () => ({
    formattedTime: '0m 00s',
  }),
}));

vi.mock('@ionic/react', async (importOriginal) => {
  const actual = await importOriginal<any>();
  return {
    ...actual,
    IonIcon: ({ icon, ...props }: any) => <span data-testid="ion-icon" {...props} />,
    IonBackButton: (props: any) => <button data-testid="ion-back-button" {...props}>Back</button>,
    IonModal: ({ isOpen, children, ...props }: any) => (
      isOpen ? <div data-testid="ion-modal" role="dialog" {...props}>{children}</div> : null
    ),
    // Mock other components if needed, or rely on shallow rendering logic
    IonButton: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick} {...props}>{children}</button>
    ),
    IonText: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    IonButtons: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    IonHeader: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    IonToolbar: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    IonRadioGroup: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    IonRadio: ({ value, ...props }: any) => <input type="radio" value={value} {...props} />,
  };
});

// Mock Global Build Info
global.__BUILD_INFO__ = {
  version: '1.0.0',
  time: new Date().getTime(),
  hash: 'abc1234',
  message: 'Test Commit',
};

describe('CommonHeader Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('renders title and timer correctly', () => {
    render(<CommonHeader title="Test App" />);

    expect(screen.getByText('Test App')).toBeInTheDocument();
    expect(screen.getByText('0m 00s')).toBeInTheDocument();
    expect(screen.getByText('common.todaysLearning')).toBeInTheDocument();
  });

  it('renders back button when showBackButton is true', () => {
    render(<CommonHeader title="Test App" showBackButton={true} />);
    expect(screen.getByTestId('ion-back-button')).toBeInTheDocument();
  });

  it('does not render back button when showBackButton is false', () => {
    render(<CommonHeader title="Test App" showBackButton={false} />);
    expect(screen.queryByTestId('ion-back-button')).not.toBeInTheDocument();
  });

  it('opens build info modal when info button is clicked', async () => {
    render(<CommonHeader title="Test App" />);

    const infoButton = screen.getByTestId('build-info-btn');
    fireEvent.click(infoButton);

    await waitFor(() => {
      expect(screen.getByText('common.buildInfo')).toBeInTheDocument();
      expect(screen.getByText('1.0.0')).toBeInTheDocument();
      expect(screen.getByText('abc1234')).toBeInTheDocument();
    });
  });

  it('opens settings modal when settings button is clicked', async () => {
    render(<CommonHeader title="Test App" />);

    const settingsButton = screen.getByTestId('settings-btn');
    fireEvent.click(settingsButton);

    await waitFor(() => {
      expect(screen.getByText('home.settings')).toBeInTheDocument();
      expect(screen.getByText('home.languageSelection')).toBeInTheDocument();
      expect(screen.getByText('home.themeSelection')).toBeInTheDocument();
    });
  });
});
