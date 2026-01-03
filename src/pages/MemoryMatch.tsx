import React, { useState, useEffect, useMemo } from 'react';
import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { trophyOutline, refreshOutline, timeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { lessons, Flashcard } from '../data/lessons';
import './MemoryMatch.css';

interface MemoryCard {
    id: string;
    content: string;
    type: 'tagalog' | 'translation';
    pairId: string;
    isFlipped: boolean;
    isMatched: boolean;
}

// Collect all flashcards
const getAllCards = (): Flashcard[] => {
    return lessons.flatMap(lesson => lesson.cards);
};

// Shuffle array utility
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const PAIRS_COUNT = 6; // 12 cards total (6 pairs)

const MemoryMatch: React.FC = () => {
    const { t, i18n } = useTranslation();
    const allCards = useMemo(() => getAllCards(), []);

    const [cards, setCards] = useState<MemoryCard[]>([]);
    const [flippedCards, setFlippedCards] = useState<string[]>([]);
    const [moves, setMoves] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Get translation based on current language
    const getTranslation = (card: Flashcard): string => {
        switch (i18n.language) {
            case 'zh-TW': return card.zhTW || card.english;
            case 'zh-CN': return card.zhCN || card.english;
            default: return card.english;
        }
    };

    // Initialize game
    const startGame = () => {
        const selectedCards = shuffleArray(allCards).slice(0, PAIRS_COUNT);

        const memoryCards: MemoryCard[] = [];
        selectedCards.forEach((card, index) => {
            // Tagalog card
            memoryCards.push({
                id: `tagalog-${index}`,
                content: card.tagalog,
                type: 'tagalog',
                pairId: card.id,
                isFlipped: false,
                isMatched: false,
            });
            // Translation card
            memoryCards.push({
                id: `trans-${index}`,
                content: getTranslation(card),
                type: 'translation',
                pairId: card.id,
                isFlipped: false,
                isMatched: false,
            });
        });

        setCards(shuffleArray(memoryCards));
        setFlippedCards([]);
        setMoves(0);
        setMatchedPairs(0);
        setGameTime(0);
        setIsGameOver(false);
        setIsProcessing(false);
    };

    // Timer effect
    useEffect(() => {
        if (cards.length > 0 && !isGameOver) {
            const timer = setInterval(() => {
                setGameTime(prev => prev + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [cards.length, isGameOver]);

    // Initialize on mount
    useEffect(() => {
        startGame();
    }, []);

    // Check for match when two cards are flipped
    useEffect(() => {
        if (flippedCards.length === 2) {
            setIsProcessing(true);
            setMoves(prev => prev + 1);

            const [first, second] = flippedCards;
            const firstCard = cards.find(c => c.id === first);
            const secondCard = cards.find(c => c.id === second);

            if (firstCard && secondCard && firstCard.pairId === secondCard.pairId && firstCard.type !== secondCard.type) {
                // Match found!
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.id === first || c.id === second
                            ? { ...c, isMatched: true }
                            : c
                    ));
                    setMatchedPairs(prev => {
                        const newCount = prev + 1;
                        if (newCount === PAIRS_COUNT) {
                            setIsGameOver(true);
                        }
                        return newCount;
                    });
                    setFlippedCards([]);
                    setIsProcessing(false);
                }, 600);
            } else {
                // No match, flip back
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.id === first || c.id === second
                            ? { ...c, isFlipped: false }
                            : c
                    ));
                    setFlippedCards([]);
                    setIsProcessing(false);
                }, 1000);
            }
        }
    }, [flippedCards]);

    const handleCardClick = (cardId: string) => {
        if (isProcessing) return;

        const card = cards.find(c => c.id === cardId);
        if (!card || card.isFlipped || card.isMatched) return;
        if (flippedCards.length >= 2) return;

        setCards(prev => prev.map(c =>
            c.id === cardId ? { ...c, isFlipped: true } : c
        ));
        setFlippedCards(prev => [...prev, cardId]);
    };

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Game Over Screen
    if (isGameOver) {
        const stars = moves <= PAIRS_COUNT + 2 ? 3 : moves <= PAIRS_COUNT + 5 ? 2 : 1;
        return (
            <IonPage>
                <CommonHeader title={t('memory.title')} showBackButton={true} defaultHref="/home" />
                <IonContent className="ion-padding memory-content">
                    <div className="memory-over-container fade-in-up">
                        <div className="memory-over-card">
                            <div className="trophy-icon">
                                <IonIcon icon={trophyOutline} />
                            </div>
                            <h2>{t('memory.complete')}</h2>
                            <p className="memory-over-subtitle">{t('memory.greatMemory')}</p>

                            <div className="stars-display">
                                {[1, 2, 3].map(star => (
                                    <span key={star} className={`star ${star <= stars ? 'active' : ''}`}>⭐</span>
                                ))}
                            </div>

                            <div className="score-grid">
                                <div className="score-item">
                                    <div className="score-label">{t('memory.moves')}</div>
                                    <div className="score-value">{moves}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('memory.time')}</div>
                                    <div className="score-value accent">{formatTime(gameTime)}</div>
                                </div>
                                <div className="score-item">
                                    <div className="score-label">{t('memory.pairs')}</div>
                                    <div className="score-value streak">{matchedPairs}</div>
                                </div>
                            </div>

                            <IonButton expand="block" className="play-again-btn" onClick={startGame}>
                                <IonIcon icon={refreshOutline} slot="start" />
                                {t('game.playAgain')}
                            </IonButton>

                            <IonButton expand="block" fill="outline" routerLink="/home" className="home-btn">
                                {t('review.backToHome')}
                            </IonButton>
                        </div>
                        <Footer />
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <CommonHeader title={t('memory.title')} showBackButton={true} defaultHref="/home" />
            <IonContent className="ion-padding memory-content">
                <div className="memory-container">
                    {/* Game Stats */}
                    <div className="memory-stats">
                        <div className="stat-item">
                            <span className="stat-label">{t('memory.moves')}</span>
                            <span className="stat-value">{moves}</span>
                        </div>
                        <div className="stat-item">
                            <IonIcon icon={timeOutline} className="time-icon" />
                            <span className="stat-value">{formatTime(gameTime)}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">{t('memory.matched')}</span>
                            <span className="stat-value">{matchedPairs}/{PAIRS_COUNT}</span>
                        </div>
                    </div>

                    {/* Card Grid */}
                    <div className="memory-grid">
                        {cards.map(card => (
                            <div
                                key={card.id}
                                className={`memory-card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                                onClick={() => handleCardClick(card.id)}
                            >
                                <div className="card-inner">
                                    <div className="card-front">
                                        <span className="card-icon">?</span>
                                    </div>
                                    <div className={`card-back ${card.type}`}>
                                        <span className="card-text">{card.content}</span>
                                        <span className="card-type-label">
                                            {card.type === 'tagalog' ? '🇵🇭' : '📖'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MemoryMatch;
